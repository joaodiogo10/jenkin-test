/* Requires the Docker Pipeline plugin */
pipeline {
    agent { 
        //label 'agent-nodejs'
        dockerfile true
    }
    stages {
        stage('build') {
            steps {
                echo "Building..."
            }
        }
        stage('test') {
            steps {
                echo "Testing..."
            }
        }
        stage('Deliver') {
            steps {
                echo "Delivering..."
            }
        }
    }
}
