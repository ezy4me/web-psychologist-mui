import useTestStore from '@store/testStore';
import TestDataGrid from '@components/Admin/DataGrids/TestDataGrid';
import { useEffect } from 'react';

const TestPage = () => {
  const { tests, getTests } = useTestStore((state) => ({
    tests: state.tests,
    getTests: state.getTests,
  }));

  useEffect(() => {
    const fetchData = async () => {
      await getTests();
    };
    fetchData();
  }, []);
  return (
    <>
      <TestDataGrid data={tests} />
    </>
  );
};

export default TestPage;
