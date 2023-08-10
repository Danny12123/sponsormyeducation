import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reviewCampaign } from "../store/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

 


 export default function Featured({newDate}) {
  //console.log(newDate)
  const dispatch = useDispatch()


  const expiryDays = useSelector((state) => state.Campaign.expires)
  if (newDate){
    newDate.sort((a, b) => b.date - a.date);
  }
 
  return (
    <div className="section py-5">
      <div className="btn-block text-center mb-5">
        <h1>Explore New Campaigns</h1>
        <p>Recent Campaigns</p>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className=""></div> */}
          {newDate?.map((item, index) => {
            if (item && item.boosted) {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card campaigns mb-3 shadow-sm fixed-height-card">
                  <div className="star-icon">
                     <FontAwesomeIcon icon={faStar} />
                  </div>
                    <Link
                      to="/donation"
                      style={{ TextDecoder: "none", color: "#000" }}
                      onClick={() => {
                        dispatch(reviewCampaign(item));
                      }}
                    >
                      <div className="p-relative">
                        <img
                          className="card-img-top fixed-height-image"
                          src={item?.newImage}
                          alt="Test"
                        />
                      </div>
                      <div className="card-body">
                        <small className="btn-block mb-1">
                          <div className="text-muted">
                            <i className="far fa-folder-open"></i> {item.category}
                          </div>
                        </small>
                        <h5 className="card-title text-truncate">
                          <div className="text-dark">{item.campaignName}</div>
                        </h5>
                        <div className="progress progress-xs mb-4">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "0.00%" }}
                          ></div>
                        </div>
                        <p className="card-text text-truncate">
                          {item?.description}
                        </p>
                        {/* <div className="d-flex justify-content-between align-items-center">
                    <strong>$0</strong>
                    <small className="font-weight-bold">0.00%</small>
                  </div> */}
                        {/* <small className="text-muted">raised of $5,000</small> */}
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-truncate">
                            <img
                              src={item.profile.profileImageURL}
                              width="25"
                              height="25"
                              className="rounded-circle avatar-campaign"
                            />
                            <small>
                              by <strong>{item?.email}</strong>
                            </small>
                          </span>

                          <small className="text-truncate">
                            <i className="fa fa-infinity text-success"></i>{" "}
                            {`Deadline: ${item.daysRemaining > 0 ? item.daysRemaining:0} days`}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              <div>
                <h3>No campaign</h3>
              </div>
            }
          })}
        </div>
      </div>
    </div>
  );
}




















// export default function featured_campaign() {
//   return (
//     <div className="section py-5">
//       <div className="btn-block text-center mb-5">
//         <span className="display-4 text-warning">
//           <i className="fa fa-award"></i>
//         </span>
//         <h1>Educational Campaign</h1>
//         <p>Campaigns selected by our team</p>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <div className="card campaigns mb-4 shadow-sm">
//               <a
//                 href=""
//                 className="p-relative"
//               >
//                 <div className="ribbon-1" title="Featured Campaign">
//                   <i className="fa fa-award"></i>
//                 </div>
//                 <img
//                   className="card-img-top fixed-height-image"
//                   src="https://images.pexels.com/photos/5940714/pexels-photo-5940714.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Charity Vimeo"
//                 />
//               </a>
//               <div className="card-body">
//                 <small className="btn-block mb-1">
//                   <a
//                     href=""
//                     className="text-muted"
//                   >
//                     <i className="far fa-folder-open"></i> Education
//                   </a>
//                 </small>
//                 <h5 className="card-title text-truncate">
//                   <a
//                     href=""
//                     className="text-dark"
//                   >
//                     Pay my fees
//                   </a>
//                 </h5>
//                 <div className="progress progress-xs mb-4">
//                   <div
//                     className="progress-bar bg-success"
//                     role="progressbar"
//                     style={{width: "15368.20%"}}
//                   ></div>
//                 </div>
//                 <p className="card-text text-truncate">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer ut tortor rutru...
//                 </p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <strong>$76,841</strong>
//                   <small className="font-weight-bold">15368.20%</small>
//                 </div>
//                 <small className="text-muted">raised of $500</small>
//                 <hr />
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span className="text-truncate">
//                     <img
//                       src="https://fundmescript.com/public/avatar/11531470739s1mininwhc637po.png"
//                       width="25"
//                       height="25"
//                       className="rounded-circle avatar-campaign"
//                     />
//                     <small>
//                       by <strong>Admin</strong>
//                     </small>
//                   </span>

