# Adventure Park

Este es el lugar en donde se aloja el proyecto de hacer un servicio de usuarios a parques de diversiones

## Herramientas empleadas

 * [Visual Studio Code](https://code.visualstudio.com/)

 * [Loopback](https://loopback.io/)

 * [Bootstrap](https://getbootstrap.com/)

 * [Twilio](https://www.twilio.com/es-mx/)

 * [SendGrid](https://sendgrid.com/)

 * [Python Flask](https://flask.palletsprojects.com/en/2.2.x/)

 * [Angular](https://angular.io/)

 * [Materialize](https://materializecss.com/)

Y este repositorio necesita si o si de esto:

 * [NodeJS](https://nodejs.org/en/)

 * [NPM](https://www.npmjs.com/)

## Cómo instalarla

Primero, se tiene que usar una cuenta de [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-co_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624317&adgroup=115749712463&gclid=EAIaIQobChMIobjww63M-wIV1oJaBR0QsgwFEAAYASAAEgLZcPD_BwE)
luego, hay que tener una cuenta de [Twilio](https://www.twilio.com/es-mx/), [SendGrid](https://sendgrid.com/) y [Flask](https://flask.palletsprojects.com/en/2.2.x/)
para usar estas herramientas con el [script de python](twilio-and-sendgrid/). Además junto a ese script se aloja un
archivo variables.py cuya base es esta:
```
import os
# Esto se hace para no exponer los datos en la red, aunque creo que habrá otras formas de petar este sistema a puro pedo
os.environ['TWILIO_ACCOUNT_SID']='<Clave SID de Twilio>'
os.environ['TWILIO_AUTH_TOKEN']='<Token de Twilio>'
os.environ['SENDGRID_API_KEY']='<API Key de SendGrid>'
os.environ['SENDGRID_EMAIL']='<Correo registrado en SendGrid>'
os.environ['TEST']='¿En serio estás leyendo esto? X3'
```
Por último, con la herramienta del Loopback instalada, en el directorio `/adventure_park_logic/` se debe usar el comando
```
lb4 datasource
```
**NOTA:** El nombre del datasource debe ser `dataPark` porque luego así será invocado en los controladores del backend

Y todo lo demás se consigue instalando los paquetes con npm gracias a los `package.json` que están en las carpetas
