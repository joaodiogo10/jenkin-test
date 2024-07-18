/* Requires the Docker Pipeline plugin */
pipeline {
    agent
    {
        dockerfile {
            filename 'Dockerfile_agent'
        }
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
