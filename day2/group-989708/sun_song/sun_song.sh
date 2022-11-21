#!/bin/bash

result=$(curl -s https://api.sunrise-sunset.org/json\?lat\=48.813875\&lng\=2.392521)
sunrise=$(echo $result | cut -b 24-33)
sunset=$(echo $result | cut -b 46-55)
display="Sunrise is expected at $sunrise and sunset at $sunset."
echo $display
