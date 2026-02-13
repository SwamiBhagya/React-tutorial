import React from 'react'
import styles from "./Header.module.css" 

const Header = () => {
  return (
    <div className={styles.headr}>
      this is header
      <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header
