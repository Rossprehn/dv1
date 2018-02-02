import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import JobForm from './JobForm'
import { Section } from './JobList'

class App extends Component {
  state = { jobs: [] }

  componentDidMount() {
    this.getListings()
  }

  getListings = () => {
    return fetch('./listings.json')
      .then(response => response.json())
      .then(jobs => {
        this.setState({ jobs })
      })
  }

  addJob = job => {
    const jobs = this.state.jobs
    jobs.unshift(job)
    this.setState({ jobs })
  }

  onSubmit = event => {
    event.preventDefault()
    console.log('submission')
    const form = event.target
    const data = new FormData(form)
    this.addJob({
      id: this.state.jobs.length + 1,
      title: data.get('title'),
      pay: data.get('pay'),
      description: data.get('description'),
      interested: []
    })
    event.target.reset()
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Section listings={this.state.jobs} />
          <aside id="side-bar">
            <h3>Add a Job</h3>
            <JobForm onSubmit={this.onSubmit} />
          </aside>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
