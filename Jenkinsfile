pipeline {
    agent any

    stages {
        stage("Prune Docker images older than 30 days") {
            steps {
                sh "docker image prune --all --filter 'until=720h'"
            }
        }
        stage("Create .env file") {
            steps {
                sh "rm .env*"
                sh "touch .env.local"
                sh "echo 'NEXT_PUBLIC_SANITY_DATASET'=$NEXT_PUBLIC_SANITY_DATASET >> '.env.local'"
                sh "echo 'NEXT_PUBLIC_SANITY_PROJECT_ID'=$NEXT_PUBLIC_SANITY_PROJECT_ID >> '.env.local'"
                sh "echo 'NEXT_PUBLIC_BASE_URL'=$NEXT_PUBLIC_BASE_URL >> '.env.local'"
                sh "echo 'NEXT_SHARP_PATH'='/usr/src/personal-website/node_modules/sharp' >> '.env.local'"
            }
        }
        stage("Start Docker") {
            steps {
                sh "docker-compose down"
                sh "docker-compose up -d --build --force-recreate"
                sh "docker-compose ps"
            }
        }
    }
}