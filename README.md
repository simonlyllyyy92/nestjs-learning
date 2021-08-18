Connections between different modules

1. If Service A in Module A requires dependency from Service B in Module B
    1. By default  the the Service B can not be accessed by other Modules except Module B
    2. To change that: add exports within moduleB
    3. import the entire module B into Module A
    4. Then we can use Service B in Service A by defining a instance of Service B in constructor
