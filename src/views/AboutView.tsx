import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { Main } from "../components";

const useStyles = makeStyles({
  outer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "top",
  },

  about: {
    display: "grid",
    // grid-template-columns: 200px 200px 200px
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridAutoColumns: "minmax(100px, auto)",

    gridAutoRows: "minmax(100px, auto)",
  },

  el: {
    padding: "15px",
    borderRadius: "3px",
    border: "1px solid tomato",
    backgroundColor: "#ffcdc4",
  },
});

export const AboutView: FC = () => {
  const classes = useStyles();

  return (
    <Main>
      <div className={classes.outer}>
        <div className={classes.about}>
          <div className={classes.el}>1</div>
          <div className={classes.el}>2</div>
          <div className={classes.el}>3</div>
          <div className={classes.el}>4</div>
          <div className={classes.el}>5</div>
          <div className={classes.el}>6</div>
          <div className={classes.el}>7</div>
          <div className={classes.el}>8</div>
        </div>
      </div>
    </Main>
  );
};
