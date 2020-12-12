import './App.css';
// Importing all components
import Header from "./Components/Header"
import GetData from "./Components/GetData"
import Container from '@material-ui/core/Container';

function App() {
  return (
    <>
    <Header/>
    <Container maxWidth="md" style={{alignItems:"center"}}>
    <GetData/>
    </Container>
  </>
  );
}

export default App;
