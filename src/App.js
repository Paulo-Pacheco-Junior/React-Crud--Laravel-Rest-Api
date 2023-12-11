import Home from './components/Home';
import CrudIndex from './components/crud/CrudIndex';
import CrudCreate from './components/crud/CrudCreate';
import CrudShow from './components/crud/CrudShow';
import CrudEdit from './components/crud/CrudEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-slate-200 py-16">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<CrudIndex />} />
          <Route path="/products/create" element={<CrudCreate />} />
          <Route path="/products/:id" element={<CrudShow />} />
          <Route path="/products/edit/:id" element={<CrudEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;