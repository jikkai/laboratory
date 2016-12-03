import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
  render () {
    return (
      <div className="fadein">
        <section className="rega-home">
          <blockquote></blockquote>
          <div className="rega-btn-group">
            <button className="primary">
              <Link to="work">作品存档</Link>
            </button>
            <button className="info">
              <Link to="about">关于</Link>
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
