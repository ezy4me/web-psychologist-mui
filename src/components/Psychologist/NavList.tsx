import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import ArticleIcon from '@mui/icons-material/Article';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import useAuthStore from '@store/authStore';

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  primary: string;
}

const MainNavLinks = () => {
  return (
    <>
      <NavLink to="/psychologist/" icon={<DashboardIcon />} primary="Главная" />
      <NavLink to="/psychologist/articles" icon={<ArticleIcon />} primary="Статьи" />
      <NavLink to="/psychologist/tests" icon={<QuizIcon />} primary="Тесты" />
    </>
  );
};

const SecondaryNavLinks = () => {
  const { onLogout } = useAuthStore();

  const handleLogout = () => {
    onLogout();
  };

  return (
    <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <ExitToAppIcon color="error" />
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItemButton>
  );
};

const NavLink = ({ to, icon, primary }: NavLinkProps) => {
  return (
    <ListItemButton component={Link} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItemButton>
  );
};

export { MainNavLinks, SecondaryNavLinks };
