import {
  Footer,
  Header,
  Navbar,
  VerticalLine,
  HorizontalLine,
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
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
