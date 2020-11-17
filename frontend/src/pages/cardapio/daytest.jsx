import React,{Children, useState, useEffect} from 'react';
import LogoFake from '../../image/restaurante.jpg'
import './cardapio.css';
import date from './data'
import axios from 'axios'
import Categorias from './Categorias';

import Food from '../../image/food.jpg'
import Image from '../../image/images.jpg'
import Image1 from '../../image/images(1).jpg'
import Image2 from '../../image/restauranted.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagarbutton from './pagarButton'


import ProdutosProvider, {useProdutos} from '../../Context/productContext'


import Produto from './produtos'
import data from './data';



var backendURL = process.env.REACT_APP_API_URL
export default (props)=>{

  const [open, setOpen] = React.useState(false)
  const [txt, setTxt] = useState('')
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

const [showProducts, setShowProducts] = useState([])


    const [dados, setDados]=useState([])
    const [dados1, setDados1]=useState({ })
    const [categorias1, ShowCategorias1]=useState()
    // const []
    useEffect(() => {
        axios.get(backendURL+'/api/produto/find/'+ props.match.params.url)
            .then(res => {
                
                setShowProducts(res.data);
                setLoad(true);

            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);

    useEffect(() => {
      axios.get(backendURL+'/api/restaurante/find/'+ props.match.params.url)
          .then(res => {
            setDados1(res.data[0])
              setDados(res.data);
              setLoad(true);
              setDados1(res.data[0])
              ShowCategorias1(dados1.Categorias)
          })
          .catch(err => {
              setError(err.message);
              setLoad(true)
          })
  }, []);









// async function pegarCategorias(dados1) {
//   let v;
//   try {
//     v = await dados1.categorias; 
//   } catch(e) {
//     v = await v.map((iou)=>(iou));
//   }
//   return v;
// }
//produtosCat(v)
















    var d = new Date();
    var now = d.getHours() + "." + d.getMinutes();
//Ao conectar com o db essa funcao verificara se o restaurante esta aberto ou nao
    function abertoFechado(){
        if(now <= dados1.fechamen  && now >= dados1.abertura ){
            return(
            <a className="Aberto btn">Aberto</a>
            )
        
        }else {
            return(
                <a className="Fechado btn"><strong>Fechado</strong></a>
            )

        }}

        function abertoFechado1(){
          if(now <= dados1.fechamen  && now >= dados1.abertura ){
              return(
                <Pagarbutton  carrinho={carrinho} preco={preco1} Check={Check} open={open} setOpen={setOpen} txt={txt} setTxt={setTxt} cardapio={dados1.url} numero={dados1.telefone}/>
              )
          
          }else {
              return(
                  <a className="Fechado btn"><strong>Estabelecimento fechado</strong></a>
              )
  
          }}
        var {carrinho, setCarrinho} = useProdutos()
        var [carrinhotxt, useCarrinhotxt] = useState([])
        var preco1 =0;
        var pago = carrinho.map((aos)=>{
            preco1= preco1+ parseFloat(aos.preco)
          return(
              <li class="list-group-item d-flex justify-content-between align-items-center" key={`${aos.nome}_{aos.preco}`}>
              {aos.nome} {aos.opcionais.map((o)=>{
               
               preco1= preco1+ parseFloat(o.preco)
             return(<div  key={`${o.name}_{o.preco}`}>{o.name} R$ {o.preco} +</div>)
             })}
            <span class=" ">R$ {aos.preco}</span></li>
            )
          })

        

var zaponga = carrinho.map((zap)=>{
  return('https://api.whatsapp.com/send?phone=' +
  dados1.telefone +'&text='+carrinho)
})

var [markOpc, setMarkOpc] = useState([])
  const opc = showProducts.opcionais;
  const clic = props.click

        const lis = showProducts.map((date)=>{
          return(
            //Concertando codigos, tem de colocar a imagem no objeto
            <Produto title={date.nome} preco={date.preco} codigo={date._id} opcionais={date.opcionais} opc={opc} clic={clic} markOpc={markOpc} setMarkOpc={setMarkOpc} selOpcionais={Children.MarcOpcionais} click={(opcionais)=>{
              setCarrinho([...carrinho, {nome: date.nome,preco: date.preco,codigo: date._id,opcionais: markOpc}]); setMarkOpc([]);
             
            }}/>
          );
        })


        ///aqui estao os produtos!
    function produtosCat(props){

        return(  <div className={classes.root}>
            <Accordion id="bg-marrom">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header bg-branco"
              >
                <Typography className={classes.heading}>{props}</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
              
                  <div class="">
                      <div class="content-part-3 ">
                         
                          <hr/>
                     
{showProducts.map((date)=>{
  if(props == date.categoria){
          return(
            //Concertando codigos, tem de colocar a imagem no objeto
            <Produto title={date.nome} preco={date.preco} img={date.img} codigo={date._id} opcionais={date.opcionais} opc={opc} clic={clic} markOpc={markOpc} setMarkOpc={setMarkOpc} selOpcionais={Children.MarcOpcionais} click={(opcionais)=>{
              setCarrinho([...carrinho, {nome: date.nome,preco: date.preco,codigo: date._id,opcionais: markOpc}]); setMarkOpc([]);
             
            }}/>
          );
    }})}
                          </div>
                  </div>
      
      
      
              </AccordionDetails>
            </Accordion>
            
          </div>)
    }
     
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          color: '#8C5954'
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
      const classes = useStyles();      







      var [Check, setCheck] = useState({})
      var handleChange1=(event)=> {
      
        setCheck(event.target.value )
      }


    function valeAlimentacao(VA){
        if(VA === true){
            return(
                <div class="alert alert-primary" role="alert">
  Aceitamos vale alimentação
</div>
            )
        }else{
            return(
                <div class="alert alert-success" role="alert">
  Seja bem vindo!
</div>
            )
        }
    }
 







    // const functionWithPromise = item => { //a function that returns a promise
    //   return Promise.resolve('ok')
    // }
    
    // const anAsyncFunction = async item => {
    //   return functionWithPromise(item)
    // }
    
    // const getData = async () => {
    //   return Promise.all(list.map(item => anAsyncFunction(item)))
    // }
    
    // getData().then(data => {
    //   console.log(data)
    // })


function  Categoriaso(list){
  if(load){
          if(list == undefined){ return ("CARREGANDO...")}
          else{
           return (list.map((d1d)=>produtosCat(d1d)))
          }
        }else return ("CARREGANDO...")
}




  function  Categoriasoi(img){
    if(load){
            if(img == undefined){ return ("CARREGANDO...")}
            else{
             return <img className="LogoCardapio" src={require(backendURL+'/static/'+dados1._id+'.png')}/>
            }
          }else return ("CARREGANDO...")
  }





   return(
    <ProdutosProvider>
        <div>
            <div className="Headercardapio">
          { Categoriasoi(dados1._id) }

           
            
            {abertoFechado()}
            
            </div>
            {valeAlimentacao(dados1.valeRefeicao)}
            <div class=" descricaorestaurante">
{/* descrição do lugar */}
    
    <div class="col-md-5 col-sm-6 col-xs-12">
    
   <div class="content-part-1-left-h3">{dados1.nome}</div>
        <div class="content-part-1-left-p">
        {dados1.desc}
        
        </div>
        
    </div>
    
    
</div>
            <br/>
{/* Produtos{igu.map((joj)=>(produtosCat(joj)))} */}


{Categoriaso(dados1.categorias)}
<div className="radioinput1">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Retirar no local</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Entregar</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">Comer no local</label>
</div>


</div>
<br/>
<br/>
{/* <a href={'https://api.whatsapp.com/send?phone=5534998269655&text='+pago}> FACA O PEDIDO</a> */}

{pago}
<br/>
<h4 className="radioinput">total: R$ {preco1}</h4>

{abertoFechado1()}
</div></ProdutosProvider>
    )
}