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
    2.  Config services using Repository InjectRepository from typeorm and @nestjs/typeorm and different entities 
        1). This time in constructor when defining services we need another decorator from typeorm
    3.  Write services and use it in controller

FYI: create and save difference
    repository.create() only creates the instance of an Entity
    repository.save() actually save it into databse

	
Defines functions in an Entity -- Using hooks
    Hooks allow us to define functions on an entity that will be called automatically at certain points
    1. AfterInsert()
    2. AfterUpdate()
    3. AfterRemove()

    Hooks explains why we need to create an Entity instance and then save  instead of save the data directly to the database.   

When we need a very flexible Type definition for example
    User: email, name, password, age, ....
    But sometimes we want to update email and sometimes we want to update name. 
    How to define type definition for  function update(id:number, ??? : ???) { }
    we can't define {email: string, password: string} because we don't know what user want's to update

    so we can do Function update(id: number, attrs: Partial<User>){} User is the entity

    repository.update is a method something like save() which are directly updating data into database without accessing Entity instance


Even we are saying save() can access directly to the database, it usually used for Entity purposes
we have 2 method used after creating Entity instance

    1. save(Entity)
    2. remove(Entity)

    Using these Two methods will trigger the hooks in our Entity

Completing controller
    1. even id is number in DB, but params from url will always be string when we try to find a user by params in url
    2. complete update function in controller, we need a brand new DTO called update-user.dto, the reason is also used for type definition.  Because we don't know wether user wants to update both of them or one of them     (By use IsOptional from class-validator)