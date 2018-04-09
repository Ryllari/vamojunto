# VamoJunto

O VamoJunto é um aplicativo de trajetos acompanhados com foco em promover um ambiente seguro e confortável para o usuário. Com opções de trajeto a pé, de carro, ônibus ou bicicleta, o seu uso pode tanto auxiliar na redução de congestionamentos, como no desenvolvimento de novos relacionamentos.

### Pré requisitos
Você precisa instalar o [nodejs](https://nodejs.org/) e o [react-native](https://facebook.github.io/react-native/docs/getting-started.html#the-react-native-cli)

### Instalação

```bash
npm install
npm install react-native
react-native link native-base
```

### Configuração
Você deve criar um projeto no [Firebase](https://console.firebase.google.com/) e adicionar as configurações no projeto, no arquivo /src/config/firebase.js.

```js
  export const FIREBASE_CONFIG = {
    apiKey: "<YOUR-API-KEY>",
    authDomain: "<YOUR-PROJECT-ID>.firebaseapp.com",
    databaseURL: "https://<YOUR-PROJECT-ID>.firebaseio.com",
    projectId: "<YOUR-PROJECT-ID>",
    storageBucket: "<YOUR-PROJECT-ID>.appspot.com",
    messagingSenderId: "<YOUR-MESSAGING-SENDER-ID>"
  }
```

### Executar como aplicação Android
```bash
react-native run-android
```

### Executar como aplicação IOS
```bash
react-native run-ios
```
