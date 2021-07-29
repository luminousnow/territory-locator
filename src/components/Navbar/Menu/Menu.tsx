import { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  menu__list: {
    display: "flex",
  },

  menu__element: {
    padding: "10px",
    margin: "15px",
  },

  menu__link: {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  },
});

export const Menu: FC = () => {
  const s = useStyles();

  return (
    <div className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.menu__element}>
          <a href="http://" className={s.menu__link}>
            Home
          </a>
        </li>
        <li className={s.menu__element}>
          <a href="http://" className={s.menu__link}>
            Partners
          </a>
        </li>
        <li className={s.menu__element}>
          <a href="http://" className={s.menu__link}>
            About
          </a>
        </li>
      </ul>
    </div>
  );
};
