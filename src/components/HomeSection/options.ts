import clothingFlowers from '../../assets/img/hero/hero_flowers.jpg';
import hero from '../../assets/img/hero/hero.jpg';
import blue_bg from '../../assets/img/hero/blue_bg.webp';
import flower_dr from '../../assets/img/hero/flower_dr.webp';

type HeroContent = {
  imgUrl: string;
  title: string;
  subtitle: string;
  buttonContent: string;
};

export const heroContent: Array<HeroContent> = [
  {
    imgUrl: clothingFlowers,
    title: 'Redefine Your Wardrobe with Confidence!',
    subtitle:
      'Turn everyday looks into unforgettable statements. Find the pieces that make you feel unstoppable.',
    buttonContent: 'Shop Now',
  },
  {
    imgUrl: hero,
    title: 'Find:Your Favorite Trendy Outfits!',
    subtitle:
      'Discover the latest fashion trends and find your perfect stylish look! Whether you`re searching for chic casual wear.',
    buttonContent: 'Shop Now',
  },
  {
    imgUrl: flower_dr,
    title: 'Unleash Your Inner Fashion Icon!',
    subtitle:
      'Explore collections that blend comfort, charm, and modern flair. Dress to impress, every single day.',
    buttonContent: 'Shop Now',
  },
  {
    imgUrl: blue_bg,
    title: 'Embrace Your Style Revolution!',
    subtitle:
      'Step into the world of elegance and confidence. From timeless classics to bold new trends — find outfits that tell your story.',
    buttonContent: 'Shop Now',
  },
];
