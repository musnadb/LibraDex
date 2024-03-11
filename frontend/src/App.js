import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter  /* keeps the UI in sync with the url*/>

        <Navbar  /* placed outside of pages to be present in all *//>

        <div className="pages"  /* contains page components*/>     
          <Routes>
            <Route
              path="/"              // Default path
              element={<Home />}    // home component that is rendered in the root path
            />
          </Routes>
          
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
