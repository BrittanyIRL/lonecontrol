import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../../styles"
import { ShowsWrapper } from "../../pages/shows"

const ShowPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log("data: ", data)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ShowsWrapper
        title={data.title}
        main={data.main}
        contact={data.contact}
        upcomingShows={data.upcomingShows}
      />
    </ThemeProvider>
  )
}

ShowPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ShowPagePreview
