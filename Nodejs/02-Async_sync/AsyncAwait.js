
console.log("Before");

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log("commits:", commits))
//     .catch(err => console.log(new Error("SOMETHING WENT WRONG", err)))
// const displayCommits=async ()=>{}
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log("COMMITS:", commits)
    } catch (err) {
        console.log("error:", new Error(err))
    }
}

displayCommits();
console.log("After");



function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Requestin a user from a Data base");
            resolve({ id: id, gitHubUsername: "abhishek" })
            // return {id:id,gitHubUsername:"abhishek"}
        }, 2000)
    })

}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Requestin a Repositories of a user");
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000)
    })

}


function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Requestin a commit list  of a repo");
            //  resolve(['commit1', 'commit2', 'commit3'])
            reject('Not in a mood to return commits')
        }, 2000)
    })
}

