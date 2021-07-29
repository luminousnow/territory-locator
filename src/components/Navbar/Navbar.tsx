import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { Menu } from "../";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100px",

    backgroundColor: "#dedede",
  },

  logo: {
    margin: "15px",
    width: "70px",
    height: "70px",

    backgroundColor: "green",
    borderRadius: "50%",
  },
});

export const Navbar: FC = () => {
  const s = useStyles();

  return (
    <div className={s.navbar}>
      <div className={s.logo}></div>
      <Menu />
    </div>
  );
};
