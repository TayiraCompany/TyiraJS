#!/usr/bin/env node

    const {execSync} = require('child_process');
    
    const runCommand = command => {
        try {
            execSync(`${command}`, {stdio: 'inherit'});
        } catch (e) {
            console.log(`Faild to execute ${command}`, e);
            return false;
        }
        return true;
    }

    const repoName = process.argv[2];
    const gitCheckoutCommand = `git clone --depth 1 https://github.com/TayiraCompany/create-tayirajs-app ${repoName}`;
    const installDepsCommand = `cd ${repoName} && npm install`;

    console.log(`Cloning the repository with name ${repoName}`);
    const checkedOut = runCommand(gitCheckoutCommand);
    if(!checkedOut) process.exit(-1);

    console.log(`Installing dependencies for ${repoName}`);
    const installedDeps = runCommand(installDepsCommand);
    if(!installedDeps) process.exit(-1);

    console.log("Congratulations! You are ready, Follow Commands");
    console.log("For Frontend");
    console.log(`cd ${repoName} && npm run dev`);
    console.log("For Backend");
    console.log("npm install -g nodemon");
    console.log(`cd ${repoName}/node-server && nodemon`);