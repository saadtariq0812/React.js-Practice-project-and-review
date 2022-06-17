import Header from './components/Header'
import Tasks from "./components/Tasks"
import { useState } from "react";
/*
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <h1>Hello from react</h1>
    </header>
    </div>
    );
  }
  */
 
 /*
 function App() {
   
   const x = true;
   const name = "saad";
   
   return (
     <div className="App">
     <header className="App-header">
        <h1>Hello from react</h1>
        <p>{x ? name : 'No name'}</p>
        </header>
        </div>
        );
      }
      
      */
     
     
     /*
     function App() {
       return (
         <div className="App">
         <Header />
         </div>
         );
        }
        */
       
       
       /*
       function App() {
         return (
           <div className="App">
           <Header title='dingdong'/>
           </div>
           );
          }
          */

         

          
         
         
         function App() {

          const [tasks, setTasks] = useState( [
            {
              id : 1,
              text : "saad's appointment",
              day : "Dec 8th, 2:30 pm",
              reminder : true
    
            },
            {
              id : 12,
              text : "maaz's appointment",
              day : "Apr 29th, 4:30 pm",
              reminder : true
            }
          ])


           return (
             <div className="container">
                <Header title = 'Anihelp'/>
                <Tasks tasks = {tasks}/>
     
              </div>
  );
}

export default App;


//PropTypes are rules to tell what data type a param/prop should be
//1: import proptypes
//2: set componentName.proptype = {
//  title : propTypes.string
//}