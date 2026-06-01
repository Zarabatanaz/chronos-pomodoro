import styles from './styles.module.css';

type Headingprops = {
  children: React.ReactNode;
};

export function Heading({ children }: Headingprops) {
  return <h1 className={styles.heading}>{children}</h1>;
}
