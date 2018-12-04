import React from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'

class socialMediaButtons extends React.Component {
  state = {
    url: '',
  }

  componentDidMount() {
    if (window) {
      this.setState({ url: window.location.href })
    }
  }

  render() {
    const { description, title } = this.props
    const { url } = this.state

    return (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '10px',
        }}
      >
        <FacebookShareButton url={url} quote={description}>
          <FacebookIcon size={50} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} via="livingdocsIO">
          <TwitterIcon size={50} round />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon size={50} round />
        </GooglePlusShareButton>
        <WhatsappShareButton url={url} title={description}>
          <WhatsappIcon size={50} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={url} title={title} description={description}>
          <LinkedinIcon size={50} round />
        </LinkedinShareButton>
        <RedditShareButton url={url} title={title}>
          <RedditIcon size={50} round />
        </RedditShareButton>
      </span>
    )
  }
}

export default socialMediaButtons
