import { apiInstance } from ".";

export const TestService = {
  async getTests() {
    try {
      const response = await apiInstance.get("test");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
