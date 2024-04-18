import { PUBLIC_IMAGES } from "../../constants/constants";

type Props = {
  fileName: string;
  style?: React.CSSProperties;
  className?: string;
};

const Image = ({ fileName, style, className }: Props) => {
  const filePath = PUBLIC_IMAGES + fileName;
  return (
    <img className={className} style={style} alt={fileName} src={filePath} />
  );
};

export default Image;
