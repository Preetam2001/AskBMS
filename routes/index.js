var express = require('express');
var router = express.Router();
var path = require("path");

var answers = {"Sai Kumar(HOD@ME)": "Placements are conducted for the 3rd and 4th year students by the college. Many companies come to the college looking for candidates.",
  "Roshan(1BM20CS130)": "Hey bro placements will come you dont worry. Just attend classes and understand whats going on and try to get internships.",
  "Naagaa(1BM20CS085)": "Yes even I had this question and when I got it it all went very smoothly. The companies that come to BMS are very reputed and look for qualities in the student",
  "Meghaa(1BM20ME089)": "Hey placements will happen for you from next year. Just attend classes and understand whats going on and try to get internships.",
  "Siri(1BM20ME148)": "Yes even I had this question and when I got it it all went very smoothly. The companies that come to BMS are very reputed and look for qualities in the student",
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("./views/register.html"))  
});
router.get('/home', function(req, res, next) {
  res.sendFile(path.resolve("./views/home.html"))  
});
router.get('/profile', function(req, res, next) {
  res.sendFile(path.resolve("./views/profile.html"))
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.resolve("./views/register.html"))
});

router.get('/qs/:name', function(req, res, next) {
  res.sendFile(path.resolve("./views/question.html"))
});

router.get('/question/:qName', function(req, res, next) {
  
  res.render('question', {name: req.params.qName, answers: answers})
});

router.get('/u/:name', function(req, res, next) {
  
  res.render('user', {name: req.params.name})
});

router.get('/debate/:name', function(req, res, next) {
  
  res.render('debate', {name: req.params.name})
});
module.exports = router;
