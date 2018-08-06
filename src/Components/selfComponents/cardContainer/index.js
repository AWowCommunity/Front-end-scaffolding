import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "../card";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative"
  }
});

const Container = styled.div``;

class CardContainer extends Component {
  render() {
    return (
      <Container>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <div className={this.props.classes.paper}>
              <Card />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={this.props.classes.paper}>
              <Card
                cardLable="BUSINESS"
                cardTitle="Working on Wallstreet is Not So Easy"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={this.props.classes.paper}>
              <Card
                cardLable="MARKETING"
                cardTitle="0 to 100.000 Customers in 6 months"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
CardContainer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CardContainer);
