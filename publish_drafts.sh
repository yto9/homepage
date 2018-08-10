#!/bin/bash

# usage ./publish_drafts.sh _drafts/*/*
echo $1 | sed -E 's/\// /g'| awk '{print $1 "/" $2 "/"$3 " _posts/" $2 "-" $3}' | xargs -n 2 cp