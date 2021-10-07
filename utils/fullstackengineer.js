const Workerinfo = require('./workerinfo')

class fullstackengineer extends Workerinfo{

    constructor(id, name, email){
        super(id, name, email);

    }

    getjob(){

        return 'fullstackengineer';
    }



}

module.exports = fullstackengineer;