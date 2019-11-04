export const getGithubUser = async login => {
  const key = `github-user-${login}`;
  const item = window.localStorage.getItem(key);
  if (item) return JSON.parse(item);
  return fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(data => {
      window.localStorage.setItem(key, JSON.stringify(data));
      return data;
    });
};
