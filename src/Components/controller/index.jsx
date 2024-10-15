import React from "react";
import SearchPanel from "./searchPanerl";
import PropTypes from 'prop-types'

import {Row , Col} from 'reactstrap'

import FilterController from './filter-controller'
import BulkController from './BulkController'
import ViewController from './viewController'

const Controller = ({term , handleSearch , toggleForm , handleFilter, clearCompleted, clearSelected , reset, view ,changeView})=>{

   return( 
   
   <div>
        <SearchPanel
            term={term}
            handleSearch={handleSearch}
            toggleForm={toggleForm}
        
        />


        <Row className="my-4">
            <Col md={{size : 4}}>
            <FilterController handleFilter={handleFilter} />
            </Col>
            <Col md={{size : 4}} className="d-flex align-items-center justify-content-center ">
             <div>
             <BulkController clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset} />
             </div>
            </Col>
            <Col md={{size : 4}}>
            <ViewController  view={view} changeView={changeView}/>
            </Col>
        </Row>
    </div>)

}
Controller.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    view : PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    handleFilter:PropTypes.func.isRequired
     

}

export default Controller