import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import { Main } from "../components";
import img from "../assets/img/700x300.jpg";

const useStyles = makeStyles({
  homeContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    paddingRight: "20px",
  },
  description: {
    textAlign: "center",
  },
  descriptionList: {
    marginBottom: "20px",

    textAlign: "left",
  },
  listElement: {
    marginBottom: "10px",
  },
  button: {
    margin: "auto",
  },
});

export const HomeView: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push("/contact-us");

  return (
    <Main>
      <div className={classes.homeContent}>
        <div className={classes.img}>
          <img src={img} alt="" />
        </div>
        <div className={classes.description}>
          <ul className={classes.descriptionList}>
            <li className={classes.listElement}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, blanditiis?
              </p>
            </li>
            <li className={classes.listElement}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, blanditiis?
              </p>
            </li>
            <li className={classes.listElement}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, blanditiis?
              </p>
            </li>
          </ul>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Contact us
          </Button>
        </div>
      </div>
    </Main>
  );
};
