1. Go to your MySQL commandline and execute the following statement to create the DB :
    **CREATE DATABASE employeeDB;**

2. Change the value of following variables in **src/main/resources/application.properties** :
    1. **spring.jpa.hibernate.ddl-auto** from **create** to **update** after the 1st run of the application
    2. **spring.datasource.url** : Change it to point to your local MySQL DB instance
    3. **spring.datasource.username** : Change to your MySQL username
    4. **spring.datasource.password** : Change to your MySQL password
    5. **spring.datasource.initialization-mode** : Comment this out if you don't want to insert data automatically everytime you startup the application
    6. **server.port** : Change it to your desired port