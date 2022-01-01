# Getir Assessement Test

Create a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.
 
 * NodeJS
 * Express
 * Mongoose

## How to Run

1. Just create `.env` file fill with your below env variables:

```
PORT=3000
MONGO_URL=XXXXXXX
```

2. Install npm packages:

```bash
npm install
```

3. To run app just call following in your command line:

```bash
npm run start:dev
```

4. You can run project on production too:

```bash
npm run start
```

## Run Test

Testing using Jest and Supertest.

1. To run all the tests:

```bash
npm run test
```

### Get Records based on Query

Route: `/`

Method: `POST`

Body:

```json
{
  "startDate": "2016-01-26", //string, with a Date YYYY-MM-DD format
  "endDate": "2018-02-02", //string, with a Date YYYY-MM-DD format
  "minCount": 2700, //number
  "maxCount": 3000 //number
}
```

**Response**

Status: `200`

```json
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "AxqGywiF", //string
      "createdAt": "2016-11-30T14:47:38.027Z", //string
      "totalCount": 2853 //number
    },
    ...
  ]
}
```
