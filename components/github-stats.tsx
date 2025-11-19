import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const GitHubStats = () => {
  return (
    <GitHubCalendar
        username="KushalXCoder"
        colorScheme="dark"
        blockSize={13}
        blockMargin={5}
        fontSize={14}
    />
  )
}

export default GitHubStats