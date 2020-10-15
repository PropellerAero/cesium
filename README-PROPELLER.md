# Updating the Propeller fork of Cesium

"The best way in my eyes is, to rebase because that fetches the latest changes of the upstream branch and replay your work on top of that." - [Stefan Bauer](https://stefanbauer.me/articles/how-to-keep-your-git-fork-up-to-date)

The ideal git history should have all Propeller modifications in a single most recent commit, followed by the full history from upstream CesiumGS.

e.g.

```
commit c6fc9cb205e387781c5269b95e350f61a8815d08
Author: Chris Cooper <chris@propelleraero.com>
Date:   Mon Sep 21 15:19:02 2020 +1000

    All the Propeller mods in a single commit

commit da4ddc58830606d89f762dc7d79b3dfe4103c6d1
Merge: 9c61508 6c0a0f8
Author: Kevin Ring <kevin@kotachrome.com>
Date:   Tue Sep 1 15:47:38 2020 +1000

    Updates for 1.73 release

...
```

To maintain this going forward, use a `git rebase`.

```
# Make sure your master branch is up to date
git checkout master
git pull

# Work from a branch for now
git checkout -b 'my-update-branch'

# Fetch the upstream tags
git fetch upstream --tags

# Interactive rebase to the CesiumGS release tag
# Squash all propeller commits into a single commit
git rebase -i 1.74

# Once you're certain your branch is working as expected
# E.g. you've tested by yarn link into visualiser
# Then reset master to match your branch
git checkout master
git reset my-update-branch --hard

# Now you can run the release script to tag and publish
./release.sh
```
