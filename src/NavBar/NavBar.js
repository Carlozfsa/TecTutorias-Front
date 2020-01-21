import { Sidenav, Nav, Dropdown, Icon } from 'rsuite';
import React from 'react';
import './NavBar.css';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {expanded:false, usr:this.props.usr}
    }
    Routes = (param) =>{
      this.props.history.push("/"+param+"/"+this.state.usr.Usr, {...this.state.usr})
    }
    Users =  () => {
      if (true) {
        this.props.history.push("/users/"+this.state.usr.Usr, {...this.state.usr})
      }
    }
    render() {
        return (
            <Sidenav
              expanded={this.state.expanded}
              defaultOpenKeys={['3', '4']}
              activeKey={this.state.activeKey}
              onSelect={this.handleSelect}
              style={{position:"fixed",zIndex:10}}
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item eventKey="1" icon={<Icon icon="dashboard" /> } onClick={()=>this.Routes('home')}>
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" icon={<Icon icon="group" />} onClick={this.Users} >
                    User Group
                  </Nav.Item>
                  <Dropdown
                    placement="rightStart"
                    eventKey="3"
                    title="Advanced"
                    icon={<Icon icon="magic" />}
                  >
                    <Dropdown.Item eventKey="3-1" onClick={()=>this.Routes('FODA')}>Analisis FODA</Dropdown.Item>
                    <Dropdown.Item eventKey="3-2" onClick={()=>this.Routes('LINE')}>Cuestionario de Lineamienntos</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3" onClick={()=>this.Routes('LIFE')}>Proyecto de vida</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4" onClick={()=>this.Routes('EMOT')}>Inteligencias Multiples</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4" onClick={()=>this.Routes('TIME')}>Linea de vida</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4" onClick={()=>this.Routes('ADET')}>Administracion del Tiempo</Dropdown.Item>
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
        );
    }
}
export default NavBar;