import React from 'react'

class ProgressBar extends React.Component {

  state = {
    scrollHeight: 0
  }

  componentDidMount () {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    this.setState({
      scrollHeight: scrolled
    })
  }

  render () {
    return <div className="progress-bar" style={{width: `${this.state.scrollHeight}%`}}></div>
  }
}

export default ProgressBar
