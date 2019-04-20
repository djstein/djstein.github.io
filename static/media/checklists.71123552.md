_TLDR: Some talk about checklists._

## Checklists in the workplace

I am a person who lives by checklists (and spreadsheets, but that is another post entirely). Every day I create a handwritten list of the tasks that need to be completed. I will cross off those tasks as I complete them, or add more to the list as the day goes by. If there is a particularly large list I will weigh them by importance. If tasks are left at the end of the day, I'll even start the next day's checklist.

This process has helped me lower my mental load as I approach problems throughout the day. It also allows me to tell someone (ie. managers) if I have estimates on today's work or if others tasks can be placed on my plate. While I could go on about the benefits of checklists, I would point to [The Checklist Manifesto](https://g.co/kgs/DWrkWp) by Atul Gawande for more on that subject.

## Technical professionals use checklists?

From a quick search for Hacker News articles, I have a feeling many other software engineers feel the same way about checklists (this is a great primary souce by the way /s). Even without this anecdotal evidence, I do believe that medium to highly organized technical professionals use checklists.

These people use many different tools for creating checklists, including:

- Pen and paper
- Kanban board applications
- [GNU Emacs org mode](https://orgmode.org) (which is argued as the "best" but has the steepest learning curve)

And I'm sure there are more software solutions out there that accomplish this. I however, have not found one solution that works for me yet. That does not mean I would be apposed to switching, I just need a better solution!

I am currently "creating" checklists three platforms and am not happy with the segmentation:

- Reminders app on iOS (personal tasks usually)
- Calendar events (send in particular goverment forms, etc)
- Pen and Paper for daily tasks (current work day)

## Types of tasks I need to checkoff

There are more tasks that I would like to keep track of, other than just work tasks. Some include:

- reminders to make regular posts to social media platforms (or write blog posts)
- which days to deep clean the house
- when to send in yearly forms, pay bills, etc
- estimates on when to get groceries / household goods
- even shaving, if I forget to do it I won't have an opporuntity to do it again till the next weekend
- which exercies, with weight and reps to do in the gym based on previously achieved numbers
- when to meal prep / when to eat out

When I don't have to think about WHAT I have to do in a given day and WHEN I have to do it, I worry less about when I have free time.

## Checklist problem

My current asks for a checklist include:

- batch creation of reoccuring tasks
- when the tasks should take place (date + time)
- estiamtes on when it should be completed
- create new tasks for the current day
- plan ahead particular tasks days in advance
- moving of uncompleted tasks to the next day's list

It would be fantasitc if I removed the ability to add tasks to the current day's list and instead was given a print out every morning of all the things I needed to do in a day. I have some sort of sterotype that important people's assistants do this for them.

## Checklist solution

### The simplest solution

The simplest solution I have is to create a script that is called by a UserAgent job every morning that queries against a sqlite3 database that is prefilled with tasks. Template render that data and email it to myself every morning. This does not allow for "checking" off tasks, but is great for reocurring tasks.

### Doing the most

I've also been thinking about creating a small Progressive Web Application to manage completion and creation of tasks. React on the frontend, Django on the backend, simply ask for today's given tasks. Check them when they're done. So while that sounds like a simple todo app, introducting calcuations, determine when things should be reocurring, adding push notifiations, creating TYPES of tasks (social media, work, exercise, life, etc.) has proven more difficult on paper.

### Closing

Just my thoughts on checklists this morning as I sit at Red Rock Coffee in Mountian View, CA.

I've been thinking about that small app for a while now, and might just crack at it soon.
