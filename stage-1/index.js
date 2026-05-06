const axios = require("axios");
const fs = require("fs");

function log(message) {
  const time = new Date().toISOString();

  fs.appendFileSync(
    "app.log",
    `[${time}] ${message}\n`
  );
}

const notifications = [
  {
    Type: "Placement",
    Message: "Amazon Hiring Drive",
    Timestamp: "2026-05-06T10:00:00",
  },
  {
    Type: "Result",
    Message: "Mid Semester Results Published",
    Timestamp: "2026-05-06T09:00:00",
  },
  {
    Type: "Event",
    Message: "Hackathon Tomorrow",
    Timestamp: "2026-05-05T08:00:00",
  },
  {
    Type: "Placement",
    Message: "Microsoft Internship Opportunity",
    Timestamp: "2026-05-06T11:00:00",
  },
  {
    Type: "Event",
    Message: "AI Workshop Registration Open",
    Timestamp: "2026-05-04T07:00:00",
  },
  {
    Type: "Result",
    Message: "Project Evaluation Marks Uploaded",
    Timestamp: "2026-05-05T06:00:00",
  },
  {
    Type: "Placement",
    Message: "Google Summer Internship",
    Timestamp: "2026-05-06T12:00:00",
  },
  {
    Type: "Event",
    Message: "Technical Fest Next Week",
    Timestamp: "2026-05-03T05:00:00",
  },
];

const priorityWeight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function processNotifications() {
  log("Notification processing started");

  const sortedNotifications = notifications.sort((a, b) => {
    const weightA = priorityWeight[a.Type];
    const weightB = priorityWeight[b.Type];

    if (weightA !== weightB) {
      return weightB - weightA;
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });

  const top10Notifications =
    sortedNotifications.slice(0, 10);

  log("Top 10 notifications generated");

  console.log("\n===== TOP PRIORITY NOTIFICATIONS =====\n");

  top10Notifications.forEach((notification, index) => {
    console.log(
      `${index + 1}. ${notification.Type}`
    );

    console.log(
      ` Message : ${notification.Message}`
    );

    console.log(
      ` Timestamp : ${notification.Timestamp}`
    );

    console.log(
      "--------------------------------------"
    );
  });

  log("Notifications displayed successfully");
}

processNotifications();
