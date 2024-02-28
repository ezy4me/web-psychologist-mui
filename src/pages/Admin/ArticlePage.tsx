import useArticleStore from '@store/articleStore';
import ArticleDataGrid from '@components/Admin/DataGrids/ArticleDataGrid';
import { useEffect } from 'react';

const ArticlePage = () => {
  const { articles, getArticles } = useArticleStore((state) => ({
    articles: state.articles,
    getArticles: state.getArticles,
  }));

  useEffect(() => {
    const fetchData = async () => {
      await getArticles();
    };
    fetchData();
  }, []);
  return (
    <>
      <ArticleDataGrid data={articles} />
    </>
  );
};

export default ArticlePage;
