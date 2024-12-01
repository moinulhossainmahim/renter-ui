import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Sign In",
    link: "/login",
  },
];

const NavLinks = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Box
        sx={{
          display:'flex',
          gap:3
        }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                color: "white",
              }}
              flexDirection={'column'}
            >
              <p
                style={{
                  filter: `${
                    pathname === item.link
                      ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg)  brightness(91%) contrast(87%)"
                      : "invert(84%)"
                  }`,
                }}
              >
                {item.name}
              </p>
            </Box>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default NavLinks;
