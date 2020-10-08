import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://thumbs.dreamstime.com/z/artist-studio-logo-18358934.jpg" alt="" />

                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className="header__middle">

                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"></HomeIcon>

                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large"></FlagIcon>

                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"></SubscriptionsOutlinedIcon>

                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"></StorefrontOutlinedIcon>

                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"></SupervisedUserCircleIcon>

                </div>

            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src=""></Avatar>
                    <h4 className="">{user.displayName}</h4>

                    <IconButton>
                        <AddIcon></AddIcon>
                    </IconButton>

                    <IconButton>
                        <ForumIcon></ForumIcon>
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon></NotificationsActiveIcon>
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>

                </div>

            </div>
        </div >
    )
}

export default Header
