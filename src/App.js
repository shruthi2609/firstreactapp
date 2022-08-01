
import clothing from './WOHOC/cdata'
import electronic from './WOHOC/edata'
import FilterProductsClothing from "./WHOC/FilterProductsClothing"
import FilterProductsElectronic from './WHOC/FilterProductsElectronic'

function App(){
    return(
        <div>
          <FilterProductsClothing data={clothing} storename="Clothing Store"></FilterProductsClothing>
          <FilterProductsClothing data={electronic} storename="Electronic Store"></FilterProductsClothing>
       {/*  <FilterProductsElectronic data={electronic} storename='Electronic Store'></FilterProductsElectronic>*/}
        </div>
    )
}
export default App