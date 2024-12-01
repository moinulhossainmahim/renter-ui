import { Box } from "@mui/system";
import { ReactNode } from "react";
import Navbar from "../components/Home/Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        margin:"0px",
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <Navbar />
      <Box
        sx={{
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
