pipeline {
    agent any
    
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('dockerhubcred') // Use the ID of your Docker Hub credentials
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            dockerImage = docker.build("malekghorbel/haki:latest")
        }

        stage('Push to Docker Hub') {
            withDockerRegistry([credentialsId: 'dockerhubcred', url: ""]) {
                dockerImage.push()
            }
        }
    }
}

