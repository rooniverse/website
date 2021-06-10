import './BlogCard.sass';
import {
  Link
} from "react-router-dom";

function BlogCard(props) {
  const tagItems = props.blogCard.Tags.map((tag) =>
    <span key={tag} className="tag">
      {tag}
    </span>
  );
  const blogImageSrc = require(`../content/blog-card-backgrounds/${props.blogCard.BlogImageName}.jpg`).default;

  return (
    <div className="BlogCard">
      <div className="section pt-4 pb-4">
        <article className="tile notification is-primary">
          <div className="columns">
            <div className="column is-one-fifth">
              <figure className="image is-4by3">
                <Link to={props.blogCard.BlogUrl}>
                  <img src={blogImageSrc} alt={props.blogCard.BlogImageName} />
                </Link>
              </figure>
            </div>
            <div className="column">
              <div className="content has-text-left">
                <h4 className="title is-4 has-text-weight-normal blog-title-font">
                  <Link to={props.blogCard.BlogUrl}>{props.blogCard.BlogTitle}</Link>
                </h4>
                <p className="subtitle is-6">
                  <time dateTime={props.blogCard.BlogDate} pubdate={props.blogCard.BlogDate}>{props.blogCard.BlogDateText}</time>
                </p>
                <p className="blog-content-font">
                  {props.blogCard.BlogDesctiption}
                </p>
                <div className="tags">
                  {tagItems}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogCard;
