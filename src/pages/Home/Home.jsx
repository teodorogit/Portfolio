import React from 'react'
import NavBar from '../../components/Navbar/NavBar.jsx'
import classes from './Home.module.css'
import matheus from '../../assets/matheus.png'
const Home = () => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <NavBar/>
        </div>
        <div className={classes.columns}>
          <div>
            <div className={classes.descricao}>
            <h1>Developer</h1>
            <h2>Matheus Teodoro</h2>
            <p>Desenvolvedor de Software </p>
                  <span>
              Stacks</span>
             <h3>React,Rest API's, JavaScript</h3>
            </div>
          </div>
           <img src={matheus} alt="" className={classes.matheus}/>
        </div>

      
    </div>
  )
}

export default Home
