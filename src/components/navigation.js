import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <div>
    <Link activeStyle={{ color: "red" }} to="/about/">
      About
    </Link>
    <Link activeStyle={{ color: "red" }} to="/releases/">
      See releases
    </Link>
    <Link activeStyle={{ color: "red" }} to="/shows/">
      Shows
    </Link>
    <Link activeStyle={{ color: "red" }} to="/listen/">
      Listen
    </Link>
    <Link activeStyle={{ color: "red" }} to="/watch/">
      Watch
    </Link>
  </div>
)

export default Navigation
