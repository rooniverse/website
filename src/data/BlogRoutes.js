import ExampleBlog from '../blog-posts/ExampleBlog';
import Home from "../core/Home";

const routes = [
  {
    path: "/example-post",
    component: ExampleBlog
  },
  {
    path: "/",
    component: Home,
    exact: true
  }
];

export default routes;