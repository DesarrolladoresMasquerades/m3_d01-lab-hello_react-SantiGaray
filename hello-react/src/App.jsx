
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import Navbar from './components/Navbar'
import SayHello from './components/SayHello'
import Features from './components/Features'
import RFeatures from './components/RFeatures'


import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <SayHello />
      </div>
      <Features>
        <RFeatures image={icon1} title={"Declarative"} description={"React makes it painless to create interactive UIs"} />
        <RFeatures image={icon2} title={"Components"} description={"Build encapsulated components that manage their state"} />
        <RFeatures image={icon3} title={"Single-way"} description={"A set of immutable values are passed to the component's"} />
        <RFeatures image={icon4} title={"JSX"} description={"Statically typed, designed to run  on modern browsers"} />
      </Features>
    </div>
  );
}
export default App;
