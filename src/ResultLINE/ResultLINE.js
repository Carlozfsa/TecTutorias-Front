import React from "react";
import axios from "axios";
import "./ResultLINE.css";
import Manager from "./../Manager/Manager";
import UsrBar from "./../UsrBar/UsrBar";
import NavBar from "./../NavBar/NavBar";
import { Grommet, Box, Grid, DataTable, Meter, Text } from "grommet";
class ResultLINE extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(process.env);
    this.state = { usr: this.props.location.state, data: [] };
    axios.post("/actividades/get_results", {what:'LINE'}).then((res) => {
      console.log(res);
      this.setState({
        data: res.data.Activities.flatMap((x) => {
          return x.content.ans;
        }),
      });
      //this.state.data = res.data.Activities.flatMap(x=>{return x.content.ans})
      console.log(this.state.data);
    });
  }
  render() {
    return (
      <Grommet plain className="App">
        <UsrBar usr={this.state.usr} />
        <Grid
          rows={[process.env.REACT_APP_SCREEN_WIDTH]}
          columns={[
            process.env.REACT_APP_NAVBAR_WIDTH,
            "100%",
          ]}
          gap="10px"
          areas={[
            { name: "nav", start: [0, 0], end: [0, 0] },
            { name: "main", start: [1, 0], end: [1, 0] },
          ]}
        >
          <Box
            gridArea="nav"
            height="100vh"
            background={process.env.REACT_APP_NAVBAR_COLOR}
            width={process.env.REACT_APP_NAVBAR_WIDTH}
            elevation="small"
          >
            <NavBar usr={this.state.usr} history={this.props.history} />
          </Box>
          <Box id="BoxMain"
            gridArea="main"
            background="#272829"
           /* overflow={{ vertical: "auto", horizontal: "scroll" }}
            pad={{
              end: "0",
            }}*/
          >
            <Box id="BoxDT"
              margin={{
                top:"large"
                //end: "0",
              }}
              //fill="horizontal"
              round='small'
            >
              <DataTable
                background={{
                  header:{color:"lightgreen"}, //"#272829"
                  body:{color:"white"}
                }}
                border={{
                  body:{color:'black',
                size:'2px',
              side:'bottom'}
                }}
                overflow="auto"
                columns={[
                  {
                    property: "pass",
                    header: (
                      <Text>¿Cuantas opciones tiene de acreditar una materia?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "period",
                    header: (
                      <Text>¿En qué consiste el periodo de evaluación de segunda oportunidad para acreditar una materia?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "finish",
                    header: <Text>Menciona el número de semestres que tienes para concluir tu carrera</Text>,
                    primary: true,
                  },
                  {
                    property: "credmax",
                    header: <Text>¿Cuáles son los créditos máximos que puede cursar por semestre?</Text>,
                    primary: true,
                  },
                  {
                    property: "semipre",
                    header: <Text>¿Cómo acreditar una materia de un curso semi presencial?</Text>,
                    primary: true,
                  },
                  {
                    property: "maxop",
                    header: <Text>Menciona el número de ocasiones que tienes para acreditar una materia</Text>,
                    primary: true,
                  },
                  {
                    property: "especial",
                    header: (
                      <Text>Si un alumno está en especial ¿Cuantas materias en especial pueden cursar por semestre?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "espcred",
                    header: <Text>¿Cuáles son los créditos máximos que puede tomar si tiene una materia en especial?</Text>,
                    primary: true,
                  },
                  {
                    property: "complem",
                    header: <Text>¿Hasta qué semestre tienen para cursar los 5 créditos complementarios?</Text>,
                    primary: true,
                  },
                  {
                    property: "conseq",
                    header: <Text>Menciona las consecuencias de no tener los créditos complementarios en tiempo y forma</Text>,
                    primary: true,
                  },
                  {
                    property: "resid",
                    header: <Text>¿Cuáles son los requisitos para realizar las residencias profesionales?</Text>,
                    primary: true,
                  },
                  
                ]}
                data={this.state.data}
              />
            </Box>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}
export default ResultLINE;