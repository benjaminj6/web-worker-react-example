import React, { Component } from 'react'

const Worker = require('worker-loader!../counter-worker.js')

class WebWorkerCounter extends Component {
  state = {
    count: 0
  }

  componentWillMount() {
    this.worker = new Worker()
    this.worker.onmessage = ({ data }) => {
      console.log('the worker sent a message, the new count is', data.count)
      this.setState({
        count: data.count
      })
    }
  }

  render() {
    const { state } = this

    return (
      <div>
        <h1>{state.count}</h1>

        <button
          onClick={() =>
            this.worker.postMessage({
              type: 'Inc',
              count: state.count
            })
          }
        >
          +1
        </button>

        <button
          onClick={() =>
            this.worker.postMessage({
              type: 'Dec',
              count: state.count
            })
          }
        >
          -1
        </button>

        <button onClick={() => this.worker.terminate()}>Terminate</button>
      </div>
    )
  }
}

export default WebWorkerCounter
