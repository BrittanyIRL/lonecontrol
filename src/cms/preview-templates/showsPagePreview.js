import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"
import isAfter from "date-fns/isAfter"
import endOfYesterday from "date-fns/endOfYesterday"

const ShowPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  const upcomingShowList = data.upcomingShows
    .filter((show) => isAfter(new Date(show.date), endOfYesterday()))
    .sort((showA, showB) => showA.date < showB.date)

  return (
    <>
      <em>Please note: preview only available for page content not style</em>
      <h1>{data.title}</h1>
      <p>{data.main}</p>
      <p>{data.contact}</p>
      <ul>
        {upcomingShowList.map((show, id) => {
          if (Object.keys(show).length <= 0) {
            return null
          }
          return (
            <li key={id}>
              {show.showPoster && (
                <img src={show.showPoster} alt={show.posterAlt} />
              )}
              <span>
                {format(new Date(show.date), "M/d/yyyy")} at {show.venue} in{" "}
                {show.location}
              </span>
              <br />
              {!show.ticketsAtDoor ? (
                show.ticketsUrl && (
                  <span>
                    <a href={show.ticketsUrl}>{show.ticketsText}</a>
                  </span>
                )
              ) : (
                <span>Tickets at Door</span>
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
