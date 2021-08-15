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


Dependency Injection

Why it exist at all

1. There is a very clear dependency among these different classes. For example, Service cannot work correctly without repository, and controller cannot work well without Service
2. Currently (during the tutorial using constructor to create these dependencies on its own) Controller, Services are creating these dependencies on their own

Inversion of Control Principle
1. Follow this principle will help you create more reusable code.
    1. Classes should not create instances of its dependencies on its own
    2. Use interface instead of a specific repositories 
        1. Any repositories that match the interface can be used and the repositories is written in hard disk
        2. In automated testing , we can create a fakeRepository that has the required properties in the interface (does not write to hard disk) can run really fast


Nest DI Container /injector (Dependency Injection)

Store 2 things
1. List of classes and their dependencies (1~4)
2. List of instances that I have created (5)

DI container Workflow:
1. At startup, register all classes with the container
2. Container will figure out what dependency each class has
3. We then ask the container to create the instance of a class for us (almost always gonna be a controller)
4. Container creates the instance of all required dependencies that the controller needs and gives us back the controller
5. Container will hold onto the created dependency instances and reuse them if needed


Inject the classes to container 
1. Import Injectable and Add Injectable Decorator into services and repositories
2. Add services and repositories as providers in module (things can be used as dependencies for other classes
