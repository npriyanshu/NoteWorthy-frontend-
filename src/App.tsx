import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { lazy,Suspense } from "react";
const Home = lazy(()=>(import ('./pages/Home')));
const Slider = lazy(()=>(import ('./pages/Slider')));

function App() {

  return (
    <>

    <Router>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/slide" element={<Slider/>} />

        </Routes>
      </Suspense>
    </Router>
    
     
    </>
  )
}

export default App
