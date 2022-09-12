import "./TabButtons.css"

import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { refresh, setListFilter } from "../store/reducers/tasks"

const TabButtons = props => {
  const listFilter = useSelector(state => state.tasks.listFilter)
  const dispatch = useDispatch()

  const handleListFilter = filter => {
    dispatch(setListFilter(filter))
    dispatch(refresh())
  }

  return(
    <div className='TabButtonsContent'>
      <button 
        className={`TabButton ${listFilter === "SHOW_ALL" ? 'ButtonSelected' : ''}`}
        onClick={() => handleListFilter("SHOW_ALL")}>
        Todos
      </button>

      <button
        className={`TabButton ${listFilter === "SHOW_PENDING" ? 'ButtonSelected' : ''}`}
        onClick={() => handleListFilter("SHOW_PENDING")}>
        Pendentes
      </button>

      <button 
        className={`TabButton ${listFilter === "SHOW_CONCLUDED" ? 'ButtonSelected' : ''}`}
        onClick={() => handleListFilter("SHOW_CONCLUDED")}>
        Concluidos
      </button>
    </div>
  )
}

export default TabButtons