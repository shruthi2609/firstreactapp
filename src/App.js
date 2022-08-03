import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import ImageSearch from './APICalls/ImageSearch'
import BlogSearch from "./APICalls/BlogSearch"
function App(){
  return(
    <div>
      <BrowserRouter>
      <nav>
      <Link to='/image'>Image Search</Link>
      <Link to='/search'>Contact Manager</Link>
      </nav>
      <Routes>
        <Route path='/image' element={<ImageSearch></ImageSearch>}></Route>
        <Route path='/search' element={<BlogSearch></BlogSearch>}></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}
export default App;