/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:22.4-alpine3.19' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
