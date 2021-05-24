function BlogHeroBanner(props) {
  return (
    <div className="BlogHeroBanner">
        <section className={"hero is-primary is-halfheight background-image-" + props.imageName}>
            <div className="hero-body">
                <div className="container has-text-centered">
                </div>
            </div>
        </section>
    </div>
  );
}

export default BlogHeroBanner;
