import React, { useState } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import Button from './Button'

import { setText, toggleDone, deleteTask, refresh } from '../store/reducers/tasks'

function Tasks(props) {
    const _toggleDone = task => {
        props.toggleDone(task)
    }

    const _deleteTask = task => {
        props.deleteTask(task)
        props.refresh()
    }

    const renderTasks = () => {
        const { list } = props
        return list.map(task => (
            <div key={task.id} className="task">
                <p className="text">{task.text}</p>
                <div className="options">
                    <Button label="D" onClick={() => _toggleDone(task)} />
                    <Button label="R" onClick={() => _deleteTask(task)} />
                </div>
            </div>
        ))
    }

    return (
        <div className="tasks">
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