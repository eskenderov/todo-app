import { Route, Routes } from "react-router-dom";
import Posts from "views/Posts";
import Layout from "./Layout";
import NotFound from "./NotFound";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='posts' element={<Posts />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
};

export { App };
