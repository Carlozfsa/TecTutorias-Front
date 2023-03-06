import React from 'react';
import axios from 'axios';
import './EMOT.css';
import UsrBar from '../UsrBar/UsrBar';
import NavBar from '../NavBar/NavBar';
import { Grommet, Box, Grid, Heading, Paragraph, Image} from 'grommet';
import { List, Input, Button, Radio, RadioGroup, Table, Alert  } from 'rsuite';
import Uno from './img/Uno.png';
import lingu from './img/lingu.png';
import mate from './img/mate.png';
import kine from './img/kine.png';
import esp from './img/esp.png';
import music from './img/music.png';
import pers from './img/pers.png';
import log from './img/log.png';
const { Column, HeaderCell, Cell, Pagination } = Table;
const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle',
    color:'#E2E3E4',
    fontFamily: "'Manjari', sans-serif"
  }
};
class EMOT extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.log(process.env)
    this.state = {usr:this.props.location.state,
      score:[{score:0, Name:'Inteligencia Linguistica', Prioridad:1, points:[], perc:0, key:'Ling'}, {score:0, Name:'Inteligencia Logico-Matematica', Prioridad:2, points:[], perc:0, key:'Math'},
      {score:0, Name:'Inteligencia Espacial', Prioridad:3, points:[], perc:0, key:'Space'}, {score:0, Name:'Inteligencia Fisica-Kinestesica', Prioridad:4, points:[], perc:0, key:'Phys'},
      {score:0, Name:'Inteligencia Musical', Prioridad:5, points:[], perc:0, key:'Music'}, {score:0, Name:'Inteligencia Interpersonal', Prioridad:6, points:[], perc:0, key:'Pers'} ],
      map:{Ling:0, Math:1, Space:2, Phys:3, Music:4, Pers:5 }, ans:{},
      data_q:{Ling:['Para su edad, escribe mejor que el promedio',
    'Cuenta bromas y chistes o inventa cuentos increíbles',
    'Tiene buena memoria para los nombres, lugares, fechas y trivialidades',
    'Disfruta leer libros',
    'Escribe las palabras correctamente.',
    'Aprecia las rimas absurdas, ocurrencias, trabalenguas, etc',
    'Le gusta escuchar la palabra hablada (historias, comentarios en la radio, etc.)',
    'Tiene buen vocabulario para su edad',
    'Se comunica con los demás de una manera marcadamente verbal'],
    Math:['Hace muchas preguntas acerca del funcionamiento de las cosas',
    'Hace operaciones aritméticas mentalmente con mucha rapidez.',
    'Disfruta las clases de matemáticas.',
    'Le interesan los juegos de matemáticas en computadoras',
    'Le gustan los juegos y rompecabezas que requieran de la lógica',
    'Le gusta clasificar y jerarquizar cosas.',
    'Piensa en un nivel más abstracto y conceptual que sus compañeros.',
    'Tiene buen sentido de causa y efecto.'],
    Space:['Presenta imágenes visuales nítidas',
    'Lee mapas, gráficos y diagramas con más facilidad que el texto',
    'Fantasea más que sus compañeros.',
    'Dibuja figuras avanzadas para su edad',
    'Le gusta ver películas, diapositivas y otras presentaciones visuales',
    'Le gusta resolver rompecabezas, laberintos y otras actividades visuales similares.',
    'Crea construcciones tridimensionales avanzadas para su nivel (juegos tipo Play go o Lego)',
    'Cuando lee, aprovecha más las imágenes que las palabras.',
    'Hace grabados en sus libros de trabajo, plantillas de trabajo y otros materiales.'],
    Phys:['Se destaca en uno o más deportes.',
    'Se mueve o está inquieto cuando está sentado mucho tiempo.',
    'Imita muy bien los gestos y movimientos característicos de otras personas.',
    'Le encanta desarmar cosas y volver a armarlas.',
    'Apenas ve algo, lo toca todo con las manos.',
    'Le gusta correr, saltar, moverse rápidamente, brincar, luchar.',
    'Demuestra destreza en artesanía',
    'Tiene una manera dramática de expresarse',
    'Manifiesta sensaciones físicas diferentes mientras piensa o trabaja.',
    'Disfruta trabajar con plastilina y otras experiencias táctiles.'],
    Music:['Se da cuenta cuando la música está desentonada o suena mal.',
    'Recuerda las melodías de las canciones.',
    'Tiene buena voz para cantar.',
    'Toca un instrumento musical o canta en un coro o algún otro grupo.',
    'Canturrea sin darse cuenta.',
    'Tamborilea rítmicamente sobre la mesa o escritorio mientras trabaja.',
    'Es sensible a los ruidos ambientales (p.ejem. La lluvia sobre el techo)',
    'Tiene una manera dramática de expresarse',
    'Responde favorablemente cuando alguien pone música.'],
    Pers:['Disfruta conversar con sus compañeros.',
    'Tiene características de líder natural.',
    'Aconseja a los amigos que tienen problemas.',
    'Parece tener buen sentido común.',
    'Pertenece a clubes, comités y otras organizaciones.',
    'Disfruta enseñar informalmente a otros niños.',
    'Le gusta jugar con otros niños.',
    'Tiene dos o más buenos amigos.',
    'Tiene buen sentido de empatía o interés por los demás.',
    'Otros buscan su compañía.']},
      data_i:['Conviértete en “observador desapegado” y revisa tu línea de vida.',
    'Contesta las siguientes preguntas y escribe tus respuestas en los espacios destinados para ello.']
    }
  }
  upload = () =>{
    console.log(this.state)
    let what = this.props.location.pathname.substring(1, this.props.location.pathname.length).substring(0,4);
    axios.post('/actUp', {usr:this.state.usr, what:what, act:this.state}).then(res => {this.setState(/*{map:{}},*/
    {ans:{/*Ling:null, Math:null, 
      Space:null, Phys:null, Music:null, Pers:null,*/ square:"",zoq:"",ball:"",cat:"", card:"", doll:""}})
      Alert.success('La actividad se cargo con exito.', 6000)
    });
  }
  handleChangeTxt = (event, index) =>{ 
    this.setState({ ans: {...this.state.ans,  [index]:event} })
  }
  handleChange = (name,index, value, factor) => {
    let temp=0;
    this.state.score[name].points[index] = value ;
    let arr = this.state.score;
    let pos = this.state.map;
    this.state.score[name].points.forEach(I=>{
      temp+= +I;
      arr[name].score = temp
      arr[name].perc = temp * factor
      //this.setState({score:{...this.state.score, [name]:{...this.state.score[name], score:temp} } } )
    });
    arr.sort( (a, b)=> {return b.perc - a.perc} )
    arr.forEach((I,J)=>{
      I.Prioridad = (J+1);
      pos[I.key] = J
    })
    console.log(arr, pos)
    this.setState({score:arr, map:pos })
    console.log(this.state);
  }
  render() {
    return (
      <Grommet plain className="App">
        <UsrBar usr={this.state.usr}/>
        <Grid
          rows={[process.env.REACT_APP_SCREEN_WIDTH]}
          columns={[process.env.REACT_APP_NAVBAR_WIDTH, process.env.REACT_APP_MAIN_WIDTH]}
          gap="10px"
          areas={[
            { name: 'nav', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
          ]}
        >
          <Box gridArea="nav" height="100vh" background={process.env.REACT_APP_NAVBAR_COLOR} width={process.env.REACT_APP_NAVBAR_WIDTH} elevation="small">
            <NavBar usr={this.state.usr} history = {this.props.history}/>
          </Box>
          <Box gridArea="main" background="#272829">
            <br/>
            <Grid
              rows={["600px","1700px", "1700px", "1600px", "1550px", "2000px", "1200px"]}
              columns={["100%"]}
              gap="10px"
              areas={[
                { name: 'title', start: [0, 0], end: [0, 0] },
                { name: 'desc', start: [0, 1], end: [0, 1] },
                { name: 'st1', start: [0, 2], end: [0, 2] },
                { name: 'st2', start: [0, 3], end: [0, 3] },
                { name: 'st3', start: [0, 4], end: [0, 4] },
                { name: 'st4', start: [0, 5], end: [0, 5] },
                { name: 'Graph', start: [0, 6], end: [0, 6] },
              ]}
            >
              <Box gridArea="title" background="#272829">
                <Heading alignSelf="center" style={{ fontFamily: "'Manjari', sans-serif"}}>Inteligencias Multiples</Heading>
                <Image
                  fit="contain"
                  src={Uno}
                />
              </Box>
              <Box gridArea="desc" backgroundColor="#272829">
              <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Tipos de Inteligencias:</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Al tener esta perspectiva más amplia, el concepto de inteligencia se convirtió en un concepto que funciona de diferentes maneras en las vidas de las personas. Gardner proveyó un medio para determinar la amplia variedad de habilidades que poseen los seres humanos, agrupándolas en siete categorías o &quot;inteligencias&quot;:
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>A) Inteligencia Linguistica:</Heading>
                <Box height="xsmall">
                <Image
                  fit="contain"
                  src={lingu}
                  style={{height:"10px"}}
                />
                </Box>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Es la capacidad para usar palabras de manera efectiva, sea en forma oral o de manera escrita. Esta inteligencia incluye la habilidad para manipular la sintaxis o significados del lenguaje o usos prácticos del lenguaje. Algunos usos incluyen la
                  retórica (usar el lenguaje para convencer a otros de tomar un determinado curso de acción), la mnemónica (usar el lenguaje para recordar información), la explicación
                  (usar el lenguaje para informar) y el metalenguaje (usar el lenguaje para hablar del lenguaje).
                </Paragraph>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>B) Inteligencia lógico matemática:</Heading>
                <Box height="xsmall">
                <Image
                  fit="contain"
                  src={mate}
                  style={{height:"10px"}}
                />
                </Box>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Es la capacidad para usar los números de manera efectiva y razonar adecuadamente. Esta inteligencia incluye la sensibilidad a los esquemas y relaciones lógicas, las afirmaciones y las proposiciones (si-entonces, causa-efecto),
                las funciones y las abstracciones. Los tipos de procesos que se usan al servicio de esta inteligencia incluyen: la categorización, la clasificación, la inferencia, la generalización, el cálculo y la demostración de la hipótesis.
                </Paragraph>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>C) Inteligencia Corporal-Kinética:</Heading>
                <Box height="xsmall">
                <Image
                  fit="contain"
                  src={kine}
                  style={{height:"10px"}}
                />
                </Box>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Es la capacidad para usar todo el cuerpo para expresar ideas y sentimientos (por ejemplo un actor, un mimo, un atleta, un bailarín) y la facilidad en el uso de las propias manos para producir o transformar cosas (por ejemplo un artesano, escultor, mecánico, cirujano).
                <br/>Esta inteligencia incluye habilidades físicas como la coordinación, el equilibrio, la destreza, la fuerza, la flexibilidad y la velocidad así como las capacidades auto perceptivas, las táctiles y la percepción de medidas y volúmenes.
                </Paragraph>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>D) Inteligencia Espacial:</Heading>
                <Box height="xsmall">
                <Image
                  fit="contain"
                  src={esp}
                  style={{height:"10px"}}
                />
                </Box>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Es la habilidad para percibir de manera exacta el mundo visual- espacial (por ejemplo un cazador, explorador, guía) y de ejecutar transformaciones sobre esas percepciones (por ejemplo un decorador de interiores, arquitecto, artista, inventor).
                <br/>Esta inteligencia incluye la sensibilidad al color, la línea, la forma, el espacio y las relaciones que existen entre estos elementos. Incluye la capacidad de visualizar, de representar de manera gráfica ideas visuales o espaciales.
                </Paragraph>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>E) Inteligencia Musical:</Heading>
                <Box height="xsmall">
                <Image
                  fit="contain"
                  src={music}
                  style={{height:"10px"}}
                />
                </Box>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Es la capacidad de percibir (por ejemplo un aficionado a la música), discriminar (por ejemplo, como un crítico musical), transformar (por ejemplo un compositor) y expresar (por ejemplo una persona que toca un instrumento) las formas musicales.
                  <br/>Esta inteligencia incluye la sensibilidad al ritmo, el tono, la melodía, el timbre o el color tonal de una pieza musical.
                </Paragraph>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>F) Inteligencia Interpersonal:</Heading>
                <Box height="xsmall">
                <Image
                  fit="contain"
                  src={pers}
                  style={{height:"10px"}}
                />
                </Box>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Es la capacidad de percibir y establecer distinciones en los estados de ánimo, las intenciones, las motivaciones, y los sentimientos de otras personas. Esto puede incluir la sensibilidad a las expresiones faciales, la voz y los gestos, la capacidad
                  para discriminar entre diferentes clases de señales interpersonales y la habilidad para responder de manera efectiva a estas señales en la práctica (por ejemplo influenciar a un grupo de personas a seguir una cierta línea de acción).
                </Paragraph>
              </Box>









              <Box gridArea="st1" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>TEST DE INTELIGENCIA</Heading>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Objetivo:</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                A continuación se presenta un Test sugerente para evaluar las Inteligencias Múltiples (Basado en Flores, 1999).
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Instrucciones:</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Marque según corresponda a las instrucciones. El 1 señala ausencia, el 5 señala una presencia notable de lo que se está afirmando. Es decir, 5 es la puntuación más alta.
                </Paragraph>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Inteligencia Linguistica:</Heading>
                <br/>
                <List>
                  {this.state.data_q.Ling.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      <RadioGroup name="Ling" inline appearance="picker"
                      onChange={value => {
                        this.handleChange(this.state.map.Ling, index, value, 2.5);
                      }}
                      >
                        <span style={styles.radioGroupLabel}>{item}: </span>
                        <Radio value="1" style={{color:"#C600F4"}} >1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                      </RadioGroup>
                    </List.Item>
                  )}
                </List>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Puntaje Total: {this.state.score[this.state.map.Ling].score}</Heading>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Porcentaje: {this.state.score[this.state.map.Ling].perc}</Heading>
                <br/><br/><br/>


                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Inteligencia Logica-Matematica:</Heading>
                <br/>
                <List>
                  {this.state.data_q.Math.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      <RadioGroup name="Math" inline appearance="picker"
                      onChange={value => {
                        this.handleChange(this.state.map.Math, index, value, 2);
                      }}
                      >
                        <span style={styles.radioGroupLabel}>{item}: </span>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                      </RadioGroup>
                    </List.Item>
                  )}
                </List>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Puntaje Total: {this.state.score[this.state.map.Math].score}</Heading>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Porcentaje: {this.state.score[this.state.map.Math].perc}</Heading>
                <br/>
              </Box>




              <Box gridArea="st2" background="#272829">
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Inteligencia Espacial:</Heading>
                <br/>
                <List>
                  {this.state.data_q.Space.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      <RadioGroup name="Space" inline appearance="picker"
                      onChange={value => {
                        this.handleChange(this.state.map.Space,index, value, 2.2);
                      }}
                      >
                        <span style={styles.radioGroupLabel}>{item}: </span>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                      </RadioGroup>
                    </List.Item>
                  )}
                </List>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Puntaje Total: {this.state.score[this.state.map.Space].score}</Heading>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Porcentaje: {this.state.score[this.state.map.Space].perc}</Heading>
                <br/><br/><br/>
                

                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Inteligencia Fisica y Kinestesica:</Heading>
                <br/>
                <List>
                  {this.state.data_q.Phys.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      <RadioGroup name="Phys" inline appearance="picker"
                      onChange={value => {
                        this.handleChange(this.state.map.Phys, index, value, 2);
                      }}
                      >
                        <span style={styles.radioGroupLabel}>{item}: </span>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                      </RadioGroup>
                    </List.Item>
                  )}
                </List>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Puntaje Total: {this.state.score[this.state.map.Phys].score}</Heading>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Porcentaje: {this.state.score[this.state.map.Phys].perc}</Heading>
              </Box>







              <Box gridArea="st3" background="#272829">
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Inteligencia Musical:</Heading>
                <br/>
                <List>
                  {this.state.data_q.Music.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      <RadioGroup name="Music" inline appearance="picker"
                      onChange={value => {
                        this.handleChange(this.state.map.Music, index, value, 2.5);
                      }}
                      >
                        <span style={styles.radioGroupLabel}>{item}: </span>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                      </RadioGroup>
                    </List.Item>
                  )}
                </List>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Puntaje Total: {this.state.score[this.state.map.Music].score}</Heading>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Porcentaje: {this.state.score[this.state.map.Music].perc}</Heading>
                <br/><br/><br/>





                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Inteligencia Interpersonal:</Heading>
                <br/>
                <List>
                  {this.state.data_q.Pers.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      <RadioGroup name="Pers" inline appearance="picker"
                      onChange={value => {
                        this.handleChange(this.state.map.Pers, index, value, 2);
                      }}
                      >
                        <span style={styles.radioGroupLabel}>{item}: </span>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                      </RadioGroup>
                    </List.Item>
                  )}
                </List>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Puntaje Total: {this.state.score[this.state.map.Pers].score}</Heading>
                <br/>
                <Heading alignSelf="center" level={5} style={{ fontFamily: "'Manjari', sans-serif"}}>Porcentaje: {this.state.score[this.state.map.Pers].perc}</Heading>
              </Box>






              <Box gridArea="st4" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Resultados generales.</Heading>
                <br/>
                <Table
                  autoHeight={true}
                  data={this.state.score}
                  width={600}
                  onRowClick={data => {
                    console.log(data);
                  }}
                  style={{
                    left: '50%',
                    transform: 'translate(-50%, 0%)',
                    borderRadius: "13px"
                  }}
                >
                  <Column width={200} align="center" fixed>
                    <HeaderCell>Tipo de Inteligencia</HeaderCell>
                    <Cell dataKey="Name" style={{backgroundColor:'#272829'}}/>
                  </Column>
                  <Column width={200} fixed>
                    <HeaderCell>Porcentaje</HeaderCell>
                    <Cell dataKey="perc" style={{backgroundColor:'#272829'}}/>
                  </Column>
                  <Column width={200}>
                    <HeaderCell>Prioridad</HeaderCell>
                    <Cell dataKey="Prioridad" style={{backgroundColor:'#272829'}}/>
                  </Column>
                </Table>
                <br/><br/>
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Resultados generales.</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  El entrenamiento que te proponemos a continuación descansa en su mayor parte en la <b>resolución de problemas.</b> Esto se debe a que es justamente ante la aparición del
                    inconveniente, de lo raro o lo incomprensible, que la situación exige una conducta inteligente.
                </Paragraph>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                <b>Aptitud Espacial:</b> Estos ejercicios implican un adecuado manejo de las formas, de los trazos de los objetos, desarrollando sobre todo el poder de observación.
                </Paragraph>
                <br/><br/>
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Desarrollando el Poder de Observacion.</Heading>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>¿Cuantos cuadros puedes contar en la siguiente figura?.</Heading>
                <Grid
                  rows={["60px","60px", "60px", "60px"]}
                  columns={["60px", "60px", "60px", "60px",]}
                  areas = {[
                    { name: "a", start:[0,0], end:[0,0] },
                    { name: "b", start:[1,0], end:[1,0] },
                    { name: "c", start:[2,0], end:[2,0] },
                    { name: "d", start:[3,0], end:[3,0] },

                    { name: "e", start:[0,1], end:[0,1] },
                    { name: "f", start:[1,1], end:[1,1] },
                    { name: "g", start:[2,1], end:[2,1] },
                    { name: "h", start:[3,1], end:[3,1] },

                    { name: "i", start:[0,2], end:[0,2] },
                    { name: "j", start:[1,2], end:[1,2] },
                    { name: "k", start:[2,2], end:[2,2] },
                    { name: "l", start:[3,2], end:[3,2] },


                    { name: "m", start:[0,3], end:[0,3] },
                    { name: "n", start:[1,3], end:[1,3] },
                    { name: "o", start:[2,3], end:[2,3] },
                    { name: "p", start:[3,3], end:[3,3] },
                  ]}
                  gap="2px"
                  alignSelf="center"
                >
                  <Box gridArea="a" background="#F2F3F4"></Box>
                  <Box gridArea="b" background="#F2F3F4"></Box>
                  <Box gridArea="c" background="#F2F3F4"></Box>
                  <Box gridArea="d" background="#F2F3F4"></Box>

                  <Box gridArea="e" background="#F2F3F4"></Box>
                  <Box gridArea="f" background="#F2F3F4"></Box>
                  <Box gridArea="g" background="#F2F3F4"></Box>
                  <Box gridArea="h" background="#F2F3F4"></Box>

                  <Box gridArea="i" background="#F2F3F4"></Box>
                  <Box gridArea="j" background="#F2F3F4"></Box>
                  <Box gridArea="k" background="#F2F3F4"></Box>
                  <Box gridArea="l" background="#F2F3F4"></Box>

                  <Box gridArea="m" background="#F2F3F4"></Box>
                  <Box gridArea="n" background="#F2F3F4"></Box>
                  <Box gridArea="o" background="#F2F3F4"></Box>
                  <Box gridArea="p" background="#F2F3F4"></Box>
                </Grid>
                <br/>
                <Input
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Escribe cuantos encontraste"
                  value = {this.state.ans.square}
                  onChange = {(event) => this.handleChangeTxt(event, 'square') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Si contaste 16, estás en un grupo numeroso. Si constaste 17, estás en un grupo más selecto, pero todavía equivocado. Antes de seguir, ¿por qué no miras y tratas de encontrar más cuadros?
                </Paragraph>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                <b>Aptitud Numerica:</b> Hace referencia al pensamiento matemático, a las operaciones y sistemas que pueden usarse en la solución de problemas con números.
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>EJERCICIOS PARA DESARROLLAR LA APTITUD NUMÉRICA.</Heading>
                <br/><br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Los Zoquetes de Colores.</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Hay diez zoquetes rojos y diez zoquetes azules mezclados en el cajón del armario. Los veinte zoquetes son exactamente iguales, salvo por el color. El cuarto está
                absolutamente a oscuras y tú quieres dos zoquetes del mismo color. ¿Cuál es el menor número de zoquetes que debes sacar del cajón para estar seguro de que tienes un par del mismo color?
                </Paragraph>
                <br/>
                <Input
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Escribe la respuesta"
                  value = {this.state.ans.zoq}
                  onChange = {(event) => this.handleChangeTxt(event, 'zoq') }
                />
                <br/><br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Problema de Peso.</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Si una pelota de basket pesa ½ kilo más la mitad de su propio peso, ¿cuánto pesa?
                </Paragraph>
                <br/>
                <Input
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Escribe la respuesta"
                  value = {this.state.ans.ball}
                  onChange = {(event) => this.handleChangeTxt(event, 'ball') }
                />
                <br/><br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Los Tres Gatos.</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Si tres gatos atrapan tres ratas en tres minutos, ¿cuántos gatos atraparán 100 ratas en 100 minutos?
                </Paragraph>
                <br/>
                <Input
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Escribe la respuesta"
                  value = {this.state.ans.cat}
                  onChange = {(event) => this.handleChangeTxt(event, 'cat') }
                />
                <br/><br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                <b>Aptitud Logica:</b> Se practica el razonamiento en cuanto a su validez o Invalidez, y se ejercitan los métodos inductivos e investigación operativa.
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Ejercicios para Desarrollar la Logica.</Heading>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>En Busqueda de Evidencias.</Heading>
              </Box>




              <Box gridArea="Graph" background="#272829">
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Te presentan cuatro tarjetas diciéndote que las de dorso gris claro tienen círculos en la otra cara, y las de dorso negro no. Dos de las tarjetas están con el dorso hacia arriba, y las otras dos hacia abajo. ¿Cuál es el mínimo de
                    tarjetas que deberás dar vuelta para probar la verdad o falsedad de la afirmación acerca de que hay un círculo en la otra cara de las tarjetas de dorso gris claro?
                </Paragraph>
                <br/>
                <Box height="xsmall">
                <Image
                  fit="contain"
                  src={log}
                  style={{height:"10px"}}
                />
                </Box>
                <br/>
                <Input
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Escribe la respuesta"
                  value = {this.state.ans.card}
                  onChange = {(event) => this.handleChangeTxt(event, 'card') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                <b>Creatividad, Resolución de problemas y Toma de Decisiones:</b> Se estimula el pensamiento reflexivo y la búsqueda de soluciones a diferentes tipos de problemas, que incluyen también a la correcta toma de decisiones. También se desarrolla la capacidad de imaginar, inventar y crear.
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>EJERCICIOS DE CREATIVIDAD, RESOLUCIÓN DE PROBLEMAS Y TOMA DE DECISIONES.</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Los acertijos de creatividad y pensamiento lateral a menudo son situaciones extrañas que exigen una explicación. Se resuelven a través del diálogo entre el maestro acertijista, que plantea el problema, y el solucionador o
                  solucionadores, que tratan de descubrir la respuesta. 
                  <br/>En algunos casos, los acertijos, tal como se presentan, por lo general no contienen información suficiente para que el solucionador descubra la solución. Así que una parte crucial del proceso es hacer las preguntas. Las
                  preguntas pueden recibir una de sólo tres respuestas posibles: sí, no, o no tiene importancia. Cuando una línea de investigación alcanza un punto final, sin encontrar una solución satisfactoria, entonces se necesita otro enfoque, a menudo desde una dirección totalmente nueva. Allí es donde aparece el pensamiento lateral.
                  <br/>Hay personas que encuentran frustrante el hecho de que sea posible construir varias respuestas que encajan con el planteo inicial del acertijo. Sin embargo, para un buen acertijo de pensamiento lateral, la respuesta correcta será la “mejor”, en el sentido de la más apta y satisfactoria. En la vida real, también,
                  la mayoría de los problemas tiene más de una solución posible. Un buen pensador lateral no aceptará la primera solución que encuentre sino que seguirá buscando enfoques nuevos y creativos.
                  <br/>Estos problemas te enseñarán a revisar sus suposiciones sobre cualquier situación. Se necesita ser flexible, creativo y de mente abierta en las
                  preguntas, y capaz de combinar montones de claves y fragmentos de información distintos. Una vez que llegues a una solución viable, sigue adelante para refinarla o remplazarla con una solución mejor. ¡Eso es el pensamiento lateral!
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>El Problema de las Dos Piedritas.</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Años atrás, un mercader londinense quedó debiendo una gran suma de dinero a una persona que le hizo un préstamo. Esta persona se enamoró de la joven y linda hija del mercader. Le propuso, entonces, un acuerdo. Dijo que cancelaría la
                  deuda del mercader si se casaba con la hija. Tanto el mercader como su hija quedaron despavoridos. La persona que le había prestado el dinero, le propuso entonces dejar la solución del caso a la Providencia.<br/>
                  Para eso, sugirió colocar una piedra blanca y otra negra dentro de una bolsa dedinero vacía; la muchacha debería retirar una de las dos piedras.<br/>
                  Si retiraba la piedra blanca, permanecería con el padre y la deuda se perdonaría. Pero si se rehusaba a retirar la piedra, el padre seria encarcelado y ella moriría de hambre. El mercader tuvo que aceptar forzado.<br/>
                  Ellos se encontraron en el jardín del mercader, y en el mismo había un camino lleno de piedras blancas y negras (llamadas granza), en el jardín del mercader. El acreedor se agachó para levantar dos piedras, y al hacerlo, tomó muy
                  rápidamente dos piedras negras y las colocó en la bolsa de dinero, sin dudas para hacer trampa; pero fue visto por la muchacha. Le pidió entonces a la joven que retirara la piedra, que sellaría no sólo su suerte sino también la de su padre.
                  <br/>
                  ¿Qué podría hacer la muchacha para revertir esta situación?
                </Paragraph>
                <br/>
                <Input
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Escribe la respuesta"
                  value = {this.state.ans.doll}
                  onChange = {(event) => this.handleChangeTxt(event, 'doll') }
                />
                <br/>
                <br/>
                <Button
                  appearance="primary"
                  style={{backgroundColor:"#00C781"}}
                  onClick = {this.upload}
                >Enviar Actividad</Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}
export default EMOT;
