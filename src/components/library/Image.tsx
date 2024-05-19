import { ImgHTMLAttributes, SyntheticEvent } from "react";
import { PUBLIC_IMAGES } from "../../constants/constants";

type Props = {
  filePath: string;
  style?: React.CSSProperties;
  className?: string;
};

const Image = ({ filePath, style, className }: Props) => {
  const onError = (e: any) => {
    console.log(e);
    e.target.src = "/images/not_found.png";
  };
  return (
    <img
      className={className}
      style={style}
      alt={filePath}
      src={filePath}
      onError={onError}
    />
  );
};

export default Image;
