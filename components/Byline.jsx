import React from "react";
import { getGithubUser } from "./GithubAPI";

const Author = (props = {}) => {
  const { name, github, width = 40 } = props;
  const [githubData, setGithubData] = React.useState(null);

  React.useEffect(() => {
    getGithubUser(github).then(data => {
      setGithubData(data);
    });
  }, [github]);
  
  if(!githubData)
    return 'Loading...';
  return (
    <div className="Author">
      <div className="Author-image--container">
        <img
          className="Author-image"
          src={githubData.avatar_url}
          width={width}
        />
      </div>
      <div className="Author-name--container">
        <div className="Author-name">
          {name} - {" "}
          <a href={githubData.html_url}>
            {githubData.login}
          </a>
        </div>
      </div>
      <style jsx>{`
        .Author {
          display: grid;
          grid-template-columns: ${width}px auto;
        }
        .Author-image {
          border-radius: 50%;
        }
        .Author-name {
          margin-left: .75rem;
          line-height: 40px;
        }
      `}</style>
    </div>
  );
};

export default (props = {}) => {
  const { authors = [] } = props;
  return (
    <div clasName="Byline">
      {authors.map(author => (
        <Author key={author.name} name={author.name} github={author.github} />
      ))}
      <style jsx>{`
        .Byline {
        }
      `}</style>
    </div>
  );
};
