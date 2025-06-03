import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import AlterationOfPersonData from './components/FormAlterationOfPersonData';
import PrivateRoute from './hooks/PrivateRouters';
import { Tools } from './components/main/Tools';
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
            
          </Routes>
          
      </div>
    </Router>
  );
}

export default App;


