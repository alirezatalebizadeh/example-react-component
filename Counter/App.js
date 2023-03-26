import React from 'react';
import './App.css';
import Counter from './Counter/Counter'



// export default class App extends Component {



//   render() {

//     return (
//       <div className='container'>
//         <Header {...this.state.allData[0]}></Header>
//         <Header {...this.state.allData[1]}></Header>
//         <Header {...this.state.allData[2]}></Header>
//       </div>
//     )
//   }
// }


export default function App() {

  return (
    <div className='container'>
      <Counter></Counter>
    </div >
  )
}
