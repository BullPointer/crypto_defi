import { Route, Routes } from "react-router-dom";
import {
  Blog,
  BlogListing,
  BlogDisplay,
  CurrencyWallet,
  Finance,
  Homepage,
  NotFound,
  PrivacyPolicy,
  Portfolio,
  TermsAndConditions,
  Profile,
  Signup,
  Signin,
  Markets,
  Governance,
  Exchange,
  Lend,
  Borrow,
} from ".";
import {
  Account,
  ApplicationSettings,
  CheckActivity,
  Help,
  Notifications,
  PersonalInfo,
  ReferToEarn,
} from "./components/Finance";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Homepage />} />
      <Route path="blog" element={<Blog />}>
        <Route index element={<BlogListing />} />
        <Route path="category/:path" element={<BlogListing />} />
      </Route>
      <Route path="blog/:id" element={<BlogDisplay />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="login" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="fi" element={<Finance />}>
        <Route path="*" index element={<Portfolio />} />
        <Route path="borrow" element={<Borrow />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="lend" element={<Lend />} />
        <Route path="markets" element={<Markets />} />
        <Route path="governance" element={<Governance />} />
        <Route path="profile" element={<Profile />}>
          <Route path="*" index element={<Account />} />
          <Route path="account" element={<Account />} />
          <Route path="account/refer_to_earn" element={<ReferToEarn />} />
          <Route path="account/check_activity" element={<CheckActivity />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="help" element={<Help />} />
          <Route
            path="application-settings"
            element={<ApplicationSettings />}
          />
        </Route>
        <Route path="wallet" element={<Portfolio />} />
        <Route path="wallet/:currency" element={<CurrencyWallet />} />
      </Route>
    </Routes>
  );
};

export default App;
