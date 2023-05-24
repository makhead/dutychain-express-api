import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';





function App() {

  const createAsset = () =>{
    let url = "/";
    fetch(url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username:"Tom",
        data:"123"
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

  const handleCreateAsset = () => {
    createAsset();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" onClick={handleCreateAsset}> create asset </Button>
      </header>
      
    </div>
  );
}

export default App;
