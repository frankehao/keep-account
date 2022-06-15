#!/usr/bin/env bash
rm -rf dist &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:peachDDDADAD/keep-account-website.git &&
git push -f -u origin master &&
cd -
