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
import profile_page from '../../assets/profile_page_sass.png'
import quiz_js from '../../assets/quiz-imagem.jpg'
import telaCadastro from '../../assets/tela-cadastro.jpg'
import telaPagamento from '../../assets/tela-pagamento.jpg'
import calculator from '../../assets/calculator.png'
import concepts from '../../assets/concepts.png'
import jogovelha from '../../assets/jogovelha.png'
import reactart from '../../assets/reactart.png'

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
    valor='Site informativo | Desaparecidos de Maringá e região'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={site_desaparecidos}
    />
      <CardProjeto
    content='Todo-list'
    valor='Todo-List React,criação e manipulação de todos'
    url='https://twitter-ui-react-typescript.vercel.app/'
    imgCard={todoReact}
    />
      <CardProjeto
    content='Webpage Apresentação Pesoal'
    valor='Portfólio simples feito com React e Sass'
    url=''
    imgCard={profile_page}
    />
      <CardProjeto
    content='Quiz com Javascript'
    valor='Perguntas,respostas e pontuação feita com JS'
    url='https://quiz-perguntas-javascript.vercel.app/'
    imgCard={quiz_js}
    />
      <CardProjeto
    content='Calculadora de Investimentos'
    valor='Cálculo dinâmico de valores futuros'
    url='https://codesandbox.io/p/devbox/calculator-of-investiment-cwz644'
    imgCard={calculator}
    />
      <CardProjeto
    content='Conceitos React'
    valor='Perguntas, respostas e pontuação feita com JS'
    url='https://codesandbox.io/p/devbox/core-concepts-react-fhl8xy'
    imgCard={concepts}
    />
      <CardProjeto
    content='Jogo da Velha React'
    valor='Lógica para 2 jogadores, Jogo da velha com React'
    url='https://codesandbox.io/p/devbox/tic-tac-toe-react-forked-w693t6'
    imgCard={jogovelha}
    />
      <CardProjeto
    content='ReactArt + Tailwind'
    valor='Estilização dinâmica com Tailwind'
    url='https://codesandbox.io/p/devbox/react-arts-tailwind-jh2jx4'
    imgCard={reactart}
    />
      <CardProjeto
    content='Projeto(faculdade) Tela de Cadastro estacionamento'
    valor='Cadastro de tickets '
    url=''
    imgCard={telaCadastro}
    />
      <CardProjeto
    content='Projeto(faculdade) Tela de Pagamento estacionamento'
    valor='Validação de Pagamento'
    url=''
    imgCard={telaPagamento}
    />
   </div>
      </div>
    </div>
  )
}

export default Projeto
