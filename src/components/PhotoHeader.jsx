import styles from "./PhotoHeader.module.css";

function PhotoHeader() {
  return (
    <div className={styles.bannerImg}>
      <img src="/assets/canoe.jpg" alt="dog1" className={styles.bannerImg} />
    </div>
  );
}

export default PhotoHeader;
