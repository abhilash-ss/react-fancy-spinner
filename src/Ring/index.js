import React from 'react';
import styles from './ring.module.css';

const Ring = (props) => (
  <div className={styles.ring} style={{ '--var-color': props.color }}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Ring;
