import React, { Component } from 'react'
import { css } from 'emotion'

const Worker = require('worker-loader!../counter-worker.js')

class WebWorkerCounter extends Component {
  state = {
    count: 0
  }

  style = css`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: [row-start] 1fr 1fr 1fr [row-end];
    grid-row-gap: 0.5rem;

    h1 {
      font-size: 4rem;
      margin: 1.5em 0;
      grid-row: row-start / row-end;
      text-align: center;
    }

    button {
      --fill: var(--btn-color, #000);
      --transition: 250ms ease-in-out;

      grid-column: 2;
      background: transparent;
      border: 4px solid var(--fill);
      font-family: sans-serif;
      border-radius: 2px;
      font-size: 1.5rem;
      transition: background var(--transition), color var(--transition);

      &:hover {
        background: var(--fill);
        color: #fff;
      }
    }
  `

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.worker = new Worker()
      this.worker.onmessage = ({ data }) => {
        console.log('the worker sent a message, the new count is', data.count)
        this.setState({
          count: data.count
        })
      }
    }
  }

  render() {
    const { state } = this

    return (
      <div className={this.style}>
        <h1>{state.count}</h1>

        <button
          style={{ '--btn-color': 'green' }}
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
          style={{ '--btn-color': 'indianred' }}
          onClick={() =>
            this.worker.postMessage({
              type: 'Dec',
              count: state.count
            })
          }
        >
          -1
        </button>

        <button
          style={{ '--btn-color': 'rebeccapurple' }}
          onClick={() => this.worker.terminate()}
        >
          Terminate
        </button>
      </div>
    )
  }
}

export default WebWorkerCounter
