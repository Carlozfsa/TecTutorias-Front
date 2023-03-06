import React from 'react';
import './Manager.css';
import { Grommet, Accordion, AccordionPanel, Box, Grid, Text, Heading, Image, Button } from 'grommet';
import { List, FlexboxGrid } from 'rsuite';
import { DocumentUpdate } from 'grommet-icons';
import axios from 'axios';
const fallback = 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif';
const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '15px',
  fontFamily:'Manjari'
};
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const months = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
class Manager extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {usr:this.props, acts:[]}
  }
  componentDidMount() {
    axios.post('/actividades', {team:this.state.usr.Team}).then(res => {
      console.log(res)
      //this.setState({clients:res.data.User})
      let Place = '', temp = [];
      res.data.User.forEach(I=>{
        temp.push(I)
      });
      this.setState({acts:temp})
        console.log(this.state.f_clients);
    });
  }
  acts = (args) => {
    let label="Loading . . .", arr='acts';
    if (args.type === 0 ){
      label = "Listado de actividades";
    } else {
      console.log(this.state)
      label = "Personas Morales";
      arr='acts'
    }
    return (
      <AccordionPanel label={label} >
              <Box pad="small">
              <Accordion>
                {this.state[arr].map ((item, i) =>
                  <AccordionPanel label={item.Name} key={item._id}>
                  <List>
                  <List.Item>
                        <FlexboxGrid>
                          <FlexboxGrid.Item colspan={2} style={styleCenter}>
                            <Heading level="5" margin="none">{item.doc.Name}</Heading>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={4} style={styleCenter}>
                          <Heading level="5" margin="none" style={{color: item.doc.Upload ? '#00C781' : '#FF4040'}}>{ item.doc.Upload ? new Date(item.doc.Date).toLocaleDateString('es-MX', options) : 'No acabado aun' }</Heading>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={10} style={styleCenter}>

                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={4} style={styleCenter}>

                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3} style={styleCenter}>
                            <Button
                              icon={<DocumentUpdate />}
                              label="Subir"
                              color="accent-1"
                              primary={true}
                              onClick={() => {}}
                            />
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </List.Item>
                  </List>
                </AccordionPanel>
                )}
              </Accordion>
              </Box>
            </AccordionPanel>
    )
  }
  render() {
    return (
      <Grommet plain className="App">
      <br/><br/>
        <Box
          alignContent="center"
          orientation="row"
        >
          <Heading alignSelf="center" style={{ fontFamily: "'Manjari', sans-serif"}}>Equipo {this.state.usr.Team}</Heading>
        </Box>
          <Accordion>
            <this.acts 
              type={0}
            />
          </Accordion>
      </Grommet>
    );
  }
}
export default Manager;
//I.Type=="Moral" ? moral.push(I) : fisico.push(I)