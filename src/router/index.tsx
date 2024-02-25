import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TestsPage from "../pages/TestsPage";
import ArticlesPage from "../pages/ArticlesPage";
import NotFoundPage from "../pages/NotFoundPage";
import App from "../App";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProfilePage from "../pages/ProfilePage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import AdminPage from "../pages/Admin/AdminPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tests" element={<TestsPage />} />

      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticleDetailPage />} />

      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/admin" element={<AdminPage />} />

      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
