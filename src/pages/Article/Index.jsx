import React from 'react'
import brain from '../../assets/brain.png'
import classes from './style.module.css'

const Index = () => {
  return (
    <div className={classes.container}>

      <div className={classes.experiencia}>
        <img src={brain} alt="brain" className={classes.image}/>
        <div>
          <h3>Experiência</h3>
          <p>Atuando como Trainne Full Stack há 9 meses, trabalhando em projetos usando React baseados em modelo no Figma, fui responsável por atualizar a versão do site em produção da empresa utilizando React, ja reproduzi modelos em figma de algumas telas dos Apps que estão em produção, atualmente trabalhando no desenvolvendo de uma aplicação que esta em react-native recriando em react, utilizando React, styled-components e consumo de Api.</p>
        </div>
      </div>
      <div className={classes.sobre} id='sobre'>
      < h3>Sobre Mim</h3>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width:'60px',color:'#7FFFD4'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg> Cursando o 4º Semestre de Análise e Desenvolvimento de Sistemas, faço cursos focados em Front-End com a stack React:
React for Beginner: Plataforma egghead.io,
React básico | Canal Matheus Battisti,
React complete guide | Udemy,
React completo | Canal CFB Cursos
      
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  style={{width:'50px',color:'#7FFFD4'}} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg> Nascido no interior do Paraná, porém com vivência no estado de São Paulo por 10 anos, retornando em 2022 para terra natal, e atualmente morando em Marialva-PR.
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'50px',color:'#7FFFD4'}} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>Vivendo em São Paulo, tive Meningite Viral, e começo de Pneumonia, após varias crises de convulsão  ocorridos durante uma aula no ensino médio, fui socorrido e entubado, fiquei em coma por 2  dias, e me recuperei milagrosamente sem sequelas.
      </div>
      </div>
    </div>
  )
}

export default Index
