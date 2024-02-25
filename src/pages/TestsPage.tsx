import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import useTestStore from "../store/testStore";
import { useEffect } from "react";

const TestsPage = () => {
  const { tests, getTests } = useTestStore((state) => ({
    tests: state.tests,
    getTests: state.getTests,
  }));

  const fetchData = async () => {
    await getTests();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Stack
        height={"100%"}
        direction={"column"}
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}>
        <Typography textTransform={"uppercase"} variant="h4">
          Зачем проводить <span>психологические</span> тесты ?
        </Typography>
        <Typography variant="body1">
          Психологические тесты являются важным инструментом для изучения и
          понимания различных аспектов человеческой психики, поведения и
          личности. Они позволяют психологам и исследователям получить
          информацию о личностных особенностях, эмоциональном состоянии,
          склонностях и предпочтениях человека. Вот несколько причин, почему
          психологические тесты имеют важное значение:
        </Typography>
      </Stack>
      <Grid marginTop={4} container spacing={1}>
        {tests?.map((test, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
              <CardMedia
                sx={{ height: 180 }}
                image={test.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {test.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {test.subtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Avatar src={test.psychologist.user.profile.image} />
                  <Typography>{test.psychologist.user.profile.name}</Typography>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestsPage;
