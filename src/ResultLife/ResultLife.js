import React from "react";
import axios from "axios";
import "./ResultLife.css";
import Manager from "./../Manager/Manager";
import UsrBar from "./../UsrBar/UsrBar";
import NavBar from "./../NavBar/NavBar";
import { Grommet, Box, Grid, DataTable, Meter, Text } from "grommet";
class ResultLife extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(process.env);
    this.state = { usr: this.props.location.state, data: [] };
    axios.post("/actividades/get_results", {what:'LIFE'}).then((res) => {
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
            /*overflow={{ vertical: "auto", horizontal: "scroll" }}
            pad={{
              end: "0",
            }}*/
          >
            <Box id="BoxDT"
              margin={{
                top:"large"
                //end: "0",
              }}
             // fill="horizontal"
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
                    property: "chars",
                    header: (
                      <Text>¿Cuáles son las características que me definen?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "act",
                    header: (
                      <Text>¿En dónde estoy y qué estoy haciendo?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "selfchange",
                    header: <Text>¿Qué aspectos debería mejorar? O ¿cuáles aspectos me gustaría cambiar?</Text>,
                    primary: true,
                  },
                  {
                    property: "context",
                    header: <Text>¿Cuál es mi contexto?, ¿con quién y dónde vivo?</Text>,
                    primary: true,
                  },
                  {
                    property: "achieve",
                    header: <Text>¿Qué quieres lograr? Y ¿en cuánto tiempo lo quieres lograr?</Text>,
                    primary: true,
                  },
                  {
                    property: "goal",
                    header: <Text>¿En qué área quieres alcanzar dicha meta?</Text>,
                    primary: true,
                  },
                  {
                    property: "proj",
                    header: (
                      <Text>¿Es algo concreto o es todo un proyecto que requiere de más metas?</Text>
                    ),
                    primary: true,
                  },
                  {
                    property: "feel",
                    header: <Text>¿Cómo quieres sentirte en ese momento?; ¿Cómo te sentirías cuando ya logres dicha meta?</Text>,
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
export default ResultLife;