import React from 'react';
import axios from 'axios';
import './TIME.css';
import UsrBar from '../UsrBar/UsrBar';
import NavBar from '../NavBar/NavBar';
import { ResponsiveLine } from '@nivo/line'
import { Grommet, Box, Grid, Heading, Paragraph} from 'grommet';
import { Timeline, Input, Button, Icon, Slider, DatePicker, Alert } from 'rsuite';
class TIME extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.log(process.env)
    this.state = {usr:this.props.location.state,
      data_q:[
        {
          "id": "Mi vida",
          "color": "#D62728",
          "data": [
            {
              "x": new Date().toDateString(),
              "y": 3,
              event:"",
              id:0
            }
          ]
        }
      ],
    }
  }
  upload = () =>{
    console.log(this.state)
    let what = this.props.location.pathname.substring(1, this.props.location.pathname.length).substring(0,4);
    axios.post('/actUp', {usr:this.state.usr, what:what, act:this.state}).then(res => {this.setState({pos:{data_q:""}})

      Alert.success('La actividad se cargo con exito.', 6000)
    });
  }
  handleChange =  (event, index, field) => { 
    let pos = this.state.data_q
    pos[0].data[index][field] = event
    this.setState({ data_q:pos })
    console.log(this.state)
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
              rows={["95px","1500px"]}
              columns={["100%"]}
              gap="10px"
              areas={[
                { name: 'title', start: [0, 0], end: [0, 0] },
                { name: 'desc', start: [0, 1], end: [0, 1] },
              ]}
            >
              <Box gridArea="title" background="#272829">
                <Heading alignSelf="center" style={{ fontFamily: "'Manjari', sans-serif"}}>La Linea de la Vida.</Heading>
              </Box>
              <Box gridArea="desc" backgroundColor="#272829">
              <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                <b>OBJETIVO:</b> Observar su vida como si fueras una persona ajena a ella, con el fin de identificar patrones y etapas (capítulos) de su vida hasta el día de hoy. Cada participante describa su desarrollo o su trayectoria personal en el tiempo; Es decir, marcara los
                sucesos desde su nacimiento hasta el día de la aplicación y como estos eventos han sido representativos para el en su vida.
                <br/> La dinámica puede sufrir ajustes o o cambios según se presenten variables en el comportamiento o desarrollo de las sesiones de evento.
                </Paragraph>
                <br/>
                <Box height="medium" style={{color:"#313233"}}>
                <ResponsiveLine
                  data={this.state.data_q}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                  curve="natural"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  enableGridX={false}
                  enableGridY={false}
                  colors={{ scheme: 'set1' }}
                  lineWidth={5}
                  pointSize={12}
                  pointColor="#F2F3F4"
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  enablePointLabel={false}
                  useMesh={true}
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, .5)',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                          }
                        }
                    ]
                  }
                ]}
                enableSlices="x"
                sliceTooltip = { ({slice}) =>{
                  //console.log(this.state.data_q[0].data[slice.points[0].index])
                  return (
                    <Box background="#FFFFFF" round="xsmall" pad="medium">
                      {
                        <Paragraph>
                          {this.state.data_q[0].data[slice.points[0].index].event}
                        </Paragraph>
                      }
                    </Box>
                  )
                } }
                />
                </Box>
                <br/>
                <br/>
                <Box round="xsmall" pad="medium">
                  <Timeline>
                    {this.state.data_q[0].data.map( (item, index)=>
                      <Timeline.Item>
                        <Heading level={5}>
                          {item.x}
                          <DatePicker
                            placeholder="Editar Fecha"
                            style = { { marginLeft:"20px" } }
                            value = { new Date(this.state.data_q[0].data[index].x) }
                            onChange = { (event) => this.handleChange(event.toDateString(), index, 'x') }
                          />
                        </Heading>
                        <br/>
                        <Input
                          style={{ width: "100%", resize: 'auto' }}
                          placeholder="Escribe el evento"
                          value = {this.state.data_q[0].data[index].event}
                          onChange = { (event) => this.handleChange(event, index, 'event') }
                        />
                        <br/>
                        <Slider
                        handleStyle = {{color:"black"}}
                        defaultValue={item.y}
                        min={-10} step={1} max={10}
                        graduated
                        progress
                        onChange = { (event) => this.handleChange(event, index, 'y') }
                      />
                      </Timeline.Item>
                     )}
                  </Timeline>
                  <br/>
                  <br/>
                  <Button
                    appearance="primary"
                    style={{backgroundColor:"#27D6D5"}}
                    onClick = { () => {
                      let pos = this.state.data_q;
                      console.log(Math.random() * 101)
                      let d = new Date(  new Date(new Date(2012, 0, 1).getTime() + Math.random() * ( new Date(2012, 0, 1) - new Date() )) );
                      pos[0].data.push({
                        "x": ""+ d.toDateString(),
                        "y": 0,
                        event:" ",
                        id:(pos.length-1)
                      });
                      this.setState({ data_q:pos })
                      console.log(this.state)
                    } }
                  >Añadir Evento</Button>
                </Box>
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
/*tooltip={()=>{
                    return <Box background="#FFFFFF" round="xsmall" pad="medium">
                      <Paragraph style={{color:"#313233"}}>'
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisl nec nisi vehicula facilisis. In mollis, lectus sit amet suscipit gravida, neque sem suscipit lacus,'
                      </Paragraph><br/>
                      <Slider defaultValue={0} min={-10} step={1} max={10} graduated />
                    </Box>
                  } }*/
export default TIME;