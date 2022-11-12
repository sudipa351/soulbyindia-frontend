import React, { useEffect, useState } from "react";
import "./style.css";
import flipkartLogo from "../../images/logo/flipkart.png";
import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart, IoIosLogIn, IoIosPeople, IoIosSearch } from "react-icons/io";
import logo from "../../images/logo/logo.png";
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

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              {category.name} 
            </a>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategories;
  };

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
    }
    else{
      dispatch(login({ email, password }));
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

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.fullName}  <IoIosArrowDown /></a> }
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "My Carts", href: "", icon: null },
        
          { label: "Orders", href: `/account/orders`, icon: null },
          { label: "Wishlist", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Notification", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
 
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
          className="loginButton"
          onClick={() => {
            setSignup(false);
            setLoginModal(true);
          }}
        >
           <BiUserCircle className="l-icon" />
          </a>
        }
        menus={[
          { label: "My Profile", href: "", icon: null },
      
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true)
            },
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
              </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
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
      <div className="subHeader">
        <div className="logo">
          <a href={`/`} style={{ textDecoration: "none", color: "white" }}>
            {/* <img src={flipkartLogo} className="logoimage" alt="" /> */}
            <span className="logoText">SoulByIndian</span>
          </a>
          <a style={{ marginTop: "-10px" }}>
            <span className="exploreText">Explore More</span>
            <span className="plusText"></span>
            {/* <img src={goldenStar} className="goldenStar" alt="" /> */}
          </a>
        </div>

        <div className="menuHeader1">
          <ul style={{ ...props.style }}>
            {category.categories.length > 0
              ? renderCategories(category.categories)
              : null}
          </ul>
        </div>

        <div
          style={{
            padding: "0 10px",
            display: "flex",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for products, brands and more"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div>
        </div>
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "Notification Preference", href: "", icon: null },
              
              { label: "24x7 Customer Care", href: "", icon: null },
              { label: "Advertise", href: "", icon: null },
              { label: "Download App", href: "", icon: null },
            ]}
          />
          <div>
          <a href={`/cart`} className="cart">
              <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
