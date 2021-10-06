# My Fit Timer

Team members
* Angel Plata - Design
* Tinesha Erskine - Presentation level logic (javascript)
* Justin Edwards (lead) - Domain layer (includes logic to read/write data layer) (python)

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

The following are some screenshots we took during the planning phase to assign roles and get started. 

![Planning1](CourseRelated/Planning1.png?raw=true)

![Planning2](CourseRelated/Planning2.png?raw=true)

Status Reports:

![Report1](CourseRelated/Report1.png?raw=true)

![Report2](CourseRelated/Report2.png?raw=true)

User documentation. How to run the program, what files to use for input, etc. This should be enough that I can exercise your program.
* Fill in database connection details within data_connection.py. We used PostgreSQL.
* Run 'python App.py'.
* Follow url provided by Flask in CLI.
* Press 'Start' to start timer.
* Press 'Stop' to stop timer and update the history list.

An evaluation of the final project. Include what you did right and what you did wrong. Describe what you would have liked to accomplish if you had more time, and what you would do differently if you had to do it again.
* I think our final product turned out great. I think implementing a lap feature and also displaying historic lap times for each entry would make a good challenge and addition to the project. - Justin Edwards
