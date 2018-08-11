#!/bin/bash

# usage ./publish_drafts.sh _drafts/*/*
 echo $* | sed -E 's/\// /g'| sed -E 's/md /md\n/g'| awk '{print $1 "/" $2 "/"$3 " _posts/" $2 "-" $3}' | xargs -n 2 cp