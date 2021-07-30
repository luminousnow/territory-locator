import { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    height: "calc(100vh - 140px)",
    padding: "20px",
  },
});

export const Main: FC = ({ children }) => {
  const classes = useStyles();
  return <main className={classes.main}>{children}</main>;
};
