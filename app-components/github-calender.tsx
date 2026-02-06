"use client";

import { GitHubCalendar } from "react-github-calendar";
import {  useTheme } from "next-themes";
import 'react-activity-calendar/tooltips.css';

const GitHubCalendarComp = () => {
  const { theme } = useTheme();
  return (
    <div className="mb-5">
        <h3 className="text-sm text-gray-500">Featured</h3>
        <h1 className="text-xl md:text-2xl font-bold mb-3">GitHub Calendar</h1>
        <GitHubCalendar
            username="kushalxcoder"
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
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