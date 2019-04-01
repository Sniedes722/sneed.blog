import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        My name is Shawn Niederriter, and I am a Data Engineer. 
        This blog is devoted to Streaming, Systems, and Security.
        I hope to showcase some tutorials on the types of data-related work I do.
      </p>
    </div>
  )
}

export default Bio
