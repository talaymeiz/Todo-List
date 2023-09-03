import { useState } from "react"

export function NewTodoForm({add}){
    const [newItem, setNewItem] = useState("")

    function handlerSubmit(e){
        e.preventDefault()
        if (newItem === "") return
        
        add(newItem)

        setNewItem("")
      }

return(
    <form onSubmit={handlerSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="itemd">New Item</label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
)
}