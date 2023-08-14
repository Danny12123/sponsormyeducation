import { useSelector, useDispatch } from "react-redux";
import "firebase/firestore";
import { format } from "timeago.js";
import { usePaystackPayment } from "react-paystack";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PaystackPop from "@paystack/inline-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { db } from "../firebase";

import {
  collection,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Donation() {
  const review = useSelector((state) => state.Campaign.review);
  const user = useSelector((state) => state.Campaign.userProfile);
  const [likesCount, setLikesCount] = useState(review.likes || 0);
  const [liked, setLiked] = useState(false);

  const [showShareModal, setShowShareModal] = useState(false);

  const handleCloseShareModal = () => setShowShareModal(false);
  const handleShowShareModal = () => setShowShareModal(true);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Check if the current user has already liked the campaign
    if (user) {
      const likedByCurrentUser = review.likesBy?.includes(user.id);
      setLiked(likedByCurrentUser);
    }
  }, [user, review.likesBy]);

  const handleLike = () => {
    if (!user) {
      // If the user is not logged in, prompt them to login or register
      // Implement the authentication logic or use a library like Firebase Authentication
      return;
    }
    const campaignRef = doc(collection(db, "Campaign"), review.id);

    if (liked) {
      // If the user has already liked the campaign, remove their like
      updateDoc(campaignRef, {
        likesBy: arrayRemove(user.id),
        likes: increment(-1),
      });
      setLikesCount((prevCount) => prevCount - 1);
    } else {
      // If the user has not liked the campaign, add their like
      updateDoc(campaignRef, {
        likesBy: arrayUnion(user.id),
        likes: increment(1),
      });
      setLikesCount((prevCount) => prevCount + 1);
    }
    setLiked((prevLiked) => !prevLiked);
  };

  const handlePay = async (event) => {
    event.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      // key: "pk_live_e286893e885cd92c8d302bd811d9e23e6ef14642",
      key: "pk_test_2cff05b0b363519ca965a0e558e9ee767bcea1fd",
      amount: amount * 100,
      Phone: phone,
      email: email,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        //  setDoc(doc(db, "donate", donateData.id), donateData);
        const reference = transaction.reference;
        fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
          headers: {
            Authorization:
              "Bearer pk_test_2cff05b0b363519ca965a0e558e9ee767bcea1fd",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const paidAmount = data.data.amount / 100; // Convert to original currency
            const message = `Payment Complete! Reference ${reference}. Amount: ${paidAmount}`;
            alert(message);
          })
          .catch((error) => {
            console.error("Error fetching payment details:", error);
            alert("An error occurred while fetching payment details.");
          });

        alert(message);
      },
      onCancel() {
        alert("You have Canceled the transaction");
      },
    });
    setAmount("");
    setPhone("");
    setEmail("");
  };

  return (
    <>
      {/* form */}
      <div style={{ marginTop: "5em" }}>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Donate</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="000 000 000"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="10"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePay}>
              Donate
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="container mb-5 ">
          <div className="row">
            <div className="col-md-7 margin-bottom-20">
              <div className="text-center mb-2 position-relative">
                <img
                  className="img-fluid rounded-lg"
                  style={{ display: "inline-block" }}
                  src={review?.newImage}
                />
              </div>
            </div>
            <div className="col-md-5">
              <small className="btn-block mb-1">
                <a href="" className="text-muted">
                  <i className="far fa-folder-open"></i>
                  {review.category}
                </a>
              </small>
              <h2 className="mb-2 mt-4 font-weight-bold text-break text-dark">
                {review?.campaignName}
              </h2>
              <div className="panel panel-default panel-transparent mb-4">
                <div className="panel-body">
                  {" "}
                  <div className="media none-overflow">
                    <Link to="/profile">
                      <div className="d-flex my-2 align-items-center pl-">
                        <img
                          className="rounded-circle mr-2"
                          src={review.profile?.profileImageURL}
                          width="60"
                          height="60"
                        />

                        <div className="d-block px-3">
                          by{" "}
                          <strong className="text-dark">{review?.email}</strong>
                          <a
                            href="#"
                            title="Contact the Organizer"
                            className="text-muted"
                            data-bs-toggle="modal"
                            data-bs-target="#sendEmail"
                          >
                            <i
                              className="fa fa-envelope px-1"
                              style={{ fontSize: "0.90em" }}
                            ></i>
                          </a>
                          <div className="d-block">
                            <small className="media-heading text-muted btn-block margin-zero">
                              {format(review?.date)}
                              <span
                                className="align-middle mx-1"
                                style={{ fontSize: "8px" }}
                              >
                                |
                              </span>
                              {/* <i className="fa fa-map-marker-alt mr-1"></i> Jordan */}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <span className="progress progress-xs mb-3">
                <span
                  className="percentage bg-success"
                  style={{ width: "93%" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  role="progressbar"
                ></span>
              </span>
              <small className="btn-block margin-bottom-10 text-muted d-flex justify-content-between">
                <div>
                  <strong className="text-strong-small ">
                    {review?.amount}
                  </strong>{" "}
                  raised of $33,000 goal{" "}
                </div>
                <strong className="text-percentage  ">3.03%</strong>
              </small>
              <ul className="list-inline my-4 border-top border-bottom py-3 text-center">
                <li
                  className="list-inline-item border-right"
                  style={{ width: "31%" }}
                >
                  <i className="fa fa-donate align-baseline text-success"></i> 1
                  Donation
                </li>
                <li
                  className="list-inline-item border-right"
                  style={{ width: "31%" }}
                >
                  <i className="fa fa-infinity text-success"></i>{" "}
                  {`Deadline: ${
                    review.daysRemaining > 0 ? review?.daysRemaining : 0
                  } days`}
                </li>

                <li className="list-inline-item" style={{ width: "31%" }}>
                  {/* <i className="far fa-heart align-baseline text-success"></i> */}

                  <button
                    className={`btn ${
                      liked ? "btn-outline-success" : "btn-outline-danger"
                    } btn-sm  border-0`}
                    onClick={handleLike}
                  >
                    <i
                      className={`far fa-heart align-baseline ${
                        liked ? "text-success" : "text-danger"
                      } border-0`}
                    ></i>{" "}
                  </button>
                  {liked ? (
                    <>
                      {/* <i className="far fa-heart align-baseline text-success"></i>{""} */}
                      <span id="countLikes">{likesCount}</span> Likes
                    </>
                  ) : (
                    <>
                      {/* <i className="far fa-heart align-baseline text-success"></i>{" "} */}
                      {likesCount} Likes
                    </>
                  )}
                </li>
              </ul>
              <div className="btn-group btn-block col-12 mb-2 ">
                <a
                  onClick={handleShow}
                  className="btn btn-main bg-dark  text-white no-hover btn-lg btn-block custom-rounded"
                >
                  Donate Now
                </a>
              </div>

              <Modal
                show={showShareModal}
                onHide={handleCloseShareModal}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Share on Social Media</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 col-6 text-center mb-5">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-social-icon"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                      </div>
                      <div className="col-md-4 col-6 text-center mb-5">
                        <a
                          href="https://www.twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-social-icon"
                        >
                          <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                      </div>
                      <div className="col-md-4 col-6 text-center mb-5">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-social-icon"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                      </div>
                      <div className="col-md-4 col-6 text-center ">
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-social-icon"
                        >
                          <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                      </div>
                      <div className="col-md-4 col-6 text-center ">
                        <a
                          href="https://www.pinterest.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-social-icon"
                        >
                          <FontAwesomeIcon icon={faPinterest} size="lg" />
                        </a>
                      </div>
                      <div className="col-md-4 col-6 text-center  ">
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-social-icon"
                        >
                          <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              <div className="btn-group btn-block col-12">
                <a
                  onClick={handleShowShareModal}
                  className="btn btn-main btn-outline-primary no-hover btn-lg w-100"
                >
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* story */}
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-8">
            <ul className="nav nav-tabs nav-fill">
              <li className="nav-item active">
                <a
                  href="#desc"
                  aria-controls="home"
                  role="tab"
                  data-bs-toggle="tab"
                  className="nav-link active text-dark py-3"
                >
                  <strong>The Story</strong>
                </a>
              </li>
            </ul>

            <div className="tab-content py-3">
              <div
                role="tabpanel"
                className="tab-pane fade show active description text-break"
                id="desc"
              >
                {review?.description}
              </div>

              <div
                role="tabpanel"
                className="tab-pane fade in description text-break"
                id="donations"
              >
                <ul className="list-unstyled" id="listDonations">
                  <li className="media py-2">
                    <img
                      src={review.profileImage}
                      width="60"
                      className="rounded-circle mr-3"
                      alt="Joel Acq"
                    />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Joel Acq <span className="fw-light">donated</span>{" "}
                        <span className="text-success">$1,000</span>{" "}
                      </h6>
                      <p className="mb-0">boom</p>
                      <small
                        className="btn-block timeAgo text-muted"
                        data="2023-07-04T08:14:55-04:00"
                      >
                        26 days ago
                      </small>
                    </div>
                  </li>
                </ul>

                <div className="text-center py-2 wrap-paginator"></div>
              </div>

              <div
                role="tabpanel"
                className="tab-pane fade description"
                id="updates"
              >
                <ul id="listUpdates">
                  <li>
                    <p
                      className="timeAgo text-muted"
                      data="2023-05-15T20:48:04-04:00"
                    >
                      3 months ago
                    </p>
                    <p>we managed to get 5k from friends and contacts</p>
                  </li>
                </ul>

                <div className="text-center py-2"></div>
              </div>

              <div
                role="tabpanel"
                className="tab-pane fade description text-break"
                id="comments"
              >
                <div className="btn-block margin-top-20">
                  <div
                    className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
                    data-bs-width="100%"
                    data-bs-href=""
                  >
                    <iframe
                      name="f39661786b9ac74"
                      width="550px"
                      height="100px"
                      data-testid="fb:comments Facebook Social Plugin"
                      title="fb:comments Facebook Social Plugin"
                      frameBorder="0"
                      allowfullscreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v2.8/plugins/comments.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df8dc8814535d98%26domain%3Dfundmescript.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ffundmescript.com%252Ffe6eeada371308%26relation%3Dparent.parent&amp;container_width=0&amp;height=100&amp;href=https%3A%2F%2Ffundmescript.com%2Fcampaign%2F1386%2Fhelp-my-jobless-friend&amp;locale=en_US&amp;sdk=joey&amp;title=Help%20my%20jobless%20friend%20-%20Fundme%20%7C%20Crowdfunding%20Platform&amp;url=https%3A%2F%2Ffundmescript.com%2Fcampaign%2F1386%2Fhelp-my-jobless-friend&amp;version=v2.8&amp;width=550&amp;xid=https%253A%252F%252Ffundmescript.com%252Fcampaign%252F1386%252Fhelp-my-jobless-friend"
                      className=""
                      style={{
                        border: "none",
                        visibility: "visible",
                        width: "550px",
                        height: "0",
                      }}
                    ></iframe>

                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;
