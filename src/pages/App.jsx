import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="flex flex-col m-10">
        <h1 className="font-semibold mb-16 text-5xl">Examples with Redux</h1>
        <div>
          <ul className="flex gap-8">
            <li>
              <div className="card w-96 h-52 bg-base-100 border-2">
                <div className="card-body">
                  <h2 className="card-title">Counter</h2>
                  <p>A Increment/decrement demo with redux.</p>
                  <div className="card-actions justify-end">
                    <Link to="/counter">
                      <button className="btn btn-primary">Try Out</button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 h-52 bg-base-100 border-2">
                <div className="card-body">
                  <h2 className="card-title">Users</h2>
                  <p>
                    A fetch users list demo with a details component on user
                    click.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/users">
                      <button className="btn btn-primary">Try Out</button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
