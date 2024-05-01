import { Stack } from "@mui/material";
import React from "react";

type Props = {
  icon: React.ReactNode;
  text: string;
};

const IconTextStack = ({ icon, text }: Props) => {
  return (
    <Stack
      spacing={3}
      direction="row"
      alignItems="center"
      className="contact-info"
    >
      {icon}
      <p>{text}</p>
    </Stack>
  );
};

export default IconTextStack;
