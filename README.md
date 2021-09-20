# Final Project for CEN 4031

Many of my classes involve a group programming project. It is important to remember that the goal of the project is to demonstrate your understanding of the subject matter. During this course we have studied several frameworks utilized in different language stacks. We will demonstrate the use of those frameworks in our final project.


### Forming a Group
*****************

You are free to form your own groups. There will be a discussion board where you can sign up for a group.

Each team should have a name and a group leader. The duties of the group leader is to make decisions based on input from everyone in the group. This doesn't have to be the most experienced person. The team leader also provides me with regular Status Reports and is usually the person to contact me for advice or help with the project. (Anyone should feel free to contact me for help with the course, this is for help with the project).

Everyone in the group is required to provide the code for a particular layer. One group member should do the presentation layer code, one should do the domain layer code and one should do the data access layer code. They can get help from other members of the team if necessary, but the majority of the work should be theirs. This will be very important in determining your final grade, so make sure that you participate in the project. We will be using Github for this project so I will be able to see the contributions each team member has made to the project.


### Status Reports
****************

I require weekly status reports on your project. These should be submitted by the team leader. I prefer to receive e-mail. It should contain specifics relevant to the project. It should also contain how well the program is coming together. The team member will also discuss in the status report team members who are not participating. If you are not participating, I will remove you from the group and you will be responsible for completing the entire project by yourself.


### Submitting the Final Project
******************************

Each team will submit a final project on the due date (See the dropbox for the due date). Teams will submit a word document containing a group section and an individual section. The submission should also include screenshots of the running application as well as a link to the Github repository.


### Group Section
***************

The group section contains a description of the project, what it does, how it is used, etc. It should also contain explanations on how the project demonstrates the team's understanding and (hopefully) mastery of the subject matter.

The group section should contain the following information:

Team members and their roles/assignments. This should include the project and the group paper.
A general description of the project.
Initial requirements of the project. (What you planned to do). Identify any requirement changes that were made during design or implementation.
Explain how the project demonstrates your understanding and mastery of the topic. For example, for the Data Access Layer, this section would describe the framework chosen, and what patterns were used. Explain how this contributed to the quality of the project. (In other words, you didn't just tack it on at the end. :^)
Collection of status reports and other documents describing the design and implementation process. These should include major decisions and reasons behind them. (You don't need to include detailed bug fixes unless they are germain to major decisions.)
User documentation. How to run the program, what files to use for input, etc. This should be enough that I can exercise your program.
An evaluation of the final project. Include what you did right and what you did wrong. Describe what you would have liked to accomplish if you had more time, and what you would do differently if you had to do it again.
 

### Individual Section
********************

The individual sections should contain a section written by each individual student. The purpose of this section is to convince me that you understand the subject matter. This section should include an evaluation of the project from the student's perspective. (This may or may not agree with the group evaluation.)

This section should also include a discussion of what was learned in the course. This should not be a rehash of the lecture notes or the text book. (i.e., not something you could have purchased or someone else could have written for you). It should contain what insights you gained from the course, especially pertaining to the group project or real-life experiences. It should not be a list of facts that you learned, but how it helped you with your project, your job, etc. How could what you learned help you to do the project better if you were to do it over again?


### The Project
*************

Complete the following MyFitTimer Application:

The program should display an interface to the user with a start timer and end timer button. When the start timer button is clicked, the application needs to keep track of the start time. When the end timer is clicked, the screen should display a textbox with the elapsed time. Under the timer display, it should display a list of previous timer runs. This means that you need to store the time elapsed for each new run in a database. The application should use frameworks at the necessary layers For example, if you are using .net, you should have the following:

Presentation Layer – Razor or Asp.net MVC or WPF

Application Layer –   A StopwatchTracker class as a POCO

Data Access Layer – Entity Framework.


### Bonus Points
**************

DI 5 pts
Unit Tests 5 pts
REST 5 pts
