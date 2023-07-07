import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing component</h1>} />
          <Route path="/add" element={<h1>Add Product component</h1>} />
          <Route path="/update" element={<h1>update Product component</h1>} />
          <Route path="/logout" element={<h1>logout Product component</h1>} />
          <Route path="/profile" element={<h1>profile Product component</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
