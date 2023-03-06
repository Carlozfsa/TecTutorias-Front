import React from 'react';
import axios from 'axios';
import './ADET.css';
import UsrBar from './../UsrBar/UsrBar';
import NavBar from './../NavBar/NavBar';
import { Grommet, Box, Grid, Heading, Paragraph} from 'grommet';
import { List, Input, Button, Table, Alert } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;
class ADET extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.log(process.env)
    this.state = {usr:this.props.location.state,
      data_q:['🧶 Identificar metas, objetivos y prioridades.',
    '🧶 Conocer las prácticas habituales en cuanto a la organización y planificación del tiempo.',
    '🧶 Conocer el ciclo vital del estudio y adaptar la planificación del tiempo.',
    '🧶 Seleccionar las estrategias más idóneas para alcanzar las metas, los objetivos y las prioridades.',
    '🧶 Lograr habilidades suficientes en la administración del tiempo que sirvan tanto en la vida académica como en la vida profesional.'
      ],
      data_q_2:['🧶 Puede ser un enemigo a vencer o un aliado si lo logramos organizar.',
    '🧶 Puede ser un recurso escaso, si no se controla en función de las prioridades que se le asignen a las actividades diarias aun emprendedor.',
    '🧶 Puede ser un amigo o un enemigo en el logro de los objetivos y metas que se planteen.',
    '🧶 No se puede comprar.',
    '🧶 No se puede atrapar, detener o regresar.',
    '🧶 Es lo más valioso que tiene los individuos, por lo que hay que utilizarlo con el máximo grado de efectividad.',
    '🧶 Se dice que nadie tiene suficiente tiempo, sin embargo todo el mundo tiene todo el tiempo que hay. Esta es la gran paradoja del tiempo.'
      ],
      data_q_3:['🧶 Una lista de las actividades de una semana completa, tomada con incrementos de 15 minutos cada una, facilita la utilización efectiva del tiempo.',
    '🧶 Está comprobado y es un principio fundamental de la planeación del tiempo, que toda hora empleada en planear eficazmente ahorra de tres a cuatro horas de ejecución y produce mejores resultados.',
    '🧶 Una técnica recomendable para administrar mejor el tiempo, es utilizar los últimos 20 minutos de labores, en planear el día siguiente.',
    '🧶 El tiempo del emprendedor rara vez se utiliza exactamente como él lo planea. Pero se debe procurar, dentro de lo posible, respetar las actividades y compromisos establecidos.',
    '🧶 Los resultados más efectivos se logran teniendo objetivos y programas planeados, más que por la pura casualidad.',
    '🧶 El tiempo disponible debe ser asignado a tareas en orden de prioridad, o sea que los emprendedores deben utilizar su tiempo en relación a la importancia de sus actividades.',
    '🧶 El establecer un determinado tiempo o fechas límites para cumplir con los compromisos de los emprendedores, ayuda al resto del grupo de trabajo a sobreponerse a la indecisión y a la tardanza.',
    '🧶 Evitar perder de vista los objetivos o los resultados esperados y concentrar los esfuerzos en cada actividad.',
    '🧶 No confundir movimientos con realizaciones y actividades o acciones con resultados.',
    '🧶 El tiempo utilizado en dar respuesta a problemas que surgen debe ser realista y limitado a las necesidades de cada situación en particular, ignorando aquellos problemas que tienden a resolverse por sí mismos lo que puede ahorrar mucho tiempo.',
    '🧶 Posponer o aplazar la toma de decisiones puede convertirse en hábito que desperdicia Tiempo, se pierden las oportunidades y aumenta la presión de las fechas límite establecidas.',
    '🧶 Las actividades de rutina de bajo valor para el logro de los objetivos generales deben ser delegadas o eliminadas hasta donde sea posible.',
    '🧶 Las actividades similares se deben agrupar para eliminar la repetición de acciones y reducir las interrupciones a un mínimo como contestar o hacer llamadas telefónicas.',
    '🧶 El mantener a la vista la agenda del día facilita el administrar correctamente el tiempo.',
    '🧶 El registro de cómo se piensa utilizar el tiempo en el día, en la semana o en el mes debe ser detallado, ya que omitir detalles es tan perjudicial para los objetivos del registro del tiempo, como confiar en la memoria o establecer metas irreales.'
      ],
      data_q_4:['1.- Defina claramente los objetivos y seleccione lo más importante.',
    '2.- Analice como gasta su tiempo.',
    '3.- Lleve una lista de tareas pendientes.',
    '4.- Asigne prioridad a sus tareas.',
    '5.- Planee su día desde el día anterior.',
    '6.- No deje las cosas para después.',
    '7.- Delegue en los demás.',
    '8.- Aprenda a decir “NO”.',
    '9.- Concéntrese en la tarea actual.',
    '10.- No se olvide de la persona más importante. A veces, cuando tenemos grandes proyectos en puerta, tendemos a olvidarnos de los demás y lo que es peor, de nosotros mismos. Sin embargo, para ser altamente productivos requerimos de un adecuado balance entre cuerpo y mente. Realizar actividades que nos relajen, alimentarnos de manera adecuada y compartir tiempo con nuestros seres queridos, es lo que realmente nos permite adquirir un estado de armonía y rendir al máximo por periodos prolongados. No olvide recargar sus baterías, porque solo así obtendrá la energía que necesita para concretar todos sus proyectos.',
      ],
      data_i:[
        {DDT:"", Sol:""},
        {DDT:"", Sol:""},
        {DDT:"", Sol:""},
        {DDT:"", Sol:""},
        {DDT:"", Sol:""},
    ],
    data_i_2:[
        {Categoria:"5:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"6:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"7:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"8:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"9:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"10:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"11:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"12:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"1:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"2:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"3:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"4:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"5:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"6:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"7:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"8:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"9:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"10:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"11:00pm", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
         {Categoria:"12:00am", Lunes:"", Martes:"", Miercoles:"",
         Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
        ],
        data_i_3:[
            {Categoria:"Sueño", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Comida", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Estudio", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Trabajo", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Tareas", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Actividades sociales", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Actividades religiosas", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Actividades deportivas", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Tiempo perdido", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""},
             {Categoria:"Otros", Lunes:"", Martes:"", Miercoles:"",
             Jueves:"", Viernes:"", Sabado:"", Domingo:"", Total:""}
        ]
    }
  }
  upload = () =>{
    console.log(this.state)
    let what = this.props.location.pathname.substring(1, this.props.location.pathname.length).substring(0,4);
    axios.post('/actUp', {usr:this.state.usr, what:what, act:this.state}).then(res => {

      Alert.success('La actividad se cargo con exito.', 6000)
    });
  }
  handleChange = (event, index, array, key, sum) => {
    console.log(event, index);
    let pos = this.state[array];
    pos[index][key] = event;
    if ( sum ) {
      pos[index].Total = +pos[index].Lunes + +pos[index].Martes + +pos[index].Miercoles
       + +pos[index].Jueves + +pos[index].Viernes + +pos[index].Sabado + +pos[index].Domingo;
    }
    this.setState({ [array]:pos })
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
              rows={["60px","500px", "1200px", "1400px", "1400px", "800px", "500px"]}
              columns={["100%"]}
              gap="10px"
              areas={[
                { name: 'title', start: [0, 0], end: [0, 0] },
                { name: 'desc', start: [0, 1], end: [0, 1] },
                { name: 'st1', start: [0, 2], end: [0, 2] },
                { name: 'st2', start: [0, 3], end: [0, 3] },
                { name: 'st3', start: [0, 4], end: [0, 4] },
                { name: 'st4', start: [0, 5], end: [0, 5] },
                { name: 'Graph', start: [0, 6], end: [0, 6] },
              ]}
            >
              <Box gridArea="title" background="#272829">
                <Heading alignSelf="center" style={{ fontFamily: "'Manjari', sans-serif"}}>Administracion del Tiempo</Heading>
              </Box>
              <Box gridArea="desc" backgroundColor="#272829">
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                La administración del tiempo; es uno de los recursos más apreciados. Sin embargo, se trata de un bien que no se puede ahorrar, sino que pasa, no retrocede y es imposible de recuperar. Si se malgasta, se derrocha algo muy valioso.
                <br/>La administración del tiempo se puede definir como una manera de ser y una forma de vivir. Hoy, se puede considerar al tiempo como uno de los recursos más importantes y críticos de los administradores. Es revisar y analizar nuestros conceptos sobre la correcta aplicación del tiempo.
                <br/>"Administración del tiempo" significa administrarse uno mismo, de tal manera que se pueda optimizar el rendimiento del tiempo de que se dispone.
                <br/>Para aprender a valorar el tiempo y a planificar el estudio, tanto a corto como a medio y largo plazo, es imprescindible:
                </Paragraph>
                <br/>
                <List>
                  {this.state.data_q.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Algunas de las características del tiempo son:</Heading>
              </Box>



              <Box gridArea="st1" background="#272829">
                <List>
                  {this.state.data_q_2.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Principios básicos para administrar con eficiencia el tiempo:</Heading>
                <br/>
                <List>
                  {this.state.data_q_3.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
              </Box>




              <Box gridArea="st2" background="#272829">
                <br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Los 10 puntos más importantes para mejorar sus habilidades en la administración del tiempo:</Heading>
                <br/>
                <List>
                  {this.state.data_q_4.map((item,index)=>
                    <List.Item key={index} index={index} style={{background:"#272829"}}>
                      {item} 
                    </List.Item>
                  )}
                </List>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                    <b>Desperdiciador De Tiempo (DDT):</b> Es cualquier cosa que impida que una persona alcance sus objetivos de la manera más efectiva posible.
                </Paragraph>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                    <b>Desperdiciadores de tiempo Externos vs. Internos.</b> Los DDT se dividen en externos, si son provocados por otras personas, o internos si son provocados por nosotros mismos.
                </Paragraph>
                <br/><br/>
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Desperdiciadores de tiempo:</Heading>
                <br/>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                En el siguiente cuadro describir los desperdiciadores del tiempo que el alumno considere tenga en su día a día, en la columna derecha anotar los posibles soluciones a las desperdiciadores del tiempo.
                </Paragraph>
                <br/>
                <Table
                  autoHeight={true}
                  rowHeight={60}
                  data={this.state.data_i}
                  width={600}
                  style={{
                    left: '50%',
                    transform: 'translate(-50%, 0%)',
                    borderRadius: "13px"
                  }}
                  onRowClick={data => {
                    console.log(data);
                  }}
                >
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Desperdiciadores de Tiempo Externos</HeaderCell>
                        <Cell dataKey="DDT">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    placeholder="D.D.T. Externo"
                                    value = {rowData.DDT}
                                    onChange = { (event) => {
                                        console.log(event, index);
                                        let pos = this.state.data_i[index];
                                        pos.DDT = event;
                                        this.setState({ ['data_i['+index+']']:pos })
                                    } }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Solucion</HeaderCell>
                        <Cell dataKey="Sol">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    placeholder="Su Solucion"
                                    value = {rowData.Sol}
                                    onChange = { (event) => {
                                        console.log(event, index);
                                        let pos = this.state.data_i[index];
                                        pos.Sol = event;
                                        this.setState({ ['data_i['+index+']']:pos })
                                    } }
                                />
                            }
                        </Cell>
                    </Column>
                </Table>
              </Box>







              <Box gridArea="st3" background="#272829">
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Ejercicio I</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                Uno de los primeros pasos para mejorar la habilidad de administrar el tiempo es realizando un análisis de cómo se ha estado utilizando hasta este momento el tiempo.
                <br/>Elabora una tabla para registrar por hora las actividades que realizas diariamente.
                </Paragraph>
                <br/>
                <Table
                  autoHeight={true}
                  rowHeight={60}
                  data={this.state.data_i_2}
                  
                  style={{
                    left: '50%',
                    transform: 'translate(-50%, 0%)',
                    borderRadius: "13px"
                  }}
                  onRowClick={data => {
                    console.log(data);
                  }}
                >
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Hora</HeaderCell>
                        <Cell dataKey="Categoria" style={{color:"#313233"}}/>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Lunes</HeaderCell>
                        <Cell dataKey="Lunes">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Lunes}
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_2', 'Lunes', false) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Martes</HeaderCell>
                        <Cell dataKey="Martes">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Martes}
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_2', 'Martes', false) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Miercoles</HeaderCell>
                        <Cell dataKey="Miercoles">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Miercoles}
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_2', 'Miercoles', false) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Jueves</HeaderCell>
                        <Cell dataKey="Jueves">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Jueves}
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_2', 'Jueves', false) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Viernes</HeaderCell>
                        <Cell dataKey="Viernes">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Viernes}
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_2', 'Viernes', false) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Sabado</HeaderCell>
                        <Cell dataKey="Sabado">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Sabado}
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_2', 'Sabado', false) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Domingo</HeaderCell>
                        <Cell dataKey="Domingo">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Domingo}
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_2', 'Domingo', false) }
                                />
                            }
                        </Cell>
                    </Column>
                </Table>
              </Box>






              <Box gridArea="st4" background="#272829">
                <Heading alignSelf="center" level={4} style={{ fontFamily: "'Manjari', sans-serif"}}>Ejercicio II</Heading>
                <Paragraph margin="none" fill={true} style={{textAlign:"justify"}}>
                    Realiza una segunda tabla para el resumen semanal de actividades:
                </Paragraph>
                <br/>
                <Table
                  autoHeight={true}
                  rowHeight={60}
                  data={this.state.data_i_3}
                  
                  style={{
                    left: '50%',
                    transform: 'translate(-50%, 0%)',
                    borderRadius: "13px"
                  }}
                  onRowClick={data => {
                    console.log(data);
                  }}
                >
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Categoria</HeaderCell>
                        <Cell dataKey="Categoria" style={{color:"#313233"}}/>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Lunes</HeaderCell>
                        <Cell dataKey="Lunes">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Lunes}
                                    type="number"
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_3', 'Lunes', true) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Martes</HeaderCell>
                        <Cell dataKey="Martes">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Martes}
                                    type="number"
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_3', 'Martes', true) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Miercoles</HeaderCell>
                        <Cell dataKey="Miercoles">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Miercoles}
                                    type="number"
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_3', 'Miercoles', true) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Jueves</HeaderCell>
                        <Cell dataKey="Jueves">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Jueves}
                                    type="number"
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_3', 'Jueves', true) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Viernes</HeaderCell>
                        <Cell dataKey="Viernes">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Viernes}
                                    type="number"
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_3', 'Viernes', true) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Sabado</HeaderCell>
                        <Cell dataKey="Sabado">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Sabado}
                                    type="number"
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_3', 'Sabado', true) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Domingo</HeaderCell>
                        <Cell dataKey="Domingo">
                            {( rowData, index ) => 
                                <Input
                                    style={{ width: "100%", resize: 'auto', height:"90%" }}
                                    value = {rowData.Domingo}
                                    type="number"
                                    onChange = { (event) => this.handleChange(event, index, 'data_i_3', 'Domingo', true) }
                                />
                            }
                        </Cell>
                    </Column>
                    <Column flexGrow={1} align="center" fixed>
                        <HeaderCell>Total de Horas</HeaderCell>
                        <Cell dataKey="Total" style={{color:"#313233"}}/>
                    </Column>
                </Table>
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
export default ADET;
