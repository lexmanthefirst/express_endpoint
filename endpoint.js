const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const utcTime = new Date().toISOString().slice(0, 19) + "Z";

  const githubFileUrl =
    "https://github.com/lexmanthefirst/express_endpoint/blob/main/endpoint.js";
  const githubRepoUrl = "https://github.com/lexmanthefirst/express_endpoint";

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
