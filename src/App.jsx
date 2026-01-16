import './App.css';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import CssOutput from './components/CssOutput';


function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Flexbox Playground</h1>
      </header>

      <main className="main">
        <Sidebar />
        <Preview />
        <CssOutput />
      </main>
    </div>
  );
}


export default App;

