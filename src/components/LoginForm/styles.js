import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  circularProgress: {
    color: 'white'
  },
  buttonText: {
    marginTop: '1%',
    marginBottom: '1%',
  },
  button: {
    marginTop: '3%',
  }
})