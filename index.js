
const inquirer = require('inquirer');
const fs = require('fs');

//require the worker info
const info = require('./utils/workerinfo')
const team = [];
const intern = require('./utils/intern');
const engineer = require('./utils/fullstackengineer');
const manager = require('./utils/teamleader');



//questions promt for team leader

//refer to the readme generator incase I get lost 
const generate = generateteam(() => {

//selects a poistion
    function position(){
        
        inquirer.prompt([
            {
                type: "list",
                name:"role",
                message:"please select a role",
                list: [
                    'manager',
                    'intern',
                    'engineer',
                ]
            }

        ]).then(function({role}) {
            
            if (role === 'Engineer') {

                workerInfo = teamleader;

            } else if (role === 'Intern') {

                workerInfo = teamintern;

            } else {

                workerInfo = teamengineer;
            }

        });
    }

    function teamleader(){

         inquirer.prompt([

             { 

                type: "input",
                message: "Please input leaders name",
                name: "managername",  

             },

             { 

                 type: "input",
                message: "Please input id#",
                name: "managerid",  

             },

            {

                type: "input",
                message: "Please input email",
                name: "manageremail",

             },
        
        
        ]).then((data) => {

                const newmanager = new manager(data.managername, data.managerid, data.manageremail);

                team.push(newmanager);

             });

        };



    //prompt questions for intern
    function teamintern(){

        inquirer.prompt([
    
            { 
    
            type: "input",
            message: "Please input interns name",
            name: "internname",  
    
             },
    
            { 
    
            type: "input",
            message: "Please input id#",
            name: "internid",  
    
            },
    
            {

            type: "input",
            message: "Please input email",
            name: "internemail",
    
            },
            
            
          ]).then((data) => {
    
                const newintern = new intern(data.internname, data.internid, data.internemail);

                team.push(newintern);

            });
        }
        

        //promt questions for fullstack engineer

        function teamengineer(){

            inquirer.prompt([
        
                { 
        
                  type: "input",
                  message: "Please input engineers name",
                  name: "engineersname",  
        
                    },
        
                { 
        
                  type: "input",
                  message: "Please input id#",
                  name: "engineersid",  
        
                     },
        
                {
                   type: "input",
                   message: "Please input email",
                   name: "engineersemail",
        
                },
                
                
              ]).then((data) => {
        
                const newengineer = new engineer(data.engineername, data.engineerid, data.engineeremail);

                team.push(newengineer);

              });

            }

           

            //generate html
    

    });

   
   

    generate();





   /* generate.then((data) => {

        const filename = `teamproject.html`;

        fs.writeFile(filename, info(data), (err) => {

            if (err) {
                return console.log(err);
            }

        
         console.log('Good luck with your team!')
        })
        
    });*/