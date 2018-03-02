// consider this as latest
pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000 -p 5000:5000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Testing') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }


// i have made some changes as part of dev branch
