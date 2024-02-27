export interface Answer {
  id: number;
  text: string;
  score: number;
  questionId: number;
}

export interface Question {
  id: number;
  text: string;
  Answer: Answer[];
}

export interface TestQuestion {
  id: number;
  testId: number;
  test: {
    title: string;
  };
  questionId: number;
  question: Question;
}

export interface Test {
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
}
