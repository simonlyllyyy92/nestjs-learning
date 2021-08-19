Using nest with a real database

Usually have 2 Options
    1. TypeORM 
        1. SQLite
        2. Postgres
        3. MySQL
        4. MongoDB
    2. Mongoose
        1. MongoDB

	Installing TypeORM and sqlite3
	1. Run. Npm install @nestjs/typeorm typeorm sqlite3

Connection DB to App module ( When module is connected to app module, it will automatically shared and spread throughout all different modules of our project)

When using TypeORM, we do not have to create repository files manually,  Instead it will be created for us automatically behind the scenes, we don’t even see a generated file or anything like that


For Users Module and Reports Module We are going to create a special file called Entity. 
    1. An Entity files defines a single kind of resources or a single kind of thing that we want to store\
        1. For example , user Entity will have a email gonna be a string and password that’s gonna be a string as well
      
Using TypeOrm

1. Import typeorm module and imports it’s ForRoot function in app.module which aims to connect to DB

2. Create an Entity
    1. Create an entity file, and create a class in it that lists all the properties that your entity will have
    2. Connect the entity to it’s parent module. (This creates a repository)
    3. Connect the entity to the root connection (in app module)

  3. For synchronize property in app.Module, it represents
	Is only for use in dev env , 
     * this will ask typeOrm to look all your different entities 
     * and then automatically update the structure of your database 
     * it will create and remove tables, it will add and remove columns and 
     * it will change the type of data stored in these columns as well 
     * WITHOUT RUNNING MIGRATION 
4. For Repositories (typeorm.io/#/repository-api)
    1. create()
    2. save()
    3. find()
    4. findOne()
    5. remove()
	Questtions: 
	differences between save() and update() and insert()
	differences between remove() and delete()
	

Completing Car price practice
	1.  Set up validation pipe (follow other branches readme file)

	
