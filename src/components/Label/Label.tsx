import Typography from "@mui/material/Typography";

type LabelProps = {
  text: string;
};
export default function Label({ text }: LabelProps) {
  return (
    <Typography
      variant="body2"
      sx={{ pb: "0.625rem", display: "inline-block", mr: 1 }}
    >
      {text}
    </Typography>
  );
}
