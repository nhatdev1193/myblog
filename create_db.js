const exec = require('child_process').exec;
const env = process.env.NODE_ENV;

/**
 * Add one callback function
 * @param {function} callback the function that will check error in terminal.
 */
function checkEnv(callback) {
  if(env == 'test') {
    exec('createdb myblog-test', callback);
  } else if(env == 'development') {
    exec('createdb myblog-development', callback);
  } else if(env == 'production') {
    exec('createdb myblog-production', callback);
  } else{
    console.error('You should set environment first');
    return;
  }
};

checkEnv((err, stdout, stderr) => {
  if(err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`exec stdout: ${stdout}`);
  console.log(`exec stderr: ${stderr}`);
});
