import React, { useState } from 'react';
import { SideBar } from './SideBar';
import { TopNav } from './TopNav';

const Dashboardlayout = ({ children, title, text }) => {
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState(false);

	return (
    <>
      <div className="w-full max-h-screen bg-[#FAFAFA] lg:bg-[#FAFAFA]">
        <div className="flex flex-no-wrap h-full">
          <SideBar show={show} setShow={setShow} />
          <div className="w-full h-screen overflow-y-auto">
            <div className="mx-auto py-[36px] px-3 lg:px-6 ">
              <TopNav
                title={title}
                text={text}
                show={show}
                setShow={setShow}
                profile={profile}
                setProfile={setProfile}
              />
              <div className="w-full ">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardlayout;
