import React from "react"
import styled from "styled-components"
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  HatenaIcon,
  LineShareButton,
  LineIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import useMedia from "use-media"

import { share_icon } from "./../../../css/components/icon.module.css"
import { share_button_wrapper } from "./../../../css/components/button.module.css"

const ShareButtons = ({ url, title, size, words }) => {
  const IsWide = useMedia({ maxWidth: "430px" })
  size = IsWide ? 28 : size
  return (
    <SButtonsWrapper className={share_button_wrapper}>
      {words}
      <SButtons>
        <FacebookShareButton
          url={`${url}\n`}
          hashtags={["アイドルオタクプログラマーの技術ブログ"]}
        >
          <FacebookIcon size={size} round className={share_icon} />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${url}\n`}
          hashtags={["アイドルオタクプログラマーの技術ブログ"]}
        >
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
