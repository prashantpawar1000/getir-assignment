const request = require('supertest');
const httpStatus = require('http-status');
const mongoose = require('mongoose');
const app = require('../src/app');

describe('Record routes', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true');
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('POST /v1/records', () => {
        it('should return 200 and successfully fetch data from DB', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    startDate: '2016-01-26',
                    endDate: '2018-02-02',
                    minCount: 2700,
                    maxCount: 2800,
                })
                .expect(httpStatus.OK);

            expect(res.body).toEqual({
                code: 0,
                msg: 'Success',
                records: expect.any(Array),
            });
        });

        it('should return 200 and fetch all data if request body is missing', async () => {
            const res = await request(app).post('/v1/records').expect(httpStatus.OK);

            expect(res.body).toEqual({
                code: 0,
                msg: 'Success',
                records: expect.any(Array),
            });
        });

        it('should return 200 and fetch all data if request startDate is missing', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    endDate: '2018-02-02',
                    minCount: 2700,
                    maxCount: 2800,
                })
                .expect(httpStatus.OK);

            expect(res.body).toEqual({
                code: 0,
                msg: 'Success',
                records: expect.any(Array),
            });
        });

        it('should return 200 and fetch all data if request endDate is missing', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    startDate: '2016-01-26',
                    minCount: 2700,
                    maxCount: 2800,
                })
                .expect(httpStatus.OK);

            expect(res.body).toEqual({
                code: 0,
                msg: 'Success',
                records: expect.any(Array),
            });
        });

        it('should return 200 and fetch all data if request minCount is missing', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    startDate: '2016-01-26',
                    endDate: '2018-02-02',
                    maxCount: 2800,
                })
                .expect(httpStatus.OK);

            expect(res.body).toEqual({
                code: 0,
                msg: 'Success',
                records: expect.any(Array),
            });
        });

        it('should return 200 and fetch all data if request maxCount is missing', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    startDate: '2016-01-26',
                    endDate: '2018-02-02',
                    minCount: 2700,
                })
                .expect(httpStatus.OK);

            expect(res.body).toEqual({
                code: 0,
                msg: 'Success',
                records: expect.any(Array),
            });
        });

        it('should return 400 when startDate is in wrong format', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    startDate: 1
                })
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body).toEqual({
                code: 1,
                msg: 'Validation Errors',
                errors: expect.any(Array)
            });
        });

        it('should return 400 when endDate is in wrong format', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    endDate: 1,
                })
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body).toEqual({
                code: 1,
                msg: 'Validation Errors',
                errors: expect.any(Array)
            });
        });

        it('should return 400 when maxCount is in wrong format', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    maxCount: 'name',
                })
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body).toEqual({
                code: 1,
                msg: 'Validation Errors',
                errors: expect.any(Array)
            });
        });

        it('should return 400 when minCount is in wrong format', async () => {
            const res = await request(app)
                .post('/v1/records')
                .send({
                    minCount: 'name',
                })
                .expect(httpStatus.BAD_REQUEST);

            expect(res.body).toEqual({
                code: 1,
                msg: 'Validation Errors',
                errors: expect.any(Array)
            });
        });

        it('should return 404 when a request to an Url sended', async () => {
            const res = await request(app).post('/v1/someUrl').expect(httpStatus.NOT_FOUND);

            expect(res.body).toEqual({
                code: 2,
                msg: 'Not Found',
            });
        });
    });
});