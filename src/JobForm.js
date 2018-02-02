import React from 'react'

export default function JobForm({ onSubmit }) {
  return (
    <form className="job-form test" onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" />
      <label htmlFor="pay">Compensation</label>
      <input type="text" name="pay" />
      <label htmlFor="description">Description</label>
      <textarea name="description" rows="8" cols="40" />
      <input type="submit" name="submit" value="Submit" />
    </form>
  )
}
