const express = require('express');
const router = express.Router();

//GET	/api/activities;	//Show a list of all activities I am tracking, and links to their individual pages
router.get('/activities', function (req, res) {
  res.send('active.ducks');
});
//POST	/api/activities;	//Create a new activity for me to track.
router.post('/activities', function (req, res) {
  res.send('movement.post');
});

//GET	/api/activities/{id};	//Show information about one activity I am tracking, and give me the data I have recorded for that activity.
router.get('/activities/:id', function (req, res) {
  console.log(req.params);
  res.send(req.params.id);
});
//PUT	/api/activities/{id};	//Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
router.put('/activities/:id', function (req, res) {
  res.send(req.params.id);
});
//DELETE	/api/activities/{id};	//Delete one activity I am tracking. This should remove tracked data for that activity as well.
router.delete('/activities/:id', function (req, res) {
  res.send(req.params.id);
});
//POST	/api/activities/{id}/stats;	//Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.
router.post('/activities/:id', function (req, res) {
  res.send(req.params.id);
});
//DELETE	/api/stats/{id};	//Remove tracked data for a day.
router.delete('/stats/:id', function (req, res) {
  res.send(req.params.id);
});

module.exports = router;
