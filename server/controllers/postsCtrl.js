const Post = require('../../models/Post');

// create new post
module.exports.createPost = (req, res) => {
	const post = {};
	post.text = req.body.text;
	post.user = req.user.id;
	post.avatar = req.user.avatar;
	post.name = req.user.username;

	Post
		.create(post)
		.then(added => {
			res.send(added);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};


// edit exist post
module.exports.updatePost = (req, res) => {
	const post = req.body;
	console.log(post);
	Post
		.findByIdAndUpdate(post._id, {text: post.text})
		.then(updated => {
			res.send(updated);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};



// REMINDER : needs refactor to allow the post owner only to delete it =======================?????
// delete one post
module.exports.deletePost = (req, res) => {
	const id = req.params.id;

	Post
		.findByIdAndRemove(id)
		.then(removed => res.send(removed))
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};

// retrieve one post
module.exports.retrievePost = (req, res) => {
	const id = req.params.id;
	
	Post
		.findById(id)
		.then(found => res.send(found))
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};


// retrieve all the posts for one user
module.exports.retrieveUserPosts = (req, res) => {
	const user = req.params.user;
	Post.find({user: user })
		.sort({ date: -1 })
		.then(posts => res.send(posts))
		.catch(err => {
			console.log(err);
			res.sendStatus(404);
		});
};



// toggle the like for one post;
module.exports.toggleLike = (req, res) => {
	const user = req.user.id;
	const id = req.params.id;

	Post
		.findById(id)
		.then(post => {
			if (!post.likes.includes(user)) {
				Post
					.update(post, { $push: { likes: user }})
					.then(liked => res.send(liked));
			} else {
				Post
					.update(post, { $pull: { likes: user } })
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

	Post
		.findById(id)
		.then(post => {
			Post
				.update(post, { $push: { comments: comment } })
				.then(added => res.send(added));
		})
		.catch(() => res.sendStatus(404));
};



// delete comment;
module.exports.deleteComment = (req, res) => {
	const postID = req.params.post;
	const commentID = req.params.comment;
	
	Post
		.findById(postID)
		.then(post => {
			post.comments = post.comments.filter(comment => {
				return comment.id !== commentID;
			});
			post.save()
				.then(added => res.send(added));
		})
		.catch(() => res.sendStatus(404));
};
