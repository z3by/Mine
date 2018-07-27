const Url = require('../../mongodb/models/Url');

// create new url
module.exports.createUrl = (req, res) => {
	const url = {};
	url.text = req.body.text;
	url.user = req.user.id;
	url.avatar = req.user.avatar;
	url.name = req.user.username;

	Url
		.create(url)
		.then(added => {
			res.send(added);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};


// edit exist url
module.exports.updateUrl = (req, res) => {
	const url = req.body;
	console.log(url);
	Url
		.findByIdAndUpdate(url._id, {text: url.text})
		.then(updated => {
			res.send(updated);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};



// REMINDER : needs refactor to allow the url owner only to delete it =======================?????
// delete one url
module.exports.deleteUrl = (req, res) => {
	const id = req.params.id;

	Url
		.findByIdAndRemove(id)
		.then(removed => res.send(removed))
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};

// retrieve one url
module.exports.retrieveUrl = (req, res) => {
	const id = req.params.id;
	
	Url
		.findById(id)
		.then(found => res.send(found))
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};


// retrieve all the urls for one user
module.exports.retrieveUserUrls = (req, res) => {
	const user = req.params.user;
	Url.find({user: user })
		.sort({ date: -1 })
		.then(urls => res.send(urls))
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};



// toggle the like for one url;
module.exports.toggleLike = (req, res) => {
	const user = req.user.id;
	const id = req.params.id;

	Url
		.findById(id)
		.then(url => {
			if (!url.likes.includes(user)) {
				Url
					.update(url, { $push: { likes: user }})
					.then(liked => res.send(liked));
			} else {
				Url
					.update(url, { $pull: { likes: user } })
					.then(unliked => res.send(unliked));
			}
		})
		.catch(() => res.sendStatus(404));

};



// create comment;
module.exports.createComment = (req, res) => {
	const id = req.params.id;
	const comment = {
		text: req.body.text
	};

	comment.user = req.user.id;

	Url
		.findById(id)
		.then(url => {
			Url
				.update(url, { $push: { comments: comment } })
				.then(added => res.send(added));
		})
		.catch(() => res.sendStatus(404));
};



// delete comment;
module.exports.deleteComment = (req, res) => {
	const urlID = req.params.url;
	const commentID = req.params.comment;
	
	Url
		.findById(urlID)
		.then(url => {
			url.comments = url.comments.filter(comment => {
				return comment.id !== commentID;
			});
			url.save()
				.then(added => res.send(added));
		})
		.catch(() => res.sendStatus(404));
};
