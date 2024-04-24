import React from 'react'
import classes from './style.module.css'

const index = ({conteudo,url,link,button}) => {
  return (
    <div className={classes.container}>
        <img src={url} alt={url} />
        <a href={link} target='_blank'>{button}</a>
        <h2>{conteudo}</h2>
    </div>
  )
}

export default index
