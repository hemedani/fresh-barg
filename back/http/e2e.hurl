#tempUser
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "user",
        "act": "tempUser"
    },
    "details": {
        "set": {
          "first_name":"Zahra",
          "last_name": "Karimi",
          "phone": "09185004030",
          "gender": "Female",
          "personnel_code": "999",
          "email": "ZahraKarimi@gmail.com",
          "is_active": true,
          "features": [  "create unit","create chart","read letters"
            ,"reffer letters","add staff"],
          "userLevels": "admin"
        },
        "get": {
            "email": 0
        }
    }
}

HTTP 200
[Captures]
phone: jsonpath "$['body'][0]['phone']"


#login req
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "user",
        "act": "loginReq"
    },
    "details": {
        "set": {
            "phone": "{{phone}}"
        },
        "get": {
            "phone": 1
        }
    }
}

#login 
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "user",
        "act": "login"
    },
    "details": {
        "set": {
            "phone":"{{phone}}",
            "code": 11111
        },
        "get": {
            "token" : 1
    }
}
}

HTTP 200
[Captures]
token : jsonpath "$['body']['token']" 


#addOrg
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "org",
        "act": "addOrg"
    },
    "details": {
        "set": {
            "name": "org1",
            "address": "nothing",
            "ownership": "private",
            "type" : "service",

            "description" : "",
            "location":{
              "longitude": -122.4194, 
              "latitude": 37.7749
            }

        },
        "get": {
            "name": 1
        }
    }
}

HTTP 200
[Captures]
orgId : jsonpath "$['body'][0]['_id']" 

# getOrg
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "org",
        "act": "getOrg"
    },
    "details": {
        "set": {
          "_id": "{{orgId}}"
        },
        "get": {
            "name": 1
        }
    }
}

# HTTP 200

#updateOrg
POST {{serverAddress}}/lesan
Authorization: "{{token}}"
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "org",
        "act": "updateOrg"
    },
    "details": {
        "set": {
            "_id" : "{{orgId}}",
            "name": "org2",
            "address": "nothing",
            "ownership": "private",
            "type" : "service",
            "location":{
              "longitude": -122.4194, 
              "latitude": 37.7749
            },
            "description": "here is our org"
        },
        "get": {
            "name": 1
        }
    }
}

 HTTP 200


#addUnit
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "unit",
        "act": "addUnit"
    },
    "details": {
        "set": {
            "name": "unit1",
            "categories" :["category1","category2"] ,
            "orgId": "{{orgId}}"
        },
        "get": {
            "name": 1
        }
    }
}

HTTP 200
[Captures]
unitId: jsonpath "$['body'][0]['_id']"

# getUnit
POST {{serverAddress}}/lesan
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
       "model": "unit",
       "act": "getUnit"
   },
   "details": {
       "set": {
           "_id": "{{unitId}}"
       },
       "get": {
           "name": 1,
           "categories":1
       }
   }
}
HTTP 200

#updateUnit
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "unit",
        "act": "updateUnit"
    },
    "details": {
        "set": {
            "_id": "{{unitId}}",
            "name": "unit2",
            "categories" :["category1","category2"] 

        },
        "get": {
            "name": 1
        }
    }
}
HTTP 200

#addPosition
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "position",
        "act": "addPosition"
    },
    "details": {
        "set": {
            "name": "position1",
            "orgId": "{{orgId}}",
            "unitId": "{{unitId}}"
        },
        "get": {
            "name": 1
        }
    }
}

HTTP 200
[Captures]
positionId: jsonpath "$['body'][0]['_id']"


#getPosition
POST {{serverAddress}}/lesan
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
       "model": "position",
       "act": "getPosition"
   },
   "details": {
       "set": {
           "_id": "{{positionId}}"
       },
       "get": {
           "name": 1
       }
   }
}
HTTP 200

#updatePosition
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "position",
        "act": "updatePosition"
    },
    "details": {
        "set": {
          "_id": "{{positionId}}",
          "name": "position2"
        },
        "get": {
            "name": 1
        }
    }
}
HTTP 200


#addUser
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "user",
        "act": "addUser"
    },
    "details": {
        "set": {
          "first_name":"fateme",
          "last_name": "aberi",
          "phone": "09104568899",
          "gender": "Female",
          "personnel_code": "111",
          "email": "fatemeaberi@gmail.com",
          "is_active": true,
          "features": ["create unit","add staff"],
          "userLevels": "admin",
          "orgId": "{{orgId}}",
          "positionId": "{{positionId}}"
        },
        "get": {
            "phone": 1
        }
    }
}

HTTP 200
[Captures]
userId: jsonpath "$['body'][0]['_id']"

#getUser
POST {{serverAddress}}/lesan
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
       "model": "user",
       "act": "getUser"
   },
   "details": {
       "set": {
           "_id": "{{userId}}"
       },
       "get": {
           "is_active":0
       }
   }
}
HTTP 200

