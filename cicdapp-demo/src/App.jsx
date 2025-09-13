import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>
          CICD JENKINS DEMO SEC-218
        </h1>
        <p>
          Jenkins source code used git repo and set branch <code>/main</code><br />
          - poll scm trigger option <code>* * * * *</code><br />
          - add build step <b>select windows batch command</b><br />
          <u>call npm install</u><br />
          <u>call npm run dev</u><br />
          rmdir "c:\\....tomcat10\webapps\jenkinsfrontenddemo"<br />
          mkdir "c:\\....tomcat10\webapps\jenkinsfrontenddemo"<br />
          xcopy /E /I /Y "c:\\....cicdapp-demo\\dist\\*" "c:\\....tomcat10\webapps\jenkinsfrontenddemo"<br />
          - save and run job
        </p>
      </div>
      <div>
        <p>
          build a step .add build step <b>windows batch <command /></b> stop tomcat 10 start tomcat 10
        </p>
      </div>
    </>
  )
}

export default App
