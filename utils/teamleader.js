const Workerinfo = require('./workerinfo')

class teamleader extends Workerinfo{

    constructor(id, name, email){
        super(id, name, email);

    }

    getrole(){
        
        return 'teamleader';
    }



}

module.exports = teamleader;