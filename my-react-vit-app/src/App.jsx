import { Component } from "react";
import Navbar from "./Component/Navbar";
import Aside from "./Component/Aside";
import MainBody from "./Component/MainBody";
import Footer from "./Component/Footer";
import Count from "./Day7/Count";
import JSXIntro from "./Day8/JSXIntro/JSXIntro";
import Day9 from './Day9/Day9';
import Day10 from "./Day10/Day10";
import Day11 from "./Day11/Day11";
import Day12 from "./Day12/Day12";



// class App extends Component{
//   constructor()
//   {
//     super();
//   }
//   render(){
//     return(
//       <div>
//         <Navbar/>
//         <div id ="mainBody">
//           <Aside/>
//           <MainBody/>
//           </div>
//         <Footer />  
//       </div>
//   )
//   }
// }
// export default App;



// class Day7 extends Component{
//   constructor(){
//     super();
    
//   }
//   render(){
//     return(
//      <Count/>
//     )
//   }
// }

// // export default Day7;

// class Day8 extends Component{
//   constructor(){
//     super();
    
//   }
//   render(){
//     return(
//      <JSXIntro/>
//     )
//   }
// }

// export default Day8;




class App extends Component{
  constructor()
  {
    super();
  }
  render(){
    return(
      //Day 8
      // <div>
      //  <JSXIntro/>
      // </div>
      
      //Day 9
      // <div>
      //    <Day9 />
      // </div>
     

      // Day 10
      // <div>
      //   <Day10/>
      // </div>
      
      // // Day 11
      // <div>
      //   <Day11/>
      // </div>

      
      // Day 12
      <div>
        <Day12/>
      </div>
      
  )
  }
}
export default App;
