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
            steps {
                script {
                    def dockerImage = docker.build("malekghorbel/haki:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhubcred', usernameVariable: 'DOCKER_HUB_USERNAME', passwordVariable: 'DOCKER_HUB_PASSWORD')]) {
                        dockerImage.withRegistry('https://index.docker.io/v1/', 'DOCKER_HUB_USERNAME', 'DOCKER_HUB_PASSWORD') {
                        	def dockerImage = docker.build("malekghorbel/haki:latest")
                            dockerImage.push()
                        }
                    }
                }
            }
        }
    }
}

