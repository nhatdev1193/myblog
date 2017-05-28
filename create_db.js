const exec = require('child_process').exec
const env = process.env.NODE_ENV

function check_env(callback){
    if(env == 'test'){
      exec('createdb myblog-test', callback)
    }
    else if(env == 'development'){
      exec('createdb myblog-development', callback)
    }
    else if(env == 'production'){
      exec('createdb myblog-production', callback)
    }
    else{
      console.error('You should set environment first: test, development, production')
      return
    }
}

check_env((err, stdout, stderr) => {
  if(err){
    console.error(`exec error: ${err}`);
    return
  }

  console.log(`exec stdout: ${stdout}`)
  console.log(`exec stderr: ${stderr}`)
});