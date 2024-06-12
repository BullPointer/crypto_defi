import {
  Footer,
  Header,
  Navbar,
  SectionLine,
  Subscribe,
  TrustSection,
  WhatWeDo,
} from "./";
// https://coinloan.io/ https://saltlending.com/
function App() {
  return (
    <div className="p-3 sm:p-10">
      <h1 className="">
        <Navbar />
        <Header />
        <SectionLine />
        <TrustSection />
        <WhatWeDo />
        <Subscribe />
        <Footer />
      </h1>
    </div>
  );
}

export default App;
