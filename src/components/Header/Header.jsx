import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedInHomyz")) || false
  );

  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();


  console.log(isLoggedIn)
  // const [modalOpened, setModalOpened] = useState(false);
  // const { validateLogin } = useAuthCheck();

  // const handleAddPropertyClick = () => {
  //   const [isLoggedInHomyz, setIsLoggedInHomyz] = useState(false);

  //   useEffect(() => {
  //     const status = localStorage.getItem("isLoggedInHomyz") === true;
  //   }, [status]);

  //   if (validateLogin()) {
  //     setModalOpened(true);
  //   }
  // };
  useEffect(() => {
    // Sync localStorage changes with state
    const storedStatus = JSON.parse(localStorage.getItem("isLoggedInHomyz"));
    setIsLoggedIn(storedStatus);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedInHomyz", false);
    setIsLoggedIn(false);
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties">Properties</NavLink>

            <NavLink to="/contact">Contact</NavLink>

            {/* add property */}
            {isLoggedIn && <NavLink to="/addProperty">Add Property</NavLink>}

            {/* login button */}

            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
