import React from 'react';
import axios from 'axios';
import './LINE.css';
import UsrBar from '../UsrBar/UsrBar';
import NavBar from '../NavBar/NavBar';
import { Grommet, Box, Grid, Heading, Paragraph} from 'grommet';
import { List, Input, Button } from 'rsuite';
class LINE extends React.Component {
  constructor(props) {
    super(props);
    console.log(process.env)
    this.state = {usr:this.props.location.state,
      data_q:['🧶 ¿Cuantas opciones tiene de acreditar una materia?',
    '🧶 ¿En qué consiste el periodo de evaluación de segunda oportunidad para acreditar una materia?',
    '🧶 Menciona el número de semestres que tienes para concluir tu carrera',
    '🧶 ¿Cuáles son los créditos máximos que puede cursar por semestre?',
    '🧶 ¿Cómo acreditar una materia de un curso semi presencial?',
    '🧶 Menciona el número de ocasiones que tienes para acreditar una materia',
    '🧶 Si un alumno está en especial ¿Cuantas materias en especial pueden cursar por semestre?',
    '🧶 ¿Cuáles son los créditos máximos que puede tomar si tiene una materia en especial?',
    '🧶 ¿Hasta qué semestre tienen para cursar los 5 créditos complementarios?',
    '🧶 Menciona las consecuencias de no tener los créditos complementarios en tiempo y forma',
    '🧶 ¿Cuáles son los requisitos para realizar las residencias profesionales?',],
    ans:{}
    }
  }
  upload = () =>{
    console.log(this.state)
    let what = this.props.location.pathname.substring(1, this.props.location.pathname.length).substring(0,4);
    axios.post('/actUp', {usr:this.state.usr, what:what, act:this.state}).then(res => {});
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
              rows={["95px","1100px"]}
              columns={["100%"]}
              gap="10px"
              areas={[
                { name: 'title', start: [0, 0], end: [0, 0] },
                { name: 'desc', start: [0, 1], end: [0, 1] },
              ]}
            >
              <Box gridArea="title" background="#272829">
                <Heading alignSelf="center" style={{ fontFamily: "'Manjari', sans-serif"}}>Cuestionario de los Lineamiento para la Evaluación y Acreditación de Asignaturas.</Heading>
              </Box>
              <Box gridArea="desc" backgroundColor="#272829">
              <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Instrucciones: Con el conocimiento que se tiene a la fecha en el semestre que está cursando, favor de contestar las siguientes preguntas que están basadas en los lineamientos para la evaluación y acreditación de asignatura
                </Paragraph>
                <List>
                  {this.state.data_q.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829", textAlign:"justify"}}>
                      {item}
                      <Input
                        style={{ width: "100%" }}
                        placeholder="Tu Respuesta"
                        value = {this.state.ans[index]}
                        onChange = {(event) => this.handleChange(event, index) }
                      />
                    </List.Item>
                  )}
                </List>
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
export default LINE;
