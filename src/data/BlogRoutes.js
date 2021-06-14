import DtosEntitiesModels from '../blog-posts/DtosEntitiesModels';
import Home from "../core/Home";
import WithGATracker from '../components/WithGATracker';

const routes = [
  {
    path: "/dtos-vs-entities-vs-models",
    component: WithGATracker(DtosEntitiesModels)
  },
  {
    path: "/",
    component: WithGATracker(Home)
  }
];

export default routes;