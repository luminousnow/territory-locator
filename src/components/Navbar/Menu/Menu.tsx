import { FC } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    margin: "15px",
  },
});

export const Menu: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.menu}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
        className={classes.button}
      >
        Home
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/partners")}
        className={classes.button}
      >
        Partners
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/about")}
        className={classes.button}
      >
        About
      </Button>
    </div>
  );
};
