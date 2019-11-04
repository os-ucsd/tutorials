import Link from "next/link";
import Byline from "./Byline";
import CreateTutorialUpsell from "./CreateTutorialUpsell";
import BaseLayout from "./BaseLayout";
import colors from "./colors";

function HomeHeader(props) {
  return (
    <div className="HomeHeader">
      <Link href="/">
        🏠 Home
      </Link>
      <style jsx>{`
        .HomeHeader {
          font-weight: 700;
          font-size: 1.2rem;
          color: ${colors.ORANGE1} !important;
        }
      `}</style>
    </div>
  );
}

export default function Layout(props) {
  const { meta } = props;
  return (
    <BaseLayout>
      <div className="tutorial-main">
        <HomeHeader />
        <h1>{meta.title}</h1>
        <Byline authors={meta.authors} />
        <hr />
        <div>{props.children}</div>
        <hr />
        <div>
          <CreateTutorialUpsell />
        </div>
      </div>
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </BaseLayout>
  );
}
