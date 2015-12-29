// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({

    // configure nodemon
    nodemon: {
      dev: {
        script: 'app/app.js',
        options: {
          //https://github.com/node-inspector/node-inspector
          nodeArgs: ['--debug=5859'],
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
            // opens browser on initial server start
            nodemon.on('config:update', function () {
              setTimeout(function () {
                require('open')('http://localhost:8081/debug?port=5859');
              }, 500);
            });
          },
          env: {
            PORT: '3001',
            NODE_ENV: 'development'
          }
        }
      }
    },
    //https://github.com/ChrisWren/grunt-node-inspector
    'node-inspector': {
      //dev: {}
      custom: {
        options: {
          'web-port': 8081,
          //'web-host': 'localhost',
          'debug-port': 5859,
          //'save-live-edit': true,
          //'no-preload': true,
          //'stack-trace-limit': 4,
          //'hidden': ['node_modules']
        }
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'node-inspector'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.loadNpmTasks('grunt-concurrent');

  grunt.loadNpmTasks('grunt-node-inspector');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['concurrent']);  

};