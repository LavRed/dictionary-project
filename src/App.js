import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          React Dictionary App 🍇
        </header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer>
          Coded by {" "}
          <a href="https://github.com/LavRed/dictionary-project">
            LaVisha R
          </a> 
        </footer>
      </div>
    </div>
  );
}

export default App;
