# My Fit Timer


### Group Section
***************

Team members
* Angel - Design
* Tinesha - Presentation level logic (javascript)
* Justin - Domain layer (includes logic to read/write data layer) (python)

General Description
* A stopwatch application that records the amount of time that passes between pressing the start and stop buttons.

The Stack
* Presentation Layer – HTML/CSS/JS (JQuery)
* Application Layer –   Python (Flask, SQLAlchemy)
* Data Access Layer – PostgreSQL

Initial requirements of the project. (What you planned to do). Identify any requirement changes that were made during design or implementation.
* We planned to make a stopwatch application based around a web server. This just interested each of us, and we each had skills to apply between Python for the server, PostgreSQL for the database, javascript for the presentation layer logic, and html/css for the display.

Explain how the project demonstrates your understanding and mastery of the topic. For example, for the Data Access Layer, this section would describe the framework chosen, and what patterns were used. Explain how this contributed to the quality of the project. (In other words, you didn't just tack it on at the end. :^)
* PostgreSQL was chosen for the database and SQLalchemy was the framework to interact between the db and the domain layer. these weren't necessarily better or worse than any other database or framework, we were just already familiar with them and they were plenty enough to meet project requirements. This allows for quick and scalable storage.
* Flask was the chosen server framework due to its ease of use, especially for a small project like this. Most of our time in this project was figuring out javascript logic. All that Flask and Python had to do was present the pages and pass data to/from the db. 
* We use JQuery several times throughout our javascript file for the presentation layer due to its simplicity. It is also what allows us to make the necessary POST and GET calls to exchange data with the server.

Collection of status reports and other documents describing the design and implementation process. These should include major decisions and reasons behind them. (You don't need to include detailed bug fixes unless they are germain to major decisions.)
* To be gathered

User documentation. How to run the program, what files to use for input, etc. This should be enough that I can exercise your program.
* Fill in database connection details within data_connection.py. We used PostgreSQL.
* Run 'python App.py'.
* Follow url provided by Flask in CLI.
* Press 'Start' to start timer.
* Press 'Stop' to stop timer and update the history list.

An evaluation of the final project. Include what you did right and what you did wrong. Describe what you would have liked to accomplish if you had more time, and what you would do differently if you had to do it again.
 

### Individual Section
********************

The individual sections should contain a section written by each individual student. The purpose of this section is to convince me that you understand the subject matter. This section should include an evaluation of the project from the student's perspective. (This may or may not agree with the group evaluation.)

This section should also include a discussion of what was learned in the course. This should not be a rehash of the lecture notes or the text book. (i.e., not something you could have purchased or someone else could have written for you). It should contain what insights you gained from the course, especially pertaining to the group project or real-life experiences. It should not be a list of facts that you learned, but how it helped you with your project, your job, etc. How could what you learned help you to do the project better if you were to do it over again?
