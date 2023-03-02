// const myobj = {
//     id : 100,
//     name : "neraj",
//     profession : "student",
//     work : function(){
//         console.log('studiesss')
//     }
// }

// myobj.work();


const employee = [
    emp1 = {
        id : 1,
        name : 'neeraj',
        level : 1 
    },
    emp2 = {
        id : 6,
        name : 'emp2',
        level : 3
    },
    emp3 = {
        id : 3,
        name : 'emp3',
        level : 3 
    },
    emp4 = {
        id : 4,
        name : 'emp4',
        level : 2
    },
    emp5 = {
        id : 5,
        name : 'emp5',
        level : 4
    },
    emp6 = {
        id : 2,
        name : 'emp6',
        level : 5
    }


]
addEmployee = function (id,name,level) {
    var c = 0 ;
    employee.forEach(function(ele){
        if(id == ele.id){
            console.log("alredy exits");
            c = 1;
        }
    });
    if(c==0)
    {

            var obj = {

                id : id ,
                name : name ,
                level : level
            }
            employee.push(obj);
    
    }
    
}

removeEmployee = function (id) {
    employee.forEach(function(ele , index )
    {
        if(id == ele.id)
        {
            employee.splice(index,1);
        }
    })
}
updateEmployee = function (id , level) {
    employee.forEach(function(ele )
    {
        if(id == ele.id)
        {
            ele.level = level;
        }
    })
}
filterEmployee = function () {
    
    
    function compare( a, b ) {
        if ( a.id < b.id ){
          return -1;
        }
        if ( a.id > b.id ){
          return 1;
        }
        return 0;
      }
      
      employee.sort( compare );
}


addEmployee(5 , 'priyanka' , 5);
console.log(employee);


removeEmployee(7);
console.log(employee);


updateEmployee(4,5);


filterEmployee();
