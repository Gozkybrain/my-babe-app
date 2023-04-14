import './css/App.css';
// import MyForm from './form/form.js';
import Preloader from './loader/preloader';


function App() {
  return (
      
      <div className="App">
      
      <header className="App-header">
      {/* <MyForm /> */}
      {/* THIS WILL DISPLAY A PRELOADER FOR 4 SECONDS */}
      <Preloader myForm={true} result={false} />

      </header>
    </div>
    
  );
}

export default App;
