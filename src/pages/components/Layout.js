import Navbar from "./Navbar";
import Footer from "./Footer";
import Analytics from "./Analytics";

const Layout = ({ children }) => {
  return (
    <>
      <Analytics />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
