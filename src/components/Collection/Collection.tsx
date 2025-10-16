import skirts from '../../assets/img/collection/skirts.webp';
import dresses from '../../assets/img/collection/dresses.webp';
import jackets from '../../assets/img/collection/jackets.webp';
import top from '../../assets/img/collection/top.webp';
import shoe from '../../assets/img/collection/shoe.jpg';
import './collection.css';

type CollectionItems = {
  img: string;
  title: string;
};

const options: Array<CollectionItems> = [
  {
    img: skirts,
    title: 'shorts & skirts',
  },
  {
    img: dresses,
    title: 'dresses & suits',
  },
  {
    img: jackets,
    title: 'outerwear & jackets',
  },
  {
    img: top,
    title: 'boluses & top',
  },
  {
    img: shoe,
    title: 'shoe',
  },
];

export const Collection = () => {
  return (
    <section className="collection">
      <div className="container collection__container">
        <h2 className="title collection__title">Collection</h2>
        <ul className="collection__list">
          {options.map(({ img, title }: CollectionItems) => (
            <li key={title} className="collection__item">
              <img
                src={img}
                alt={title}
                width={658}
                height={876}
                className="collection__item-img"
              />
              <p className="collection__item-title">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
