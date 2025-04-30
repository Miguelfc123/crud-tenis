import React, { useState, useEffect } from "react";
import TennisForm from "./components/TennisForm";
import TennisTable from "./components/TennisTable";
import { getTennis, saveTennis } from "./services/storage";

function App() {
  const [tennisList, setTennisList] = useState([]);

  useEffect(() => {
    const data = getTennis();
    setTennisList(data);
  }, []);

  const handleSave = (newItem) => {
    const updatedList = [...tennisList];
    const index = updatedList.findIndex((item) => item.id === newItem.id);
    if (index >= 0) {
      updatedList[index] = newItem;
    } else {
      updatedList.push(newItem);
    }
    setTennisList(updatedList);
    saveTennis(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = tennisList.filter((item) => item.id !== id);
    setTennisList(updatedList);
    saveTennis(updatedList);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Gerenciador de Tênis</h1>
      <TennisForm onSave={handleSave} />
      <TennisTable
        list={tennisList}
        onDelete={handleDelete}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
