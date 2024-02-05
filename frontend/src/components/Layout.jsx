import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children, navbar, className }) => {
  return (
    <>
      {navbar && <Navbar />}
      <div
        className={`${className} grid max-w-5xl px-5 py-3 mx-auto min-h-screen`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
