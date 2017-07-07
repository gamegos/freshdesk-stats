# freshdesk-stats

[![NPM Version](https://img.shields.io/npm/v/npm.svg)
[![License](https://img.shields.io/npm/l/express.svg)

Fresdesk-stats is node wrapper for freshdesk api with advanced filtering and scheduled tasks.


### Dependencies

| Dependency                                | Version    |
|:------------------------------------------|:-----------|
| [Node.js](http://nodejs.org/)             | 3.10.3     |
| [PostgreSQL](http://www.postgresql.org/)  | 9.4.8      |

### Installation

```bash
# Install dependencies if not provided yet
$ git clone https://github.com/Gamegos/freshdesk-stats
$ npm install #run this command under project directory
```

### Quick Start

Create new postgres database:

```bash
$ sudo -u postgres createdb example
```

Customize configurations by filling freshdesk api key, target url and dialect options.

Run migrations and execute program:

```bash
$ sequelize db:migrate
$ npm start # open localhost:5000 in browser
```

This registers the following endpoints:

```
GET /api/freshdesk/tickets

```
Use following query parameters to get specific results:

```
GET /api/freshdesk/tickets # gets all tickets
GET /api/freshdesk/tickets?field=value  # gets tickets according to the value of the field
GET /api/freshdesk/tickets?field=%value # general search pattern for getting results by matched characters
GET /api/freshdesk/tickets?priority>=3  # priority might be filtered by priority>,priority<, priority!
GET /api/freshdesk/tickets?requester_id=5034029181&fields=description,subject  # gets just predefined attributes
GET /api/freshdesk/tickets?day=1&hour=3&minute=15 #gets newly created tickets within specific time interval

```

### License

This repository released under [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2017 Gamegos
