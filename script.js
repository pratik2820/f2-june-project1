/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(employees){
        if(employees.profession==="developer"){
            console.log(employees);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(employees){
        if(employees.profession==="developer"){
            console.log(employees);
        }
    })

  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee =  {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    // Write your code here, just console.log
    // let removeEmployee = arr.filter((employees)=>employees.profession==="admin")
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i].profession==="admin"){
            arr.splice(i,1)
        }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray = [
        { id: 4, name: "Ross", age: "21", profession: "admin" },
        { id: 5, name: "Chandler", age: "20", profession: "developer" },
        { id: 6, name: "Joey", age: "18", profession: "developer" },
      ];
      let concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }