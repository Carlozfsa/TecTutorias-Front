import React from "react";
import axios from "axios";
import "./Result.css";
import Manager from "./../Manager/Manager";
import UsrBar from "./../UsrBar/UsrBar";
import NavBar from "./../NavBar/NavBar";
import { Grommet, Box, Grid, DataTable, Meter, Text } from "grommet";
class Result extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(process.env);
    this.state = { usr: this.props.location.state, data: [] };
    axios.post("/actividades/get_results", {what:'FODA'}).then((res) => {
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
           // overflow='hidden'//{{ vertical: "auto", horizontal: "scroll" }}
           // width= "1780px"
           /* pad={{
              right:"xsmall"
              //end: "0",
            }}*/
          //  box-sizing="border-box"
          >
            <Box id="BoxDT"
            /*overflow="auto"
            width="max-content"*/
              margin={{
                top:"large"
                //end: "0",
              }}
              //fill="horizontal"
              round="small"
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
                    property: "moment",
                    header: (
                      <Text>Identifica cuáles son tus mayores talentos</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "admire",
                    header: (
                      <Text>¿Qué es lo que la gente más admira de usted?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "value",
                    header: <Text>¿Cuáles son sus activos más valiosos?</Text>,
                    primary: true,
                  },
                  {
                    property: "str",
                    header: <Text>ESCRIBE LAS CUATRO “FORTALEZAS”</Text>,
                    primary: true,
                  },
                  {
                    property: "fail",
                    header: <Text>¿Cuál es la debilidad mas comun?</Text>,
                    primary: true,
                  },
                  {
                    property: "neg",
                    header: <Text>¿Cuáles son las tendencias negativas?</Text>,
                    primary: true,
                  },
                  {
                    property: "change",
                    header: (
                      <Text>¿Qué es lo que más le gustaría cambiar?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "weak",
                    header: <Text>ESCRIBE LAS CUATRO “DEBILIDADES”</Text>,
                    primary: true,
                  },
                  {
                    property: "challenge",
                    header: (
                      <Text>
                        ¿Cuál cree que sea el reto más grande que tendrá que
                        afrontar?
                      </Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "risk",
                    header: (
                      <Text>¿Cuál es el riesgo personal más grande?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "avoid",
                    header: (
                      <Text>¿Qué es lo que con mayor frecuencia evita?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "fear",
                    header: <Text>¿A qué le tiene más miedo?</Text>,
                    primary: true,
                  },
                  {
                    property: "threat",
                    header: <Text>ESCRIBE LAS CUATRO “AMENAZAS” </Text>,
                    primary: true,
                  },
                  {
                    property: "opor",
                    header: <Text>¿Qué nuevas oportunidades tiene?</Text>,
                    primary: true,
                  },
                  {
                    property: "posi",
                    header: (
                      <Text>
                        ¿Cuáles son las posibilidades que más le entusiasman?
                      </Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "no fear",
                    header: <Text>¿Qué haría si no tuviera miedo?</Text>,
                    primary: true,
                  },
                  {
                    property: "tunity",
                    header: <Text>ESCRIBE LAS CUATRO “OPORTUNIDADES”</Text>,
                    primary: true,
                  },
                  {
                    property: "F",
                    header: <Text>Fortalezas</Text>,
                    primary: true,
                  },
                  {
                    property: "O",
                    header: <Text>Oportunidades</Text>,
                    primary: true,
                  },
                  {
                    property: "D",
                    header: <Text>Debilidades</Text>,
                    primary: true,
                  },
                  {
                    property: "A",
                    header: <Text>Habilidades</Text>,
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
export default Result;
