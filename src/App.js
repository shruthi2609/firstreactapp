import ElectronicProducts from "./WOHOC/ElectronicProducts"
import productDetails from './WOHOC/edata'
import clothing from './WOHOC/cdata'
import ClothingProducts from "./WOHOC/ClothingProducts"
function App(){
    return(
        <div>
           {/* <ElectronicProducts data={productDetails}></ElectronicProducts>*/}
           <ClothingProducts data={clothing}></ClothingProducts>
        </div>
    )
}
export default App