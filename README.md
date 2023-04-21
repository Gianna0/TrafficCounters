## TrafficCounters

This application is a traffic counter that allows users to monitor traffic in a specific location. My application consists of a frontend and a backend. The frontend is built using Angular, while the backend is built using Express.js in JavaScript. The application's data is stored in a MySQL database.


### Technologies Used

- Node.js: A programming language used for both frontend and backend development.
- Express.js: A backend web framework for Node.js.
- MySQL: An open-source relational database management system.
- Angular:  A frontend JavaScript framework.
- Bootstrap


### Features
Frontend:
- Users can view all traffic counters

Backend:
- Can view all traffic counters
- Can add a new traffic counter
- Can edit an existing traffic counter
- Can delete a traffic counter
- Can show runtime values speed
- Can show at runtime speedometer state 


## Installation

Backend
To run this application, follow these steps:
1. Clone this repository to your local machine
2. Install dependencies by running ```npm install```
3. Start the server by running ```npm start```
4. Install ```npm install -g sequelize-cli```
5. Migrate schema  ```sequelize db:migrate```
6. Run application ```npm run dev```
7. Navigate to http://localhost:3000 in your web browser to view the application

Frontend
1. Install dependencies by running ```npm install```
2. Start the server by running ```ng serve```
3. Navigate to http://localhost:4200 in your web browser to view the application

### Usage

- GET /api/trafficCounters - retrieves all traffic counters
- POST /api/trafficCounters - adds a new traffic counter
- PUT /api/trafficCounters/:id - updates an existing traffic counter
- DELETE /api/trafficCounters/:id - deletes a traffic counter

