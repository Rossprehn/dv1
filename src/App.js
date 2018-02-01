import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
// import JobList from './JobList'
import JobForm from './JobForm'

class App extends Component {
  state = { jobs: [] }

  componentDidMount() {
    this.getListings()
  }

  getListings = () => {
    return fetch('./listings.json')
      .then(response => response.json())
      .then(jobs => {
        console.log(jobs)
        this.setState({ jobs })
      })
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <section>
            <ul id="job-listings">
              {this.state.jobs.map(job => (
                <li key={job.title}>
                  <h4>{job.title}</h4>
                </li>
              ))}
            </ul>
          </section>
          <aside id="side-bar">
            <h3>Add a Job</h3>
            <JobForm />
          </aside>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
