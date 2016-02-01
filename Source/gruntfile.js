module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the Themeforest Standard Licenses\n' +
            ' */\n',


    // Task configuration
    // -------------------------------------------------------------------------------


    // Complile SCSS
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: {
          'src/assets/css/<%= pkg.name %>.css': 'src/assets/css/scss/<%= pkg.name %>.scss'
        }
      }
    },
    

    // Watch on SCSS files
    watch: {
      sass: {
        files: ['src/assets/css/**/*.scss'],
        tasks: ['sass'],
      }
    },
    

    // Clean files and directories
    clean: {
      options: {
        force: true
      },
      before_copy: ['dist'],
      after_copy: {
        src: ["dist/Starter-kit/*.html",
              "!dist/Starter-kit/starter.html",
              "dist/**/theguide.js",
              "dist/**/theguide.css",
              "dist/**/theguide.css.map",
              "dist/**/theguide.scss",
              "dist/**/css/scss",
              "dist/Starter-kit/assets/css/custom.css",
              "dist/Starter-kit/assets/js/custom.js",
              "dist/Starter-kit/assets/img/*",
              "!dist/Starter-kit/assets/img/favicon*",
              "!dist/Starter-kit/assets/img/logo*",
              ],
      },

      img: {
        src: ["dist/Source/src/assets/img/avatar-*.jpg",
              "dist/Source/src/assets/img/vid*.*",
              "dist/Source/src/assets/img/bg-*.jpg",
              "dist/Source/src/assets/img/step*.png",
              ],
      }
    },


    // Replace
    replace: {
      dist: {
        src: ['dist/Starter-kit/*.html', 'dist/Documentation/*.html'],
        overwrite: true,
        replacements: [{
          from: /    <link href="assets\/css\/theguide\.css" rel="stylesheet">\n/g,
          to: ""
        },
        {
          from: /    <script src="assets\/js\/theguide\.js"><\/script>\n/g,
          to: ""
        }]
      }
    },


    // Copy files
    copy: {
      dist: {
        files: [
          // dist folder
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/Documentation'},
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/Starter-kit'},

        ],
      },

      source: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/Source/src'},
          {expand: true, cwd: '.', src: ['package.json', 'gruntfile.js'], dest: 'dist/Source'},
          
        ]
      },

      dev: {
        files: [
          {expand: true, cwd: 'src/assets/vendors/bootstrap/fonts', src: ['**'], dest: 'src/assets/fonts/'},
          {expand: true, cwd: 'src/assets/vendors/font-awesome/fonts', src: ['**'], dest: 'src/assets/fonts/'}
        ]
      },

      img: {
        files: [
          {expand: false, cwd: 'dist/Source/src/assets/img/', src: 'placeholder.jpg', dest: 'avatar-1.jpg'}
        ]
      }
    },

    // Concat file to make app.min
    concat: {
      dist: {
        files: {
          // Javascript
          'dist/Starter-kit/assets/js/app.min.js': [
            'src/assets/vendors/jquery/jquery.min.js',
            'src/assets/vendors/bootstrap/js/bootstrap.min.js',
            'src/assets/vendors/lightslider/js/lightslider.min.js',
            'src/assets/vendors/prism/prism.js',
            'src/assets/vendors/clipboard.js/clipboard.min.js',
            'src/assets/vendors/fitvids/jquery.fitvids.js',
            'src/assets/vendors/lity/lity.min.js',
            'src/assets/vendors/matchHeight.min.js',
            'src/assets/vendors/jquery.highlight.js',
            'src/assets/vendors/jquery.mousewheel.min.js',
            'src/assets/vendors/jquery.countTo.js',
            'src/assets/js/theguide.js'
          ],

          'dist/Documentation/assets/js/app.min.js': [
            'src/assets/vendors/jquery/jquery.min.js',
            'src/assets/vendors/bootstrap/js/bootstrap.min.js',
            'src/assets/vendors/lightslider/js/lightslider.min.js',
            'src/assets/vendors/prism/prism.js',
            'src/assets/vendors/clipboard.js/clipboard.min.js',
            'src/assets/vendors/fitvids/jquery.fitvids.js',
            'src/assets/vendors/lity/lity.min.js',
            'src/assets/vendors/matchHeight.min.js',
            'src/assets/vendors/jquery.highlight.js',
            'src/assets/vendors/jquery.mousewheel.min.js',
            'src/assets/vendors/jquery.countTo.js',
            'src/assets/js/theguide.js'
          ],

          // CSS
          'dist/Starter-kit/assets/css/app.min.css': [
            'src/assets/vendors/bootstrap/css/bootstrap.min.css',
            'src/assets/vendors/lightslider/css/lightslider.min.css',
            'src/assets/vendors/font-awesome/css/font-awesome.min.css',
            'src/assets/vendors/prism/prism.css',
            'src/assets/vendors/lity/lity.min.css',
            'src/assets/css/theguide.css'
          ],

          'dist/Documentation/assets/css/app.min.css': [
            'src/assets/vendors/bootstrap/css/bootstrap.min.css',
            'src/assets/vendors/lightslider/css/lightslider.min.css',
            'src/assets/vendors/font-awesome/css/font-awesome.min.css',
            'src/assets/vendors/prism/prism.css',
            'src/assets/vendors/lity/lity.min.css',
            'src/assets/css/theguide.css'
          ]
        },
      },

      dev: {
        files: {
          // Javascript
          'src/assets/js/app.min.js': [
            'src/assets/vendors/jquery/jquery.min.js',
            'src/assets/vendors/bootstrap/js/bootstrap.min.js',
            'src/assets/vendors/lightslider/js/lightslider.min.js',
            'src/assets/vendors/prism/prism.js',
            'src/assets/vendors/clipboard.js/clipboard.min.js',
            'src/assets/vendors/fitvids/jquery.fitvids.js',
            'src/assets/vendors/lity/lity.min.js',
            'src/assets/vendors/matchHeight.min.js',
            'src/assets/vendors/jquery.highlight.js',
            'src/assets/vendors/jquery.mousewheel.min.js',
            'src/assets/vendors/jquery.countTo.js'
          ],

          // CSS
          'src/assets/css/app.min.css': [
            'src/assets/vendors/bootstrap/css/bootstrap.min.css',
            'src/assets/vendors/lightslider/css/lightslider.min.css',
            'src/assets/vendors/font-awesome/css/font-awesome.min.css',
            'src/assets/vendors/prism/prism.css',
            'src/assets/vendors/lity/lity.min.css'
          ]
        },
      },
    },

    // Uglify JS files
    uglify: {
      options: {
        mangle: true,
        //preserveComments: 'some',
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'dist/Documentation/assets/js/app.min.js': ['dist/Documentation/assets/js/app.min.js'],
          'dist/Starter-kit/assets/js/app.min.js': ['dist/Starter-kit/assets/js/app.min.js']
        }
      },
      dev: {
        files: {
          'src/assets/js/app.min.js': ['src/assets/js/app.min.js']
        }
      }
    },

    // Do some post processing on CSS files
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/*/assets/css/*.css'
      },
      dev: {
        src: 'src/assets/css/app.min.css'
      }
    },
    
    // Create custom.js and custom.css files
    "file-creator": {
      build: {
        "dist/Starter-kit/assets/js/custom.js": function(fs, fd, done) {
          fs.writeSync(fd, '$(function() {\n\n\n\n})(jQuery);');
          done();
        },
        
        "dist/Starter-kit/assets/css/custom.css": function(fs, fd, done) {
          fs.writeSync(fd, '');
          done();
        }
      }
    },
    
  
    // -------------------------------------------------------------------------------
    // END Task configuration
    
  });


  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-file-creator');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');


  // Default task(s).
  grunt.registerTask('dist',
    [
      'sass',
      'clean:before_copy',
      'copy:dist',
      'concat:dist',
      'replace:dist',
      'uglify:dist',
      'postcss:dist',
      'clean:after_copy',
      'file-creator',
      'copy:source'
      //'clean:img',  // delete images from production package
      //'copy:img'    // put a placeholder image for deleted images
    ]
  );

  grunt.registerTask('dev',
    [
      'sass',
      'concat:dev',
      'uglify:dev',
      'postcss:dev',
      'copy:dev',
      'watch'
    ]
  );

};