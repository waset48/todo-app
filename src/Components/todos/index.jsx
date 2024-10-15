import React from "react";
import ShortId from "shortid"
import ListView from "../todos/listview/index";
import TableView from "../todos/tableview/index";
import Controller from "../controller";

import CreateTodoForm from '../todos/create-todo-form/index'


import {Modal , ModalBody , ModalHeader} from 'reactstrap'





class Todos extends React.Component{



    state = {
        todos: [
            {
                id:'dfjf',
                text:'main todo list',
                time: new Date(),
                isComplete: true,
                isSelect: false 
            },
            {
                id:'dfjfds',
                text:'main basar kajer list',
                time: new Date(),
                isComplete: false,
                isSelect: false

            },

        ],

        isOpenTodoForm: false,
        searchTerm: '',
        view : 'list',
        filter : 'all'


    }

    toggleSelect = todoId =>{
            const todos = [...this.state.todos]
            const todo = todos.find(t=> t.id === todoId)
            todo.isSelect = !todo.isSelect

            this.setState({todos})
    }
    toggleComplete = todoId =>{
        const todos = [...this.state.todos]
        const todo = todos.find(t=> t.id === todoId)
        todo.isComplete = !todo.isComplete

        this.setState({todos})
    }

    handleSearch = value =>{
            this.setState({searchTerm: value})
    }

    toggleForm = () =>{
            this.setState({
                isOpenTodoForm : !this.state.isOpenTodoForm
            })
    }

    createTodo = todo=>{

        todo.id = ShortId.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false 


        const todos= [todo , ...this.state.todos]
        this.setState({todos})
        this.toggleForm()
    }
    handleFilter = (filter)=>{

        this.setState({filter})

    }
    changeView = (event)=>{
        this.setState({
            view: event.target.value
        })

    }
    clearSelected =(todos)=>{
        let allTodos = this.state.todos
        let selectedTodos = allTodos.filter(allTodo => !allTodo.isSelect)
        this.setState({todos: selectedTodos})
        
       

    }
    clearCompleted =(todos)=>{
        let allTodos = this.state.todos
        let completedTodos = allTodos.filter(allTodo => !allTodo.isComplete)
        this.setState({todos: completedTodos})
        
    }
    reset =(todos)=>{
        let resetTodos = []
    
        this.setState({todos: resetTodos})
        
    }
    performSearch = ()=>{

        return this.state.todos.filter(todo => 
        todo.text.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()) )

    }
    performFilter = (todos)=>{
        const {filter} = this.state
        if(filter === 'completed'){return todos.filter(todo => todo.isComplete)}
        else if(filter === 'running'){return todos.filter(todo => !todo.isComplete)}
        else { return todos}
    }


    getView = ()=>{

        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView 
                    todos={todos} 
                    toggleSelect={this.toggleSelect} 
                    toggleComplete={this.toggleComplete}/>
        ) : (
            <TableView
                        todos={todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
        )
    }


    render(){
        return(

            <div>
                <h1 className="display-4 text-center mb-5 ">Stack Todos</h1>
                <Controller 
                
                term={this.state.searchTerm}
                toggleForm={this.toggleForm}
                handleSearch={this.handleSearch}

                view={this.state.view}
                handleFilter={this.handleFilter}
                changeView={this.changeView}
                clearSelected={this.clearSelected}
                clearCompleted={this.clearCompleted}
                reset={this.reset}

                />
               
               <div>
                {this.getView()}
               </div>

                <Modal
                    isOpen = {this.state.isOpenTodoForm}
                    toggle= { this.toggleForm}
                    >
                    <ModalHeader toggle={this.toggleForm}>
                            Create New to-do Item 
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm  createTodo = {this.createTodo}/>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default Todos