import Head from "next/head";
import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import Admin from "features/Admin";


function HomePage() {
  return (
    <>
      <Head>ds</Head>

      <Layout header={<Header />} footer={<Footer />} main={<Admin />} />
    </>
  );
}

export default HomePage;
