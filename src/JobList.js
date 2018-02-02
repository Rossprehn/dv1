import React from 'react'

export class Section extends React.Component {
  createListItem(item) {
    return (
      <li key={item.id}>
        <h4>{item.title}</h4>
        <small>{item.pay}</small>
        <p>{item.description}</p>
        <small>{item.interested.length} dinos are interested in this job</small>
      </li>
    )
  }
  render() {
    return (
      <section>
        <h4>Job Listings</h4>
        <ul id="job-listings">{this.props.listings.map(this.createListItem)}</ul>
      </section>
    )
  }
}
