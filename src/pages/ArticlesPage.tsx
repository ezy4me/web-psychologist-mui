import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useArticleStore from "../store/articleStore";

const ArticlesPage = () => {
  const navigate = useNavigate();
  const { articles, getArticles } = useArticleStore((state) => ({
    articles: state.articles,
    getArticles: state.getArticles,
  }));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await getArticles();
  };

  const handleOpenArticleDetail = (id: number) => {
    navigate(`/articles/${id}`);
  };

  return (
    <Container>
      <Stack
        height={"100%"}
        direction={"column"}
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}>
        <Typography textTransform={"uppercase"} variant="h4">
          Последние статьи
        </Typography>
      </Stack>
      <Grid marginTop={4} container spacing={1}>
        {articles?.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              onClick={() => handleOpenArticleDetail(article.id)}
              sx={{ maxWidth: 345, cursor: "pointer" }}>
              <CardMedia
                sx={{ height: 180 }}
                image={article.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.subtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Avatar src={article.psychologist.user.profile.image} />
                  <Typography>
                    {article.psychologist.user.profile.name}
                  </Typography>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticlesPage;
