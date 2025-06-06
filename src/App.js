import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import AlterationOfPersonData from './components/FormAlterationOfPersonData';
import PrivateRoute from './hooks/PrivateRouters';
import { Tools } from './components/main/Tools';
import { FindAllUserPerDepartment } from './components/main/FindAllUserPerDepartment';
function App() {
  return (
    <Router basename='front-end-GerenciaRH'>
      <div>
      <Header />
          <Routes>
            <Route path="/home" element={"Home"} />

            <Route path="/profile" element={
              <PrivateRoute>
                <AlterationOfPersonData />
              </PrivateRoute>
        } />
            <Route path="/tools" element={
              <PrivateRoute>
                <Tools />
              </PrivateRoute>
            } />
            <Route path="/department" element={
              <PrivateRoute>
                <FindAllUserPerDepartment />
              </PrivateRoute>
            } />
          </Routes>
          
      </div>
    </Router>
  );
}

export default App;


