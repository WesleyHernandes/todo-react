import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { refresh } from './store/reducers/tasks'

import { Tab } from '@headlessui/react'

import Form from './components/Form';
import Tasks from './components/Tasks';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const App = props => {
  props.refresh()
  
  return (
    <div className="App relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-sky-400 to-blue-600">
      <div className="AppContent w-full max-w-md m-auto px-2 py-16 sm:px-0">
        <Form />

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab className={({ selected }) => classNames( 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2', selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white' )}>
              Todos
            </Tab>
            <Tab className={({ selected }) => classNames( 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2', selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white' )}>
              Pendentes
            </Tab>
            <Tab className={({ selected }) => classNames( 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2', selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white' )}>
              Concluidos
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className={classNames('rounded-xl bg-white p-3', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2')}>
                <Tasks />
            </Tab.Panel>
            <Tab.Panel className={classNames('rounded-xl bg-white p-3', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2')}>
                <Tasks />
            </Tab.Panel>
            <Tab.Panel className={classNames('rounded-xl bg-white p-3', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2')}>
                <Tasks />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({ refresh }, dispatch) }
}

export default connect(null, mapDispatchToProps)(App);
