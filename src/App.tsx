import {
  BrowserRouter,
  Routes,
  Route,
  // useNavigate,
  // useSearchParams,
  // useParams,
} from "react-router-dom";
import Home from "./pages/Home";
// import CreateTodo from "./pages/CreateTodo";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import WithMenuBar from "./components/layout/WithMenuBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithMenuBar />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
