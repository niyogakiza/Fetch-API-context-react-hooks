import React, {useContext} from "react";
import ReactDOM from "react-dom";
import RecipeList from './components/RecipeList'
import { RecipeContext } from './context'
import { RecipeProvider } from './context'

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const appContext = useContext(RecipeContext)
  const { loading, search } = appContext
  return (
    <div className="App">
      { loading ? <h1 className='text-center'>...fetching {search} recipe</h1>: <RecipeList/>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RecipeProvider><App /></RecipeProvider>, rootElement);
