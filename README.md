# Jenkins CI/CD Pipeline (Task 2)

A simple Jenkins pipeline that builds, tests and deploys a Node.js app using Docker.

## Tools
Jenkins, Docker, Node.js, GitHub

## Pipeline Stages
1. Checkout - pulls code from GitHub
2. Build - npm install
3. Test - npm test
4. Docker Build - builds the Docker image
5. Deploy - runs the container on port 3000

## What I did
1. Ran Jenkins in Docker (Docker Desktop) with the Docker socket mounted.
2. Installed docker and nodejs inside the Jenkins container.
3. Created a Pipeline job using "Pipeline script from SCM" pointing to this repo.
4. Enabled Poll SCM so every new commit triggers a build automatically.
5. Pushed a change and confirmed Build #2 started on its own.

## Screenshots
Jenkins dashboard:


![Dashboard](1.png)



Pipeline stages:


![Pipeline](2.png)



Build #2 triggered by SCM change:


![Trigger](3.png)



Deployed app on localhost:3000:


![App](4.png)



Console output (SUCCESS):


![Console](5.png)



## Interview Questions
1. **What is Jenkins?** An open-source automation server used to build, test and deploy code automatically in CI/CD.
2. **What is a Jenkinsfile?** A text file in the repo that defines the pipeline as code.
3. **How to create a pipeline?** New Item > Pipeline > "Pipeline script from SCM" > add Git repo URL > Script Path = Jenkinsfile > Save > Build Now.
4. **Common stages:** Checkout, Build, Test, Package, Deploy.
5. **Declarative vs Scripted:** Declarative uses a simple structured syntax (`pipeline { }`) and is easier to read. Scripted is Groovy-based, more flexible but more complex.
