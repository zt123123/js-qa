const axios = require("axios")
const { expect } = require("chai")

const app = require("./server")
const request = require("supertest")


describe('接口测试', function () {
    let server = app.listen(3000)

    it('test接口测试', async function (done) {
        // axios.get("http://localhost:3000/test")
        //     .then(function (res) {
        //         expect(res.status).to.equal(200)
        //         if (res.data.name == "aaaa") {
        //             done()
        //         } else {
        //             done(new Error("结果不符合预期"))
        //         }
        //     })
        //     .catch(function (err) {
        //         console.log(err);
        //     })



    });

    let server = app.listen(3000);

    describe('#test server', () => {

        it('#test GET /', async () => {
            let res = await request(server)
                .get('/test')
                .expect('Content-Type', /json/)
                .expect(200, { name: "aaa", age: 23 });
        });
    });
});