import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../../App";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import {Grid, Paper} from "@mui/material";


const menuTitleStyle = {textDecoration: 'none', color: 'black', paddingTop: '5px'}
const menuTitleActiveStyle = {color: '#1976d2', paddingTop: '5px'}
const iconMenuStyle = {marginRight: '10px', fontSize: '20px'}
const paperStyle = {padding: 20, height: '70px'}

const Navbar = () => {
    return (<Paper elevation={4} style={paperStyle}>
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
                    <NavLink style={navData => navData.isActive ? menuTitleActiveStyle : menuTitleStyle} to={PATH.PROFILE}>
                        <PersonIcon style={iconMenuStyle}/>Profile
                    </NavLink>
                    <NavLink style={navData => navData.isActive ? menuTitleActiveStyle : menuTitleStyle} to={PATH.NEWS}>
                        <FeedIcon style={iconMenuStyle}/>News
                    </NavLink>
                </Grid>
            </Paper>)

}
export default Navbar;