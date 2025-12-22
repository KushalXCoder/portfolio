"use client";

import { GitHubCalendar } from "react-github-calendar";
import 'react-activity-calendar/tooltips.css';

const GitHubCalendarComp = () => {
  return (
    <div className="mb-5">
        <h3 className="text-gray-500">Featured</h3>
        <h1 className="text-2xl font-bold">GitHub Calendar</h1>
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
    </div>
  )
}

export default GitHubCalendarComp