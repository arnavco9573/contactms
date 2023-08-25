import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Contact from "./pages/Contact";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import LineGraph from "./components/LineGraph";
import Map from "./components/Map";



const App = () => {
  return (<div>
    <div className="bg-slate-900">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/create" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
  
      <Route path="/maps" element={<Map />} />
      <Route path="/charts" element={<LineGraph />} />
    </Routes>
  </div>)
};

export default App;
