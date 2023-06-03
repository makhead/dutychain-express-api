import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';





function App() {

  const readRange = () =>{
    let url = "/readrange";
    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else{
        console.log(response);
        return response.json();
      }
        
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
    });
  }

  const createAsset = () =>{
    let url = "/create";
    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        ID: "4",
        Color: "Blue",
        Size: 5,
        Owner: 'Tom',
        AppraisedValue: 300
      })
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else{
        console.log(response);
        return response.json();
      }
        
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
    });
  }

  const readAsset = () =>{
    let url = "/read";
    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        ID:"1"
      })
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else{
        console.log(response);
        return response.json();
      }
        
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
    });
  }

  const transferAsset = () =>{
    let url = "/transfer";
    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        ID:"asset1",
        newOwner:"David"
      })
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else{
        console.log(response);
        return response.json();
      }
        
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
    });
  }


  const execQuery = () =>{
    let url = "/execquery";
    // let queryString = {};
		// queryString.selector = {};
		// queryString.selector.docType = 'asset';
		// queryString.selector.owner = 'Tom';
    // queryString.use_index = ["/indexOwnerDoc", "indexOwner"];
    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
    body: JSON.stringify({
      selector:{
        docType:'asset',
        owner:'Tom'
      },
      use_index:["/indexOwnerDoc", "indexOwner"]
    })
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else{
        console.log(response);
        return response.json();
      }
        
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
    });
  }

  const execQueryWithPage = () =>{
    let url = "/execquerywithpage";

    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
    body: JSON.stringify({
      query: {
        selector:{
          docType:'asset',
          owner:'Tom'
        },
        use_index:["/indexOwnerDoc", "indexOwner"]
      },
      pageSize: "3",
      bookmark: undefined
      })
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else{
        console.log(response);
        return response.json();
      }
        
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
    });
  }

  const handleReadAllAsset = () => {
    readRange();
  }

  const handleCreateAsset = () => {
    createAsset();
  }

  const handleReadAsset = () => {
    readAsset();
  }

  const handleTransferAsset = () => {
    transferAsset();
  }

  const handleQueryAsset = () => {
    execQuery();
  }

  const handleQueryWithPage = () => {
    execQueryWithPage();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" onClick={handleReadAllAsset}> read all asset </Button>
        <Button variant="contained" onClick={handleCreateAsset}> create asset </Button>
        <Button variant="contained" onClick={handleReadAsset}> read asset </Button>
        <Button variant="contained" onClick={handleTransferAsset}> transfer asset </Button>
        <Button variant="contained" onClick={handleQueryAsset}> exec query </Button>
        <Button variant="contained" onClick={handleQueryWithPage}> exec query with page</Button>
      </header>
      
    </div>
  );
}

export default App;
