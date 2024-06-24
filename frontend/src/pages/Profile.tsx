import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ProfileSidebar } from "../components/Finance";
import TopIconBar from "../components/Finance/Reusables/TopIconBar";

const Profile = () => {
  return (
    <Fragment>
      <div className="p-10">
        <TopIconBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
          <ProfileSidebar />
          <div className="col-span-2">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
