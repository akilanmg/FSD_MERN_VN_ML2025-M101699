import "./App.css";
import Layout from "./layout/Layout";
function App() {
    
const fetchData = async () => {
  try {
    // Because of the proxy, we don't need "http://localhost:5000"
    const response = await fetch('/api/doctors'); 
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error connecting to backend:", error);
  }
};
return <Layout/>
}

export default App;
