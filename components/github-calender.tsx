"use client";

import { GitHubCalendar } from "react-github-calendar";
import 'react-activity-calendar/tooltips.css';

const GitHubCalendarComp = () => {
  return (
    <GitHubCalendar
        username="kushalxcoder"
        colorScheme="light"
        blockSize={12}
        blockMargin={3}
        tooltips={{
            activity: {
            text: activity => `${activity.level} activities on ${activity.date}`
            },
            colorLegend: {
            text: level => `Activity level ${level + 1}`
            },
        }}
    />
  )
}

export default GitHubCalendarComp