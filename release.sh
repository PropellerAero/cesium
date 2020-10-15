#!/bin/bash -xe

PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
RELEASE_TAG="propeller-$PACKAGE_VERSION"

echo "About to release tag $RELEASE_TAG"

git tag -a "$RELEASE_TAG"
git push origin "$RELEASE_TAG"
