import React from 'react'
import PropTypes from 'prop-types'

import smee from '../../../assets/svg/smee_logo.svg'
import logo from '../../../assets/parcel.png'
import styles from '../styles/App.module.scss'

export default function App({title}) {
  return (
    <div>
      <img src={smee} alt="smee logo" style={{width: '300px'}} />
      <h1 className={styles.title}>
        <img src={logo} alt="parcel logo" />
        {title}
      </h1>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}
