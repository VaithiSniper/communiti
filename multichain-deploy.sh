#!/bin/bash

# color constants
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# main network
mainNetwork='optimism'
# list of networks
listOfNetworks=("base" "mode" "mumbai" "gnosis")

# remove file if it already exists
if [ -e 'contractAddresses.txt' ]
then
  printf "${RED}Removing ${NC}contractAddresses.txt\n"
  rm contractAddresses.txt
fi

# remove logs if they already exist
printf "${RED}Removing ${NC}logs\n"
for i in "${listOfNetworks[@]}"; do
  if [ -e "logs/${i}.log" ]
  then
    rm "logs/${i}.log"
  fi
done

# create file
printf "${GREEN}Creating ${NC}contractAddresses.txt\n"
touch contractAddresses.txt

# calling deploy script for each subcontract
printf "${GREEN}Deploying ${NC}subcontracts 🚀\n"
for i in "${listOfNetworks[@]}"; do
  printf "${i}:" >> contractAddresses.txt  
  npx hardhat run scripts/deploy.subContracts.js --network "$i" > /dev/null 2> "logs/${i}.log"
  if [ $? = 0 ]
  then
    echo "$i ✅"
  else
    echo "$i ❌"
  fi
done

# calling deploy script for maincontract with these addresses
printf "${GREEN}Deploying ${NC}maincontract 🚀\n"
npx hardhat run scripts/deploy.NetworkMapper.js --network "$mainNetwork" 2> "logs/$mainNetwork.log"
if [ $? = 0 ]
then
  echo "Main contract on optimism ✅"
else
  echo "Main contract on mumbai ❌"
fi