<h1 align="center">Welcome to Backend of React Developers 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" /> <img alt="Node" src="https://img.shields.io/badge/node-v12.11.0-green" />  <img alt="Node" src="https://img.shields.io/badge/sequelize-v5.9.4-yellow" /> <img alt="Node" src="https://img.shields.io/badge/db-postgres-lightgrey" /> <img alt="Node" src="https://img.shields.io/badge/eslint-v5.16.0-red" />
</p>

## Description
Backend of the Devs and Tecnologies application created for testing purposes for a software development company.

### ✨ [Demo](https://reactdevelopers.fredericobinsfeld.com.br)
User: admin@admin.com
Password: admin123

## Install

```sh
yarn install
```

## Usage

```sh
Create a postgres database.
Create a file with the environment variables (.env) for configuring the database and application address, save it in the root folder. There is an .env.example file to take as a base.
Run the command `yarn sequelize db:migrate`.
To start the backend, just run the command yarn dev at the root of the application.
```

## Add User and Technologies

```sh
Add an administrator user via the route:
	Type: POST
	http://yourbackendaddress/users
	By sending a JSON with the information: name, email and password in the request body.
```
Example request:

<img alt="Users" src="https://i.ibb.co/fnYyhKD/Captura-de-tela-2020-09-28-220324.png" />

**Manually add the technologies in the database, in the technologies table, following the order below:**
```sh
ID: 1 | Name:  C#
ID: 2 | Name: Javascript
ID: 3 | Name: NodeJS
ID: 4 | Name: Angular
ID: 5 | Name: Ionic
ID: 6 | Name: React
ID: 7 | Name: Messageria
ID: 8 | Name: PHP
ID: 9 | Name: Laravel
```

✨ The backend configuration is finished!


## Author

👤 **Frederico Arend Binsfeld**

* Github: [@fredarend](https://github.com/fredarend);
* [Linkedin](https://www.linkedin.com/in/frederico-arend-binsfeld-5143396a/).
