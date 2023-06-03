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
./network.sh deployCC -ccn basic -ccp ../chaincode/basic/ -ccl javascript
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

---

# Use CouchDB

## Create Index
```
cd chaincode/ledger
mkdir -p META-INF/statedb/couchdb/indexes
cd META-INF/statedb/couchdb/indexes
touch index1.json
add the following index information in the index1.json file

{
    "index": {
            "fields":["docType","owner"]
    },
    "ddoc":"indexOwnerDoc",
    "name":"indexOwner",
    "type":"json"
}
```

## Create Channel
```
cd test-network
./network.sh up createChannel -c mychannel -s couchdb -ca
```


## Deploy Smart Contract
```
./network.sh deployCC -ccn ledger -ccp ../chaincode/ledger/ -ccl javascript -ccep "OR('Org1MSP.peer','Org2MSP.peer')"
```

## View Peer Log
```
docker logs peer0.org1.example.com  2>&1 | grep "CouchDB index"
```

## Start Express API Server
```
cd web-app-couchdb/servers-couchdb
npm start
```

## Start React
```
cd web-app-couchdb/client-couchdb
node app.js
```

## Cleanup
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
### Create Asset
send a post request to localhost:4000/create
with a json with ID, Color, Size, Owner, AppraisedValue fields

### Read Assets in given range
send a post request to localhost:4000/readrange
return range [left, right)
if the left and right field is not given, return all range

### read Asset
send a post request to localhost:4000/read
with a json with ID field in the post body

### transfer Asset
send a post request to localhost:4000/transfer
with a json with ID and newOwner field in the post body

### execute query
send a post request to localhost:4000/execQuery
with a json query in the post body

Query Example
```
{
    selector:{
        docType:'asset',
        owner:'Tom'
      },
    use_index:["/indexOwnerDoc", "indexOwner"]
}

```

### execute query with page
send a post request to localhost:4000/execQuery
with a json contains query, pageSize, bookmark fields in the post body
if bookmark is not given, the first page will be returned

Query Example
```
{
    query: {
        selector:{
          docType:'asset',
          owner:'Tom'
        },
        use_index:["/indexOwnerDoc", "indexOwner"]
    },
    pageSize: "3",
    bookmark: undefined
}

```