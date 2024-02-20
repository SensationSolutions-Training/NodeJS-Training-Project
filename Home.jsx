 import { useEffect, useState } from "react"
import image from "../image/tree-736885_1280.jpg"
import { useNavigate} from "react-router-dom"
 const Home = () => {
   const[state , setState, name ,setName] = useState('hello');
   console.log(state);

   
   //useEffect(()=>{
    //alert("You are welcome");
   //},[state]);

   const navigation = useNavigate()
   const handleButtonClick = () => {
    navigation("/about ");
   };

  

  return(

        <div>
            <h1 style={{color:"green"}}>Welcome to {'Tree World'} {state}</h1>
        {/* <img  className="bigg" src={image} alt="jj"></img> */}
         <button onClick={handleButtonClick}>Next page</button>
        </div>
        
    );

}
export default Home