import HeroBanner from '../components/HeroBanner';
import BlogCard from '../components/BlogCard';
import SmallBlogCard from '../components/SmallBlogCard';
import blogCardCollection from '../data/BlogCardCollection';
import showerThoughtsCollection from '../data/ShowerThoughtsCollection';
import SiteData from '../data/SiteData';
import {Helmet} from "react-helmet-async";
import AdSense from 'react-adsense';

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
                {/* Advert */}
                <div className="section">
                  <section className="hero is-info is-bold is-small promo-block">
                      <div className="hero-body">
                          <div className="container">
                              <aside>
                              <AdSense.Google
                                  client={process.env.REACT_APP_GOOGLE_ADSENSE_CLIENT_ID}
                                  slot='7806394673'
                                  style={{ display: 'block' }}
                                  format='auto'
                                  responsive='true'
                                  layoutKey='-gw-1+2a-9x+5c'
                                  />
                              </aside>
                          </div>
                      </div>
                  </section>
              </div>
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
