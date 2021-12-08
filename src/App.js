import './css/App.css';
import ChartC from "./components/Chart";
import './css/App.css';
import Mater from "./components/Matter";
import Sliders from "./components/Sliders";


function App() {

  return (
    <div className="App">
        <ChartC />
        <Mater className="mater" />
        <Sliders />
    </div>


  );

}

export default App;
