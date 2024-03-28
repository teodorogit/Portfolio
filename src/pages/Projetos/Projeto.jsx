import React from 'react'
import classes from './Style.module.css'
import Car_Artigo from '../../components/Car_Artigo/index'
import CardProjeto from '../../components/CardProjeto/index'
import artigo from '../../assets/artigo_s.png'
import uitwitter from '../../assets/ui-twiiter.png'
import omnifood from '../../assets/omnifood.jpg'
import unicvCoffe from '../../assets/unicv_coffe.png'
import site_desaparecidos from '../../assets/site_desaparecido.jpg'
import todoReact from '../../assets/todo-react.jpg'
import site_cadeiras from '../../assets/site-cadeiras.png'

const Projeto = () => {
  return (
    <div className={classes.container} id='projetos'>

      <div className={classes.content}>
        <h3>Artigos Escritos</h3>
         <Car_Artigo
        url={artigo}
        conteudo='Artigo que conscientiza e pauta assuntos relevantes sobre saúde mental na área da tecnologia, destacando a importância da saúde mental no desempenho do profissional de T.i'
        link="https://www.tabnews.com.br/teodorogit/exaustao-mental-e-suicidio-na-area-da-tecnologia"
        button='Leia o artigo completo'
        />        

      </div>
      <div >
        <div className={classes.card_title}>
        <h3>Projetos Desenvolvidos</h3>
        </div>
        <div className={classes.cards}>
      <CardProjeto
    content='Ui-Twitter'
    valor='Replica do twitter com React e Typescript'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={uitwitter}
    />
      <CardProjeto
    content='Omnifood'
    valor='Replica do twitter com React e Typescript'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={omnifood}
    />
      <CardProjeto
    content='Unicv-Coffe'
    valor='Replica do twitter com React e Typescript'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={unicvCoffe}
    />
      <CardProjeto
    content='Venda de Cadeiras'
    valor='Replica do twitter com React e Typescript'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={site_cadeiras}
    />
      <CardProjeto
    content='Desaparecidos'
    valor='Replica do twitter com React e Typescript'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={site_desaparecidos}
    />
      <CardProjeto
    content='Todo-list'
    valor='Replica do twitter com React e Typescript'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={todoReact}
    />
   </div>
      </div>
    </div>
  )
}

export default Projeto
