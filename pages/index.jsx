import HomeLayout from "components/HomeLayout";
import Tutorials from 'components/Tutorials';

export default () => {
  return (
    <HomeLayout>
      <h1>Open Source at UCSD Tutorials</h1>
      <p>All the tutorials we use to help build an Open Source community.</p>
      <h2>All tutorials</h2>
      <Tutorials/>
    </HomeLayout>
  );
};
