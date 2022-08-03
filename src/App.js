import BlogSearch from "./APICalls/BlogSearch";
import CRUDOps from "./APICalls/CRUDOps";
import LCMAPICall from "./APICalls/LCMAPICall";
import SimpleAPICall from "./APICalls/SimpleAPICall";



function App(){
  return(
    <div>
{/*<SimpleAPICall></SimpleAPICall>
<LCMAPICall></LCMAPICall>
<BlogSearch></BlogSearch>*/}
<CRUDOps></CRUDOps>

 
    </div>
  )
}
export default App;