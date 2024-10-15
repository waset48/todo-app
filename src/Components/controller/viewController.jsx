import React from "react";

import {Label , Input } from 'reactstrap'

import PropTypes from 'prop-types'

 const ViewControl = ({view , changeView})=>(

    <div className="d-flex justify-content-end gap-3">

    <Label for = 'list-view' className="">
            <Input
            
            type="radio"
            name="view"
            value='list'
            id="list-view"
            onChange={changeView}
            className="d-inline-block "
            checked={view === 'list'}
    
            />

            List View 

            
    </Label>
    <Label for = 'table-view' className="">
            <Input
            
            type="radio"
            name="view"
            value='table'
            id="table-view"
            onChange={changeView}
            className="d-inline-block"
            checked={view === 'table'}
    
            />

            Table View 

            
    </Label>

    </div>
    


        

 )


 ViewControl.propTypes = {
    view : PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired 
 }

 export default ViewControl