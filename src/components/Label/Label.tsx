import React from "react";
import Typography from "@mui/material/Typography";

type LabelProps = {
  text: string;
};
const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <Typography
      variant="body2"
      sx={{ pb: "0.625rem", display: "inline-block", mr: 1 }}
    >
      {text}
    </Typography>
  );
};
export default Label;
