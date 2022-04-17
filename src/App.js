import './App.css';
import Home from './componentes/home';
import Results from './componentes/results';
import useFunctionsList from './hooks/useFunctions'

function App() {

  const { modalOpen } = useFunctionsList();

  return (
    <div className='main'>
      <div className='pesquisa'>
        <Home />
      </div>
      <div className='resultados'>
        {modalOpen && <Results />}
      </div>
    </div>
  );
}

export default App;
