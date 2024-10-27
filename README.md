# vehicle-builder

Update an existing typescript command-line app to create a new vehicle OR select an existing vehicle, and perform actions.

## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Authors and acknowledgement](#authors-and-acknowledgement)
    
## Description

Using inquirer and typescript, the user is prompted to create a new vehicle OR select and existing vehicle. If the user selects create a new vehicle, the user is prompted to enter car, truck or motorbike. The user is prompted to enter vehicle information, and a new vehicle is created, with which certain actions can be performed. The results of performActions method are outputed in the command-line until the user exits. If the user selects an existing vehicle, a new instance of the Cli is created for an existing car, truck or motorbike and certain actions can be performed, until the user exits.

## Installation

Install inquirer and typescript modules. In "scripts", ensure "start": "npm run build && node dist/index.js"

## Usage

The app declares 6 classes and 2 interfaces:

 - generic Vehicle class
 - Car class, extends Vehicle class
 - Truck class, extends Vehicle class 
 - Morobike class, extends Vehicle class
 - Wheel class, defines properties of wheel
 - Command line class
 - Driveable interface, inplemented by Vehicle class
 - AbleToTow interface, impelemented by Truck class

 Run with npm start

## License
    This project is licensed under the MIT License.
    
## Contributing


## Testing


## Authors and acknowledgements


## Questions

For enquiries, please contact me at:
   - [Email](#email)
   - [GitHub](#github)
