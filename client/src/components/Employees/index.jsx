import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../shared/Layout'
import * as EmployeeService from '../../shared/EmployeeService'

// todo: implement add/edit/delete

class Employees extends Component {
  state = {
    employees: []
  }

  componentDidMount () {
    EmployeeService.getEmployees()
      .then(({data}) => this.setState({employees: data}))
  }

  render () {
    return (
      <Layout>
        <h2>List of employees</h2>
        
        <div className="columns">
        {this.state.employees.map(e => {
          return (
            <div className="column">
            <div className='card ' key={e.id}>
              <header className="card-header">
                <div className='card-header-title'>{e.name}</div>
              </header>
              <div className="card-image">
                <img src={`https://picsum.photos/240/240?random=${e.id}`} alt=""/>
              </div>
              <div className='card-content'>
                {e.title}
              </div>
              <div className='card-footer'>
                <Link to={`/reviews/${e.id}`} className='card-footer-item'>View performance review</Link>
              </div>
            </div>
            </div>
          )
        })}
        </div>
      </Layout>
    )
  }
}

export default Employees
