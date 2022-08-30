import './Form.css'
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { Plus } from '../icons'
import { setText, addTask } from "../store/reducers/tasks"

const Form = props => {
    const { text } = props

    return (
        <div className="Form">
            <input
                className="FormInput"
                type="text"
                placeholder="Informe a tarefa"
                value={text}
                onChange={e => props.setText(e.target.value)}
            />
            <button
                className="FormButton"
                onClick={() => props.addTask({ text })}
                title="Adicionar">
                <Plus/>
            </button>
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