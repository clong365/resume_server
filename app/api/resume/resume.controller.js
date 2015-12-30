/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /resumes              ->  index
 * POST    /resumes              ->  create
 * GET     /resumes/:id          ->  show
 * PUT     /resumes/:id          ->  update
 * DELETE  /resumes/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Resume = require('./resume.model');

// Get list of resumes
exports.index = function(req, res) {
  Resume.find(function (err, resumes) {
    if(err) { return handleError(res, err); }
    return res.json(200, resumes);
  });
};

exports.findByDepartment = function(req, res) {
  var conditions = {
    'department':req.params.department,
  };
  Resume.find({'department':req.params.department},function (err, resumes) {
    if(err) { return handleError(res, err); }
    return res.json(200, resumes);
  });
};

// Get a single resume
exports.show = function(req, res) {
  Resume.findById(req.params.id, function (err, resume) {
    if(err) { return handleError(res, err); }
    if(!resume) { return res.send(404); }
    return res.json(resume);
  });
};

// Creates a new resume in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  Resume.create(req.body, function(err, resume) {
    if(err) { return handleError(res, err); }
    return res.json(201, resume);
  });
};

// Updates an existing resume in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Resume.findById(req.params.id, function (err, resume) {
    if (err) { return handleError(res, err); }
    if(!resume) { return res.send(404); }
    var updated = _.merge(resume, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, resume);
    });
  });
};

// Deletes a resume from the DB.
exports.destroy = function(req, res) {
  Resume.findById(req.params.id, function (err, resume) {
    if(err) { return handleError(res, err); }
    if(!resume) { return res.send(404); }
    resume.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}