import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from '../../authenticationContext/context';
import LoginUser1 from "./pages/LoginUser";
import Register from "./pages/Register";
import TodoPage from './pages/todo';
import route from "./route";

function AppContent() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/todos" element={<TodoPage />} />
      </Route>
      <Route path="*" element={<Navigate to={token ? "/todos" : "/login"} />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;