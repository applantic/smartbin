import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    padding: '10px 14px',
    margin: '10px 0px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    width: '100%',
    height: "130px",
  },
  image: {
    paddingLeft: '10px',
    paddingRight: '20px',
    width: "auto",
  },
  spread: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "100%"
  },
  textBold: {
    fontWeight: "600"
  },
  textRight: {
    textAlign: "right"
  },
})

export default function Alternative({img, name, description}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={img} alt=""/>
      <div className={classes.spread}>
        <div className={classes.name}>
          <div className={classes.textBold}>{name}</div>
          <div className={classes.text}>{description}</div>
        </div>
        <div className={classes.textRight}>Wymień</div>
      </div>
    </div>
  );
}
