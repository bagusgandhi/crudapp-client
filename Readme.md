
# CrudApp Client
This is the Crud App on Frontend Development. You can see the setup and installation bellow.
For the Backend Development, you can see on this [link](https://github.com/bagusgandhi/crudapp-server)

Demo URL Crud App [https://beautiful-basbousa-6681ae.netlify.app/](https://beautiful-basbousa-6681ae.netlify.app/)

## Setup & Installation

Clone this Repository to your local-machine or server.

```sh
git clone https://github.com/bagusgandhi/crudapp-client.git
```
Then *cd* into it.
```sh
cd crudapp-client
```
install the package with npm or yarn.

```sh
npm install
// or
yarn
```
Create **.env** file on the root project, then add environtment variable **VITE_SERVER_URL** with value your backend crudapp url. For the Backend CrudApp Repository on this [link](https://github.com/bagusgandhi/crudapp-server).
```sh
VITE_SERVER_URL=http://your-backend-crudapp-url
```

## Running & Build
If you want to running in development, you can install *nodemon* 

    npm i -D nodemon

Then run the project with

    npm run dev
    // or
    yarn dev

For build this project, run this command

    npm run build
    // or
    yarn build
