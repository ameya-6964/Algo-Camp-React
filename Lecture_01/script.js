const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { className: "child" }, "Welcome To React")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
