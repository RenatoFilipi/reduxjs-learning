import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <h1>Examples</h1>
        <div>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
