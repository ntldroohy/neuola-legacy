/*
 * The home controller for administration.
 */

var async = require('async')
<<<<<<< Updated upstream:my/ctrls/admin/home.js
var Message = require('../../model/message');
var common = require('../../view/common');
=======
var common = require('../../my/view/common');
var model = require('../../my/model');
>>>>>>> Stashed changes:routes/admin/home.js

exports.index = function index(req, res) {
  async.parallel({
    numOfUnread: function(callback) {
      var user = req.session.user;
      model.Message.count({
        read: false,
        from: {$ne: user.name}
      }, callback);
    }
  }, function(err, results) {
    res.render('admin/index', {
      title: '管理',
      user: req.session.user,
      numOfUnread: results.numOfUnread
    });
  });
};