import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineMenu } from 'react-icons/hi';
import {
  IoBagHandleOutline,
  IoCloseOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from 'react-icons/io5';
import logo from '../../assets/img/logo.png';
import './styles/header.css';

type FormValues = {
  name_product: string;
};

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FormValues>({
    defaultValues: { name_product: '' },
    mode: 'onChange',
  });

  const onSubmit = (value: FormValues) => {
    console.log('value: ', value);
  };

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(min-width: 740px)');
    const handler = () => setIsSearchOpen(false);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__container">
        <button type="button" className="open-menu">
          <HiOutlineMenu />
        </button>
        <button
          type="button"
          className="search-mobile-only"
          onClick={() => setIsSearchOpen((prev) => !prev)}
        >
          {isSearchOpen ? <IoCloseOutline /> : <IoSearchOutline />}
        </button>
        <div className="site-header__logo-search">
          {!isSearchOpen && (
            <img
              src={logo}
              alt="logo wardrobe"
              width={314}
              height={80}
              className="site-header__logo"
            />
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`site-header__search-form ${
              isSearchOpen ? 'active' : ''
            }`}
          >
            <input
              type="text"
              placeholder="Search products…"
              className="site-header__search-input"
              {...register('name_product', { required: 'true' })}
            />
            <button
              type="submit"
              disabled={!isDirty}
              className="site-header__search-button"
            >
              <IoSearchOutline />
            </button>
          </form>
        </div>

        <nav className="site-header__navigation">
          <button type="button" className="navigation-authentication">
            <IoPersonOutline />
          </button>
          <button type="button" className="navigation-favorite">
            <IoHeartOutline />
          </button>
          <button type="button" className="navigation-bag">
            <IoBagHandleOutline />
          </button>
        </nav>
      </div>
    </header>
  );
};
