import { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "40px",
    // textAlign: "center",
    // verticalAlign: "middle",
    backgroundColor: "#dedede",
  },
});

export const Footer: FC = () => {
  const s = useStyles();

  return (
    <div className={s.footer}>
      <p>Footer</p>
    </div>
  );
};
