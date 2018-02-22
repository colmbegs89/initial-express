'use strict'
var express = require('express')
var router = express.Router()
var https = require('https')
var request = require('request')

// var serverEnv = 'https://smartservebeapi-dev.platform-test.allstate.com'


router.get('/external-api', function(req, res){ 
let mileage = ''
  request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBfsDywzPknQNZLSXZukknAsrkNhaxlbnI', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred and handle it
        console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
        console.log('body:',body); // Print the response status code if a response was received
        console.log(JSON.parse(body).rows[0].elements[0].distance.text)
        mileage = JSON.parse(body).rows[0].elements[0].distance.text
        // res.send(body)
        res.render('api', { title: mileage });
      });
      // console.log(res.body.rows)
  })

// router.post('/create', (req, res) => {
//   var options = {
//     uri: process.env.SYS_API_URL + '/hardware/create',
//     method: 'POST',
//     json: JSON.parse(req.body.item)
//   }
//   request(options, function (error, response, body) {
//     if (error) {
//       console.error(error.toString())
//       res.json(error.toString())
//     } else {
//       res.statusCode = response.statusCode
//       res.json(body)
//     }
//   })
// })



module.exports = router
