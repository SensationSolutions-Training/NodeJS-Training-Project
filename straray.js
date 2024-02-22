const obj={
    name:"luffy",
    age:"20",
    res:[
        {name:"guri",
        res:[
            {
                name:"guri",
                ship:'going marry',
            },
        ],
        },
],
};
delete obj.ship
console.log(obj.res[0].res[0].name)



