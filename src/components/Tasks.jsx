import "./Tasks.css"
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import { X, Check } from '../icons'
import { setText, toggleDone, deleteTask, refresh } from '../store/reducers/tasks'

function Tasks(props) {
    const handleToggleDone = task => {
        props.toggleDone(task)
        props.refresh()
    }

    const handleDeleteTask = task => {
        props.deleteTask(task)
        props.refresh()
    }

    const renderTasks = () => {
        const { list } = props

        if(list.length > 0){
            return list.map(task => {
                const TaskClass = task.completed ? 'TaskCompleted' : ''

                return(
                    <div key={task.id} className={`Task ${TaskClass}`}>
                        <p className="TaskText">{task.text}</p>
                        <div className="TaskOptions flex items-center gap-2">
                            <button
                                className="TaskButton" 
                                onClick={() => handleToggleDone(task)}
                                title="Editar">
                                <Check />
                            </button>

                            <button
                                className="TaskButton" 
                                onClick={() => handleDeleteTask(task)}
                                title="Remover">
                                <X />
                            </button>
                        </div>
                    </div>
                )
            })
        }else{
            return (
                <div className="Task">
                    <p className="TaskText">Nenhuma tarefa na lista</p>
                </div>
            )
        }
    }

    return (
        <div className="Tasks">
            {renderTasks()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.tasks.list
    }
}

const mapDispatchToProps = dispatch => {
    return { ...bindActionCreators({ setText, toggleDone, deleteTask, refresh }, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Tasks)