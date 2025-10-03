import './hero.css';

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">Find:Your Favorite Trendy Outfits!</h1>
          <p className="hero__subtitle">
            Discover the latest fashion trends and find your perfect stylish
            look! Whether you're searching for chic casual wear.
          </p>
          <button type="button" className="hero__btn">
            Shop New Arrivals
          </button>
        </div>
        <div className="hero__image-wrapper"></div>
      </div>
    </section>
  );
};
