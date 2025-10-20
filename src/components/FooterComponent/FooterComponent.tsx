import { useForm } from 'react-hook-form';
import './footer.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';

type FormValue = {
  email: string;
};

export const Footer = () => {
  const {
    handleSubmit,
    register,
    formState: { isDirty },
  } = useForm<FormValue>({
    defaultValues: { email: '' },
    mode: 'onChange',
  });

  const onSubmit = (value: FormValue) => {
    console.log('Submitted: ', value);
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__wrapper">
          <div className="footer__section wrapper-form">
            <h4>Get Latest Updates</h4>
            <p>
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="footer__form">
              <input
                type="email"
                placeholder="Your email address"
                {...register('email', { required: true })}
              />
              <button type="submit" disabled={!isDirty}>
                <FaTelegramPlane />
              </button>
            </form>
          </div>

          <div className="footer__section">
            <h4>Get to know Us</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms & Policy</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">News & Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Information</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Contact Us</h4>
            <ul className="footer__contacts">
              <li>
                <GrLocation />
                <div>
                  <p>Odesa, Ukraine</p>
                  <span>Beside the Sun point land</span>
                </div>
              </li>
              <li>
                <GiRotaryPhone /> <p>+380 00 000 000</p>
              </li>
              <li>
                <MdOutlineEmail /> <p>wardrobe-up@example.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Images from{' '}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
