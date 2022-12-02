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

		stage("Build frontend"){

			steps {

                dir ('avatarai.web/frontend') {
                    sh "npm i"
                    sh "npm run build"
                }

			}
		}

		// stage("Install dependencies for backend"){

		// 	steps {

        //         dir ('avatarai.web/Backend') {
        //             sh "npm i -f"
        //         }

		// 	}
		// }
		
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