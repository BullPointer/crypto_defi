import {
  Footer,
  Header,
  Navbar,
  VerticalLine,
  HorizontalLine,
  HomePageTrends,
  Subscribe,
  TrustSection,
  WhatWeDo,
} from "..";

const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <VerticalLine />
      <TrustSection />
      <HorizontalLine />
      <WhatWeDo />
      <HomePageTrends />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
