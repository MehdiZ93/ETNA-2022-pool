#!/bin/bash

if [ -n "$1" -a -n "$2" ]
then
    count=0
    for (( i=$1+1; i < $2; i++ ))
    do
	if (( $i > 9 && $i < 100))
	then
	    if(( $i == 42 ))
	    then
		((count++))
	    fi
	    ((count++))
	fi
    done
    echo $count
fi

