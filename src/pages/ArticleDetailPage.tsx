import {
  Avatar,
  Box,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useArticleStore from "../store/articleStore";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { article, getOneArticle } = useArticleStore((state) => ({
    article: state.article,
    getOneArticle: state.getOneArticle,
  }));

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    if (id) await getOneArticle(id);
  };

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={"/"}>Главная</Link>
        <Link to={"/articles"}>Статьи</Link>
        <Link to={`/articles/${id}`}>{article?.title!}</Link>
      </Breadcrumbs>
      {!article ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
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
              <Typography>{article.psychologist.user.profile.name}</Typography>
            </Stack>
          </CardActions>
        </Card>
      )}
    </Container>
  );
};

export default ArticleDetailPage;
