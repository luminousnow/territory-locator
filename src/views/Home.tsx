import { FC } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Footer, Main, Navbar } from "../components";
import img from "../assets/img/700x300.jpg";

const useStyles = makeStyles({
  homeContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "top",
  },

  img: {
    // margin: "auto",
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

export const Home: FC = () => {
  const s = useStyles();

  return (
    <>
      <Navbar />
      <Main>
        <div className={s.homeContent}>
          <div className={s.img}>
            <img src={img} alt="" />
          </div>
          <div className={s.description}>
            <ul className={s.descriptionList}>
              <li className={s.listElement}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam, blanditiis?
                </p>
              </li>
              <li className={s.listElement}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam, blanditiis?
                </p>
              </li>
              <li className={s.listElement}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam, blanditiis?
                </p>
              </li>
            </ul>
            <Button className={s.button} variant="contained" color="primary">
              Button
            </Button>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};
