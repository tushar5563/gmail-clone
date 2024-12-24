import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSearchText } from "../redux/appSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
 // Ensure you import useNavigate if using React Router

const NavBar = () => {
  const [text, setText] = useState("");
  const { user } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  // React Router navigation
    const navigate=useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/logout", {
        withCredentials: true, // Include credentials (cookies)
      });
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
       // Reset user state
       // Redirect to login page
       navigate("/login")
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    dispatch(setSearchText(text));
  }, [text, dispatch]);

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-[50%] mr-60">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
              <CiSearch size={"24px"} className="text-gray-700" />
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Search mail"
                className="rounded-full w-full bg-transparent outline-none px-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <CiCircleQuestion size={"26px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoIosSettings size={"26px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <TbGridDots size={"26px"} />
            </div>
            <span
              onClick={logoutHandler}
              className="underline cursor-pointer"
            >
              Logout
            </span>
            <Avatar src={user.profilePhoto} size="40" round={true} />
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
