import React from 'react';
import './User.css';
import UsrBar from './../UsrBar/UsrBar';
import NavBar from './../NavBar/NavBar';
import { Grommet, Box, Grid, Heading } from 'grommet';
import { Table, Avatar, Input, InputGroup, Icon, Button } from 'rsuite';
import axios from 'axios';
const { Column, HeaderCell, Cell, Pagination } = Table;
class User extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
    //console.log(process.env)
    this.state = {usr:this.props.location.state, usrlist:[],
      curName:''}
  }
  componentDidMount() {
    axios.post('http://35.232.231.98:3001/userslist', {team:this.state.usr.Team}).then(res => {
      console.log(res)
      //this.setState({clients:res.data.User})
      let users = [];
      res.data.Users.forEach((I,J)=>{
        I.place = J;
        users.push(I)
      });
      this.setState({usrlist:users, curName:'', curPos:'',curUsr:'',curPwd:''})
      console.log(this.state.usrlist);
      
    });
  }
  render() {
    return (
      <Grommet plain className="App">
        <UsrBar usr={this.state.usr}/>
        <Grid
          rows={[process.env.REACT_APP_SCREEN_WIDTH]}
          columns={[process.env.REACT_APP_NAVBAR_WIDTH, process.env.REACT_APP_MAIN_WIDTH]}
          gap="3px"
          areas={[
            { name: 'nav', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
          ]}
        >
          <Box gridArea="nav" height="100vh" background={process.env.REACT_APP_NAVBAR_COLOR} width={process.env.REACT_APP_NAVBAR_WIDTH} elevation="small">
            <NavBar usr={this.state.usr} history = {this.props.history}/>
          </Box>
          <Box gridArea="main">
            <br/>
            <Table
              height={300}
              data={this.state.usrlist}
              style={{zIndex:0}}
              onRowClick={data => {
                console.log(data);
              }}
            >
              <Column width={100} align="center" fixed>
                <HeaderCell>Usuario</HeaderCell>
                <Cell dataKey="place"/>
              </Column>
              <Column width={100} align="center" fixed>
                <HeaderCell>Nombre</HeaderCell>
                <Cell dataKey="Name.First" />
              </Column>
              <Column width={200} fixed>
                <HeaderCell>Apellido Paterno</HeaderCell>
                <Cell dataKey="Name.Last" />
              </Column>
              <Column width={200}>
                <HeaderCell>Apellido Materno</HeaderCell>
                <Cell dataKey="Name.Last2" />
              </Column>
              <Column width={200}>
                <HeaderCell>Puesto</HeaderCell>
                <Cell dataKey="Pos" />
              </Column>
              <Column width={100}>
                <HeaderCell>Rol</HeaderCell>
                <Cell dataKey="Role" />
              </Column>
              <Column width={150} fixed="right">
                <HeaderCell>Action</HeaderCell>
                <Cell>
                  {rowData => {
                    this.showUser = () => {
                      //alert(`id:${rowData.place}`);
                      console.log(this)
                      this.setState({curName:rowData.Name.First + ' ' +
                       rowData.Name.Last + ' ' + rowData.Name.Last2,
                      curPos:rowData.Pos, curUsr:rowData.Usr, curPwd:rowData.Pwd})
                    }
                    function removeUser() {
                      alert(`id:${rowData._id}`);
                    }
                    return (
                      <span>
                        <a onClick={this.showUser}> Edit </a> |{' '}
                        <a onClick={removeUser}> Delete </a>
                      </span>
                    );
                  }}
                </Cell>
              </Column>
            </Table>
            <br/>
            <Button style={{backgroundColor:"#6FFFB0", width:"120px", fontFamily:"'Manjari', sans-serif"}} >
              <Icon icon="user-plus"  />&nbsp;&nbsp;Add User
            </Button>
            <br/>
            <Grid
              rows={['small', 'xxsmall']}
              columns={['small', '70%']}
              gap="3px"
              areas={[
                { name: 'avatar', start: [0, 0], end: [0, 0] },
                { name: 'name', start: [1, 0], end: [1,0] },
                { name: 'info', start: [1, 1], end: [1,1] }
              ]}
            >
              <Box gridArea="avatar">
                <Avatar classPrefix="avatar" circle src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
              </Box>
              <Box gridArea="name">
                <Heading level="2" margin="none">{this.state.curName}</Heading>
                <br/>
                <Heading level="3" margin="none">{this.state.curPos}</Heading>
                <br/>
                <Box direction="row">
                <InputGroup style={{width:"48%", marginRight:"15px"}}>
                  <InputGroup.Addon>
                    <Icon icon="avatar" />
                    &nbsp;&nbsp;Usuario
                  </InputGroup.Addon>
                  <Input value={this.state.curUsr} />
                </InputGroup>
                <InputGroup style={{width:"48%"}}>
                  <InputGroup.Addon>
                    <Icon icon="key" />
                    &nbsp;&nbsp;Pass
                  </InputGroup.Addon>
                  <Input type="password" value={this.state.curPwd} />
                </InputGroup>
                </Box>
              </Box>
              <Box gridArea="info">
                <InputGroup >
                  <InputGroup.Addon>
                    <Icon icon="profile" />
                    &nbsp;&nbsp;Nombre
                  </InputGroup.Addon>
                  <Input value={this.state.curName}/>
                </InputGroup>
                <br/>
                <InputGroup >
                  <InputGroup.Addon>
                    <Icon icon="building" />
                    &nbsp;&nbsp;Direccion
                  </InputGroup.Addon>
                  <Input type="password"/>
                </InputGroup>
                <br/>
                <InputGroup >
                  <InputGroup.Addon>
                    <Icon icon="birthday-cake" />
                    &nbsp;&nbsp;Cumpleaños
                  </InputGroup.Addon>
                  <Input type="password"/>
                </InputGroup>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}
export default User;
