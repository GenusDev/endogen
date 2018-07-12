export default function () {
  return [
    {
      "state": [0],
      "displayComp": "EndogenDisplayName",
      "promptComp" : "would you like to",
      "inputComp" : {
        "( l )og-in" : {
          "state": [0,1]
        },
        "( s )ign-up" : {
          "state": [0,2]
        },
        "( g )et more info": {
          "state": [0,1]
        },
        "( c )heck share price?" : {
          "state": [0,1]
        }
      }
    },
    {
      "state": [0,1],
      "displayComp": "",
      "promptComp" : "to log-in, we need your",
      "inputComp" : {
        "email" : {
          "state": [0,1,1]
        }
      }
    },
    {
      "state": [0,1,1],
      "displayComp": "",
      "promptComp" : "and your",
      "inputComp" : {
        "password" : {
          "state": [0,1,1,0],
          "stateIfErr": [0,1,1,1]
        }
      }
    },
    {
      "state": [0,1,1,1],
      "displayComp": "",
      "promptComp" : "those didn’t work,",
      "inputComp" : {
        "( t )ry your password again?" : {
          "state": [0,1,1,1,1],
        },
        "( r )eset?" : {
          "state": [0,1,1,1,2],
        }
      }
    },
    {
      "state": [0,1,1,1,1],
      "displayComp": "",
      "promptComp" : "",
      "inputComp" : {
        "password?": {
          "state": [0,1,1,0],
          "stateIfErr": [0,1,1,1]
        }
      }
    },
    {
      "state": [0,1,1,1,2],
      "displayComp": "",
      "promptComp" : "an email was sent to reset your password",
      "password" : {
        "state": [0,1,1,0],
        "stateIfErr": [0,1,1,1]
      },
      "( r )eset?" : {
        "state": [0,1,1,0],
        "stateIfErr": [0,1,1,1]
      }
    },
    {
      "state": [0,1,1,0],
      "displayComp": "ShareDashboard",
      "promptComp" : "what can we help you with",
      "inputComp" : "TBD"
    },
    {
      "state": [1,2],
      "displayComp": "",
      "promptComp" : "great! to apply we need your",
      "inputComp" : "email"
    },
    {
      "state": [1,3],
      "displayComp": "infoBox",
      "promptComp" : "neat, right?",
      "inputComp" : ""
    },
    {
      "state": [1,4],
      "displayComp": "ShareDashboard",
      "promptComp" : "sometimes it's up, sometimes it's down",
      "inputComp" : ""
    }
  ]
}
