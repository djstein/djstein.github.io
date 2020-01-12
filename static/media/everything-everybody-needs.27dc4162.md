TLDR: A list of software / services that (almost) every web application needs

---

Let's face it, most of the web applications we make aren't to much different from each other. That is to say, 99% of the features are no different. That 1% difference is what makes YOUR app special.

If you find yourself writing something that most other companies have, step back and think, if this is not the 1% that makes your company / application special... you're wasting time.

So that means no custom:

- web servers
- authentication
- billing
- database's, stores, ORMs
- performance daemons
- deployment tooling
- API abstractions

# So what does everybody need

If the goal is to provide value to our customers, we need to know two things. What do customers perceive as value? And how do we do provide that value? If (one of) Stripe's values is simplification of billing, how do they provide that to the user?

## From a product prospective they would need:

- a landing page + marketing page
- company (or team) information including terms of service if applicable
- a sign up flow to onboard users
- an email system to notify users of sign up / metrics / leads / followups / etc
- an authentication system (with ability to reset and change user details)
- easy to use dashboards to track their usage of the product
- provide an easy way to send and receive data to a customer's system (a developer facing API?)
- documentation for product (especially external facing APIs)
- a permission system so a user can add others to help them manage their account
- an invoice system tied to user accounts

## From an infrastructure side:

Things to actually get the application up and constantly running:

- an easy way for engineers to work on the application (includes linting / formating / tooling)
- a database to store and provide all this information
- a way to interact with databases easily / consistently (ORMs)
- asynchronous + scheduled tasks
- a unit and integration test pipeline
- some way to host and run this web application
- logging everywhere (and a way to view them)
- an error triage system (ie. Sentry)
- automation to deploy the system with patches and new features (or rollback the system)
- services to monitor the system health
- a comprehensive permission system that is usable on the frontend + backend (also allow beta usage)
- flags to turn on / off features (helps with merging to master as quick as possible)

## Later stage things

This list is things everyone needs AFTER the initial lists are complete:

- CDN usage
- caching of queries / long running calculation results
- load and single point of failure testing
- chaos monkey testing
- database table optimization / rollover
- dependency management
- pull request automation (linting)

---

While all these things listed are needed, we cannot write them all in a day. Nor can they all be completed before the launch of a product. However, they are all needed for successful longevity.

I think I'll follow this up with a few more thoughts over the next coming weeks on:

- Specific software / tools for each bullet
- Backend + Frontend specific features everyone writes (and how to deal with abstraction)
