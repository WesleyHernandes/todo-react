import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { refresh } from './store/reducers/tasks'

const App = props => {
  props.refresh()

  return (
    <div className="App">
      <Form />
      <Tasks />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ refresh }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
