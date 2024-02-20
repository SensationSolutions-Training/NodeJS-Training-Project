const Mapping = () =>{
    const dummyData=[
        {id:1,name:"Rahul",age:12},
        {id:2,name:"Ankit",age:13},
        {id:3,name:"Kd",age:26},
        {id:4,name:"Gagan",age:13}
    ];
    return(
        <div>
            {
                dummyData.map((item) => {
                   return <li>{item.name}</li>
                })
            }
        </div>

    )
}
export default Mapping