
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeWebPage from './Pages/HomeWebPage';
import Flooring from './LinksToAllJobs/Flooring';
import HomeSceurity from './LinksToAllJobs/HomeSecurity';
import HouseKeeping from './LinksToAllJobs/HouseKeeping';
import InteriorDesign from './LinksToAllJobs/InteriorDesign';
import LandScaping from './LinksToAllJobs/Landscaping';
import Mounting from './LinksToAllJobs/Mounting';
import Plumbering from './LinksToAllJobs/Plumbering';
import PoolMaint from './LinksToAllJobs/PoolMaint';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
         <h1>Awaits Completion</h1>
         <div id="page-body">
            <Routes>
               <Route path="/" element={<HomeWebPage />}/>
               <Route path="/floor" element={<Flooring />}/>
               <Route path="/security" element={<HomeSceurity />}/>
               <Route path="/house" element={<HouseKeeping />}/>
               <Route path="/interior" element={<InteriorDesign />}/>
               <Route path="/land" element={<LandScaping />}/>
               <Route path="/Mounting" element={<Mounting />}/>
               <Route path="/Plumbering" element={<Plumbering />}/>
               <Route path="/Pool" element={<PoolMaint />}/>

            </Routes>
         </div>
      </div>
   </BrowserRouter>
  )
}

export default App;