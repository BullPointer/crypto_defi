import { Fragment } from "react";
import { FinanceFooter, FinanceNavbar } from "..";
import { Outlet } from "react-router-dom";

const Finance = () => {
  return (
    <Fragment>
      <FinanceNavbar />
      <div>
        <Outlet />
      </div>
      <FinanceFooter />
    </Fragment>
  );
};

export default Finance;
