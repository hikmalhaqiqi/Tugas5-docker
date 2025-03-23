import {BrowserRouter, Routes, Route} from "react-router-dom"
import Messagelist from "./component/Messagelist";
import AddMessage from "./component/AddMessage";
import EditMessage from "./component/EditMessage";

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path ="/" element={<Messagelist/>}/>
      <Route path ="add" element={<AddMessage/>}/>
      <Route path ="edit/:id" element={<EditMessage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
