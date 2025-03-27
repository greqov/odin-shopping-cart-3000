import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Layout({ total, children }) {
  return (
    <>
      <Header total={total} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
