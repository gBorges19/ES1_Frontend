import './App.css';
import GlobalStyle from './assets/styles/global';
import {BrowserRouter} from 'react-router-dom';
import Rotas from './routes';

function App() {
  return (
    
      <BrowserRouter>
          <Rotas/>
          <GlobalStyle />
      </BrowserRouter>

  );
}

export default App;
