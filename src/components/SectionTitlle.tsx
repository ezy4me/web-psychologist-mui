import { Stack, Typography } from "@mui/material";

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <Stack
      height={"100%"}
      direction={"column"}
      spacing={4}
      alignItems={"center"}
      justifyContent={"center"}>
      <Typography textTransform={"uppercase"} variant="h4">
        {text}
      </Typography>
    </Stack>
  );
};

export default SectionTitle;
