## Installation

```bash
$ npm install
```

## Environment
```
MONGO_URI=mongodb://127.0.0.1:27017/analytics
PORT=3001
ACCESS_TOKEN=6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## End points

collect page views
```
curl -X POST \
  http://127.0.0.1:3001/page-views \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 111' \
  -H 'Content-Type: application/json' \
  -H 'Host: 127.0.0.1:3001' \
  -H 'Authorization: Bearer 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36' \
  -H 'X-Forwarded-For: 72.229.28.185' \
  -H 'cache-control: no-cache' \
  -d '{
	"userId": "0a530c88-7ddb-4e65-ab06-ae34609f8914",
	"pageId": "2",
	"timestamp": "2012-01-21T14:10:02.000Z"
}'
```

Get page-views by page-id
```
curl -X GET \
  http://127.0.0.1:3001/page-views/page/2 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Authorization: Bearer 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
  -H 'Host: 127.0.0.1:3001' \
  -H 'cache-control: no-cache'
```

page-views by country
```
curl -X GET \
  http://127.0.0.1:3001/page-views/country/US \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Authorization: Bearer 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
  -H 'Host: 127.0.0.1:3001' \
  -H 'cache-control: no-cache'
```
get the number page-views by country
```
curl -X GET \
  http://127.0.0.1:3001/page-views/countries/count \
   -H 'Authorization: Bearer 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
```

get page-views by a browser name
```
curl -X GET \
  http://127.0.0.1:3001/page-views/browser/Chrome \
   -H 'Authorization: Bearer 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
```

get the rate between the number returning users

```
curl -X GET \
  http://127.0.0.1:3001/page-views/rate \
   -H 'Authorization: Bearer 6i2nSgWu0DfYIE8I0ZBJOtxTmHJATRzu' \
```
## License

[MIT licensed](LICENSE).
