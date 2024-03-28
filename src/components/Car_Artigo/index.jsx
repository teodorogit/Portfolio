import React from 'react'
import classes from './style.module.css'

const index = ({conteudo,url,link,button}) => {
  return (
    <div className={classes.container}>
        <img src={url} alt={url} />
        <h2>{conteudo}</h2>
        <button href={link}>{button}</button>
    </div>
  )
}

export default index