#####   Login User ############################
POST http://localhost:1377/lesan
{
  "service":"main",
  "model":"user",
  "act":"loginReq",
  "details": {
    "set": {
      "phone": "9381028800"
    },
    "get": {
        "phone": 1
    }
  }
}

#####   Login User ############################
POST http://localhost:1377/lesan
{
  "service":"main",
  "model":"user",
  "act":"login",
  "details": {
    "set": {
      "phone": "9381028800",
      "code": 11111
    },
    "get": {
        "token": 1,
        "user": {
          "_id": 1,
          "phone": 1
        }
    }
  }
}

HTTP/* 200
[Captures]
token: jsonpath "$['body']['token']"

##### Upload Image ############################
POST http://localhost:1377/lesan
token:{{token}}

[MultipartFormData]
lesan-body: {"service":"main","model":"file","act":"uploadImage","details":{"get":{"name":1},"set":{}}}
image: file,sample.jpeg; image/jpeg

