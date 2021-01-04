import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    backgroundColor: "#f5f5f5",
    padding: "3%",
  },
  formContainer: {
    textAlign: "center",
    backgroundColor: "white",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  form: {
    marginBottom: "5%",
    marginTop: "3%",
  },
  submitButton: {
    marginTop: "3%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  button: {
    textAlign: "center",
  },
  divider: {
    marginTop: "2.5%",
    marginBottom: "2.5%",
    background: "black",
  },
  requiredAsterisk: {
    color: "red",
  },
  input: {
    backgroundColor: "#FAFAFA",
  },
});
