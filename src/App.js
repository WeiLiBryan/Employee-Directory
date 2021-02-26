import './App.css';
import API from "./utils"
import Hero from "./components/Hero";
import Search from "./components/Search";
import Table from "./components/Table"

function App() {

  const [emps, setEmps] = useState([]);
  const [getSearch, setSearch] = useState("");

  useEffect(() => {loadEmps()}, []);

  loadEmps = () => {
    API.findUsers()
      .then(res => {
        setEmps(res);
      });
  } 

  handleInputChange = (e) => {
    setSearch(e.target.value);
  }


  return (
    <div>
      <Hero />
      <Search 
        change={handleInputChange}
        val={getSearch}
      />
      <Table />
    </div>
  );
}

export default App;
