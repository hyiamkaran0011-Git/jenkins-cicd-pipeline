pipeline {
  agent any
  triggers { pollSCM('* * * * *') }
  environment {
    IMAGE = 'jenkins-demo-app'
    CONTAINER = 'jenkins-demo-app'
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Build') {
      steps { sh 'npm install' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Docker Build') {
      steps { sh 'docker build -t $IMAGE:$BUILD_NUMBER -t $IMAGE:latest .' }
    }
    stage('Deploy') {
      steps {
        sh '''
          docker rm -f $CONTAINER || true
          docker run -d --name $CONTAINER -p 3000:3000 $IMAGE:latest
        '''
      }
    }
  }
  post {
    success { echo 'Pipeline succeeded!' }
    failure { echo 'Pipeline failed!' }
  }
}
