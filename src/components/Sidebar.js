import React from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption"

//MUI Icon imports
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <TwitterIcon />
      <SidebarOption icon={<HomeIcon />} description="Home"/>
      <SidebarOption icon={<TagIcon />} description="Explore"/>
      <SidebarOption icon={<HomeIcon />} description="Notifications"/>
      <SidebarOption icon={<NotificationsNoneIcon />} description="Messages"/>
      <SidebarOption icon={<MailOutlineIcon />} description="Bookmarks"/>
      <SidebarOption icon={<BookmarkBorderIcon />} description="Lists"/>
      <SidebarOption icon={<ListAltIcon />} description="Profile"/>
      <SidebarOption icon={<AccountCircleIcon />} description="More"/>
    </div>
  );
};

export default Sidebar;
