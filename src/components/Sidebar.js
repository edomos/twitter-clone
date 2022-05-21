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
import { Button } from '@mui/material'

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <TwitterIcon style={{ color: '#1DA1F2' }}/>
      <SidebarOption active={true} icon={<HomeIcon />} description="Home"/>
      <SidebarOption icon={<TagIcon />} description="Explore"/>
      <SidebarOption icon={<NotificationsNoneIcon />} description="Notifications"/>
      <SidebarOption icon={<MailOutlineIcon />} description="Messages"/>
      <SidebarOption icon={<BookmarkBorderIcon />} description="Bookmarks"/>
      <SidebarOption icon={<ListAltIcon />} description="Lists"/>
      <SidebarOption icon={<AccountCircleIcon />} description="Profile"/>
      <SidebarOption icon={<MoreHorizIcon />} description="More"/>
      <Button variant="contained" className="sidebar__tweet-button">Tweet</Button>
    </div>
  );
};

export default Sidebar;
