pipeline {

	agent any
	stages {

		stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/avatarai.web"
				sh "git clone https://github.com/workshopapps/avatarai.web.git"
				sh "sudo cp -r ${WORKSPACE}/avatarai.web /home/de-marauder/avatarai.web"
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