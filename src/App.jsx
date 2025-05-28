import { useContext } from "react";
import ChatSection from "./components/ChatSection/ChatSection";
import Sepration from "./components/Sepration/Sepration";
import Sidebar from "./components/Sidebar/Sidebar";
import { dataContext } from "./Context/UserContext";

function App() {  
  return (
  <>
    <Sidebar />
    <Sepration/>
    <ChatSection/>
  </>
  )
}

export default App;
