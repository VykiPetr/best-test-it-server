# Best Test It

## Deployment Link!
## https://best-test-it.herokuapp.com/

## Description

An app where you can deploy your app for the crowds to test it!
People can leave their feedback on bugs they found, any features they like or dislike.

## Backlog

- messaging
- make incentive to use app
  
# Client

## Routes

- / - Homepage
- /signup - Signup form
- /login - Login form
- /projects - projects list
- /projects/:userId/create - Add a project in a form  
- /projects/:id - project in detail
- /profile/:id - View a profile if its your profile have edit(and other) buttons
- /profile/:id/edit - Edit a profile
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Projects List Page (public only)
- Project Create (user only)
- Project View Page (public only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- OurNavbar
  - input
    - isUserLoggedIn
    - current page
  - Output
    - login
    - logout
    - signin
    - signup
    - projects
    - profile

    

- ProjectList
  - Inputs
    - userId for displaying on profile
    - search parameters
  - Output
    - Array of objects projects

- ProjectView
  - Output
    - searchbar
    - <ProjectList />

- SignUp
  - Inputs
  - Outputs
    - sign up form

- SignIn
  - Inputs
  - Outputs
    - login form

- Landing
  - Inputs
  - Outputs
    - text and pictures explaing best test it

- Footer
  - Outputs
    - Links to our linkedins and githubs

- ViewProject
  - Inputs
    - projectId
    - userId
  - OutPuts
    - everything about the project
    - Iframe of page
    - <commentslist />

- CommentsList
  - Inputs 
    - projectId
  - Outputs
    - comments
    - if comments have reply then comments with comments

- ProfileView
  - Inputs
    - loggedInUser
    - profileId
  - Outputs
    - the profile in detail with a list of the users projects
    - if profileId matches logged in user Id then you can edit it

- 

## IO


## Services

- Auth Service
  - auth.signin(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous


# Server

## Models

User model

```
username - String // required
email - String // required & unique
passwordHash - String // required
aboutMe - String
mySkills - String
userImage - String
```

Project model

```
userRefId - ObjectID<User>
appName - String // required
appDescription - String
appTools - String
appLogo - String
comments - Array
deploymentLink - String
repoLink - String
likes - Array of Objects // ObjectID<User>
projectVersion - String

```

Comment model

```

userRefId - ObjectID<User>
commentBody - String
commentFlag - String // enum (bug, good feature, bad feature)
replies - Array of Objects
creatorCheck - Boolean
projectVersion - String

```

## API Endpoints/Backend Routes

# Auth
- POST /api/signup
  - body:
    - username
    - email
    - password

- POST /api/signin
  - body:
    - email
    - password

- POST /api/logout
  - body: (empty)

# Profile
- GET /api/profile/:id
  - body:
    - username
    - aboutMe
    - mySkills
    - userImage
    - projects

- PATCH /api/profile/:id (edit)
  - body:
    - mySkills
    - aboutMe
    - userImage
    - username


# Project
- GET /api/project/:id (read)
  - body:
    - userRefId
    - appName
    - appDescription
    - appTools
    - appLogo,
    - comments [{}]
    - likes [{}]
    - projectVersion

- POST /api/project/:id (create)
  - body:
    - userRefId
    - appName
    - appDescription
    - appTools
    - appLogo,
    - projectVersion
    - appUrl

- PATCH /api/project/:id (edit)
  - body:
    - userRefId
    - appName
    - appDescription
    - appTools
    - appLogo,
    - projectVersion

- DELETE /api/project/:id (delete)

- POST /api/project/:projectId/:userId/like
  - push projectId.likes[{userId}]

# Comment

- POST /api/comment/:projectId (create)
  - body:
    - userRefId
    - commentBody
    - commentFlag
    - projectVersion
  - push to :projectId.comments

- POST /api/comment/:commentId (reply)
  - body:
    - userRefId
    - commentBody
  - push to :commentId.replies[{body}]

- DELETE /api/comment/:commentId/:userId (delete)
  - delete based on if userId is the same as comment owner Id

# File upload

- POST /api/upload
  - body:
    - file url

  

## Links

### Trello

https://trello.com/b/mJTsXsMI/test-it

### Git

- Clientside
  https://github.com/VykiPetr/best-test-it-client
- Serverside
  https://github.com/VykiPetr/best-test-it-server

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)