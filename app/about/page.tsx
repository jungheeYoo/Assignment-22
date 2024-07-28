import styles from '../../styles/about.module.css';

export const metadata = {
  title: 'About us',
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer. We hope you enjoy your stay!
      </p>
    </div>
  );
}
