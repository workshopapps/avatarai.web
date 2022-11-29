pipeline {

	agent any
	stages {

		stage("build frontend"){

			steps {

				sh "cd frontend"
				sh "sudo npm install"
				sh "sudo npm run build"
			}

		
			}
		
		stage("deploy") {
		
			steps {
				sh "sudo cp -r Backend/ /home/de-marauder/backend"
				sh "sudo cp -r frontend/dist/	/home/de-marauder/frontend"
				sh ". ENV"
				sh "pm2 stop zuvatar-frontend"
				sh "cd /home/de-marauder/backend && pip install -r requirements.txt && uvicorn api:app --host 0.0.0.0 --port 8173"
				sh "cd /home/de-marauder && pm2 serve frontend --port 5137 --name zuvatar-frontend"

			}
		}


	}



}