NestJs from scratch (reference https://zerologix.udemy.com/course/nestjs-the-complete-developers-guide/learn/lecture/27441194#overview)
  (From 2-4 if we are use next cli to generate a project we can skip)

1. npm init -y
2. npm install @nestjs/common @nestjs/core @nestjs/platform-express reflect-metadata typescript
3. Set up typescript compiler settings
    1. Generate tsconfig.json file
4. Create a Nest module and controller
    1. Create src folder and main.ts file

NestJs.  (Desktop/nestjs)

Controller -> handles incoming requests
Services -> Handles data access and business logic
Modules -> Groups together code
Pipes -> Validates incoming data
Filters -> Handles errors that occur during request handling 
Guards -> Handles authentication
Interceptors -> Adds extra logic to incoming requests or outgoing responses
Repositories -> Handle datas stored in database

General progress: Pipes-->Guard-->Controller-->Service-->Repository

NestJs Install use Nest cli
1. First thing first we need to Next CLI  nom install -g @nestjs/cli
2. Nest new project name
3. Using cli to create : nest generate module + module name 
4. Using cli to create:  nest generate controller messages/messages(route/classname) - -flat (don’t create another controller folder)
5. [Optional] Install Rest client extension on vscode and create ‘requests.http’ file on the root of project
6. 
