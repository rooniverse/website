import DtosEntitiesModels from '../blog-posts/DtosEntitiesModels';
import Home from "../core/Home";

const routes = [
  {
    path: "/dtos-vs-entities-vs-models",
    component: DtosEntitiesModels
  },
  {
    path: "/",
    component: Home
  }
];

export default routes;