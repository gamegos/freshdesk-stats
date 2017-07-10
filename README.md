# freshdesk-stats

[![NPM Version](https://img.shields.io/npm/v/npm.svg)
[![License](https://img.shields.io/npm/l/express.svg)

Fresdesk-stats is node wrapper for freshdesk api with advanced filtering and scheduled tasks.


### Dependencies

| Dependency                                | Version    |
|:------------------------------------------|:-----------|
| [Node.js](http://nodejs.org/)             | 6.3.1      |
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
GET /api/freshdesk/stats

```
Use following query parameters to get specific results:

```bash
# gets all tickets
GET /api/freshdesk/tickets

# gets tickets according to the value of the field
GET /api/freshdesk/tickets?field=value

# general search pattern for getting results by matched characters
GET /api/freshdesk/tickets?field=%value

# priority might be filtered by priority>,priority<, priority!
GET /api/freshdesk/tickets?priority>=3

# gets just predefined attributes of tickets
GET /api/freshdesk/tickets?requester_id=5034029181&fields=description,subject

#gets newly created tickets within specific time interval
GET /api/freshdesk/tickets?day=1&hour=3&minute=15

#sorts in descending order
GET /api/freshdesk/tickets?sort=-field

#sorts in ascending order
GET /api/freshdesk/tickets?sort=field

#gets stats of tickets according to timestamp
GET /api/freshdesk/stats?interval=10000 #note that base of interval is second

```

### Example
```bash
#gets tickets within last 4 day
GET /api/freshdesk/tickets?day=4&fields=requester_name,description
```
```json
[
  {
    "requester_name":"Erin M Lewis",
    "description":"I still can not make the drops pop on my game. No one has responded to me about this issue. Any time I try to match nothing happens no line or anything. Please let me know if this issue will be fixed!!! Thank you"
  },
  {
    "requester_name":"Trellany Atwell",
    "description":"I just wanted to know how do u get more tickets to complete the vending machines cuz i have been trying to complete the soup machine for the longest"
  }
]
```

```bash
#gets number of tickets created according to time interval
GET /api/freshdesk/stats?interval=2000000 #interval= 2000000 seconds
#returns {timestamp: ticket number}
```
```json
[
  {"1490622360000":1},
  {"1492622360000":10},
  {"1494622360000":4},
  {"1496622360000":4},
  {"1498622360000":7}
]
```


### License

This repository released under [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2017 Gamegos
