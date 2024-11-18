import Header from "&/base/header";
import Footer from "&/base/footer";
import PageOutlet from "&/base/pageOutlet";
import { Outlet } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <PageOutlet>
        <Outlet />
      </PageOutlet>
      <Footer />
    </>
  );
};
export default Layout;
