# **Merch Site**

#### Author: **Jessica Hvozdovich and Daniel Merys**
#### July 1, 2020

### Description

_This application serves as an introduction to React with create-react-app, components, JSX, and props while building a site with CRUD functionality. The merch site will display available items with their name, description, and quantity. A form is available to add new items. Quantities can be updated with "buy" and "restock" buttons._

### Instructions for use:

1. Open Terminal (macOS) or PowerShell (Windows)
2. To download the project Directory to your desktop enter the following commands:
```
cd Desktop
git clone https://github.com/dkmerys/merch-site.git
cd merch-site
```
3. To view the downloaded files, open them in a text editor or IDE of your choice.
* if you have VSCode for example, when your terminal is within the main project Directory you can open all of the files with the command:
```
code .
```
5. Download node and node package manager if they are not already installed on your device. You can find further instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript-8d3b52cf-3755-481d-80c5-46f1d3a8ffeb/installing-node-js-14f2721a-61e0-44b3-af1f-73f17348c8f4).
5. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
```
npm install
```
6. The command npm run start will build and open the compiled code in a browser of your choice using a local host.
```
npm run start
```

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!  
_Have a bug or an issue with this application? [Open a new issue](https://github.com/dkmerys/merch-site/issues) here on GitHub._

### Technologies Used

* JavaScript
* React
* JSX
* HTML
* Git and GitHub

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **User can view hard coded items on static site** | User Input:"localhost:3000" | Output: “Item List is displayed" |
| **User can add items to the store via a form** | User Input:"Add item" | Output: “Item form displayed" |
| **User can decrement item quantity with 'buy"** | User Input:"Hoodie Stock: 2, Click: Buy" | Output: “Hoodie Stock: 1" |
| **User cannot reduce a quantity below 0 when it it "out of stock** | User Input:"localhost:3000" | Output: “Ticket List is displayed" |

![Diagram of React views](public/MerchSiteDiagram.jpg)

#### License

This software is licensed under the MIT license.

Copyright © 2020 **_Jessica Hvozdovich and Daniel Merys_**