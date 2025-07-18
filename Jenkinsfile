pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Check Node and npm version') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
} 