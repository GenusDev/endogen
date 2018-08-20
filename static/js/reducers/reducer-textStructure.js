export default function () {
  return [
    {
      "sequence": [0],
      "displayComp": "EndogenDisplayName",
      "promptComp" : "would you like to",
      "inputComp" : {
        "( l )og-in ?" : {
          "nextSequence": [0,1]
        },
        "( s )ign-up ?" : {
          "nextSequence": [0,2]
        },
        "( g )et more info ?": {
          "nextSequence": [0,3]
        },
        "( c )heck share price ?" : {
          "nextSequence": [0,4]
        }
      }
    },
    {
      "sequence": [0,1],
      "displayComp": "",
      "promptComp" : "to log-in, we need your",
      "inputComp" : {
        "email" : {
          "nextSequence": [0,1,1]
        }
      }
    },
    {
      "sequence": [0,1,1],
      "displayComp": "",
      "promptComp" : "and your",
      "inputComp" : {
        "password" : {
          "nextSequence": [0,1,1,0],
          "sequenceIfErr": [0,1,1,1]
        }
      }
    },
    {
      "sequence": [0,1,1,1],
      "displayComp": "",
      "promptComp" : "those didn’t work,",
      "inputComp" : {
        "( t )ry your password again ?" : {
          "nextSequence": [0,1,1,1,1],
        },
        "( r )eset ?" : {
          "nextSequence": [0,1,1,1,2],
        }
      }
    },
    {
      "sequence": [0,1,1,1,1],
      "displayComp": "",
      "promptComp" : "",
      "inputComp" : {
        "password?": {
          "nextSequence": [0,1,1,0],
          "sequenceIfErr": [0,1,1,1]
        }
      }
    },
    {
      "sequence": [0,1,1,1,2],
      "displayComp": "",
      "promptComp" : "an email was sent to reset your password",
      "password" : {
        "nextSequence": [0,1,1,0],
        "sequenceIfErr": [0,1,1,1]
      },
      "( r )eset?" : {
        "nextSequence": [0,1,1,0],
        "sequenceIfErr": [0,1,1,1]
      }
    },
    {
      "sequence": [0,1,1,0],
      "displayComp": "ShareDashboard",
      "promptComp" : "what can we help you with",
      "inputComp" : "TBD"
    },
    {
      "sequence": [0,2],
      "displayComp": "",
      "promptComp" : "great! to apply we need your",
      "inputComp" : {
        "email" : {
          "nextSequence": [0,1,1]
        }
      }
    },
    {
      "sequence": [0,3],
      "displayComp": "infoBox",
      "promptComp" : "neat, right?",
      "inputComp" : "this is text"
    },
    {
      "sequence": [0,4],
      "displayComp": "ShareDashboard",
      "promptComp" : "sometimes it's up, sometimes it's down",
      "inputComp" : ""
    }
  ]
}
