
import ProjectDemo from "./Components/ProjectDemo";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
 


function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#224e49b9] to-[#0b302bf8] ">
       <Routes>
        <Route path="/" element={<Home/>}></Route>
       
        <Route path="/cyberknightcycure" element={<ProjectDemo
         videopath='https://drive.google.com/file/d/1SHIDWMZbfrPbOyB9TA9Vsis4a_VHTLF6/preview'
         livelink='https://cyberknightcycure.netlify.app'
         techstack=' ReactJs , java EE SpringBoot '
         features='Encryption Tool || Authentication Apis || Blog About CyberCrime'
          purpose='lorem20Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit animi dignissimos quasi explicabo repellendus modi cupiditate accusantium! Similique aperiam, alias soluta veniam at earum doloremque nisi. Numquam, autem minima.' />}></Route>
      
      <Route path="/byteBond" element={<ProjectDemo
         videopath='https://drive.google.com/file/d/1SHIDWMZbfrPbOyB9TA9Vsis4a_VHTLF6/preview'
         livelink='https://bytebond.netlify.app'
         techstack=' ReactJs , java EE SpringBoot '
         features='Encryption Tool || Authentication Apis || Blog About CyberCrime'
          purpose='lorem20Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit animi dignissimos quasi explicabo repellendus modi cupiditate accusantium! Similique aperiam, alias soluta veniam at earum doloremque nisi. Numquam, autem minima.' />}></Route>
          
          <Route path="/cyber-guardians" element={<ProjectDemo
         videopath='https://drive.google.com/file/d/1SHIDWMZbfrPbOyB9TA9Vsis4a_VHTLF6/preview'
         livelink='https://cyber-guardians.netlify.app'
         techstack=' ReactJs , java EE SpringBoot '
         features='Encryption Tool || Authentication Apis || Blog About CyberCrime'
          purpose='lorem20Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit animi dignissimos quasi explicabo repellendus modi cupiditate accusantium! Similique aperiam, alias soluta veniam at earum doloremque nisi. Numquam, autem minima.' />}></Route>
          
       </Routes>
       

      

  
      
       
       
    </div>
  );
}

export default App;
