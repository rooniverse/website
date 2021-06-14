import BlogHeroBanner from '../components/BlogHeroBanner';
import blogCardCollection from '../data/BlogCardCollection';
import SiteData from '../data/SiteData';
import {Helmet} from "react-helmet-async";
import AdSense from 'react-adsense';

function DtosEntitiesModels() {
    const blogCardCollectionState = blogCardCollection;
    const SiteDataState = SiteData;

    const blogData = blogCardCollectionState.find(blog => blog.Id === 0);
    const tagItems = blogData.Tags.map((tag) =>
        <span key={tag} className="tag">
            {tag}
        </span>
    );
    const pageTitle = blogData.BlogTitle + " | " + SiteDataState.Name;
    const fullBlogURL = SiteDataState.WebsiteURL + blogData.BlogUrl;
    const imageUrl = SiteDataState.WebsiteURL + "/static/media/" + blogData.BlogImageName + ".jpg";

    return (
        <div className="DtosEntitiesModels">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
                <meta name="description" content={blogData.BlogDesctiption} />
                <meta name="robots" content="index, follow" />
	            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	            <link rel="canonical" href={fullBlogURL} />
                <meta property="og:locale" content="en_UK" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={blogData.BlogDesctiption} />
                <meta property="og:url" content={fullBlogURL} />
                <meta property="og:site_name" content={SiteDataState.Name} />
                <meta property="article:publisher" content={SiteDataState.WebsiteURL} />
                <meta property="article:published_time" content={blogData.BlogDate} />
                <meta property="article:modified_time" content={blogData.BlogDate} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:creator" content={SiteDataState.TwitterHandle} />
                <meta name="twitter:site" content={SiteDataState.TwitterHandle} />
            </Helmet>
            <BlogHeroBanner imageName={blogData.BlogImageName}/>
            <div className="container blog-post">
                <div className="section">
                    <div className="column is-8 is-offset-2">
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
                                    <section className="section has-text-left">
                                        <h2 className="title">Introduction</h2>
                                        <p>
                                            This conversation seems to crop up at some point at work, what do we really mean by a DTO, an Entity or a Model? And there's a different explanation at each place too. 
                                        </p>
                                        <p>
                                            In this post we will jump into some descriptions of what the terms DTO, Entity, Model, and ViewModel can mean and how getting them right now can help you create software that is easy to change in the future.
                                        </p>
                                    </section>
                                    <section className="section has-text-left">
                                        <h2 className="title">Entities</h2>
                                        <p>
                                            Although you may see the term Entity used in every layer of an application. I think there are only really two types of entity terms we should be using; DataEntity &amp; DomainEntity
                                        </p>
                                        <p>
                                            The reason for the separation is so there is a clear responsibility for each entity type. Your business logic shouldn't care what the data structure is and vice versa. There may be some extra mapping involved but the benefit in separation is worth the extra effort in my opinion.
                                        </p>
                                        <p>
                                            <small className="is-size-7">There are also tools to help with this like AutoMapper in the .NET world.</small>
                                        </p>
                                        <h3 className="subtitle is-size-5">Data Entity</h3>
                                        <p>
                                            A simple object or POCO (<a href="https://en.wikipedia.org/wiki/Plain_old_CLR_object">Plan Old Compiler Object</a>) that maps to the database structure in your application. This object remains in the data layer and is not shared with any other layers or resources. An example of this may be a PersonDataEntity which maps directly to the Person table, including unique Id.
                                        </p>
                                        <h3 className="subtitle is-size-5">Domain Entity</h3>
                                        <p>
                                            A simple object or POCO that is used in the business layer of the application and shared between layers in the application. For example, the data layer will transform a DataEntity into a DomainEntity and return those objects to the other parts of the application.
                                        </p>
                                    </section>
                                    <section className="section has-text-left">
                                        <h2 className="subtitle is-size-5">Models &amp; ViewModels</h2>
                                        <p>
                                            <b>Models</b> are very much the same as DomainEntities described above. Renaming a "Model" to DomainEntity would reveal the intent of how they should be created and used.
                                        </p>
                                        <p>
                                            <b>ViewModels</b> are specific to the UI as they represent a "view". Therefore I believe they belong with that part of your application and should stay well away from the business layer. Even if there are a one-to-one mapping you should still create this separation of responsibilities. In this context a better name might be "ViewEntity".
                                        </p>
                                    </section>
                                    <section className="section has-text-left">
                                        <h2 className="subtitle is-size-5">DTOs</h2>
                                        <p>
                                            By definition a DTO is a <a href="https://en.wikipedia.org/wiki/Data_transfer_object">Data Transfer Object</a> and should only contain data and not logic. Technically, everything we are talking about here is a DTO. But we often see things in our solutions like "PersonDTO".
                                        </p>
                                        <p>
                                            DTOs are similar to ViewModels in the way they create a relationship between the business logic and the outside world. They are strictly for transferring your POCOs out of your application. 
                                        </p>
                                        <p>
                                            An example of this would be in an API. You would map a DomainEntity into a DTO, which is what you allow the consumer of the API to use. You can easily protect anything in your domain you don't wish to expose.
                                        </p>
                                    </section>
                                    <section className="section has-text-left">
                                        <h2 className="subtitle is-size-5">Closing thoughts</h2>
                                        <p>
                                            There is a lot of information out there on this topic, but the way I try to describe them is all around making the responsibilities as clear as possible.
                                        </p>
                                        <p>
                                            These descriptions allow you to focus firstly on the domain side of the work and move outwards. Rather than have everything called a Model and lots of objects that seem the same but aren't really the same, leading to confusion and often code coupling.
                                        </p>
                                        <p>
                                            There may also be some concerns that these definitions break the DRY (<a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">Don't Repeat Yourself</a>) principle. They do.... However I like to think that this is looking at DRY from a different angle, <b>Don't Restrict Yourself</b>. Sometimes when you try to not repeat code we can end up restricting the way we can change it and actually causing more harm later on. Following the above descriptions will hopefully help you create objects that are easy to change in the future.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                
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
                </div>
            </div>
        </div>
    );
  }
  
  export default DtosEntitiesModels;
  