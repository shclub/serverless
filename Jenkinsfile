#!/usr/bin/env groovy

node {
    
    stage('Checkout') {
        checkout scm
    }


    stage('Build') {
      sh 'faas template store pull node8-express'
      sh 'faas-cli build -f openfaas-*.yml '

    }

    stage('Push') {

        sh 'faas-cli push -f openfaas-*.yml '

    }

    stage('Deploy') {

        sh 'faas login -u admin --password 68941ce7466cc347242975eff2c371ea71d8a6d2 -g http://211.251.237.70:14000'
        sh 'faas-cli deploy -f openfaas-*.yml '

    }
}
