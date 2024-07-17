/* Requires the Docker Pipeline plugin */
pipeline {
    agent { 
        label 'agent1'
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
