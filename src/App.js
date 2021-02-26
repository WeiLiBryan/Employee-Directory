import './App.css';
import API from "./utils"
import Hero from "./components/Hero";
import Search from "./components/Search";
import Table from "./components/Table"

function App() {

  const [emps, setEmps] = useState([]);
  const [getSearch, setSearch] = useState("");

  userEffect(() => {loadEmps()}, []);

  loadEmps = () => {
    API.findUsers()
      .then(res => {
        setEmps(res);
      });
  } 


  return (
    <div>
      <Hero />
      <Search />
      <Table />
    </div>
  );
}

export default App;
