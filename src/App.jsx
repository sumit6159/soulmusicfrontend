
import './App.css';
import AllRoutes from './components/routes/AllRoutes';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Sidebar from './components/layout/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <AllRoutes/>
      <Footer/>
    
    </div>
  );
}

export default App;
