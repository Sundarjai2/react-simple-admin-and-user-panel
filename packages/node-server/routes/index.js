var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/users', function (req, res, next) {
	User.find({}, function (err, data) {
		res.send(data);
	})
});

router.get('/users/:userId', function (req, res, next) {
	var personInfo = req.params;
	User.findOne({ _id: personInfo.userId }, function (err, data) {
		res.send(data);
	})
});

router.post('/updateuser/:userId', function (req, res, next) {
	var reqParam = req.params;
	var reqBody = req.body;
	User.updateOne({ _id: reqParam.userId }, { name: reqBody.name, email: reqBody.email, password: reqBody.password, role: reqBody.role, isAuth: reqBody.isAuth, }, function (err, data) {
		res.send(data);
	});
});

router.post('/deleteuser', function (req, res) {
	var userInfo = req.body;
	res.send(userInfo);
});

router.post('/adduser', function (req, res, next) {
	var personInfo = req.body;
	console.log(personInfo)
	if (!personInfo.email || !personInfo.role || !personInfo.password) {
		res.send();
	} else {
		User.findOne({ email: personInfo.email }, function (err, data) {
			if (!data) {
				var c;
				User.findOne({}, function (err, data) {

					if (data) {
						console.log("if");
						c = data.unique_id + 1;
					} else {
						c = 1;
					}
					var newPerson = new User({
						unique_id: c,
						name: personInfo.name,
						email: personInfo.email,
						role: personInfo.role,
						password: personInfo.password,
						isAuth: false,
					});

					newPerson.save(function (err, Person) {
						if (err)
							console.log(err);
						else
							console.log('Success');
					});

					res.send(newPerson);
				}).sort({ _id: -1 }).limit(1);
			} else {
				res.send({ "Success": "Email is already used." });
			}

		});
	}
});

router.post('/login', function (req, res, next) {
	User.findOne({ email: req.body.email }, function (err, data) {
		if (data) {
			if (data.password == req.body.password) {
				req.session.userId = data.unique_id;
				res.send(data);
			} else {
				res.send("Wrong password");
			}
		} else {
			res.send("This Email Is not regestered");
		}
	});
});

module.exports = router;
