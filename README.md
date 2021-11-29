# Zendesk coding challenge for summer 2022 internship

## Project Overview
This project is built using react for front end and node for backend.

### React Frontend :
 Front end File structure
.

    ├── src                    
    │   ├── assets             # All icons 
    │   ├── components               # Re-use component for project
            ├── ErrorMsg             # Error component
            ├── Header               # Zendesk text header component
            ├── Pagination           # Pagination list view component
            ├── TicketDetailsModal   # Component for Ticket Details
            ├── TicketList           # Component for displaying all the tickets in list
    │   ├── utils             # All helper functions
            ├── api-helpers          # Contains api's used in the project
            ├── common-helpers       #  Common functions used
            ├── constant             #  Contains string constants
    │   ├── App.css                  # Global styles
    │   ├── App.js                   # Register route
    │   └── ...                 
    └── ...

After running react server ,page will redirect to localhost:5000 , the app will send a GET request to the backend, and then backend will forward the same GET request to the ZenDesk API, after retrieving data , it will send the ticket data or errors to our node server. Node server will then send this data to our react frontend and our react web page will get populated by all the tickets. 

One of the required functionality for this coding challenge is Pagination. Since we only have small data , I fetched all the tickets at once and stores them . If the limit of items per pages is set to 25 , all the stored tickets will get divided such that each page contains no more than 25 tickets . I have implemented pagination locally from front end only .  One of the Major drawback of this approach is , stored tickets wont be updated . If a certain tickets is edited/deleted/added from the ZendDesk dashboard , then the updated ticket wont get reflected on our frontend since we fetched all the data once , it will keep us showing data that was fetched initially . In order to fetch the latest data , we will need to refresh our page everytime.

- For the scalability, React and Redux would make a good choice. But I did not use redux in this proect since this is a really simple app with small amount of data. Redux makes the state management better. 
- For styling, I used common CSS file app.css . I also used Bootstrap to make the webpage reponsive.
- I used axios library to make the API requests from the frontend.
- I have created component folder to keep all the components used in the app , created utils folder , which contains all the helper functions , api-helpers and string constants.


## Installation Guide

### Step 1: Setting up the project locally - Clone the project:

```
git clone  https://github.com/hrishiakhade/zendesk_coding_challenge_2022.git
```

### Step 2: Install server dependencies:
```
cd zendesk_coding_challenge_2022
```
```
cd server
npm i
```

### Step 3: Starting server
Run the following command from server directory
```
node index.js
```
### Step 4: Install react(front end) dependencies :
Open new command line and run the following commands
```
cd zendesk_coding_challenge_2022
```
```
cd react
npm i
```
### Step 5: Running React frontend
Run the following command from react directory
```
npm start
```
