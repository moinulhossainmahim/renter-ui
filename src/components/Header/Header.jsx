import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import logo from "../../assets/renter_logo.png";
import { logout } from "../../utils/api";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  const access_token = localStorage.getItem('access_token');

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")))
  }, [isLoggedIn, access_token]);

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setIsLoggedIn(false);
      toast.success("Logout Successfully", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const modalTitle = (
    <p className="mx-auto text-xl font-semibold ">Renter Add Property</p>
  );

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="object-cover w-36 h-28" />
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
            {isLoggedIn && <NavLink onClick={open}>Add Property</NavLink>}

            {/* login button */}

            {isLoggedIn ? (
              <>
                <NavLink to="/wishlist">Wishlist</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
          <Modal
            size="xl"
            opened={opened}
            onClose={close}
            title={modalTitle}
            centered
          >
            <AddPropertyModal opened={opened} onClose={close} />
          </Modal>
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
