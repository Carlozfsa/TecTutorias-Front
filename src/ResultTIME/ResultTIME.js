import React from "react";
import axios from "axios";
import "./ResultTime.css";
import Manager from "./../Manager/Manager";
import UsrBar from "./../UsrBar/UsrBar";
import NavBar from "./../NavBar/NavBar";
import { Grommet, Box, Grid, DataTable, Meter, Text } from "grommet";
class ResultTIME extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(process.env);
    this.state = { usr: this.props.location.state, data: [] };
    axios.post("/actividades/get_results", {what:'TIME'}).then((res) => {
      console.log(res);
      this.setState({
        data: res.data.Activities.flatMap((x) => {
          let datasq= {}
          //x.content.data_q.forEach(data_q=>data_q.data.forEach(data=>{
            x.content.data_q.forEach(data_q=>data_q.data.forEach((data,index)=>{

              datasq['datasqs_'+index+'_x'] = data_q.data.x;
            datasq['datasqs_'+index+'_event'] = data_q.data.event;
            }));
            
         
            
         // });
          return {...datasq};
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

          >
            <Box id="BoxDT"

              margin={{
                top:"large"

              }}
              
              round="small"
            >
              <DataTable
                background={{
                  header:{color:"lightgreen"},
                  body:{color:"white"}
                }}
                border={{
                  body:{color:'black',
                size:'2px',
              side: "all"}
                }}
                overflow="auto"
                columns={[
    
                  {
                    property: "datasqs_0_event",
                    header: (
                      <Text>IPrueba Loca</Text>
                    ),
                    primary: true,
                  },
                  {
                    property:"scoress_Ling_perc",
                    header:(<Text>Inteligencia Linguistica %</Text>
                    ),
                  },
                  {
                    property: "scoress_Math_score",
                    header: (
                      <Text>Inteligencia Logico-Matematica Puntaje total</Text>
                    ),
                    primary: true,
                  },
                  {
                    property:"scoress_Math_perc",
                    header:(<Text>Inteligencia Logico-Matematica %</Text>
                    ),
                  },
                  {
                    property: "scoress_Space_score",
                    header: (
                      <Text>Inteligencia Espacial Puntaje total</Text>
                    ),
                    primary: true,
                  },
                  {
                    property:"scoress_Space_perc",
                    header:(<Text>Inteligencia Espacial %</Text>
                    ),
                  },
                  {
                    property: "scoress_Phys_score",
                    header: (
                      <Text>Inteligencia Fisica-Kinestesica Puntaje total</Text>
                    ),
                    primary: true,
                  },
                  {
                    property:"scoress_Phys_perc",
                    header:(<Text>Inteligencia Fisica-Kinestesica %</Text>
                    ),
                  },
                  {
                    property: "scoress_Music_score",
                    header: (
                      <Text>Inteligencia Musical Puntaje total</Text>
                    ),
                    primary: true,
                  },
                  {
                    property:"scoress_Music_perc",
                    header:(<Text>Inteligencia Musical %</Text>
                    ),
                  },
                  {
                    property: "scoress_Pers_score",
                    header: (
                      <Text>Inteligencia Interpersonal Puntaje total</Text>
                    ),
                    primary: true,
                  },
                  {
                    property:"scoress_Pers_perc",
                    header:(<Text>Inteligencia Interpersonal %</Text>
                    ),
                  },
                  {
                    property: "square",
                    header:(<Text>Cuadrados encontrados</Text>),
                    primary: true,
                  },
                  {
                    property: "zoq",
                    header:(<Text>Zoquetes mencionados</Text>),
                    primary: true,
                  },
                  {
                    property: "ball",
                    header:(<Text>Peso de la pelota mencionado</Text>),
                    primary: true,
                  },
                  {
                    property: "cat",
                    header:(<Text>Respuesta a la pregunta hecha con gatos</Text>),
                    primary: true,
                  },
                  {
                    property: "card",
                    header:(<Text>Minimo de tarjetas mencionados</Text>),
                    primary: true,
                  },
                  {
                    property: "doll",
                    header:(<Text>Respuesta para revertir la situacion del mercader y su hija</Text>),
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
export default ResultTIME;
