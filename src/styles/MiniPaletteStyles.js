export default {
  root: {
    backgroundColor: "transparent",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: "transparent",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "#fff9c4",
    fontWeight: "900",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "50%",
    width: "10%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  },
  deleteIcon: {
    color: "#8bc34a",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0",
    top: "0px",
    padding: "5px",
    zIndex: 10,
    opacity: 0
  }
};
