const Workerinfo = require('./workerinfo')


class intern extends Workerinfo{

    constructor(id, name, email){
        super(id, name, email);

    }

    getjob(){
        return 'intern';
    }



}

module.exports = intern;