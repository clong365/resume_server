'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/resume'
  },

  cors: {
    whitelist: [
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
  }
};