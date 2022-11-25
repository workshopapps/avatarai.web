import styles from "./Review.module.css";
import { fakeReviewData } from "./fakeData";

import good from "./assets/good.png";
import emptyStar from "./assets/emptyStar.png";
import goldStar from "./assets/goldStar.png";
import { useEffect, useState, useRef } from "react";

export default function Review() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const disabled = !!message && !!name && !!email && checked;

  const handleRating = (i) => {
    if (rating === i + 1) {
      setRating(0);
    } else {
      setRating(i + 1);
    }
  };

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault();
      setRating(0);
      setMessage("");
      setEmail("");
      setName("");
      setShowPopup(true);
    };
  };

  const arr = ["", "", "", "", ""];

  return (
    <div className={styles.review}
    style={{
      'overflow':  `${showPopup?'hidden':'auto'}`
    }}>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
      <header className={styles.reviewheader}>
        <h2>Leave a review</h2>
        <p>Click the star to rate us *</p>
        <div className={styles.starContainer}>
          {arr.map((_, i) => (
            <div
              className={styles.star}
              key={i}
              onClick={() => handleRating(i)}
              style={{
                backgroundImage: `url(${rating > i ? goldStar : emptyStar})`,
              }}
            ></div>
          ))}
        </div>
      </header>
      <form className={styles.reviewForm} onSubmit={handleSubmit()}>
        <label className={styles.textareaLabel}>
          Review *
          <textarea
            required
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            className={styles.textarea}
            placeholder="please input a detailed description of your idea or suggestion"
          ></textarea>
        </label>
        <label className={styles.checkbox}>
          <input
            value={checked}
            required
            onChange={() => setChecked(!checked)}
            type="checkbox"
            id="checkbox"
            className={styles.check}
          />
          <span className={styles.cspan}></span>
          <p>I Accept The Term in Privacy Policy</p>
        </label>
        <label>
          Name *
          <input
            type="name"
            id="name"
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
            className={styles.nameInput}
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email *
          <input
            value={email}
            required
            id="email"
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            className={styles.emailInput}
            placeholder="Your email address"
          />
        </label>
        <button
          disabled={!disabled}
          type="submit"
          className={styles.submit}
          style={{
            backgroundColor: `${disabled ? "#8b70e9" : "#a28dee"}`,
          }}
        >
          Submit your review
        </button>
      </form>
      <div className={styles.reviewList}>
        <h3>Other reviews</h3>
        <div className={styles.reviewsContainer}>
          {fakeReviewData.map((item, i) => (
            <ReviewMessages key={i} details={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewMessages({ details }) {
  return (
    <div className={styles.singleReview}>
      <header className={styles.singleReviewHeader}>
        <div className={styles.sRHContainer}>
          <div
            className={styles.reviewerAvatar}
            aria-label="reviewer display"
            style={{
              backgroundImage: `url(${details.image})`,
            }}
          ></div>
          <div className={styles.name}>
            <p className={styles.fullname}>{details.ful_name}</p>
            <p className={styles.email}>{details.email}</p>
          </div>
        </div>
        <div className={styles.rating}>
          {["", "", "", "", ""].map((_, i) => (
            <div
              key={i}
              className={styles.star}
              style={{
                backgroundImage: `url(${
                  details.rating < i + 1 ? emptyStar : goldStar
                })`,
              }}
            ></div>
          ))}
        </div>
      </header>
      <div className={styles.text}>
        <p>{details.text}</p>
      </div>
      <div className={styles.time}>{details.time}</div>
    </div>
  );
}

function Popup({ setShowPopup }) {
  const popRef = useRef();

  useEffect(() => {
    popRef.current.scrollIntoView();
  }, [popRef.current]);
  return (
    <div className={styles.cover}>
      <div className={styles.scroll} ref={popRef}>
        <div className={styles.popup} aria-label="form submit successful">
          <div className={styles.imageBG}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${good})`,
              }}
              aria-label="check mark"
            ></div>
          </div>
          <h5>Form submitted successfully</h5>
          <p>
            Thanks for sharing your feedback ideas and suggestions from the
            community help us to constantly improve the Tapeart EXPERIENCE
          </p>
          <div className={styles.popupBtn}>
            <button onClick={() => setShowPopup(false)}>ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}
