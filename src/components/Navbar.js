import React, { useState } from "react";
import Logo from "../assets/img/fondo.jpg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3} from "react-icons/hi2";
import { 
    Box,
    Drawer,
    List,
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { width } from "@mui/system";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState (false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon></HomeIcon>
        },
        {
            text: "Nosotros",
            icon: <InfoIcon></InfoIcon>
        },
        {
            text: "Testimonios",
            icon: <CommentRoundedIcon></CommentRoundedIcon>
        },
        {
            text: "Contacto",
            icon: <PhoneRoundedIcon></PhoneRoundedIcon>
        },
        {
            text: "Comprar",
            icon: <ShoppingCartRoundedIcon></ShoppingCartRoundedIcon>
        }
    ];

    return <nav>

        <div className="nav-logo-container">
            <img src= {Logo} alt="es-el-logo-de-la-empresa" />
        </div>

        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">Acerca de</a>
            <a href="">Testimonios</a>
            <a href="">Contacto</a>
            <a href="">
                <BsCart2 className="navbar-cart-icon"></BsCart2>
            </a>

            <button className="primary-button">
                Pide ahora!
            </button>
        </div>

        <div className="navbar-menu-contaner">

            <HiOutlineBars3 onClick={ () => setOpenMenu (true) }></HiOutlineBars3>

        </div>  

        <Drawer open={openMenu} onClose={() => setOpenMenu (false)} anchor="right">

            <Box    
                
                sx={{width: 250}}
                role="presentation"
                onClick={()=> setOpenMenu(false)}
                onKeyDown={()=> setOpenMenu(false)}

            >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ) )}
                </List>

            </Box>

        </Drawer>

    </nav>
};

export default Navbar;