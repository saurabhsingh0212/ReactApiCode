import './App.css';
import { useEffect } from "react";
export default function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(`https://api.census.gov/data/2010/dec/plnat/groups/P1.json`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);
 
  return <div className="App">App</div>;
 }
