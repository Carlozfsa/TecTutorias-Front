import React from 'react';
import axios from 'axios';
import './LIFE.css';
import UsrBar from '../UsrBar/UsrBar';
import NavBar from '../NavBar/NavBar';
import { Grommet, Box, Grid, Heading, Paragraph} from 'grommet';
import { List, Input, Button, Alert } from 'rsuite';
class LIFE extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.log(process.env)
    this.state = {usr:this.props.location.state,
      data_q:['🧶 ¿Cómo se puede destacar cada fortaleza?',
    '🧶 ¿Cómo se puede disfrutar cada oportunidad?',
    '🧶 ¿Cómo se puede defender cada debilidad?',
    '🧶 ¿Cómo se puede detener cada amenaza?'],
      data_i:['Conviértete en “observador desapegado” y revisa tu línea de vida.',
    'Contesta las siguientes preguntas y escribe tus respuestas en los espacios destinados para ello.'],
    ans:{}
    }
  }
  upload = () =>{
    console.log(this.state)
    let what = this.props.location.pathname.substring(1, this.props.location.pathname.length).substring(0,4);
    axios.post('/actUp', {usr:this.state.usr, what:what, act:this.state}).then(res => {this.setState({ans:{chars:"", act:"",
      selfchange:"", context:"", achieve:"",  goal:"",  proj:"",  feel:"", improv:"", obstacle:"", who:""}})
  
    Alert.success('La actividad se cargo con exito.', 6000)
  });
  }
  handleChange = (event, index) =>{ 
    this.setState({ ans: {...this.state.ans,  [index]:event} })
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
              rows={["95px","430px", "1000px", "700px", "800px"]}
              columns={["100%"]}
              gap="10px"
              areas={[
                { name: 'title', start: [0, 0], end: [0, 0] },
                { name: 'desc', start: [0, 1], end: [0, 1] },
                { name: 'st1', start: [0, 2], end: [0, 2] },
                { name: 'st2', start: [0, 3], end: [0, 3] },
                { name: 'st3', start: [0, 4], end: [0, 4] },
              ]}
            >
              <Box gridArea="title" background="#272829">
                <Heading alignSelf="center" style={{ fontFamily: "'Manjari', sans-serif"}}>PROYECTO DE VIDA: ¿QUÉ ES Y CÓMO CONSTRUIRLO?</Heading>
              </Box>
              <Box gridArea="desc" backgroundColor="#272829">
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Alguna vez te has preguntado dónde vas a estar de aquí a 5 años? ¿Qué vas a estar haciendo?
                  <br/><br/>Es importante sacar el tiempo para pensar y planificar un proyecto de vida, para que tengas claro los pasos para lograrlo.
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Pero primero, ¿qué es un proyecto de vida?</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Es el plan donde unimos nuestras expectativas, sueños, valores y propósitos, para poder cumplir nuestras metas. Es la dirección que cada persona le da a su vida, el sentido de nuestra existencia.<br/>
                  <br/>Para poder construir un proyecto de vida es necesario el compromiso de cada persona, ya que este proyecto debe estar acorde a nuestros intereses, habilidades y valores. Es necesario reflexionar, sacar el tiempo para meditar y poder definir esos pasos que nos van a permitir cumplir con ese proyecto de vida.<br/>
                  El proyecto de vida lo puedes realizar en el lapso que quieras, es decir, puedes trabajarlo con metas a corto, largo o mediano plazo.
                  <br/>Por ejemplo, las metas a corto plazo van de un día a un año; a mediano plazo van de uno a cinco años; y a largo plazo van de cinco a más años.
                  <br/><br/>Tú las vas acomodando de acuerdo a tus necesidades y de acuerdo a las metas. ¡Es tu elección!
                </Paragraph>
              </Box>



              <Box gridArea="st1" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>¿Qué debo de hacer para poder trazar mi proyecto de vida?</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                A continuación te vamos a mostrar algunos pasos para que los tomes en cuenta a la hora de crear tu proyecto de vida. Así que, ¡toma nota!
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={3} style={{ fontFamily: "'Manjari', sans-serif"}}>¿Quién soy?</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Para poder definir nuestro proyecto de vida es indispensable saber quién soy en este momento, ya que, ese es el punto de partida. Entonces para poder responder esa pregunta te recomendamos que puedas visualizar y responder estas interrogantes, que te van a permitir conocer un poco más de ti en el aquí y el ahora:
                </Paragraph>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Cuáles son las características que me definen? (fortalezas y debilidades)
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Cuales son mis caracteristicas?"
                  value = {this.state.ans.chars}
                  onChange = {(event) => this.handleChange(event, 'chars') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿En dónde estoy y qué estoy haciendo?
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que hago?"
                  value = {this.state.ans.act}
                  onChange = {(event) => this.handleChange(event, 'act') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Qué aspectos debería mejorar? O ¿cuáles aspectos me gustaría cambiar? (en el área emocional, familiar, espiritual, social, vocacional, etc.)
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que quiero cambiar?"
                  value = {this.state.ans.selfchange}
                  onChange = {(event) => this.handleChange(event, 'selfchange') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Cuál es mi contexto?, ¿con quién y dónde vivo?
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Cual es mi contexto?"
                  value = {this.state.ans.context}
                  onChange = {(event) => this.handleChange(event, 'context') }
                />
              </Box>




              <Box gridArea="st2" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>¿Hacia dónde quiero ir?</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Una vez teniendo claro quiénes somos y en dónde estamos, es hora de avanzar en nuestro proyecto de vida. Es acá en donde podemos empezar a plasmar esos sueños, y buscar la manera de hacerlos realidad. 
                <br/><br/>Para esto es necesario conocer hacia dónde quiero ir, y para poder ayudarte a identificarlo, te vamos a dar ejemplos de algunas interrogantes que puedes empezar a responder:
                </Paragraph>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Qué quieres lograr? Y ¿en cuánto tiempo lo quieres lograr?
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que quiero lograr?"
                  value = {this.state.ans.achieve}
                  onChange = {(event) => this.handleChange(event, 'achieve') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿En qué área quieres alcanzar dicha meta? (emocional, familiar, espiritual, social, vocacional, etc.)
                <br/>Escríbela aquí:
                </Paragraph>
                <Input
                  style={{ width: "100%" }}
                  placeholder="¿Cual es?" 
                  value = {this.state.ans.goal}
                  onChange = {(event) => this.handleChange(event, 'goal') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Es algo concreto o es todo un proyecto que requiere de más metas?
                <br/>Escríbela aquí:
                </Paragraph>
                <Input
                  style={{ width: "100%" }}
                  placeholder="Que es?"
                  value = {this.state.ans.proj}
                  onChange = {(event) => this.handleChange(event, 'proj') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Cómo quieres sentirte en ese momento?; ¿Cómo te sentirías cuando ya logres dicha meta?
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que voy a sentir?"
                  value = {this.state.ans.feel}
                  onChange = {(event) => this.handleChange(event, 'feel') }
                />
              </Box>







              <Box gridArea="st3" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>¿Qué necesito para poder lograrlo?</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Para llegar a alcanzar el proyecto de vida es necesaria conocer qué te vas a encontrar en el camino y cómo vas a afrontarlo, por eso es necesario ir respondiendo estás preguntas desde el momento en el que empiezas a planificar tus metas.
                </Paragraph>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Cómo puedo potenciar mis habilidades para poder lograr eso?
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que puedo mejorar?"
                  value = {this.state.ans.improv}
                  onChange = {(event) => this.handleChange(event, 'improv') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Con cuáles obstáculos me podría encontrar? Y, ¿cómo podría enfrentarlos?
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cual son esos obstaculos?" 
                  value = {this.state.ans.obstacle}
                  onChange = {(event) => this.handleChange(event, 'obstacle') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Voy a necesitar de alguien o de algo que me apoye para poder lograrlo? ¿Qué o quiénes?
                <br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="Quienes?"
                  value = {this.state.ans.who}
                  onChange = {(event) => this.handleChange(event, 'who') }
                />
                <br/>
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>¿Cómo vas hasta el momento?</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Recuerda tener paciencia: Por último, tenemos que entender que el proyecto de vida es un proceso que no se logrará de la noche a la mañana ni mucho menos, ya que como la propia frase lo dice, es necesario atravesar la vida para ir logrando
                  cada objetivo. Lograr cada cosa que nos propongamos es cuestión de ser pacientes: este trayecto no es para ansiosos.
                </Paragraph>
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
export default LIFE;
