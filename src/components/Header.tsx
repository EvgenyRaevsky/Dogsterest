import { AppBar, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBlock: 2,
        backgroundColor: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "black",
          fontWeight: "700",
          paddingLeft: 2,
        }}
      >
        DOGSTEREST
      </Typography>
      <Stack
        sx={{
          maxWidth: "1000px",
          width: "70%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          paddingRight: 3,
          gap: 2,
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
      </Stack>
    </AppBar>
  );
};
