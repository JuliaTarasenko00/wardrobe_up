import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';
import { route } from '../helpers/routes';
import './styles/header.css';

type FormValues = {
  name_product: string;
};

export const Header = () => {
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

  return (
    <header className="site-header">
      <div className=" container site-header__container">
        <div className="site_header__wrapper">
          <button type="button" className="btn__open_menu">
            <HiOutlineMenu />
          </button>
          <Link to={route.home} className="site-logo">
            WardrobeUp
          </Link>
        </div>
        <div className="site-header__wrapper-nav">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="site-header__search-form"
          >
            <input
              type="text"
              placeholder="Search products…"
              className="search-form__input"
              {...register('name_product')}
            />
            <button
              type="submit"
              disabled={!isDirty}
              className="search-form__btn-submit"
            >
              <IoSearchOutline />
            </button>
          </form>
          <nav className="site-header__nav">
            <NavLink to="/" className="nav__auth">
              LogIn
            </NavLink>
            <NavLink to="/" className="nav__bag">
              Shopping bag [0]
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
