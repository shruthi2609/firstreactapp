import {useNavigate} from 'react-router-dom'
import LoginPageClass from './LoginPageClass'
function LoginFunctional(){
const navigate=useNavigate()
return(
 <LoginPageClass navigate={navigate}></LoginPageClass>
)
}
export default LoginFunctional