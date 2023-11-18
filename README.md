# Simple Project Management Tool

## Overview
Simple Project Management Tool is a simple application built with the purpose of exploring new technologies like GraphQl, Apollo Client, etc. It is a great begginers project if one wants to learn about this technologies.

## Key Features
- Client Creation : Users can register a client providing details.
- Adding Projects : Users can add project/projects under a specific user.
- Update Projects: Users can edit project details and status - Not started , In progress & Completed.
- Delete Projects : Users can delte projects.
- Edit Clients : Users can edit details related to a client.
- Delete Clients : Users can delete clients. 
**_NOTE:_** Deleting a client deletes all the related projects.

## Technologies Used
- Frontend: React
- Backend: GraphQl and Node
- Database: MongoDb
- Middleware : Apollo Client


## Installation
To run the application locally, follow these steps:


* First step clone the repo
    ```
    https://github.com/Subham-dury/Simple-Project-Management-Tool.git
    ```

* Let us first create a database. We can make use of mondoDb Atlas as I have done the same. Documentation or any tutorial can be referred to achieve the same. **_NOTE:_** Remember to allow access from anywhere. In the end one should have the connection url.

* Let us start configuring and getting the backend running.

* Open the projects in any IDE and create a `.env` file. Save the database connection url and the PORT number in the file.

* Run the backend projects. To run them, you need to first run npm install to pull all the dependencies.

* Open a new terminal and run ```npm run dev```. This will start the backend server using Nodemon. 
**_Note_** Issues with database connectivity might arise, make sure to fix them before proceeding.

* Go to the frontend project directory and install npm dependencies, then run the project
    ```
    npm install
    npm start
    ```

* The application is now running on your local machine. You can visit it by going to the following link
    ```
    http://localhost:3000
    ```

* The webpage should look somewhat like this with some data populated.
![image](https://github.com/Subham-dury/Simple-Project-Management-Tool/blob/main/client/src/assests/Webpage.png)


## License
The Locality Review Application is released under the [MIT License](LICENSE).

## Contact
If you have any questions or suggestions, feel free to reach out to me at [karchowdhurysubham@gmail.com](mailto:karchowdhurysubham@gmail.com).

Happy reviewing and exploring Simple Project Management Tool!
 
