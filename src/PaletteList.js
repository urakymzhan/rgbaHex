import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import Typical from 'react-typical';
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: ""
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }
  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  render() {
    // palletes from App, styles from withStyles HOC
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;

    let miniPalettesList = (
      <TransitionGroup className={classes.palettes}>
        {palettes.map(palette => (
          <CSSTransition key={palette.id} classNames='fade' timeout={500}>
            <MiniPalette
              {...palette}
              goToPalette={this.goToPalette}
              openDialog={this.openDialog}
              key={palette.id}
              id={palette.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
    if (palettes.length === 0) {
      miniPalettesList = <Typical
        steps={['Bingoo!', 1000, 'No Palletes. Please create one!', 500]}
        loop={Infinity}
        wrapper="h1"
        className={classes.nopalettes}
      />
    }
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>RgbHex</h1>
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
            >
              <Link to='/palette/new'>create</Link>
            </Button>
          </nav>
          {miniPalettesList}
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby='delete-dialog-title'
          onClose={this.closeDialog}
        >
          <DialogTitle id='delete-dialog-title'>
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete' />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Cancel' />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
