const jwt = require('jsonwebtoken');
const rp = require('request-promise');
const moment = require('moment')

module.exports = (req, res) => {
    
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
  
  

        var date = moment()
          .utcOffset('+03:00')
          .format('YYYY-MM-DD HH:mm:ss');

          console.log(date);


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
      topic: 'Meeting testing demo',
      type: 2,
      start_time: date, //'2021-01-13 23:00:00',
      duration: 5,
      password: 'Hey123',
      agenda: 'This is the meeting description',
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: true,
        mute_upon_entry: true,
        use_pmi: false,
        approval_type: 0
      }
    }
  };

  

  return rp(options)
    .then(function (response) {
      //logic for your response
        console.log('Meeting details: ', response);
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
  