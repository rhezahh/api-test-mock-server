# Mochai API Automation Test using Mock Servers

### Prerequisites:

- node version `^v14.5.0`
- Install Node.js and npm, we will use npm to install or yarn
- `Mocha x Chai` for automation testing API
- Using `Postman API Mock`

### How to Getting Started:

```sh
$ git clone "url this project"
$ cd api-test-mock-server
$ npm install
$ cp .env.sample .env
```

### How to Run:

```sh
$ npm run test-api                         | Run all api test
$ npm open-report                          | Open run results

```

| Directory | Description |
| ------    | ------|
| data      | For test data, ex: payload for post/put request. file extention should be .json |
| helper    | Common code, for general needed. ex: response_code                              |
| page      | Describe endpoint structure, route and requirements                             |
| test      | Describe multiple test cases and executing test                                 |
