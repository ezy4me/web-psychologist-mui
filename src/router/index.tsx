import {
  Navigate,
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
import useAuthStore from "../store/authStore";
import AnalyticsPage from "@pages/Admin/AnalitycsPage";
import UserPage from "@pages/Admin/UserPage";
import PsychologistPage from "@pages/Admin/PsychologistPage";
import ArticlePage from "@pages/Admin/ArticlePage";
import TestPage from "@pages/Admin/TestPage";
import ForPsychologistPage from "@pages/ForPsychologistPage.tsx";

const AuthGuard = ({ element }: { element: React.ReactNode }) => {
  const { accessToken } = useAuthStore();
  return accessToken ? element : <Navigate to="/" replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tests" element={<TestsPage />} />
      <Route path="/for-psychologist" element={<ForPsychologistPage />} />

      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticleDetailPage />} />

      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route
        path="/profile"
        element={<AuthGuard element={<ProfilePage />} />}
      />

      <Route path="/admin" element={<AuthGuard element={<AdminPage />} />}>
        <Route
          path="/admin/"
          element={<AuthGuard element={<AnalyticsPage />} />}
        />
        <Route
          path="/admin/users"
          element={<AuthGuard element={<UserPage />} />}
        />
        <Route
          path="/admin/psychologists"
          element={<AuthGuard element={<PsychologistPage />} />}
        />
        <Route
          path="/admin/articles"
          element={<AuthGuard element={<ArticlePage />} />}
        />
        <Route
          path="/admin/tests"
          element={<AuthGuard element={<TestPage />} />}
        />
      </Route>

      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
