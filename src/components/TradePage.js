import React from "react";
import PointCounter from "./PointCounter";
import Item from "./Item";
import Carousel from "./Carousel";
import {Button, Container, CssBaseline, makeStyles} from "@material-ui/core";
import {items} from "./Dashboard"
import COLORS from "../variables/colors";

const useStyles = makeStyles({
  imageContainer: {
    textAlign: "center",
  },
  buttonContainer: {
    textAlign: "center",
  },
  itemsContainer: {
    height: "130px",
  },
  image: {
    width: "auto !important",
    height: "130px",
    paddingLeft: '10px',
    paddingRight: '20px'
  },
  submit: {
    backgroundColor: COLORS.gray,
    color: COLORS.white,
    width: "100%",
    maxWidth: "240px",
  }
})

export default function TradePage({img, ...props}) {
  const {match: {params}} = props;
  const item = items.find(el => el.id === params.itemId)
  console.log(params, item)

  const classes = useStyles();
  return (

    <Container maxWidth="lg" {...props}>
      <CssBaseline/>
      <PointCounter content={{leftPoint: 170, leftText: "PETÓW", rightPoint: 510, rightText: "PKT"}}/>
      <div style={{paddingTop: '15px', paddingBottom: '15px'}} className={classes.imageContainer}><img className={classes.image} src={item.img} alt=""/></div>
      <PointCounter  content={{leftPoint: 510, leftText: "PKT", rightPoint: 2, rightText: "Drzew"}}/>
      <p style={{paddingTop: '15px'}}>Wspólnie zostało posadzonych 289 dużych drzew (głównie dęby, klony, jabłonie,
        grusze, czereśnie dzikie, śliwy ałycze).</p>
      <div style={{paddingTop: '15px'}} className={classes.buttonContainer}>
        <Button
          type="submit"
          variant="contained"
          color="#404041"
          className={classes.submit}
        >
          Wybierz
        </Button></div>
      <div style={{paddingTop: '30px'}}>SMOKE BETTER FOR THE ENVIRONMENT</div>
      <div className={classes.itemsContainer}>
        <Carousel sideSize={0.3}>
          {items.map(item => <Item {...item} />)}
        </Carousel>
      </div>
    </Container>
  );

}
