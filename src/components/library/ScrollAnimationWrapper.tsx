import ScrollAnimation, { ScrollAnimationProps } from "react-animate-on-scroll";

type Props = {
  children: React.ReactNode;
  animateIn:
    | "tada"
    | "flash"
    | "slideInLeft"
    | "slideInRight"
    | "slideInUp"
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight";
  animateOut?: "tada" | "flash" | "slideInLeft" | "slideInRight";
  className?: string;
  delay?: number;
};

const ScrollAnimationWrapper = ({
  children,
  animateIn,
  animateOut,
  className,
  delay = 200,
}: Props) => {
  return (
    <ScrollAnimation
      className={className}
      animateIn={animateIn}
      animateOut={animateOut}
      animateOnce={true}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  );
};

export default ScrollAnimationWrapper;
