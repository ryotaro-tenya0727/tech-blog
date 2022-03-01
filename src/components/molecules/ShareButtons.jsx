import * as React from "react"
import styled from "styled-components"
import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share"

import {
  share_button_wrapper,
  share_buttons,
  share_icon,
} from "./../../../css/components/button.module.css"

const ShareButtons = ({ url, title, size }) => {
  return (
    <SButtonsWrapper className={share_button_wrapper}>
      Share this Blog &nbsp;!!
      <SButtons className={share_buttons}>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={size} round className={share_icon} />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={size} round className={share_icon} />
        </TwitterShareButton>
        <LineShareButton url={url} quote={title}>
          <LineIcon size={size} round className={share_icon} />
        </LineShareButton>
        <HatenaShareButton url={url} quote={title}>
          <HatenaIcon size={size} round className={share_icon} />
        </HatenaShareButton>
      </SButtons>
    </SButtonsWrapper>
  )
}
const SButtonsWrapper = styled.div``
const SButtons = styled.div``

export default ShareButtons
