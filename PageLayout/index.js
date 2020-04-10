import PageContainer from "../components/Elements/Containers/PageContainer";
import Header from "../components/Elements/Header";
import Footer from "../components/Elements/Footer";
import NavBar from "../components/Elements/NavBar"

const Layout = ({ children }) => (
  <PageContainer>
    <Header />

    <NavBar />
    {children}

     <Footer />
    </PageContainer>
);

export default Layout;
