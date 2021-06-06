import HeroBanner from '../components/HeroBanner';
import BlogCard from '../components/BlogCard';
import SmallBlogCard from '../components/SmallBlogCard';
import blogCardCollection from '../data/BlogCardCollection';
import showerThoughtsCollection from '../data/ShowerThoughtsCollection';
import SiteData from '../data/SiteData';
import {Helmet} from "react-helmet-async";

function Home() {
  const siteDataState = SiteData;
  const blogCardCollectionState = blogCardCollection;
  const showerThoughtsCollectionState = showerThoughtsCollection;

  const blogCardElements = blogCardCollectionState.map((blogCard) =>
    <BlogCard key={blogCard.Id} blogCard={blogCard}/>
  );

  const showerThoughtElements = showerThoughtsCollectionState.map((showerThought) =>
    <SmallBlogCard key={showerThought.Id} showerThought={showerThought} />
  );

  return (
    <div className="Home">
      <Helmet>
          <meta charSet="utf-8" />
          <title>{siteDataState.IntroText}</title>
          <link rel="canonical" href={siteDataState.WebsiteURL} />
          <meta
            name="description"
            content={siteDataState.SiteDesctiption}
          />
      </Helmet>
      <HeroBanner />
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            <div className="column is-three-quarters">
              <h3 className="title is-3">Latest Posts</h3>
                {blogCardElements}
            </div>
            <div className="column">
              <h3 className="title is-3">Shower Thoughts</h3>
              {showerThoughtElements}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
