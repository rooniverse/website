import BlogHeroBanner from '../components/BlogHeroBanner';
import blogCardCollection from '../data/BlogCardCollection';
import {Helmet} from "react-helmet";

function ExampleBlog() {
    const blogData = blogCardCollection.find(blog => blog.Id === 0);
    const tagItems = blogData.Tags.map((tag) =>
        <span key={tag} className="tag">
            {tag}
        </span>
    );

    return (
        <div className="ExampleBlog">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{blogData.BlogTitle}</title>
                <meta name="description" content={blogData.BlogDesctiption} />
            </Helmet>
            <BlogHeroBanner imageName={blogData.BlogImageName}/>
            <div className="container blog-post">
                <div className="section">
                    <div className="column is-10 is-offset-1">
                        <div className="card article">
                            <div className="card-content">
                                <div className="section">
                                    <h1 className="title article-title has-text-centered">{blogData.BlogTitle}</h1>
                                    <p className="subtitle is-6">
                                        <time dateTime={blogData.BlogDate} pubdate={blogData.BlogDate}>{blogData.BlogDateText}</time>
                                    </p>
                                    <div className="tags">
                                        {tagItems}
                                    </div>
                                </div>
                                <div className="content article-body">
                                    
                                </div>
                            </div>
                        </div>
                
                        {/* Advert */}
                        <div className="section">
                            <section className="hero is-info is-bold is-small promo-block">
                                <div className="hero-body">
                                    <div className="container">
                                        <aside>
                                            Advert
                                        </aside>
                                    </div>
                                </div>
                            </section>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ExampleBlog;
  