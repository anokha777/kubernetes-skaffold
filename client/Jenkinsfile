pipeline {
   agent any

   environment {
     //  must set the following environment variable
     // DOCKERHUB_USERNAME = anokhadocker
     SERVICE_NAME = "client"
     REPOSITORY_TAG="anokhadocker/${SERVICE_NAME}:${BUILD_ID}"
   }

   stages {
      // stage('Preparation') {
      //    steps {
      //       cleanWs()
      //       // git credentialsId: 'GitHub', url: "https://github.com/${ORGANIZATION_NAME}/${SERVICE_NAME}"
      //    }
      // }
      stage('Build') {
         steps {
            sh 'echo No build required for Webapp.'
         }
      }

      stage('Build and Push Image') {
         steps {
           sh 'docker image build -t ${REPOSITORY_TAG} .'
         }
      }

      stage('Push image to docker registry') {
         // docker.withRegistry('https://registry.hub.docker.com', dockerRegistryCred) {
         //    // app.push("${REPOSITORY_TAG}")
         //    // app.push("latest")
         //    sh 'docker push ${REPOSITORY_TAG}'
         //    }
         steps {
            withDockerRegistry([ credentialsId: "dockerRegistryCred", url: "https://registry.hub.docker.com" ]) {
               sh 'docker push ${REPOSITORY_TAG}'
            }
         }
      }

      stage('Deploy to Cluster') {
          steps {
            sh 'envsubst < ${WORKSPACE}/client.yaml | kubectl apply -f -'
          }
      }
   }
}