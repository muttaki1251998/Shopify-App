import { Router, Route }  from 'react-router-dom';
import createBrowserHistory from '../history';
import ShowProductList from './components/ShowProductList';

const App = () => {
  return(
    <div>
      <Router history={createBrowserHistory}>
        <div>
          <Route path="/" exact component={ShowProductList} />
        </div>
      </Router>
    </div>
  );
}

export default App;