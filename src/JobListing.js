import React from 'react'

export class JobListing extends React.Component {
  render() {
    return (
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
          {this.props.jobs
            .slice(0)
            .reverse()
            .map(job => (
              <li key={job.id}>
                <h4>{job.title}</h4>
                <small>{job.pay}</small>
                <p>{job.description}</p>
                <small>'${job.interested.length} dinos are interested in this job'</small>
              </li>
            ))}
        </ul>
      </section>
    )
  }
}
