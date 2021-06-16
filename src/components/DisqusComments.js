import Discus from "disqus-react";

function DisqusComments(props) {
    const disqusConfig = {
      url: props.BlogPostURL,
      identifier: props.BlogPostId,
      title: props.BlogPostTitle
    };

    return (
        <div className="DisqusComments">
            <Discus.DiscussionEmbed
                shortname={props.DisqusSiteShortName}
                config={disqusConfig}
            />
        </div>
    );
  }
  
  export default DisqusComments;