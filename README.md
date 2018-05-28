# MtgCard.API

This project exists as the source code for my Node.JS API to access card data for various Magic the Gathering apps I am building.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

MtgCard.API requires:

1. Node.JS

### Installing

1. Clone the repository
```
git clone https://github.com/pattertj/MtgCard.API.git
```

2. Setup the database on config/database.js. I used [mLab.com](mLab.com) for mine.
```
module.exports = {
    remoteUrl : 'YOUR_MONGODB_URL'
};
```

3. Install the dependencies
```
npm install
```

4. Run the application in development mode 
```
npm run dev
```

5. Access [http://localhost:8000/api/cards/atog](http://localhost:8000/api/cards/atog) and you're ready to go!

## Built With

* [Express](https://expressjs.com/) -  Web application framework
* [Node.JS](https://nodejs.org/en/) - JavaScript runtime
* [Mongoose](http://mongoosejs.com/) - MongoDB object modeling

## Authors

* **Tyler Patterson** - *Initial work* - [pattertj](https://github.com/pattertj)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