#updateUser
POST {{serverAddress}}/lesan
Authorization: "{{token}}"
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
      "model": "user",
       "act": "updateUser"
  },
   "details": {
       "set": {
         "first_name":"asma",
         "last_name": "aberi",
         "phone": "09104568899",
         "gender": "Female",
         "personnel_code": "111",
         "email": "fatemeaberi@gmail.com",
         "is_active": true,
         "features": ["create unit","add staff"],
         "userLevels": "admin"
       },
       "get": {
           "is_active": 0
       }
    }
}
HTTP 200

#addLetter
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "letter",
        "act": "addLetter"
    },
    "details": {
        "set": {
            "number" :123,
            "subject" : "subject1",
            "delivered" : true ,
            "is_end" : {
              "text" : "something",
              "done" : true
            },
            "tags" : ["tag1", "tag2" , "tag3"] ,
            "lid" : "something else"
 
 },
        "get": {
            "lid": 0
        }
    }
}
#in details : 
#"created_at" : ,
#"updated_at" : ,
HTTP 200
[Captures]
letterId: jsonpath "$['body'][0]['_id']"


# getLetter
POST {{serverAddress}}/lesan
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
       "model": "letter",
       "act": "getLetter"
   },
   "details": {
       "set": {
           "_id": "{{letterId}}"
       },
       "get": {
           "lid": 0
       }
   }
}
HTTP 200

#updateLetter
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "letter",
        "act": "updateLetter"
    },
    "details": {
        "set": {
           "_id": "{{letterId}}",
            "number" :123,
            "subject" : "subject2",
            "delivered" : true ,
            "is_end" : {
              "text" : "something",
              "done" : true 
},

            "tags" : ["tag1", "tag2" , "tag3"] ,
            "lid" : "something else"
        },
        "get": {
            "lid": 0
        }
    }
}
HTTP 200

#addPredefLetter
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "preDefLetter",
        "act": "addPredefletter"
    },
    "details": {
        "set": {
            "title" : "title1",
            "description" : "nothing",
            "number" :111,
            "orgId" : "{{orgId}}"
 
 },
        "get": {
            "description": 0
        }
    }
}

HTTP 200
[Captures]
preDefLetterId: jsonpath "$['body'][0]['_id']"


# getLetter
POST {{serverAddress}}/lesan
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
      "model": "preDefLetter",
      "act": "getPredefletter"
   },
   "details": {
       "set": {
           "_id": "{{preDefLetterId}}"
       },
       "get": {
           "description": 0
       }
   }
}
HTTP 200

#updatePreDefLetter
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "preDefLetter",
        "act": "updatePredefletter"
    },
    "details": {
        "set": {
           "_id": "{{preDefLetterId}}",
            "title": "title2",
            "description" : "nothing",
            "number" :111
        },
        "get": {
            "description": 0
        }
    }
}
HTTP 200


#addPriority
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "priority",
        "act": "addPriority"
    },
    "details": {
        "set": {
            "name": "priority1",
            "orgId": "{{orgId}}"
        },
        "get": {
            "name": 1
        }
    }
}

HTTP 200
[Captures]
priorityId: jsonpath "$['body'][0]['_id']"


#getPriority
POST {{serverAddress}}/lesan
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
       "model": "priority",
       "act": "getPriority"
   },
   "details": {
       "set": {
           "_id": "{{priorityId}}"
       },
       "get": {
           "name": 1
       }
   }
}
HTTP 200

#updatePrioirty
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "priority",
        "act": "updatePriority"
},
    "details": {
        "set": {
           "_id": "{{priorityId}}",
            "name": "priority2"
        },
        "get": {
            "name": 1
        }
    }
}
HTTP 200


#addReffer
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "reffer",
        "act": "addReffer"
    },
    "details": {
        "set": {
            "number" :12,
            "delivered" : true ,
            "type" : "inUnit",
            "isMoving" : true ,
            "description" :[{"text" : "something" , "viewed":true} , {"text":"somthing2" , "viewed" : false}],
            
            "reply" : [{"id" : "1", "text" : "sth" , "viewed" : true }],
            "letterId":"{{letterId}}"
            
 
 },
        "get": {
            "number": 0
        }
    }
}
#in details : 
#"created_at" : ,
#"updated_at" : ,
#"deadline" : ,
HTTP 200
[Captures]
refferId: jsonpath "$['body'][0]['_id']"


# getReffer
POST {{serverAddress}}/lesan
{
   "service": "main",
   "contents": "dynamic",
   "wants": {
       "model": "reffer",
       "act": "getReffer"
   },
   "details": {
       "set": {
           "_id": "{{refferId}}"
       },
       "get": {
           "number": 0
       }
   }
}
HTTP 200

#updateReffer
POST {{serverAddress}}/lesan
{
    "service": "main",
    "contents": "dynamic",
    "wants": {
        "model": "reffer",
        "act": "updateReffer"
    },
    "details": {
        "set": {
           "_id": "{{refferId}}",
            "number" :12,
            "delivered" : true ,
            "type" : "inUnit",
            "isMoving": false,
            "description" :[{"text" : "something" , "viewed":true} , {"text":"somthing2" , "viewed" : false}],
            "reply" : [{"id" : "1", "text" : "sth" , "viewed" : true }]
        },
        "get": {
            "number": 0
        }
    }
}
HTTP 200

