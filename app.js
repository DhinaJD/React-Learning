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

root.render(container);