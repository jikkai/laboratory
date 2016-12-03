import React from 'react'
import geopattern from 'geopattern'

import { works } from 'action/get'

class Work extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      works: []
    }
    this.init()
  }

  init () {
    works.then((resp) => {
      this.setState({
        works: resp.data
      })
    })
  }

  render () {
    const { works } = this.state

    return (
      <div className="fadein">
        <h4 className="center">作品存档</h4>
        <section className={works.length > 0 ? 'rega-list' : 'rega-list-loading'}>
          {
            works.map((item, i) => {
              return (
                <div key={i} style={{
                  backgroundImage: geopattern.generate(item.name).toDataUrl()
                }}>
                  <a href={item.html_url} target="_blank">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </a>
                </div>
              )
            })
          }
        </section>
      </div>
    )
  }
}

export default Work
