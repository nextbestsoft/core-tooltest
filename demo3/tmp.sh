#!/bin/sh

echo "Type yes or no."

read answer

case $answer in
    yes)
        echo -e "tyeped yes.\n"
        ;;
    no)
        echo -e "tyeped no.\n"
        ;;
    *)
        echo -e "cannot understand $answer.\n"
        ;;
esac
