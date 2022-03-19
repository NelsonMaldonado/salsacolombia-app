import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const TopVideos = () => {
  return (
    <div>
      <h1>Top Social Media Videos From TikTok, Youtube, Facebook, Instagram</h1>
      <Container>
        <ReactPlayer
          url="https://www.facebook.com/salsacolombia.net/videos/1053414734678602/"
          controls
        />
        Find out if you can uplaod reels here and make upload youtube
        Choreography with descriptions to each one
      </Container>
    </div>
  )
}

export default TopVideos

const Container = styled.div`
  display: flex;
`
