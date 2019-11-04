import { meta as metaContributeMeta } from "pages/meta/contributing.md";

const dateFormat = {
  day: "numeric",
  month: "long",
  year: "numeric"
};

export default function Meta(props) {
  const ts = [{meta: metaContributeMeta, link: "./meta/contributing"}];
  return (
    <div>
      {ts.map(tutorial => {
        const { link, meta } = tutorial;
        const { title, authors = [], publish } = meta;
        return (
          <div key={title}>
            <b>
              <a href={link}>{title}</a>
            </b>{" "}
            <p>
              <span>{authors.map(author => author.name).join(", ")}</span>
              {" - "}
              <span>{publish.toLocaleString(undefined, dateFormat)}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
