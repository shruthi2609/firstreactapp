import clothing from './WOHOC/cdata'
import electronic from './WOHOC/edata'
import FilterProductsClothing from "./WHOC/FilterProductsClothing"
import FilterProductsElectronic from './WHOC/FilterProductsElectronic'
import SimpleComponent from './SimpleAppClassComponent/SimpleComponent'
function App(){
    return(
        <div>
        {/*   <FilterProductsClothing data={clothing} storename="Clothing Store"></FilterProductsClothing>
          <FilterProductsClothing data={electronic} storename="Electronic Store"></FilterProductsClothing>
        <FilterProductsElectronic data={electronic} storename='Electronic Store'></FilterProductsElectronic>*/}
        <SimpleComponent tech="React JS" projects={["indian bank","nielsen",'nestle']}></SimpleComponent>
        </div>
    )
}
export default App