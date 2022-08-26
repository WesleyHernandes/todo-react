import React, { useState } from "react"
import Button from "./Button"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { addTask } from "../store/reducers/tasks"

const Form = props => {
    const [text, setText] = useState('')

    return (
        <div className="Form">
            <input
                type="text"
                placeholder="Informe a tarefa"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button label="+" onClick={() => props.addTask({ text })} />
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({ addTask }, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Form)