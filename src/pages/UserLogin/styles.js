import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    minHeight: "70vh",
  },
  img: {
    width: "80%",
    maxWidth: 360,
  },
  typography: {
    color: "#a5a5a5",
  },
});
