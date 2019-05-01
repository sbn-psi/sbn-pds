#!/usr/bin/env bash

# pull changes from remote
echo "Pulling changes from git..."
git pull

echo "Correcting git lfs permissions..."

# group sbn can write
chmod g+w .git/lfs
# directory is NOT world readable
chmod o-r .git/lfs

echo "Done."