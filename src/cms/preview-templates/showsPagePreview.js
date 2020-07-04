import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"

const ShowPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  return (
    <>
      <em>Please note: preview only available for page content not style</em>
      <h1>{data.title}</h1>
      <p>{data.main}</p>
      <p>{data.contact}</p>
      <ul>
        {data.upcomingShows.map((show, id) => {
          return (
            <li key={id}>
              {show.showPoster && (
                <img src={show.showPoster} alt={show.posterAlt} />
              )}
              <span>
                {format(new Date(show.date), "M/d/yyyy p")} at {show.venue} in{" "}
                {show.location}
              </span>
              <br />
              {show.ticketsUrl && (
                <a href={show.ticketsUrl}>{show.ticketsText}</a>
              )}
              <br />
              {show.secondaryInfo}
            </li>
          )
        })}
      </ul>
    </>
  )
}

ShowPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ShowPagePreview
