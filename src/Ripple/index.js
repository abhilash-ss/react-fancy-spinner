import React from 'react';
import styles from './ripple.module.css';

const Ring = (props) => (
  <div className={styles.ripple} style={{ '--var-color': props.color }}>
    <div />
    <div />
  </div>
);

export default Ring;
