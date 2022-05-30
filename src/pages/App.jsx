import Footer from "../components/shared/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Paths from "../utils/paths";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-col m-10 flex-grow">
          <h1 className="font-semibold mb-16 text-5xl">Demos</h1>
          <div className="">
            <ul className="flex gap-8 flex-wrap justify-center lg:justify-start">
              {Paths.map((path, index) => (
                <li key={index}>
                  <div className="card  w-full lg:w-96 h-52 bg-base-100 border-2">
                    <div className="card-body">
                      <h2 className="card-title">{path.title}</h2>
                      <p>{path.description}</p>
                      <div className="card-actions justify-end">
                        <Link to={"/" + path.path}>
                          <button className="btn btn-primary">Try Out</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
