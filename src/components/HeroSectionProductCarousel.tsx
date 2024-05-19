import { PUBLIC_IMAGES } from "../constants/constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AnimationHandler,
  AnimationHandlerResponse,
} from "react-responsive-carousel/lib/ts/components/Carousel/types";

const HeroSectionProductCarousel = () => {
  const fadeAnimationHandler: AnimationHandler = (
    props,
    state
  ): AnimationHandlerResponse => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";

    let slideStyle: React.CSSProperties = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
      };
    }

    return {
      slideStyle,
      selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
      prevStyle: { ...slideStyle },
    };
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      interval={4000}
      animationHandler={fadeAnimationHandler}
      swipeable={false}
    >
      <div>
        <img src={`${PUBLIC_IMAGES}hero/1.png`} />
      </div>
      <div>
        <img src={`${PUBLIC_IMAGES}hero/2.png`} />
      </div>
      <div>
        <img src={`${PUBLIC_IMAGES}hero/3.png`} />
      </div>
    </Carousel>
  );
};

export default HeroSectionProductCarousel;
