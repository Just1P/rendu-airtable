import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientForm from "../src/components/ClientForm/ClientForm";
import AdminPage from "../src/components/AdminPage/AdminPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientForm />} />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
