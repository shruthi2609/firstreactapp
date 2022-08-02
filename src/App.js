import ContactManagerComp from "./ContactManager.js/ContactManagerComp";
import contactDetails from "./ContactManager.js/contactDetails";
function App(){
  return(
    <div>
    <ContactManagerComp data={contactDetails}></ContactManagerComp>
    </div>
  )
}
export default App;