
import { useNavigate } from "react-router-dom"
const Help = () => {
     const navigation = useNavigate()
     const handleButtonClick = () => {
        navigation("/blog")
     }

    const name = {
        firstName: 'Anil',
        age: '44',
        state: 'punjab'

    }
    
    
    // const[FormData ,]

    return (
        <div>
          
          {/* This is Promp */}

             <h3 >This is help page{name.firstName} </h3> 
            {/* <About data = {name.age}></About> */}
            
            <button onClick={handleButtonClick}>Next page</button>
        </div>
    )
}
export default Help