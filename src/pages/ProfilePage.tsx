import { useEffect, useState } from "react";
import useProfileStore from "../store/profileStore";
import useAuthStore from "../store/authStore";
import {
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Stack,
  CardMedia,
  Breadcrumbs,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const ProfilePage = () => {
  const navigate = useNavigate();

  const { user, onLogout } = useAuthStore((state) => ({
    user: state.user,
    onLogout: state.onLogout,
  }));

  const { profile, getUserProfile, updateUserProfile } = useProfileStore(
    (state) => ({
      getUserProfile: state.getUserProfile,
      updateUserProfile: state.updateUserProfile,
      profile: state.profile,
    })
  );

  const [name, setName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setBirthday(profile.birthday || "");
      setGender(profile.gender || "");
      setPhone(profile.phone || "");
      setImage(profile.image || "");
      setDescription(profile.description || "");
    }
  }, [profile]);

  useEffect(() => {
    if (user) {
      getUserProfile(user.id);
    }
  }, [user]);

  const handleSaveProfile = async () => {
    await updateUserProfile({
      id: profile?.id,
      name,
      birthday,
      gender,
      phone,
      description,
    });
  };

  const onHandleLogout = async () => {
    await onLogout().then(() => {
      navigate("/");
      location.reload();
    });
  };

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={"/"}>Главная</Link>
        <Link to={"/profile"}>Личный кабинет</Link>
      </Breadcrumbs>
      <Stack direction={"column"} spacing={4} mt={4}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Ваш профиль</Typography>
          <Button variant="contained" color="error" onClick={onHandleLogout}>
            Выйти
          </Button>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid xs={12} sm={6}>
            <Card>
              <CardMedia component="img" alt="Profile Image" src={image} />
              <CardContent>
                <Stack direction={"column"} spacing={2}>
                  <Typography variant="h6">Личные данные</Typography>
                  <TextField
                    variant="standard"
                    label="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Дата рождения"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Пол"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="О себе"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                  />
                  <Button
                    onClick={handleSaveProfile}
                    variant="contained"
                    color="primary">
                    Сохранить
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6}>
            <Stack direction={"column"} spacing={2}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Ваши записи</Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h6">Ваши тесты</Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default ProfilePage;
