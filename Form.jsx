import { useState } from "react"

const Form=() =>{
   const [formData,setFormData]= useState({
    name:'',
    age:'',
    Country:'',
    Phonenumber:''

   }
   ) 
   const handleSubmit=()=>{
      alert((FormData))
   }
   console.log(FormData)

return(
   <div>
      <h1>Edit Information</h1>
      <div>
         <input
         type="text"
         placeholder="name"
         value={formData.name}
         onChange={(e)=> setFormData({...formData,name: e.target.value})}>
         </input>
      </div>
        <div> 
      
          <input
            type="text"
            placeholder="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}>

         </input>
          
        </div>
        <div>
         <input
         type="text"
         placeholder="Country"
         value={formData.Country}
         onChange={(e)=> setFormData({...formData,Country: e.target.value})}>
         </input>
      </div>
      <div>
         <input
         type="text"
         placeholder="Phonenumber"
         value={formData.Phonenumber}
         onChange={(e)=> setFormData({...formData,Phonenumber: e.target.value})}>
         </input>
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>

   </div>

)
   }
   export default Form;