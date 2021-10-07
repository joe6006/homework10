class Workerinfo{

        constructor(id, name, email){

            this.id = id;
            this.name = name;
            this.email = email;

        }
        
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {    
        return this.email;
    }
    
    getjob() {
        return 'workerinfo';
    }
    }

    module.exports = Workerinfo;
