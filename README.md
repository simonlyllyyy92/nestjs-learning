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


Nestjs. Decorators

@Body(). @Param

These 2 decorators are used for accessing request data
1. Http request body
2. Http request params

Request param: 
	‘localhost:3000/messages/2 (/:id = 2 could be the params)

Validation Pipe 
1. Pipe built in to Nest to make validation easy
2. Set up ValidatePipe in main.ts to set up validation on all incoming request
    1. Tell nest to use global validation
    2. Create a class that describes the different properties that the request body should have 
    3. Add validation rules to the class
    4. Apply that class to the request handler
3. Install class-validator and class-transformer (some of the decorator comes from here) 


Service and Repository
Repository handle data in database, Use service to handle Repository, Use controller to communicate with service
1. Create messages.repository.ts file using read file and wirtefile from nodes
2. Create messages.service.ts  (service will not work until it build up it’s relationship with repository)
3. Use the service in controller
4. Add error exceptions from common module

