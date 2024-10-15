import React from "react";

import {ListGroup,ListGroupItem , Input , Button} from 'reactstrap'

import PropTypes from 'prop-types'

const ListItem = ({todo, toggleSelect ,toggleComplete })=>{
    return(
        <ListGroupItem className="d-flex align-items-center justify-content-between ">

           <div className="d-flex align-items-center">
           <Input 
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange ={()=>toggleSelect(todo.id)}            
            />

            <div className="mx-3">

                <h4>{todo.text}</h4>
                <p>{new Date(todo.time).toDateString()}</p>

            </div>
           </div>

            <Button  color={todo.isComplete ? 'danger' : 'success'} onClick={()=>toggleComplete(todo.id)}>
                    {todo.isComplete ? 'Completed' : 'Running' }
            </Button>

        </ListGroupItem>
    )
}


ListItem.propTypes = {
     todo : PropTypes.object.isRequired,
     toggleSelect : PropTypes.func.isRequired,
     toggleComplete: PropTypes.func.isRequired
}

const ListView = ({todos, toggleSelect , toggleComplete})=>{
    return(
        <ListGroup>
        {todos.map(todo => (
            <ListItem 
            
            key = {todo.id}
            todo= {todo}
            toggleSelect = {toggleSelect}
            toggleComplete = {toggleComplete}


            
            />
        ))}
        </ListGroup>
    )
}

ListView.propTypes = {
    todos : PropTypes.object.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


export default ListView
