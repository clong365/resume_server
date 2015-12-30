'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//enums
var departments = 'dev hr op admin'.split(' ');
var genders = 'male female'.split(' ');
var candidateStates = 'zaiZhi liZhi'.split(' ');
var maritalStatus = 'weiHun weiHunWeiYu yiHunYiYu'.split(' ');
var insuranceName = 'yiLiao yangLao shiYe gongShang shengYu zhuFang other'.split(' ');
var categorys = 'tongZhao ziKao chengKao minBan hanShou other'.split(' ');
var positions = 'client server android ios'.split(' ');
var resumeStates = 'new hired leaved'.split(' ');

//valications
var maxSalary = [30000, 'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];

var profileSchema = new Schema({
  name: {type: String, required: true},
  sex: {type: String, enum: genders, required: true},
  birthday: {type: Date, required: true},
  nationality: String,
  nativePlace: String,
  domicilePlace: String,
  marital: {type: String, enum: maritalStatus, required: true},
  email: {type: String, required: true},
  mobile: {type: String, required: true, minlength: 11, maxlength: 11},
  constellation: String,
  bloodType: String,
  englishBand: String,
  address: {type: String, required: true},
  availableDate: Date,
  friendsOrRelativesEmployed: {
    name: String,
    relationShip: String
  }
});

var ResumeSchema = new Schema({
  department: {type: String, enum: departments, required: true},
	position: {type: String, enum: positions, required: true},
  date: { type: Date, default: Date.now },
  candidateState: {type: String, enum: candidateStates, required: true},
  profile: profileSchema,
  /*profile:{
    name: String,
    sex: String,
    birthday: Date,
    nationality: String,
    nativePlace: String,
    domicilePlace: String,
    maritalStatus: String,
    email: String,
    mobile: String,
    constellation: String,
    bloodType: String,
    englishBand: String,
    address: String,
    availableDate: Date,
    friendsOrRelativesEmployed: {
      name: String,
      relationShip: String
    }
  },*/
  education: [{
    date:{
      start: Date,
      end: Date
    },
    name: {type: String, required: true},
    major: {type: String, required: true},
    degree: {type: String, required: true},
    category: {type: String, enum: categorys, required: true}
  }],
  experience: [{
    date:{
      start: Date,
      end: Date
    },
    company: {type: String, required: true},
    department: {type: String, required: true},
    title: {type: String, required: true},
    salary: String,
    reason: String,
    reference: {
      name: String,
      position: String,
      phone: String
    }
  }],
  salary:{
    base: {type: Number, required: true},
    welfare: Number,
    bonus: Number,
    accepted: {type: Number, required: true, max: maxSalary}
  },
  performance:{
    achievement: String,
    feature: String
  },
  family:[{
    name: String,
    relationShip: String,
    company: String,
    title: String,
    phone: String
  }],
  insurance: {
    name: [{type: String, enum: insuranceName, required: true}],
    other: String
  },
  confirmed: {type: Boolean, required: true},
  resumeState: {type: String, enum: resumeStates, required: true},
  comment: String
});

module.exports = mongoose.model('Resume', ResumeSchema);