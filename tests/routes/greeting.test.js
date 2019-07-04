const expect = require('chai').expect;

const { hello } = require('../../routes/greeting');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) {
        this.sendCalledWith = arg;
    }
};

debugger;

describe('Greetings Route', function() {
    describe('Hello() function', function() {
        it('Should error out if no name provided ', function() {
            hello(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });

        it('Should error on invalid language', function() {
            let newReq = req;
            newReq.body.name = 'Jody';
            newReq.body.language = 'bad-input';

            hello(newReq, res);
            expect(res.sendCalledWith).to.equal('Error: Invalid Language');
        })
    });
});