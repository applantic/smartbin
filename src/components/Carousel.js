import React from "react";
import {makeStyles} from "@material-ui/core";
import InfiniteCarousel from "react-leaf-carousel";

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


export default function Carousel({children, ...props}) {
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
      {children}

    </InfiniteCarousel>
  );

}
