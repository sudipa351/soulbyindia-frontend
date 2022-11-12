import React, { useEffect, useState } from "react";
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import './style.css';
import {Link, NavLink} from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import logo from '../../images/logo/logo.png';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUi";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getCartItems, login, signout, signup as _signup } from "../../actions";
import MenuHeader from "../MenuHeader";
import Cart from "../UI/Cart";

import { BiUserCircle } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  
  grow: {
    flexGrow: 1,
    backgroundColor: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: '#f5f5f6',
    borderRadius: '5px',
    border: "1px solid #f5f5f6",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
      width: '500px',
    
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
     color: '#696e79'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const [loginModal, setLoginModal] = useState(false);
  const [profileC, setProfileC] = useState(true);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const category = useSelector((state) => state.category);
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const auth = useSelector((state) => state.auth);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
    
  };

  const userLogin = () => {
    if(signup){
      userSignup();
      setAnchorEl(null);
    }
    else{
      dispatch(login({ email, password }));
      setAnchorEl(null);
    }
    
  };
  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
      console.log(getCartItems());
      setLoginModal(false);
  
    }
  }, [auth.authenticate]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    
  };

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);

  const renderCategories = (categories) =>{
          
    let myCategories = [];
    for(let category of categories){
        myCategories.push(
            <li key ={category.name}>
            
             {
               category.parentId ? <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name} </a>  : <span>{category.name}</span>
             }
                {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>): null}
            </li>
        )
    } 

    return myCategories;

}


  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = 'primary-search-account-menu';
  const renderLoggedMenu = (
    <Menu 
   
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     <div className="loggiedinProfile">
     <h5>Hello</h5>
       <p>{auth.user.fullName} </p>
       <p>{auth.user.email} </p>
     </div>
      <hr />

      <MenuItem onClick={handleMenuClose}><Link to="/account/orders" >Orders</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/kids">Cart</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/men">Wishlist</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/contact">Contact Us</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/portfolio">About Us</Link> </MenuItem>
      {/* <MenuItem onClick={handleMenuClose}><Link  to="/portfolio">Portfolio</Link> </MenuItem> */}
      <button className="logoutButton" onClick={() => logout()}>logout</button>
    </Menu>
  );
  const renderNonLoggedMenu = (
    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     <div className="loggiedinProfile">
     <h5>Welcome</h5>
       <p>To access account and manage orders</p>
       <button   onClick={() => {
            setSignup(false);
            setLoginModal(true);
            setAnchorEl(false)
          }}>Login</button>
     </div>
      <hr />
      <MenuItem onClick={handleMenuClose}>New Customer ? <span><a  onClick={() => {
                setLoginModal(true);
                setSignup(true);
                setAnchorEl(false);
              }}>signup</a></span></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/dressdetail" >Dress Details</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/kids">Kids</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/men">Men Fashion</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/women">Women Fashion</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/accessories">Accesories</Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link  to="/portfolio">Portfolio</Link> </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FavoriteBorderOutlined />
          </Badge>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        
        <p>Add To Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FaRegUser />
        </IconButton>
        <p>FavoriteIcon</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{backgroundColor: 'white', color:'black'}}>
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleProfileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </div>

         <div className="logosection">
     
        <span>
        <Link exact to="/" className="logo-mm"><img src={logo} width="40" height="40" alt="" /></Link>
        </span>
       <p>Soul by Indian</p>
         </div>
        
          
          <div className="renderCat">
          <div className="menuHeader1">
          <ul>
            {category.categories.length > 0
              ? renderCategories(category.categories)
              : null}
                <li style={{lineHeight: "48px"}}>Portfolio</li>
          </ul>
        </div>
          </div>
      
          
          <div className={classes.sectionDesktop}>
            <div className={classes.search}>
              {/* <div className="mx-3"> */}
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              {/* </div> */}
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>

          <div className={classes.grow} />

          <div className={classes.sectionMobile}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </div>
          <div className="mx-2">
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <FaRegUser />
            </IconButton>
          </div>
          </div>
            
            <IconButton aria-label="show 3 added items" color="inherit">
              <Link to="/cart" >
              {/* <Cart count= /> */}
                <Badge badgeContent={Object.keys(cart.cartItems).length} color="secondary" showZero>
                  <ShoppingCartOutlined  style={{color: 'black'}} />
                </Badge>
              </Link>
            </IconButton>

            <IconButton aria-label="show 2 favorite items" color="inherit">
              <NavLink  to="/wishlist">
                <Badge badgeContent={2} color="secondary">
                  <FavoriteBorderOutlined style={{color: 'black'}}  />
                </Badge>
              </NavLink>
            </IconButton>
          {/* </div> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderNonLoggedMenu}  */}
       {auth.authenticate ? renderLoggedMenu : renderNonLoggedMenu}
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            {/* <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div> */}
            <div className="rightspace">
              <span className="loginProfileDesign">
                  <img src={logo} alt={``} />
                 
              </span>
              <h1>Welcome to Soulbyindian</h1>
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                 
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                    width: '200px', marginLeft:'55px'
                  }}
                  onClick={userLogin}
                /> 
                {/* <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                    width: '200px', marginLeft:'55px'
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}