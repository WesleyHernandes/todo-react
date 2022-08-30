import "./TabButtons.css"

import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { setListFilter } from "../store/reducers/tasks"

const TabButtons = props => {
  const listFilter = useSelector(state => state.tasks.listFilter)
  const dispatch = useDispatch()

  return(
    <div className='TabButtonsContent'>
      <button 
        className={`TabButton ${listFilter === "SHOW_ALL" ? 'ButtonSelected' : ''}`}
        onClick={() => dispatch(setListFilter("SHOW_ALL"))}>
        Todos
      </button>

      <button
        className={`TabButton ${listFilter === "SHOW_PENDING" ? 'ButtonSelected' : ''}`}
        onClick={() => dispatch(setListFilter("SHOW_PENDING"))}>
        Pendentes
      </button>

      <button 
        className={`TabButton ${listFilter === "SHOW_CONCLUDED" ? 'ButtonSelected' : ''}`}
        onClick={() => dispatch(setListFilter("SHOW_CONCLUDED"))}>
        Concluidos
      </button>
    </div>
  )
}

export default TabButtons