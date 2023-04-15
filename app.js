const root = ReactDOM.createRoot(document.getElementById("root"));
   
const h1 = React.createElement("h1", {
  id: "heading_1"
}, "Welcome page!!!");

const h2 = React.createElement("h2", {
  id: "heading_2"
}, "home page");


const Row = React.createElement("Row", {
  className: "row"
}, h1, h2);

const container = React.createElement("div", {
  id:"container"
}, Row);

// root.render(container);


// console.log(this);





let obj ={
  fn: function() {
    console.log(this);
  },
  // this obj

  fn2 : () =>{
    console.log(this);
  }
  // window
}

// this keyword refer to its parent in arrow funcction it will point to the widow object


// obj.fn2();


function x(){
  console.log(this);

  function y(){
    console.log(this);
  }

  y();
}



x();























// numbers = [2,7,11,15], target = 9


// var twoSum = function(num, target) {
//   let reuslt = []
//    for(let item of num){
//       if(item + (item + 1) == target){
//         reuslt.push(item)

//       }
//    }

//    console.log(reuslt);
// }

// twoSum([2,7,11,15], 9);