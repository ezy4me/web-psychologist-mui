import { create } from "zustand";
import { ArticleService } from "../services/articlesService";

type Article = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  isApproved: boolean;
  createdAt: Date;
  image: string;
  psychologistId: number;
  psychologist: {
    user: {
      profile: {
        name: string;
        image: string;
      };
    };
  };
};

type ArticleState = {
  articles: Array<Article>;
  article: Article | null;
};

type ArticleActions = {
  getArticles: () => Promise<void>;
  getOneArticle: (id: string) => Promise<void>;
};

const useArticleStore = create<ArticleState & ArticleActions>((set) => ({
  articles: [],
  article: null,
  getArticles: async () => {
    try {
      const data = await ArticleService.getArticles();
      set({ articles: data });
    } catch (error) {
      console.error("Error fetching articles data:", error);
    }
  },
  getOneArticle: async (id) => {
    try {
      const data = await ArticleService.getOneArticle(id);
      set({ article: data });
    } catch (error) {
      console.error("Error fetching articles data:", error);
    }
  },
}));

export default useArticleStore;
