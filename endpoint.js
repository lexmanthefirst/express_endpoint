const express = require("express");
const app = express();

app.get("/endpoint", (req, res) => {
  const { slackName, track } = req.query;
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const utcTime = new Date().toISOString();

  const githubFileUrl =
    "https://github.com/username/repo/blob/main/file_name.ext"; // Replace with actual URL
  const githubRepoUrl = "https://github.com/username/repo"; // Replace with actual URL

  // Validate UTC time +/- 2 hours
  const currentTime = new Date();
  const currentUtcOffset = currentTime.getTimezoneOffset() / 60; // Offset in hours

  if (currentUtcOffset < -2 || currentUtcOffset > 2) {
    return res.status(400).json({ error: "UTC time not within valid range" });
  }

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

module.exports = app;
