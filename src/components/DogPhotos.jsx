import styles from "./DogPhotos.module.css";

import { useRef, useState } from "react";

function DogPhotos() {
  const dogPhotos = [
    "/assets/dog1.jpg",
    "/assets/dog2.jpg",
    "/assets/dog3.jpg",
    "/assets/dog4.jpg",
    "/assets/dog5.jpg",
    "/assets/dogg1.jpg",
    "/assets/dogg2.jpg",
    "/assets/dogg3.jpg",
  ];

  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const newIndex =
        direction === "left"
          ? Math.max(0, currentIndex - 1)
          : Math.min(dogPhotos.length - 1, currentIndex + 1);

      setCurrentIndex(newIndex);
      container.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        {dogPhotos.map((photo) => (
          <img
            src={photo}
            alt="Dog photo"
            key={photo}
            className={styles.photo}
          />
        ))}
      </div>
      <button
        className={`${styles.scrollButton} ${styles.leftButton}`}
        onClick={() => scroll("left")}
      >
        ←
      </button>
      <button
        className={`${styles.scrollButton} ${styles.rightButton}`}
        onClick={() => scroll("right")}
      >
        →
      </button>
    </div>
  );
}

export default DogPhotos;
