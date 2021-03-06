const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('NodeJs with Travis', () => {
    it('index', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('about', (done) => {
        chai.request(app)
            .get('/about')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    // it('hello-world', (done) => {
    //     chai.request(app)
    //         .get('/hello-world')
    //         .end((err, res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         });
    // });
});