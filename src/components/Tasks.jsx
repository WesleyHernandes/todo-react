import React from "react"
import { connect } from 'react-redux'

function Tasks(props) {
    const renderTasks = () => {
        const { tasks } = props
        console.log(typeof tasks)
        return (typeof tasks === Array) ? tasks.map(task => (
            <h2 key={tasks.indexOf(task)}>{task.text}</h2>)
        ) : null
    }

    return(
        <div className="tasks">
            {renderTasks()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Tasks)