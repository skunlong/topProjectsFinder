# Top Projects Finder App

Developer: Saralee Kunlong
This application is made with Vue.js, Vue Apollo for integrating with graphQL and Vuetify for styling (my first time using vuetify so apologies in advance if there's less than perfect styling)

##To run the app locally
CD into the application folder and run these commands in your terminal:
(if something doesn't work- try running npm install first assuming you have npm- https://www.npmjs.com/get-npm)

1. yarn install (if you do not have yarn installed already you may need to run 
			 npm install -g yarnpkg@0.15.1 
In command line and then run 'yarn install')
2. yarn run serve

This should get the app running on port 8080 - if encountering issues please contact skunlong@gmail.com

### Manuel tests
1)type in company user'd like to see the top projects of and click search button
2)user should see the top 10 most starred list of the projects of that company with description, numbers of stars and favorites as well as most recent commits
3)user should be able to click on a commit and go directly to that commit
4)user can click on the name of the project to go to that project page
5)user can click on the company's logo to go to the company's github page
6)after viewing all top 10 projects user can click on the see more projects link to go to the company's github page

### Run lint tests

yarn run lint

### Run unit tests

npm test

### Improvements
If given more time these are the improvements that would be implemented in the next version
> More tests
> Better error handling and more input validation


