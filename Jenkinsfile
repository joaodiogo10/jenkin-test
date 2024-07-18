/* Requires the Docker Pipeline plugin */
pipeline {
    dockerfile {
        filename 'Dockerfile.build'
    }
    stages {
        stage('build and test') {
            steps {
                echo "Building..."
                sh 'docker build --target build -t test .'
            }
        }
        stage('Deliver') {
            steps {
                echo "Delivering..."
            }
        }
    }
}
