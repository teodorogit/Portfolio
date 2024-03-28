import React from 'react'
import styles from './style.module.css'


const index = ({content,valor,url,imgCard}) => {
  return (
    <div className={styles.card_component}>
        <h3>{content}</h3>
        <p>{valor}</p>
        <img src={imgCard}/>
        <a href={url} target='_blank'>Visualizar</a>
       
    </div>
  )
}

export default index;
