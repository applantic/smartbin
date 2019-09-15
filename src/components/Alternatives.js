import React from "react";
import {makeStyles} from "@material-ui/core";
import InfiniteCarousel from "react-leaf-carousel";

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
  text: {},
  textBold: {
    fontWeight: "600"
  },
  textRight: {
    textAlign: "right"
  },
})

function Alternative({img, name, description}) {
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

const arrowUseStyles = makeStyles({
  base: {
    position: "absolute",
    width: "20%",
    height: "100%",
    backgroundColor: "transparent",
    top: "0",
    zIndex: "1",
    cursor: "pointer",
  },
  left: {
    left: "0",
  },
  right: {
    right: "0",
  },
})


export default function Alternatives({alternatives, ...props}) {
  const isNotTouchDevice = !("ontouchstart" in document.documentElement);
  // Carousel not rendering until page is resized
  // https://github.com/leaffm/react-infinite-carousel/issues/16
  const breakpoints = [
    {
      breakpoint: 1,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const arrowClasses = arrowUseStyles();
  return (
    <InfiniteCarousel
      arrows={isNotTouchDevice}
      showSides={true}
      sideSize={0.2}
      slidesSpacing={10}
      breakpoints={breakpoints}
      prevArrow={<div className={`${arrowClasses.base} ${arrowClasses.left}`}/>}
      nextArrow={<div className={`${arrowClasses.base} ${arrowClasses.right}`}/>}
      {...props}
    >
      {alternatives.map(alternative => <Alternative {...alternative} />)}
    </InfiniteCarousel>
  );

}
