import { authInstance } from ".";
import { showNotification } from "../utils/notification";

export const ProfileService = {
  async getUserProfile(userId: number) {
    try {
      const response = await authInstance.get(`profile/user/${userId}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  },

  async updateUserProfile(profile: any) {
    try {
      const response = await authInstance.put(`profile/${profile.id}`, {
        ...profile,
      });

      showNotification({
        title: "Обновление данных",
        text: "Успешно",
        icon: "success",
      });

      return response.data;
    } catch (error: any) {
      showNotification({
        title: "Данные профиля",
        text: `${error?.response?.data?.message || "Ошибка при изменении"}`,
        icon: "error",
      });
      console.log(error);
    }
  },
};
