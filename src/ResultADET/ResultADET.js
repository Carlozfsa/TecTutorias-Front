import React from "react";
import axios from "axios";
import "./ResultADET.css";
import Manager from "./../Manager/Manager";
import UsrBar from "./../UsrBar/UsrBar";
import NavBar from "./../NavBar/NavBar";
import { Grommet, Box, Grid, DataTable, Meter, Text } from "grommet";
class ResultADET extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(process.env);
    this.state = { usr: this.props.location.state, data: []  };
    axios.post("/actividades/get_results", {what:"ADET"}).then((res) => {
      console.log(res);
      this.setState({
        data: res.data.Activities.flatMap((x) => {
          let dti= {}
          x.content.data_i.forEach((data_i,index) =>{

            dti['dtis_'+index+'_DDT'] = data_i.DDT;
            dti['dtis_'+index+'_Sol'] = data_i.Sol;
          });

          let dti2={}
          x.content.data_i_2.forEach((data_i_2,index) =>{

            dti2['dti2s_'+index+'_Categoria'] = data_i_2.Categoria;
            dti2['dti2s_'+index+'_Lunes'] = data_i_2.Lunes;
            dti2['dti2s_'+index+'_Martes'] = data_i_2.Martes;
            dti2['dti2s_'+index+'_Miercoles'] = data_i_2.Miercoles;
            dti2['dti2s_'+index+'_Jueves'] = data_i_2.Jueves;
            dti2['dti2s_'+index+'_Viernes'] = data_i_2.Viernes;
            dti2['dti2s_'+index+'_Sabado'] = data_i_2.Sabado;
            dti2['dti2s_'+index+'_Domingo'] = data_i_2.Domingo;
            
          });


          return {...dti, ...dti2};
        }),
      });

      /*const tblSchedule =[
        {horario:"dti2s_0_Categoria", lun:"dti2_0_Lunes", mart:"dti2_0_Marte", mier:"dti2_0_Miercoles", juev:"dti2_0_Jueves", vier:"dti2_0_Viernes", sab:"dti2_0_Sabado", 
        dom:"dti2_0_Domingo"},
        {horario:"dti2s_1_Categoria", lun:"dti2_1_Lunes", mart:"dti2_1_Marte", mier:"dti2_1_Miercoles", juev:"dti2_1_Jueves", vier:"dti2_1_Viernes", sab:"dti2_1_Sabado", 
        dom:"dti2_1_Domingo"},
        {horario:"dti2s_2_Categoria", lun:"dti2_2_Lunes", mart:"dti2_2_Marte", mier:"dti2_2_Miercoles", juev:"dti2_2_Jueves", vier:"dti2_2_Viernes", sab:"dti2_2_Sabado", 
        dom:"dti2_2_Domingo"},
        {horario:"dti2s_3_Categoria", lun:"dti2_3_Lunes", mart:"dti2_3_Marte", mier:"dti2_3_Miercoles", juev:"dti2_3_Jueves", vier:"dti2_3_Viernes", sab:"dti2_3_Sabado", 
        dom:"dti2_3_Domingo"},
        {horario:"dti2s_4_Categoria", lun:"dti2_4_Lunes", mart:"dti2_4_Marte", mier:"dti2_4_Miercoles", juev:"dti2_4_Jueves", vier:"dti2_4_Viernes", sab:"dti2_4_Sabado", 
        dom:"dti2_4_Domingo"},
        {horario:"dti2s_5_Categoria", lun:"dti2_5_Lunes", mart:"dti2_5_Marte", mier:"dti2_5_Miercoles", juev:"dti2_5_Jueves", vier:"dti2_5_Viernes", sab:"dti2_5_Sabado", 
        dom:"dti2_5_Domingo"},
        {horario:"dti2s_6_Categoria", lun:"dti2_6_Lunes", mart:"dti2_6_Marte", mier:"dti2_6_Miercoles", juev:"dti2_6_Jueves", vier:"dti2_6_Viernes", sab:"dti2_6_Sabado", 
        dom:"dti2_6_Domingo"},
        {horario:"dti2s_7_Categoria", lun:"dti2_7_Lunes", mart:"dti2_7_Marte", mier:"dti2_7_Miercoles", juev:"dti2_7_Jueves", vier:"dti2_7_Viernes", sab:"dti2_7_Sabado", 
        dom:"dti2_7_Domingo"},
        {horario:"dti2s_8_Categoria", lun:"dti2_8_Lunes", mart:"dti2_8_Marte", mier:"dti2_8_Miercoles", juev:"dti2_8_Jueves", vier:"dti2_8_Viernes", sab:"dti2_8_Sabado", 
        dom:"dti2_8_Domingo"},
        {horario:"dti2s_9_Categoria", lun:"dti2_9_Lunes", mart:"dti2_9_Marte", mier:"dti2_9_Miercoles", juev:"dti2_9_Jueves", vier:"dti2_9_Viernes", sab:"dti2_9_Sabado", 
        dom:"dti2_9_Domingo"},
        {horario:"dti2s_10_Categoria", lun:"dti2_10_Lunes", mart:"dti2_10_Marte", mier:"dti2_10_Miercoles", juev:"dti2_10_Jueves", vier:"dti2_10_Viernes", sab:"dti2_10_Sabado", 
        dom:"dti2_10_Domingo"},
        {horario:"dti2s_11_Categoria", lun:"dti2_11_Lunes", mart:"dti2_11_Marte", mier:"dti2_11_Miercoles", juev:"dti2_11_Jueves", vier:"dti2_11_Viernes", sab:"dti2_11_Sabado", 
        dom:"dti2_11_Domingo"},
        {horario:"dti2s_12_Categoria", lun:"dti2_12_Lunes", mart:"dti2_12_Marte", mier:"dti2_12_Miercoles", juev:"dti2_12_Jueves", vier:"dti2_12_Viernes", sab:"dti2_12_Sabado", 
        dom:"dti2_12_Domingo"},
        {horario:"dti2s_13_Categoria", lun:"dti2_13_Lunes", mart:"dti2_13_Marte", mier:"dti2_13_Miercoles", juev:"dti2_13_Jueves", vier:"dti2_13_Viernes", sab:"dti2_13_Sabado", 
        dom:"dti2_13_Domingo"},
        {horario:"dti2s_14_Categoria", lun:"dti2_14_Lunes", mart:"dti2_14_Marte", mier:"dti2_14_Miercoles", juev:"dti2_14_Jueves", vier:"dti2_14_Viernes", sab:"dti2_14_Sabado", 
        dom:"dti2_14_Domingo"},
        {horario:"dti2s_15_Categoria", lun:"dti2_15_Lunes", mart:"dti2_15_Marte", mier:"dti2_15_Miercoles", juev:"dti2_15_Jueves", vier:"dti2_15_Viernes", sab:"dti2_15_Sabado", 
        dom:"dti2_15_Domingo"},
        {horario:"dti2s_16_Categoria", lun:"dti2_16_Lunes", mart:"dti2_16_Marte", mier:"dti2_16_Miercoles", juev:"dti2_16_Jueves", vier:"dti2_16_Viernes", sab:"dti2_16_Sabado", 
        dom:"dti2_16_Domingo"},
        {horario:"dti2s_17_Categoria", lun:"dti2_17_Lunes", mart:"dti2_17_Marte", mier:"dti2_17_Miercoles", juev:"dti2_17_Jueves", vier:"dti2_17_Viernes", sab:"dti2_17_Sabado", 
        dom:"dti2_17_Domingo"},
        {horario:"dti2s_18_Categoria", lun:"dti2_18_Lunes", mart:"dti2_18_Marte", mier:"dti2_18_Miercoles", juev:"dti2_18_Jueves", vier:"dti2_18_Viernes", sab:"dti2_18_Sabado", 
        dom:"dti2_18_Domingo"},
      ];

      const columnas = [
        {
            name:"Horario",
            selector: 'horario',
        },
        {
            name:"Lunes",
            selector: 'lun',
        },
        {
            name:"Martes",
            selector: 'mart',
        },
        {
            name:"Miercoles",
            selector: 'mier',
        },
        {
            name:"Jueves",
            selector: 'juev',
        },
        {
            name:"Viernes",
            selector: 'vier',
        },
        {
            name:"Sabado",
            selector: 'sab',
        },
        {
            name:"Domingo",
            selector: 'dom',
        },
      ];
      return ( tblSchedule, columnas); */

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
            
        {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
        <Box id="BoxDT2"
           // overflow= "auto"
           // width= "max-content"
            //background="red"
             margin={{
              top:"medium",
              
              
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
                columns={ //this.state.columnas}
                    [
                  {
                    property: "dti2s_0_Categoria",
                    header: "Horario",
                    size:'600px',
                    primary: true,
                  },
                  {
                    property: "dti2s_0_Lunes",
                    header: "Lunes",
                    size:'xlarge',
                    primary: true,
                  },

                ]
                    }
           // data={this.state.tblSchedule}
                data={this.state.data}
              />
            </Box>
            </Box>
        </Grid>
      </Grommet>
    );
  }
}
export default ResultADET;