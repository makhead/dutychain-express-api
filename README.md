# dutychain-express-api

## install dependencies
install express api dependencies
```
cd web-app/servers
npm install
```

install react dependencies
```
cd web-app/client
npm install
```

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

## cleanup
shutdown hyperledger node
```
cd test-network
./network down
```

remove local wallet
```
cd web-app/servers
rm -rf wallet
```

## Express API
### Asset structure:
require a json, with an ID field and data field

ID requires to be unique

data field need to be a json structure

Example:
```
{
    ID: "4",
    data:{
        Color: "Blue",
        Size: 5,
        Owner: 'Tomoko',
        AppraisedValue: 300,
    }
}
```


### Create Asset
send a post request to localhost:4000/create
with a json with ID field and data field in the post body

### Read All Assets
send a post request to localhost:4000/readall

### Create Asset
send a post request to localhost:4000/read
with a json with ID field in the post body