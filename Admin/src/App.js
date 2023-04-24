import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes/index";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((item, index) => {
          let Page = item.component;
          let Layout = Fragment;
          if (item.layout) {
            Layout = item.layout
          }
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
