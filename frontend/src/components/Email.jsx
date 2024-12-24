import React from "react";
import { CiStar } from "react-icons/ci";
import { MdOutlineCropSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";



export const Email = ({email}) => {
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const openMail=()=>{
      dispatch(setSelectedEmail(email))
     navigate(`/mail/${email._id}`);
    }
  return (
    <div onClick={openMail} className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="text-gray-400">
            <MdOutlineCropSquare size={'20px'}/>
        </div>
        <div className="text-gray-400">
            <CiStar size={'20px'}/>
        </div>
        <div>
            <h1 className="font-semibold">
                {email?.subject}
            </h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p>
          {email?.message}
        </p>
      </div>
      <div className="flex-none text-gray text-sm">
        <p>{email?.createdAt}</p>
      </div>
    </div>
  );
};

export default Email;
