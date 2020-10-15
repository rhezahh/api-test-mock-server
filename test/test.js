const chai = require('chai')
const assert = require('chai').expect
chai.use(require('chai-json-schema'))

const page = require('../page/page')
const payload = require('../data/payload.json')
const code = require('../helper/reponse_code_message.json')

const testCase = {
    describe: 'Sending request to Postman Mock server',
    positive: {
        successCreated: 'As an User, I want to be able to send success created request'
    },
    negative: {
        badRequest: 'As an User, I want to be able to send bad request',
        notFound: 'As an User, I want to be able to send failed not found request',
        serverError: 'As an User, I want to be able to send internal server error request'
    }
}

describe(`${testCase.describe}`, () => {
    it(`${testCase.positive.successCreated}`, async () => {
        const response = await page.successCreated(payload.success)
        assert(response.status).to.equal(code.successCreated)
        assert(response.body.data.company_id).to.equal(11)
        assert(response.body.message).to.equal('Resource has been created')
        assert(response.body.code).to.equal('STATUS_CREATED')
        console.log(response.body)
    })

    it(`${testCase.negative.badRequest}`, async () => {
        const response = await page.badRequest(payload.failed)
        assert(response.status).to.equal(code.failedBadRequest)
        assert(response.body.message).to.equal('Please fill all required fields')
        assert(response.body.code).to.equal('BAD_REQUEST')
        console.log(response.body)
    })

    it(`${testCase.negative.notFound}`, async () => {
        const response = await page.notFound()
        assert(response.status).to.equal(code.failedNotFound)
        assert(response.body.message).to.equal('Sorry, your requested page is not found')
        assert(response.body.code).to.equal('NOT_FOUND')
        console.log(response.body)
    })

    it(`${testCase.negative.serverError}`, async () => {
        const response = await page.serverError(payload.success)
        assert(response.status).to.equal(code.failedInternalServerError)
        assert(response.body.message).to.equal('Oops, something went wrong :(')
        assert(response.body.code).to.equal('INTERNAL_SERVER_ERROR')
        console.log(response.body)
    })
})