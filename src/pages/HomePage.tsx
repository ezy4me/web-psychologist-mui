import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import TypingEffect from "../components/TypingEffect";
import QAndA from "../components/QandA";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { data } from "../data/HomePsychologist.json";
import PageImage from "../components/PageImage";
import SectionTitle from "../components/SectionTitlle";

type DataType = {
  request: string;
  imageUrl: string;
};

const HomePage = () => {
  return (
    <Container>
      <Stack direction={"column"} spacing={4}>
        <PageImage $image="/public/images/main.jpg">
          <TypingEffect
            text="Добро пожаловать"
            typingDelay={100}
            erasingDelay={100}
            pauseDelay={1000}
          />
        </PageImage>

        <SectionTitle text="С чем поможет психолог ?" />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((item: DataType, index: number) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Card sx={{ height: "100%" }} elevation={0}>
                <CardMedia
                  style={{ borderRadius: "100%", marginTop: 16}}
                  height="320"
                  component="img"
                  image={item.imageUrl}
                />
                <CardContent>
                  <Typography textAlign={"center"} variant="h6">
                    {item.request}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <SectionTitle text="Часто задаваемые вопросы" />
        <QAndA />
      </Stack>
    </Container>
  );
};

export default HomePage;
