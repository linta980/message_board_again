-Prvo kreiram folder server
-git init -y (iniciram git kurac palac ..)

-dodajem unutar server foldera:  npm install express morgan cors body-parser

-dodajem fajl index.js u server folder i require-ujem sve ove npm instalacije 

-setujem app=express() i use-ujem sve npm-ove sto sam instalirao 
- setujem osnovni get metod '/' 
- i zapocnem da osluskujem port koji sam setovao 

- i da u package.json-u moram da ubacim ovo u script deo : "scripts": {
    "start": "node index.js"
  } -- time cu reci da startuje server preko ovog fajla 

  - i instaliram nodemon npm install --save-dev nodemon (da server radi stalno i samo da osluskuje izmene 
  )
 -dodajem ovaj red u srcipts : "dev" :"nodemon index.js" i sad startujem nodemon umesto servera sa npm run dev komandom!!!

E sada , neka server radi ne ometano ,  vracam se jedan korak nazad i globalno konfigurisem @vue koji ce mi kreirati client folder
sa komandom npx @vue/cli create client

i brate sve sam instalirao i sto treba i sto ne treba 
- u index.html- u posle <title> dodam ovu liniju <link rel="sstylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
za temu sa bootstrapwatch-a sajta gde sam izabrao neku temu ..

--main .js ima jedan deo gde se mauntujem #app a u index.html-u imas  <div id="app"></div> ..znaci sve ide tu u taj div
-- malo je sve nesto drugacije kad instaliram Vue sa cli-a .. fali mi router.js , fali mi npm install ve-router
malo je cudno , treba znati Vue logiku 


--Instalacija MongoDb ..skini za win x64 verziju ..next..next..
--instaliram monk

- pravim db fajl u okviru servera