import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default Card;