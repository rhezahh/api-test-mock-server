const supertest = require('supertest')
require('dotenv').config()

const api = supertest(process.env.MOCK_API_POSTMAN)

const successCreated = (payload) =>
    api
        .post(`/create`)
        .set('Content-Type', 'application/json')
        .send(payload)

const badRequest = (payload) =>
    api
        .post(`/bad`)
        .set('Content-Type', 'application/json')
        .send(payload)

const notFound = () =>
    api
        .get(`/not_found`)
        .set('Content-Type', 'application/json')

const serverError = (payload) =>
    api
        .post(`/internal_server_error`)
        .set('Content-Type', 'application/json')
        .send(payload)
module.exports = {
    successCreated,
    badRequest,
    notFound,
    serverError
}
