import { apiInstance, authInstance } from '.';

export const TestService = {
  async getTests() {
    try {
      const response = await apiInstance.get('test');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getTestQuestions(testId: string) {
    try {
      const response = await authInstance.get(`test-question/${testId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async getTestingResult(testId: string, score?: number) {
    try {
      const response = await authInstance.get(`result/test/${testId}?score=${score}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
