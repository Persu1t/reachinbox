
import { useEffect } from 'react';
import AllRoutes from './Allroutes/AllRoutes';
import './App.css';
import { useNavigate } from 'react-router';


function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    let token = localStorage.getItem('token');
    if(token){
      navigate("https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-frontend.netlify.app/desktop")
    }
    else{
      navigate("/")
    }
  },[navigate])
  return (
    <div className="App">
      {/* <h1>Hello world .....</h1> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
