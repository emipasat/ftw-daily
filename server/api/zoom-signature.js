const jwt = require('jsonwebtoken');
const rp = require('request-promise');
const crypto = require('crypto') // crypto comes with Node.js

module.exports = (req, res) => {

   var meetingNumber = req.query.meetingNumber; // $_GET["id"]
   var role =  req.query.role; 

    const apiKey = 'd1CVEB65Q6OSiUVli6Kbdg'
    const apiSecret = '4inbZO6SZ9Bsz8838j6rkCAtQGrShXONglJV'
    //const meetingNumber = 82755987261
    //const role = 0 //attendee, 1 host?

    // Prevent time sync issue between client signature generation and zoom 
    const timestamp = new Date().getTime() - 30000
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
    const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
    const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')


    //return signature
    return res.status(200).send({signature: signature});

    
    const payload = {
        iss: 'd1CVEB65Q6OSiUVli6Kbdg', //config.APIKey,
        exp: ((new Date()).getTime() + 5000)
      };
      const token = jwt.sign(payload, '4inbZO6SZ9Bsz8838j6rkCAtQGrShXONglJV');//config.APISecret);
  
      console.log(token); 
  
      
      //Make Zoom API call
      var options = {
        uri: 'https://api.zoom.us/v2/users',
        qs: {
            status: 'active' // -> uri + '?status=active'
        },
        auth: {
          //Provide your token here
          'bearer': token
        },
        headers: {
            'User-Agent': 'Zoom-Jwt-Request',
            'content-type': 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
      };
  
      rp(options)
        .then(function (response) {
          //logic for your response
            console.log('User has', response);
        })
        .catch(function (err) {
            // API call failed...
            console.log('API call failed, reason ', err);
        });
  
  

  //Make Zoom API call
  var options = {
    method: 'POST',
    uri: 'https://api.zoom.us/v2/users/96zHXeL6QNGiM88qo9PSSA/meetings', // we should create a user first and take id (/me/)
    //qs: {
    //    status: 'active' // -> uri + '?status=active'
    //},
    auth: {
      //Provide your token here
      'bearer': token
    },
    headers: {
        'User-Agent': 'Zoom-Jwt-Request',
        'content-type': 'application/json'
    },
    json: true, // Automatically parses the JSON string in the response
    body: {
      topic: 'Demo Meeting 1',
      type: 2,
      start_time: '2021-01-13 21:00:00',
      duration: 5,
      password: 'Hey123',
      agenda: 'This is the meeting description',
      settings: {
        //host_video: false,
        //participant_video: false,
        //join_before_host: false,
        //mute_upon_entry: true,
        use_pmi: false,
        approval_type: 0
      }
    }
  };

  

  return rp(options)
    .then(function (response) {
      //logic for your response
        console.log('User has', response);
        //return res.status(200).send(response);
        
        //return res.status(200).send({startUrl: response.join_url}); // asa trebuie, return aici
        return res.status(200).send({zoomResponse: response});
    })
    .catch(function (err) {
        // API call failed...
        console.log('API call failed, reason ', err);
    });

  
      //return res.status(200).send({startUrl: zoomResponse.join_url});
  };
  