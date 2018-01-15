if (typeof window === 'undefined') {
  console.log('yay! inside the worker scope 😎')
  console.log('current context is -- ', self)

  onmessage = ({ data }) => {
    const { type, count } = data

    switch (type) {
      case 'Inc':
        console.log(`inc message, new count is ${count + 1}`)
        postMessage({ count: count + 1 })
        return
      case 'Dec':
        console.log(`dec message, new count is ${count - 1}`)

        if (count > 0) {
          postMessage({ count: count - 1 })
        }

        return
      default:
        console.log(`unknown message of type "${type}"`)
        return
    }
  }
}
