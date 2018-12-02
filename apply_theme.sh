#!/bin/bash

declare -a arr=("assets" "_layouts" "_includes" "_sass")

for i in "${arr[@]}"
do
    cp -Tvr ../jekyll-theme-sundrycodes/"$i" ../rockheung.github.io/"$i"
done
cd -

