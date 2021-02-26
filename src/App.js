import React, { useEffect, useState } from "react";
import './App.css';
import Hero from "./components/Hero";
import Search from "./components/Search";
import Table from "./components/Table";
import employees from "./utils/employees.json"

function App() {

  const [emps, setEmps] = useState(employees);
  const [getSearch, setSearch] = useState("");

  useEffect(() => {
    setEmps(employees);
  });

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }


  return (
    <div>
      <Hero />
      <Search 
        handleInputChange={handleInputChange}
        // handleFormSubmit={handleFormSubmit}
        results={getSearch}
      />
      <Table 
        employees={emps}
      />
    </div>
  );
}

export default App;
