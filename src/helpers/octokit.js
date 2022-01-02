// need App for oauth and access later, can make due with raw Octokit client until that's implemented
// app docs: https://www.npmjs.com/package/octokit#app-client
import { Octokit } from 'octokit';
const auth = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

// API docs: https://www.npmjs.com/package/octokit#octokit-api-client
const octokit = new Octokit({ auth });

const test = async () => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log('Hello, %s', login);
};
test();
