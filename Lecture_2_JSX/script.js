const App = () => {
  return (
    <div id="parent">
      <h1 className="child">Welcome To React</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
