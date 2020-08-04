import React from 'react';
import styles from './roller.module.css';

const Roller = (props) => (
  <div className={styles.roller} style={{ '--var-color': props.color }}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Roller;
