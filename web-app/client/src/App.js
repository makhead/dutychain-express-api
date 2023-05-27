import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';





function App() {

  const readAllAsset = () =>{
    let url = "/readall";
    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      }
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else{
        console.log(response);
        return response.json();
      }
        
    })
    .then((data)=>{
      console.log(data.data);
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
        ID: "1",
        Color: "Blue",
        Size: 5,
        Owner: 'Tomoko',
        AppraisedValue: 300,
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
      console.log(data.data);
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
      console.log(data.data);
    })
    .catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
    });
  }

  const handleReadAllAsset = () => {
    readAllAsset();
  }

  const handleCreateAsset = () => {
    createAsset();
  }

  const handleReadAsset = () => {
    readAsset();
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
      </header>
      
    </div>
  );
}

export default App;
