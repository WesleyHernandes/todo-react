import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { refresh } from './store/reducers/tasks'

import Form from './components/Form';
import Tasks from './components/Tasks';

const App = props => {
  props.refresh()
  
  return (
    <div className="App">
      <div className="AppContent">
        <Form />

        <div className='TabButtonsContent'>
          <button className="TabButton ButtonSelected">Todos</button>
          <button className="TabButton">Pendentes</button>
          <button className="TabButton">Concluidos</button>
        </div>

        <Tasks />
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({ refresh }, dispatch) }
}

export default connect(null, mapDispatchToProps)(App);