//                   <small className="text-truncate">
//                     <i className="fa fa-infinity text-success"></i> No deadline
//                   </small>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card campaigns mb-4 shadow-sm">
//               <a
//                 href=""
//                 className="p-relative"
//               >
//                 <div className="ribbon-1" title="Featured Campaign">
//                   <i className="fa fa-award"></i>
//                 </div>
//                 <img
//                   className="card-img-top fixed-height-image"
//                   src="https://images.pexels.com/photos/3028514/pexels-photo-3028514.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Community help"
//                 />
//               </a>
//               <div className="card-body">
//                 <small className="btn-block mb-1">
//                   <a
//                     href=""
//                     className="text-muted"
//                   >
//                     <i className="far fa-folder-open"></i> Business
//                   </a>
//                 </small>
//                 <h5 className="card-title text-truncate">
//                   <a
//                     href=""
//                     className="text-dark"
//                   >
//                     Help My Business Grow
//                   </a>
//                 </h5>
//                 <div className="progress progress-xs mb-4">
//                   <div
//                     className="progress-bar bg-success"
//                     role="progressbar"
//                 style={{width: "214.73%"}}
//                   ></div>
//                 </div>
//                 <p className="card-text text-truncate">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer ut tortor rutru...
//                 </p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <strong>$107,365</strong>
//                   <small className="font-weight-bold">214.73%</small>
//                 </div>
//                 <small className="text-muted">raised of $50,000</small>
//                 <hr />
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span className="text-truncate">
//                     <img
//                       src="https://fundmescript.com/public/avatar/11531470739s1mininwhc637po.png"
//                       width="25"
//                       height="25"
//                       className="rounded-circle avatar-campaign"
//                     />
//                     <small>
//                       by <strong>Admin</strong>
//                     </small>
//                   </span>

//                   <small className="text-truncate">
//                     <i className="fa fa-infinity text-success"></i> No deadline
//                   </small>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card campaigns mb-4 shadow-sm">
//               <a
//                 href=""
//                 className="p-relative"
//               >
//                 <div className="ribbon-1" title="Featured Campaign">
//                   <i className="fa fa-award"></i>
//                 </div>
//                 <img
//                   className="card-img-top fixed-height-image"
//                   src="https://images.pexels.com/photos/1139312/pexels-photo-1139312.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Save the Giraffe"
//                 />
//               </a>
//               <div className="card-body">
//                 <small className="btn-block mb-1">
//                   <a
//                     href=""
//                     className="text-muted"
//                   >
//                     <i className="far fa-folder-open"></i> Health
//                   </a>
//                 </small>
//                 <h5 className="card-title text-truncate">
//                   <a
//                     href=""
//                     className="text-dark"
//                   >
//                     Save my life
//                   </a>
//                 </h5>
//                 <div className="progress progress-xs mb-4">
//                   <div
//                     className="progress-bar bg-success"
//                     role="progressbar"
//                 style={{width: "70.41%"}}
//                   ></div>
//                 </div>
//                 <p className="card-text text-truncate">
//                   This is a test description.
//                 </p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <strong>$139,941</strong>
//                   <small className="font-weight-bold">1399.41%</small>
//                 </div>
//                 <small className="text-muted">raised of $10,000</small>
//                 <hr />
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span className="text-truncate">
//                     <img
//                       src="https://fundmescript.com/public/avatar/default.jpg"
//                       width="25"
//                       height="25"
//                       className="rounded-circle avatar-campaign"
//                     />
//                     <small>
//                       by <strong>glen</strong>
//                     </small>
//                   </span>

//                   <small className="text-truncate">
//                     <i className="fa fa-infinity text-success"></i> No deadline
//                   </small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="btn-block text-center py-3">
//         <a
//           href=""
//           className="btn btn-primary btn-main p-2 px-5 btn-lg rounded"
//         >
//           View all{" "}
//           <small className="pl-1">
//             <i className="fa fa-long-arrow-alt-right"></i>
//           </small>
//         </a>
//       </div>
//     </div>
//   );
// }
