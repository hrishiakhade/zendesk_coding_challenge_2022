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
            ├── Header               # Zendesk text header compoenent
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
