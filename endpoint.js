const express = require("express");
const app = express();

app.get("/endpoint", (req, res) => {
  const { slack_name, track } = req.query;
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const utcTime = new Date().toISOString();

  const githubFileUrl =
    "https://github.com/lexmanthefirst/express_endpoint/blob/main/endpoint.js";
  const githubRepoUrl = "https://github.com/lexmanthefirst/express_endpoint";

  // Validate UTC time +/- 2 hours
  const currentTime = new Date();
  const currentUtcOffset = currentTime.getTimezoneOffset() / 60; // Offset in hours

  currentUtcOffset < -2 ||
    (currentUtcOffset > 2 &&
      res.status(400).json({ error: "UTC time not within valid range" }));

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
