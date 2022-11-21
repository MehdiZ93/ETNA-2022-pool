#!/bin/bash

result=$(curl -s $1)
lng=$(echo $result | cut -b 53-60)
lat=$(echo $result | cut -b 77-85)
dist=$(echo $result | cut -b 102-107)
speed=$(echo $result | cut -b 121-124)
time=`echo "scale=8;$dist/($speed/1000)" | bc`
day=`echo "$time/60/60/24" | bc`
hour=`echo "($time/60/60) - ($day*24)" | bc`
minute=`echo "($time/60) - ($day*24+$hour)*60" | bc`
second=`echo "scale=0;($time - ((($day*24+$hour)*60+$minute)*60))/1" | bc`

display="The Angry Moon is located at lat: $lat, lng: $lng.\nIt is ${dist}km away from us, but it is going to fall at a speed of ${speed}m/s.\nWe have exactly $day days, $hour hours, $minute minutes and $second seconds to react."
echo -e $display
