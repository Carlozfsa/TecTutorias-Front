import React from "react";
import axios from "axios";
import "./ResultTest.css";
import Manager from "./../Manager/Manager";
import UsrBar from "./../UsrBar/UsrBar";
import NavBar from "./../NavBar/NavBar";
import { Grommet, Box, Grid, DataTable, Meter, Text } from "grommet";
class ResultTEST extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(process.env);
    this.state = { usr: this.props.location.state, data: [] };
    axios.post("/actividades/get_results", {what:"ADET"}).then((res) => {
      console.log(res);
      this.setState({
        data: res.data.Activities.flatMap((x) => {
          let dti= {}
          x.content.data_i.forEach((data_i,index) =>{

            dti['dtis_'+index+'_DDT'] = data_i.DDT;
            dti['dtis_'+index+'_Sol'] = data_i.Sol;
          });

          return {...dti};
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
           /* overflow='hidden'
            width= "1780px"*/
           // overflow={{ horizontal: "scroll" }}
           /* pad={{
              right:"xsmall"
              //end: "0",
            }}*/
            //box-sizing="border-box"
           // margin={{right:"200px"}}
          >
            <Box id="BoxDT"
           // overflow= "auto"
           // width= "max-content"
            //background="red"
             margin={{
              top:"large",
              
              
             // end: "0",
              }}
             // fill="horizontal"
             /* pad={{right:"small",
                    left:"small"
              }}*/
              round='small'
            >
              <DataTable
                background={{
                  header:{color:'lightgreen'},
                  body:{color:'white'}
                }}
                border={{
                  body:{color: 'black',
                  size: '2px',
                side:"vertical"},
                
                    
                    }}

                  overflow={{horizontal:"scroll"}}
                  //Columnas
                columns={[
                  {
                    property: "dtis_0_DDT",
                    header: "Desperdiciador de tiempo externo 1",
                    size:'600px',
                    primary: true,
                  },
                  {
                    property: "dtis_0_Sol",
                    header: "Solucion 1",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_1_DDT",
                    header: "Desperdiciador de tiempo externo 2",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_1_Sol",
                    header: "Solucion 2",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_2_DDT",
                    header: "Desperdiciador de tiempo externo 3",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_2_Sol",
                    header: "Solucion 3",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_3_DDT",
                    header: "Desperdiciador de tiempo externo 4",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_3_Sol",
                    header: "Solucion 4",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_4_DDT",
                    header: "Desperdiciador de tiempo externo 5",
                    size:'xlarge',
                    primary: true,
                  },
                  {
                    property: "dtis_4_Sol",
                    header: "Solucion 5",
                    size:'xlarge',
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
export default ResultTEST;