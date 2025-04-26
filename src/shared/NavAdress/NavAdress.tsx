import { Link } from 'react-router-dom';
import styles from './NavAdress.module.scss';
import { useTheme } from '../../context/PageTheme';

type Path = { name: string; path: string; isCategory?: boolean };

interface Props {
  places: Path[];
}

export const NavAdress: React.FC<Props> = ({ places }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.navAdress}>
      <Link className={styles.homeLink} to="/">
        <img
          src={
            theme === 'light'
              ? `${import.meta.env.BASE_URL}/img/icons/Home.svg`
              : `${import.meta.env.BASE_URL}/img/icons/dark__home.svg`
          }
          alt="Icon Home"
          className={styles.navAdress__icon}
        />
      </Link>
      {places.map((place: Path) => (
        <span key={place.path} className={styles.span}>
          <Link
            className={styles.link}
            style={{
              color: place.isCategory
                ? theme === 'light'
                  ? '#0F0F11'
                  : '#fff'
                : theme === 'light'
                  ? '#89939A'
                  : '#E2E6E9',
            }}
            to={place.path}
          >
            <img
              src={`${import.meta.env.BASE_URL}/img/icons/rightArrow.svg`}
              alt=">"
              className={styles.arrow}
            />
            {place.name}
          </Link>
        </span>
      ))}
    </div>
  );
};
