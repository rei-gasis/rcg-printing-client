type Props = {
  text: string | undefined;
  color?: string;
};

const ErrorText = ({ text, color = "red" }: Props): JSX.Element => {
  return (
    <p
      style={{
        color: color,
        fontFamily: "Roboto",
        fontSize: "12px",
        display: `${text ? "block" : "none"}`,
      }}
    >
      {text}
    </p>
  );
};

export default ErrorText;
