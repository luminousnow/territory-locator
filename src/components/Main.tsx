import { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    minHeight: "calc(100vh - 140px)",
    padding: "20px",
  },
});

export const Main: FC = ({ children }) => {
  const s = useStyles();

  return <div className={s.main}>{children}</div>;
};
