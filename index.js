"use strict";

// Dependencies
const readLine = require("readline-sync")
const request = require("request-async")

// Variables
const pao = {
    masterKey: "Pao",
    url: "http://localhost:8080/"
}

// Functions
async function start(){
    console.log("Pao Framework Verification.")
    const code = readLine.question("Code -> ")
    var response = await request(`${pao.url}pverify?code=${code}`, {
        headers: {
            "pao-sk": pao.masterKey
        }
    })
    response = JSON.parse(response.body)
    
    if(response.status === "verified"){
        console.log("Successfully verified.")
        process.exit()
    }else if(response.status === "already"){
        console.log("Already verified.")
    }else{
        console.log("Failed to verify.")
    }
    
    console.clear()
    start()
}

// Main
start()