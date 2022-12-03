pipeline {

	agent any
	stages {

		stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/avatarai.web"
				sh "git clone https://github.com/workshopapps/avatarai.web.git"
			}

		}

		stage("Build frontend"){

			steps {

				sh "echo $pwd 1"

                dir ('avatarai.web/frontend') {
					sh "echo $pwd 2"
                    sh "npm i"
                    sh "npm run build"
                }

			}
		}
		
		stage("Move repo") {
		
			steps {
				sh "sudo cp -r ${WORKSPACE}/avatarai.web /home/de-marauder/"
			}
		}
		stage("start frontend") {
		
			steps {
				sh "sudo systemctl stop zuvatar-frontend.service"
				sh "sudo systemctl restart zuvatar-frontend.service"
			}
		}
		
		stage("start backend") {
		
			steps {
				sh "sudo systemctl stop zuvatar-backend.service"
				sh "sudo systemctl restart zuvatar-backend.service"
			}
		}


	}



}