# dutychain-express-api

## Run the application

Start hyperledger network
```
cd test-network
./network.sh up createChannel -c mychannel -ca
```

Deploy chaincode (smart contract)
```
./network.sh deployCC -ccn basic -ccp ../chaincode/ -ccl javascript
```

Start express api server
* the express server listen on port 4000
```
cd web-app/server
node app.js
```

Start react client servers
* react application listens on port 3000
```
cd web-app/client
npm start
```
