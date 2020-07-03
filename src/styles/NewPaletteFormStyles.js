import { DRAWER_WIDTH } from "../constants";
import sizes from './sizes';
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100vh"
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    [sizes.down("sm")]: {
      marginTop: "15px",
    }
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    width: "100%",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [sizes.down("sm")]: {
      padding: "0 35px 0 10px",
    }
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly"
  },
  button: {
    width: "40%",
    fontSize: "12px"
  }
});

export default styles;
