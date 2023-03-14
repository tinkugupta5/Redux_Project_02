import "./App.css";
import Layout from "./Components/Layout";
function App() {
  return (
    <div className="container">
      <h1>This is app</h1>
      <Layout>
        <h1>I am talking from layout</h1>
      </Layout>
    </div>
  );
}

export default App;
