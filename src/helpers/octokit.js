// need App for oauth and access later, can make due with raw Octokit client until that's implemented
// app docs: https://www.npmjs.com/package/octokit#app-client
import { Octokit } from '@octokit/rest';
const auth = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

// API docs: https://www.npmjs.com/package/octokit#octokit-api-client
const octokit = new Octokit({ auth });

export const getPrFromRepoByNumber = async ({ owner, repo, pull_number }) => {
  console.log(`Querying GH for PR details: `, { owner, repo, pull_number });
  try {
    const prData = await octokit.rest.pulls.get({
      owner,
      repo,
      pull_number,
    });
    const { status, data } = prData;

    if (status !== 200) {
      throw new Error(`Error fetching PR, status ${status}`);
    }

    console.info({ data });
    return data;
  } catch (err) {
    console.error('Error fetching PR: ', err);
    throw err;
  }
};

// const owner = 'shipstation';
// const repo = 'shipstation-ui';
// const pull_number = 7257;
// getPrFromRepoByNumber({ owner, repo, pull_number });

// const test = async () => {
//   const {
//     data: { login },
//   } = await octokit.rest.users.getAuthenticated();
//   console.log("Hello, %s", login);
// }
// test();
