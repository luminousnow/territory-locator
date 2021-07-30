import { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "40px",
    backgroundColor: "#dedede",
  },
});

export const Footer: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>Footer</p>
    </div>
  );
};
