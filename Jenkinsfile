#!/usr/bin/env groovy

node {
    
    stage('Checkout') {
        checkout scm
    }


    stage('Build') {
            sh 'faas template pull node8-express'
            sh 'faas-cli build -f openfaas-*.yml '

    }

    stage('Push') {

            sh 'faas-cli push -f openfaas-*.yml '

    }

    stage('Deploy') {

            sh 'faas-cli deploy -f openfaas-*.yml '

    }
}
