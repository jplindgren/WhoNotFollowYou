const { Octokit } = require("@octokit/rest");

var listFromGithub = async (username) => {
    const appOctokit = new Octokit();

    var followersPromise = appOctokit.users.listFollowersForUser({
        username: username
    });

    var followingPromise = appOctokit.users.listFollowingForUser({
        username: username
    });

    return await Promise.all([followersPromise, followingPromise])
        .then((values) => {
            var followers = values[0].data;
            var following = values[1].data;
            var followersids = followers.map(x => x.id);

            var noFollowBack = following.filter(f => followersids.indexOf(f.id) === -1);
            return noFollowBack;
        });
}

module.exports = listFromGithub;
