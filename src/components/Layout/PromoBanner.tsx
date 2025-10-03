import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import './styles/promobanner.css';

type TSocialMedia = {
  ico: React.ReactNode;
};

export const PromoBanner = () => {
  const socialMedia: Array<TSocialMedia> = [
    {
      ico: <FiFacebook />,
    },
    {
      ico: <FiInstagram />,
    },
    {
      ico: <ImPinterest2 />,
    },
    {
      ico: <FiYoutube />,
    },
  ];

  return (
    <div className="promo-banner">
      <div className="container promo-banner__container">
        <div className="promo-banner__social-media">
          {socialMedia.map(({ ico }: TSocialMedia, index) => (
            <a
              href="/"
              target="_blank"
              key={index}
              className="social-media__item"
            >
              {ico}
            </a>
          ))}
        </div>
        <p className="promo-banner__text">
          Free Express Shipping on orders $ 100!
        </p>
      </div>
    </div>
  );
};
