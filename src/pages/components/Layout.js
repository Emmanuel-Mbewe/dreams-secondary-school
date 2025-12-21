import Navbar from "./Navbar";
import Footer from "./Footer";
import Analytics from "./Analytics";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Google Analytics page tracking */}
      <Analytics />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
