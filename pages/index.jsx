import HomeLayout from "components/HomeLayout";
import Tutorials from "components/Tutorials";
import Meta from "components/Meta";

export default () => {
  return (
    <HomeLayout>
      <h1>Open Source at UCSD Tutorials</h1>
      <p>All the tutorials we use to help build an Open Source community.</p>

      <hr />
      <h2>All tutorials</h2>
      <Tutorials />

      <hr />

      <h2>Meta</h2>
      <p>
        Contribute to this growing list of tutorials about open source software,
        written by the open source community at UC San Diego!
      </p>
      <Meta />
    </HomeLayout>
  );
};
