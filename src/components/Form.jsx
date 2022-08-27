import React from "react"
import Button from "./Button"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { setText, addTask } from "../store/reducers/tasks"

const Form = props => {
    const { text } = props

    return (
        <div className="Form">
            <input
                type="text"
                placeholder="Informe a tarefa"
                value={text}
                onChange={e => props.setText(e.target.value)}
            />
            <Button label="+" onClick={() => props.addTask({ text })} />
        </div>
    )
}

function mapStateToProps(state){
    return {
        text: state.tasks.inputText
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({ setText, addTask }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)