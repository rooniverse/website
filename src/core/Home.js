import HeroBanner from '../components/HeroBanner';
import BlogCard from '../components/BlogCard';
import SmallBlogCard from '../components/SmallBlogCard';
import blogCardCollection from '../data/BlogCardCollection';
import showerThoughtsCollection from '../data/ShowerThoughtsCollection';
import {Helmet} from "react-helmet";

function Home() {
  const blogCards = blogCardCollection.map((blogCard) =>
    <BlogCard key={blogCard.Id} blogCard={blogCard}/>
  );

  const showerThoughts = showerThoughtsCollection.map((showerThought) =>
    <SmallBlogCard key={showerThought.Id} showerThought={showerThought} />
  );

  return (
    <div className="Home">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Welcome to the Rooniverse, a tech blog</title>
          <link rel="canonical" href="https://www.rooniverse.co.uk" />
      </Helmet>
      <HeroBanner />
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            <div className="column is-three-quarters">
              <h3 className="title is-3">Latest Posts</h3>
                {blogCards}
            </div>
            <div className="column">
              <h3 className="title is-3">Shower Thoughts</h3>
              {showerThoughts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
