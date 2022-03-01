# Lending-Library
[![Netlify Status](https://api.netlify.com/api/v1/badges/4bbec547-be25-4a72-aaf4-d0584c9633b7/deploy-status)](https://app.netlify.com/sites/lendinglibrarybythelads/deploys)


A collaborative effort to create an online library for my personal collection of books at home with functions to add new books to the library, lending books via check in 
and check out functions, track reading progresses for my partner and myself. Above all, this is an application of my new knowledge working with ReactJS and a first attempt
at collaborative development and its nuances. I will post updates here as this will be a public work in progress.

## Dec 24
A wire frame and function list is prepared and the team is prepared with a working knowledge of React and JS. Initial goals TBD.

## Dec 30
Great beginning steps complete with clear goal setting by team. MVP standards set by listing of minimum functions necessary. 

Ray: completed basic CSS, Navbar, component organization, status update forms, and addition of modal components.

BNor - Bookcards, status update forms

Satwick - Bookcards, search and sort library functions


Goals moving forward:
- Refine CSS for forms and bookcards
- Complete a Book Description component
- Check in/out and Add New Book forms
- Introduce DB usage

<h1>Jan 25</h1>
<br/>
<p> One month into the project, the DB is set up but not connected for usage. The Google Books API is connected and functional for searching books outside the library. The upcoming goals are to complete modals and attached forms to add new books to the library with all desired information from the API and the user. Current learning challenges are navigating multiple modals per page as the current modals are not using the React Modal dependency. Likely going to be reworked to utilize React Modal instead of building DOM Portals for each modal. Good practice either way. Next step will be connecting the DB so the user can interact with it as required. This includes add new, delete and edit functions fro stored books. Ongoing mentorship as required from BNor and Satwick.
</p>

<h1> March 01 </h>
<br/>
<p> 2 months since beginning of project. This repo misses Brian and Sunny but Ray is marching on. LOTS of learning around the DB. First challenges included a less than seamless 
  experience simply communicating between the DB and app. On Brian's suggestion, I used netlify functions to do the same. The learning curve of serverless functions and the theory/syntax behind that in conjunction with learning about the basics of setting up and utilizing a DB was steep and overwhelming. Nonetheless, I am happy to say that I have brought myself to a working knowledge of both and can recognize in an organized manner how much more there is to learn about both concepts. I am eager to explore databases and their intricate role in programming soon. 
  <br/>
The code is starting to look slightly messier as I juggled the learning and implementation, thus adding to my to-do list: Clean up the code for this project. I can understand that the readability is low and even I sometimes struggle to read something I wrote weeks before. I am consciously making an effort to improve my documentation as I problem solve sections of code and leave reminders to return to address challenging concepts. 
  <br/>
As for the standing of the project, we are in the endgame now (and there is a 1/14000000 chance of it working). The basic MVP is going to have the basic CRUD operations which leaves it with the inability to delete and edit DB objects (the books). It can currently add books to the library, retrieve book information when browsing the libary (save the inability to parse certain book descriptions from the Google API), and update reading corners for Joe and myself. Once I add the edit and delete book functions, there is a mass beautification which is necessary and the fixing of Reading Corner update forms for the official MVP. Bonus functions which will require further learning is the password functionality to protect any DB changes. I will likely take a break prior to the password implementation to focus on some courses I enrolled in.
</p>
