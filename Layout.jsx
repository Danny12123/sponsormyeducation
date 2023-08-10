import  { useEffect } from "react";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on every page change
  }, []);

  return <div>{children}</div>;
}

export default Layout;