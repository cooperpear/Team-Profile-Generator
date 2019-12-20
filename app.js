var fs = require("fs");

var inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const returnengineer = require("./templates/returnengineer");
const returnmanager = require("./templates/returnmanager");
const returnintern = require("./templates/returnintern");
const back = require("./templates/back");
const front = require("./templates/front");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



data = front();
fs.appendFile("./output/index.html", data, function (err, res) {
  if (err)
    console.log("Error");

  
})

function promptUser() {
  return inquirer.prompt([

    {
      type: "list",
      name: "menuitems",
      message: "Enter your team member type",
      choices: ["Manager", "Intern", "Engineer", "Exit"]
    },

  ])

    .then((response) => {
      switch (response.menuitems) {
        case "Manager":
          getmanagerdetails();
          break;

        case "Intern":
          getinterndetails();
          break;

        case "Engineer":
          getengineerdetails();
          break;

        case "Exit":
          data = back();
          fs.appendFile("./output/index.html", data, function (err, res) {
            if (err)
              console.log("Error");

            else
              promptUser();
          })
          process.exit(0);
          break;
      }
    })
};

promptUser();

function getengineerdetails() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter engineer name"
    },

    {
      type: "input",
      name: "id",
      message: "Enter engineer id"
    },

    {
      type: "input",
      name: "email",
      message: "Enter engineer email"
    },

    {
      type: "input",
      name: "github",
      message: "Enter engineer github"
    }])
    .then((response) => {
      const engineer = new Engineer(response.name, response.id, response.email, response.github)
      let data = { name: engineer.getName(), id: engineer.getId(), email: engineer.getEmail(), github: engineer.getGithub(), role: engineer.getRole() }
      return returnengineer(data);



    })
    .then(data => {
      fs.appendFile("./output/index.html", data, function (err, res) {
        if (err)
          console.log("Error");

        else
          promptUser();
      })
    })




}

function getinterndetails() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter intern name"
    },

    {
      type: "input",
      name: "id",
      message: "Enter intern id"
    },

    {
      type: "input",
      name: "email",
      message: "Enter engineer email"
    },

    {
      type: "input",
      name: "school",
      message: "Enter intern school"
    }
  ])
    .then((response) => {
      const intern = new Intern(response.name, response.id, response.email, response.school)
      let data = { name: intern.getName(), id: intern.getId(), email: intern.getEmail(), school: intern.getSchool(), role: intern.getRole() }
      return returnintern(data);



    })


    .then(data => {
      fs.appendFile("./output/index.html", data, function (err, res) {
        if (err)
          console.log("Error");

        else
          promptUser();
      })
    })




}

function getmanagerdetails() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter manager name"
    },

    {
      type: "input",
      name: "id",
      message: "Enter manager id"
    },

    {
      type: "input",
      name: "email",
      message: "Enter manager email"
    },

    {
      type: "input",
      name: "Office",
      message: "Enter manager office number"
    }])
    .then((response) => {
      const manager = new Manager(response.name, response.id, response.email, response.Office)
      let data = { name: manager.getName(), id: manager.getId(), email: manager.getEmail(), Office: manager.getOfficeNumber(), role: manager.getRole() }
      return returnmanager(data);



    })
    .then(data => {
      fs.appendFile("./output/index.html", data, function (err, res) {
        if (err)
          console.log("Error");

        else
          promptUser();
      })
    })




}