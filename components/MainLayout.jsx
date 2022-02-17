import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout(props) {
  return (
    <div className="w-full">
        <Navbar />
      <main>{props.children}</main>
      <Footer />

    </div>
  );
}

export default MainLayout;