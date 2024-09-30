import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App() {
  const [displayUserForm, setDisplayUserForm] = useState(false);
  return (
    <main className="flex ">
      <Sidebar />
      <Content setDisplayUserForm={setDisplayUserForm} displayUserForm={displayUserForm}/>
    </main>
  );
}

export default App;
