import { create } from "zustand";
import { TestService } from "../services/testService";

type Test = {
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

type TestState = {
  tests: Array<Test>;
};

type TestActions = {
  getTests: () => Promise<void>;
};

const useTestStore = create<TestState & TestActions>((set) => ({
  tests: [],
  getTests: async () => {
    try {
      const data = await TestService.getTests();
      set({ tests: data });
    } catch (error) {
      console.error("Error fetching tests data:", error);
    }
  },
}));

export default useTestStore;
