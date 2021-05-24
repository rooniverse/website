import './SmallBlogCard.sass';

function SmallBlogCard(props) {
  return (
    <div className="SmallBlogCard">
      <div className="section pt-4 pb-4">
        <div className="card">
          <div className="card-content">
            <p className="title is-4">
              {props.showerThought.Text}
            </p>
            <p className="subtitle">
              {props.showerThought.Author}
            </p>
          </div>
          <footer className="card-footer is-secondary">
            <p className="card-footer-item">
              <span>
                <a href={props.showerThought.Link}>View on Twitter</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default SmallBlogCard;
