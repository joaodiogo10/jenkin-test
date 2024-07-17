/* Requires the Docker Pipeline plugin */
pipeline {
    agent { 
         node {
            label 'onde-alpine' // specify the label of the node
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
