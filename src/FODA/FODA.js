import React from 'react';
import axios from 'axios';
import './FODA.css';
import UsrBar from './../UsrBar/UsrBar';
import NavBar from './../NavBar/NavBar';
import { Grommet, Box, Grid, Heading, Paragraph} from 'grommet';
import { List, Input, Button, Alert } from 'rsuite';
import {useHistory} from 'react-router-dom';
class FODA extends React.Component {
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
    axios.post('/actUp', {usr:this.state.usr, what:what, act:this.state}).then(res => {this.setState({ans:{moment:"",   //to clean
    admire:"", value:"", str:"", fail:"", neg:"",change:"", weak:"", challenge:"",
    risk:"", avoid:"", fear:"", threat:"", opor:"", posi:"", nofear:"",
    tunity:"", F:"", O:"", D:"", A:"" }})
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
              rows={["60px","550px", "1100px", "1100px", "1100px", "900px", "500px"]}
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
                <Heading alignSelf="center" style={{ fontFamily: "'Manjari', sans-serif"}}>Analisis FODA</Heading>
              </Box>
              <Box gridArea="desc" backgroundColor="#272829">
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Es una herramienta para conocer la situación real y actual en que se encuentra una persona, organización, empresa o proyecto analizando sus características internas (Debilidades y Fortalezas) y su situación externa (Amenazas y Oportunidades) y planificar una estrategia de mejora a futuro.
                  <br/><br/>Durante la etapa de planificación estratégica y a partir del análisis FODA se debe poder contestar cada una de las siguientes preguntas:
                </Paragraph>
                <br/>
                <List>
                  {this.state.data_q.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Este recurso fue creado a principios de la década de los setenta. El objetivo del análisis FODA es determinar las ventajas competitivas personales para ponderarlas y fortalecer aquellas debilidades que se detecten y convertirlos en oportunidades.
                <br/><br/>A continuación realiza tu Análisis FODA contestando con toda veracidad en los espacios para ello destinados:
                </Paragraph>
              </Box>
              <Box gridArea="st1" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Paso 1: INTROSPECCIÓN. Fortalezas.</Heading>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Objetivo:</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Identifique lo que tiene que construir en el siguiente capítulo de tu vida. Tome conciencia de qué recursos, capacidades y cualidades conforman tus fortalezas principales.
                </Paragraph>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Instrucciones:</Heading>
                <List>
                  {this.state.data_i.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Revisa la línea de vida y observa aquellos momentos en los cuales experimentaste los mayores éxitos o victorias. ¿Qué talentos especiales sacaste a relucir en dichos momentos? Identifica cuáles son tus mayores talentos.
                  <br/>Estos pueden ser habilidades o competencias.
                  <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  style={{ width: "100%" }}
                  placeholder="¿Cuales son?"
                  value = {this.state.ans.moment}
                  onChange = {(event) => this.handleChange(event, 'moment') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Qué es lo que la gente más admira de usted? Éstas son las cualidades y virtudes personales particulares que aportas a las relaciones.
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que es lo que admiran de mi?"
                  value = {this.state.ans.admire}
                  onChange = {(event) => this.handleChange(event, 'admire') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Cuáles son sus activos más valiosos? Éstos pueden ser cosas intangibles, como experiencias de la vida y relaciones, o también activos tangibles como bienes naturales.
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que es lo mas valioso que tengo?"
                  value = {this.state.ans.value}
                  onChange = {(event) => this.handleChange(event, 'value') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Revisa sus respuestas a las preguntas anteriores. ESCRIBE LAS CUATRO “FORTALEZAS” MAS IMPORTANTES QUE DEBE CONSTRUIR PARA LAS SIGUIENTES CAPITULOS DE TU VIDA
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  style={{ width: "100%" }}
                  placeholder="¿Cuales son mis fortalezas?"
                  value = {this.state.ans.str}
                  onChange = {(event) => this.handleChange(event, 'str') }
                />
              </Box>




              <Box gridArea="st2" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Paso 2: INTROSPECCIÓN. Debilidades.</Heading>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Objetivo:</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Identifica qué es lo que le está frenando e imponiendo límites en el siguiente capítulo de su vida. Tener claridad sobre los recursos, capacidades y cualidades de su fuerza interna.
                </Paragraph>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Instrucciones:</Heading>
                <List>
                  {this.state.data_i.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Observe los momentos en los que experimentaste el fracaso. Preste especial atención a los “patrones” recurrentes de fracaso en tu vida. ¿Cuál es la debilidad o deficiencia más Común que consideras tener y que piensas que está relacionada con estos fracasos?
                  <br/>Estos pueden ser habilidades o competencias.
                  <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  style={{ width: "100%" }}
                  placeholder="¿Cuales son?"
                  value = {this.state.ans.fail}
                  onChange = {(event) => this.handleChange(event, 'fail') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  ¿Cuáles son las tendencias negativas o destructivas de su comportamiento que pueden seguir causando sufrimiento a los demás y a usted mismo en el futuro si no son atendidas?
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Cuales son estas tendencias negativas?"
                  value = {this.state.ans.neg}
                  onChange = {(event) => this.handleChange(event, 'neg') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  ¿Qué es lo que más le gustaría cambiar de usted mismo en el próximo capítulo de tu vida?
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  value = {this.state.ans.change}
                  placeholder="Que quiero cambiar?"
                  onChange={(event) => this.handleChange(event, 'change')}
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                  Revisa sus respuestas a las preguntas anteriores. ESCRIBE LAS CUATRO “DEBILIDADES” MAS IMPORTANTES QUE DEBE CONSTRUIR PARA LAS SIGUIENTES CAPITULOS DE TU VIDA.
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cuales son mis debilidades?"
                value = {this.state.ans.weak}
                onChange = {(event) => this.handleChange(event, 'weak') }/>
              </Box>







              <Box gridArea="st3" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Paso 3: INTROSPECCIÓN. Amenazas.</Heading>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Objetivo:</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Identifique los riesgos implicados en el próximo capítulo de tu vida. Ser consciente de los retos a futuro.
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Instrucciones:</Heading>
                <List>
                  {this.state.data_i.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Cuando mire hacia el horizonte, en el próximo capítulo de su vida, ¿cuál cree que sea el reto más grande que tendrá que afrontar?
                  <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cual es?" 
                value = {this.state.ans.challenge}
                onChange = {(event) => this.handleChange(event, 'challenge') }/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Cuál es el riesgo personal más gran de que tiene que tomar en el futuro?
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cual es?" 
                value = {this.state.ans.risk}
                onChange = {(event) => this.handleChange(event, 'risk') }/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Qué es lo que con mayor frecuencia evita, que eventualmente tendrá que afrontar?
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que es?"
                  value = {this.state.ans.avoid}
                  onChange = {(event) => this.handleChange(event, 'avoid') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿A qué le tiene más miedo?
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que es?"
                  value = {this.state.ans.fear}
                  onChange = {(event) => this.handleChange(event, 'fear') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Revisa sus respuestas a las preguntas anteriores. ESCRIBE LAS CUATRO “AMENAZAS” MAS IMPORTANTES QUE DEBE CONSTRUIR PARA LAS SIGUIENTES CAPITULOS DE TU VIDA.
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cuales son mis amenazas?"
                value = {this.state.ans.threat}
                onChange = {(event) => this.handleChange(event, 'threat') } />
              </Box>






              <Box gridArea="st4" background="#272829">
                <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Paso 4: INTROSPECCIÓN. Oportunidades.</Heading>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Objetivo:</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Identifique las oportunidades en el próximo capítulo de tu vida. Ser consciente de las nuevas oportunidades y posibilidades que se te presentan.
                </Paragraph>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Instrucciones:</Heading>
                <List>
                  {this.state.data_i.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Qué nuevas oportunidades y posibilidades parecen presentársele ahora? Estas pueden ser nuevas amistades, eventos o sucesos inesperados que se le están presentando.
                  <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cuales son?" 
                value = {this.state.ans.opor}
                onChange = {(event) => this.handleChange(event, 'opor') }/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Cuando piensa en el próximo capítulo de tu vida, ¿Cuáles son las posibilidades que más le entusiasman?
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cual es?" 
                value = {this.state.ans.posi}
                onChange = {(event) => this.handleChange(event, 'posi') }/>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                ¿Qué haría en el próximo capítulo de su vida si no tuviera miedo?
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input
                  componentClass="textarea"
                  rows={3}
                  style={{ width: "100%", resize: 'auto' }}
                  placeholder="Que es?"
                  value = {this.state.ans.nofear}
                  onChange = {(event) => this.handleChange(event, 'no fear') }
                />
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Revisa sus respuestas a las preguntas anteriores. ESCRIBE LAS CUATRO “OPORTUNIDADES” MAS IMPORTANTES QUE DEBE CONSTRUIR PARA LAS SIGUIENTES CAPITULOS DE TU VIDA.
                <br/><br/>Escríbelos aquí:
                </Paragraph>
                <Input style={{ width: "100%" }} placeholder="¿Cuales son mis oportunidades?" 
                value = {this.state.ans.tunity}
                onChange = {(event) => this.handleChange(event, 'tunity') }/>
              </Box>
              <Box gridArea="Graph" background="#272829">
              <Grid
                rows={["60px","40px", "100px", "40px", "100px", "50px"]}
                columns={["15%", "35%", "35%", "15%"]}
                gap="10px"
                areas={[
                  { name: 'title', start: [1, 0], end: [2, 0] },

                  { name: 'F-title', start: [1, 1], end: [1, 1] },
                  { name: 'F-area', start: [1, 2], end: [1, 2] },
                  { name: 'O-title', start: [2, 1], end: [2, 1] },
                  { name: 'O-area', start: [2, 2], end: [2, 2] },

                  { name: 'D-title', start: [1, 3], end: [1, 3] },
                  { name: 'D-area', start: [1, 4], end: [1, 4] },
                  { name: 'A-title', start: [2, 3], end: [2, 3] },
                  { name: 'A-area', start: [2, 4], end: [2, 4] },

                  { name: 'Footer', start: [1, 5], end: [2, 5] },
                ]}
              >
                <Box gridArea="title" background="#272829">
                  <Heading alignSelf="center" level={2} style={{ fontFamily: "'Manjari', sans-serif"}}>Matriz FODA.</Heading>
                </Box>
                <Box gridArea="F-title" background="#272829">
                  <Heading alignSelf="center" level={3} style={{ fontFamily: "'Manjari', sans-serif"}}>Fortalezas.</Heading>
                </Box>
                <Box gridArea="F-area" background="#272829">
                  <Input
                    componentClass="textarea"
                    rows={4}
                    style={{ width: "100%", resize: 'auto' }}
                    placeholder="Escribe tus fortalezas"
                    value = {this.state.ans.F}
                  onChange = {(event) => this.handleChange(event, 'F') }
                  />
                </Box>
                <Box gridArea="O-title" background="#272829">
                  <Heading alignSelf="center" level={3} style={{ fontFamily: "'Manjari', sans-serif"}}>Oportunidades.</Heading>
                </Box>
                <Box gridArea="O-area" background="#272829">
                  <Input
                    componentClass="textarea"
                    rows={4}
                    style={{ width: "100%", resize: 'auto' }}
                    placeholder="Escribe tus oportunidades"
                    value = {this.state.ans.O}
                  onChange = {(event) => this.handleChange(event, 'O') }
                  />
                </Box>
                <Box gridArea="D-title" background="#272829">
                  <Heading alignSelf="center" level={3} style={{ fontFamily: "'Manjari', sans-serif"}}>Debilidades.</Heading>
                </Box>
                <Box gridArea="D-area" background="#272829">
                  <Input
                    componentClass="textarea"
                    rows={4}
                    style={{ width: "100%", resize: 'auto' }}
                    placeholder="Escribe tus debilidades"
                    value = {this.state.ans.D}
                  onChange = {(event) => this.handleChange(event, 'D') }
                  />
                </Box>
                <Box gridArea="A-title" background="#272829">
                  <Heading alignSelf="center" level={3} style={{ fontFamily: "'Manjari', sans-serif"}}>Habilidades.</Heading>
                </Box>
                <Box gridArea="A-area" background="#272829">
                  <Input
                    componentClass="textarea"
                    rows={4}
                    style={{ width: "100%", resize: 'auto' }}
                    placeholder="Escribe tus Habilidades"
                    value = {this.state.ans.A}
                  onChange = {(event) => this.handleChange(event, 'A') }
                  />
                </Box>
                <Box gridArea="Footer" background="#272829">
                <Button
                  appearance="primary"
                  style={{backgroundColor:"#00C781"}}
                  onClick = {this.upload}
                >Enviar Actividad</Button>
                </Box>
              </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}
export default FODA;
