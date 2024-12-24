import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { LuPen } from "react-icons/lu";
import { MdInbox, MdMore, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItems = [
    { id: 1, icon: <MdInbox size={'20px'} />, text: 'Inbox' },
    { id: 2, icon: <IoMdStar size={'20px'} />, text: 'Starred' },
    { id: 3, icon: <MdOutlineWatchLater size={'20px'} />, text: 'Snoozed' },
    { id: 4, icon: <TbSend2 size={'20px'} />, text: 'Sent' },
    { id: 5, icon: <MdOutlineDrafts size={'20px'} />, text: 'Drafts' },
    { id: 6, icon: <MdOutlineKeyboardArrowDown size={'20px'} />, text: 'More' },
];

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-[15%]">
            <div className="p-3">
                <button
                    onClick={() => dispatch(setOpen(true))}
                    className="flex items-center gap-2 bg-[#bfe2fb] p-4 rounded-2xl hover:shadow-md"
                >
                    <LuPen size={'24px'} />
                    Compose
                </button>
            </div>
            <div className="text-gray-700">
                {sidebarItems.map((item) => (
                    <div
                        key={item.id} // Add unique key here
                        className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200"
                    >
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
