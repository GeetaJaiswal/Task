import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import {Box} from '@material-ui/core';

const App = () => {
  return (
    <>
    <Navbar/>
    <Box style={{backgroundColor: "white"}}>
      <Home/>
    </Box>
    </>
  );
}

export default App;
