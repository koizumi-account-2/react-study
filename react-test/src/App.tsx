import { Provider } from "react-redux"
import { ArticleWithRedux } from "./article/ArticleWithRedux"
import {store} from "./article/store"


function App() {
  return (  
    <Provider store={store}>
      <ArticleWithRedux/>
    </Provider>

  )
}

export default App
