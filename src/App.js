import './App.css';
// Importing all components
import Header from "./Components/Header"
import GetData from "./Components/GetData"
import Footer from "./Components/Footer"
import Container from '@material-ui/core/Container';

function App() {
  return (
    <>
    <Header/>
    <Container maxWidth="md" style={{alignItems:"center"}}>
    <GetData/>
    </Container>
    <Footer/>
  </>
  );
}

export default App;
