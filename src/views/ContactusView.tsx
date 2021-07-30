import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { Main } from "../components";
// import img from "https://picsum.photos/400/200";

const useStyles = makeStyles({
  outer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },

  contactUs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "700px",
    height: "400px",
    padding: "10px",
    boxShadow: "0px 0px 10px 6px rgba(34, 60, 80, 0.2)",
    borderRadius: "5px",
  },

  title: {
    marginBottom: "20px",
  },

  link: {
    textDecoration: "none",
  },

  textLink: {
    color: "black",
  },

  img: {
    marginBottom: "10px",
    width: "500px",
  },
});

export const ContactusView: FC = () => {
  const classes = useStyles();

  return (
    <Main>
      <div className={classes.outer}>
        <div className={classes.contactUs}>
          <h2 className={classes.title}>Get in touch</h2>

          <address>
            <img
              src="https://picsum.photos/400/200"
              alt=""
              className={classes.img}
              width="400"
              height="200"
            />
            <p>Ternopil, Protasevycha str., 46022, Ukraine</p>
            <p>
              <a href="tel:+380000000000" className={classes.link}>
                <span className={classes.textLink}>Call: </span>000 000 00 00
              </a>
            </p>
            <p>
              <a href="mailto:mailto@mail.com" className={classes.link}>
                <span className={classes.textLink}>Send mail: </span>
                mailto@mail.com
              </a>
            </p>
          </address>
        </div>
      </div>
    </Main>
  );
};
