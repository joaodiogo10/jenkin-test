/* Requires the Docker Pipeline plugin */
pipeline {
    agent any
    
    stages 
    {
        stage('build and test') 
        {
            agent
            {
                dockerfile 
                { 
                    filename 'Dockerfile' 
                    additionalBuildArgs '--progress=plain --no-cache --target test'
                }
            }

            steps
            {
                echo "Built and tested successfully"
                sh 'node --version'
            }
            
        }
        stage('Deliver') {
            steps 
            {
                echo "Delivering..."
            }
        }
    }
}
