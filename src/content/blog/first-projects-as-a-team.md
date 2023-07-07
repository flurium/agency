---
title: "First projects as a team."
description: "Discover the lessons learned from our team's first projects. From overcoming challenges to effective teamwork, this article provides valuable insights for software developers on how to succeed and avoid common pitfalls"
author: "Roman Koshchei"
---

# First Projects as a Team

As a Team Lead of a group of young software developers, I will describe our first projects
and provide insights on how to avoid significant challenges.

## Leta: Why Sharing Ideas is Important

Our initial project, called Leta, posed some difficulties. Three of us formed a team for
an exam that required teamwork. However, I ended up handling most of the development work
as I had specialized knowledge. Maria focused on the presentation, and Dima took a more
relaxed approach.

Although our project was considered the best among the other groups, it lacked true
collaboration. Additionally, the project was developed using C++.

## BabbleUp: Overengineering and Refactoring

To become an actual team, we decided to include another team member and started working on
a chat application called BabbleUp. The goal was to create a chat platform with group
functionality and the ability to send photos, all using pure sockets.

We used GitHub Projects as our task board and combined it with Markdown files inside the
docs folder. Initially, it was challenging to assign tasks and determine individual
responsibilities. However, we managed to establish some basic separation:

- Database + Server Engeneer
- Communication Server Engeneer (handling requests on the server and sending responses to clients)
- Communication Client Engeneer (opposite of the previous role)
- Frontend Engeener

Although this division helped, there were instances where we had to work on tasks outside
our designated areas. I, for instance, handled a significant portion of the frontend work
while primarily focusing on the database.

### Refactoring of refactoring

At one point, I realized that the project was becoming disorganized. As a result, I
decided to refactor the codebase. My approach involved introducing abstractions and
utilizing object-oriented programming patterns. While I eliminated some redundant code,
I made the system more complex than necessary. We ended up with several layers of
abstractions that weren't actually needed.

One valuable addition I made to the project was implementing the Strategy Pattern to
switch between sending messages to contacts and groups. When users switched to the Groups
tab, the client automatically changed its strategy to the GroupStrategy, and when switching
to Contacts, it used the ContactsStrategy. I still take pride in this accomplishment.

Conclusion: Avoid overengineering and excessive refactoring unless absolutely necessary.
Keep things simple and practical.

## Thing: New Year Holidays Speedrun

Thing was a selling platform project that we had to complete during the New Year holidays.
Despite having only 1-2 weeks for the project, we faced numerous celebrations, making it
incredibly challenging to keep the team focused. However, we managed to complete it in
just five days before the exam.

The last weekends were particularly busy. To demonstrate our teamwork and skills, I wanted
to make our project repositories fully public. Unfortunately, this decision backfired as
it caused an issue one day before the presentation.

We utilized the **SendGrid** email sending service, and I spent several days preparing our
account for approval and communicating with the support team. However, one of my teammates
accidentally pushed the API key into the repository, resulting in our SendGrid account
being banned. Despite my initial frustration, the support team responded promptly, and we
regained access to our account the following morning.

Conclusion: Establish good practices early on, such as adding a .gitignore file,
conducting pull request reviews, and defining clear rules for collaboration. Embrace a
fast-paced working style.

## BidMe: Teamwork That Actually Works

Our most recent project, BidMe, bears similarities to Thing but incorporates auction-style
product listings. By this point, our team had become more cohesive and organized. Tasks
were completed quickly, and we actively supported one another. While voice meetings were
helpful, we learned the importance of having a plan and prepared a list of questions for
each meeting. Everyone was already aware of their responsibilities and knew how to
contribute effectively. Our mentor consistently pushed us to add new features, but we
prioritized completing the work and achieving an excellent grade without feeling pressured
to constantly enhance it.

Conclusion: Focus on collaboration and completing tasks as a team before striving for
constant improvement.

## Future

I am writing this article a few days before our most significant project, the graduation
project. We have been given three months to develop a website and possibly a mobile app.
Additionally, our core team is discussing a potential commercial project with another
company. As the founder, I aim to motivate my team to strive for excellence and success.
Remember, the most important lesson is **SPEED**.
