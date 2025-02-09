import { Provider } from "react-redux"
import { ArticleWithRedux } from "./article/ArticleWithRedux"
import {store} from "./article/store"
import { Overlay } from "./article/Overlay"


function App() {
  return (  
    <Provider store={store}>
        <Overlay/>
        <ArticleWithRedux/> 
    </Provider>

  )
}

export default App
