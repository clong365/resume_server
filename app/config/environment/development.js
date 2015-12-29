'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/resume-dev'
  },

  cors: {
    whitelist: [
      'http://localhost:9000',
      'http://localhost:9001',
      'http://localhost:9002',
      'http://localhost',
      'http://www.getabcd.com',
      'http://t.getabcd.com',
      'http://s.getabcd.com',
      'http://teacher.getabcd.com',
      'http://student.getabcd.com',
      'http://wwwstatic.duapp-preview.com',
      'http://teacherstatic.duapp-preview.com',
      'http://studentstatic.duapp-preview.com',  
      'http://wwwstatic.duapp.com',
      'http://teacherstatic.duapp.com',
      'http://studentstatic.duapp.com'
    ]
  },

  seedDB: true
};
