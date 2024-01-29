//Author     : Jose Kurian, Lohit Binu Philip
//Student ID : 100891948, 100894625
//Date       : 27/01/2024




"use strict";

// IIFE - Immediate invoked functional expression
(function(){

    function DisplayHomePage(){
        console.log("Called DisplayHomePage...")

        let AboutUsButton= document.getElementById("AboutUsBtn")
        AboutUsButton.addEventListener("click", function(){
            location.href = "team.html"
        })
    }
    function DisplayAboutPage(){
        console.log("Called DisplayAboutPage...")
    }
    function DisplayContactPage(){
        console.log("Called DisplayContactPage...")
    }
    function DisplayProductPage(){
        console.log("Called DisplayProductPage...")
    }
    function DisplayServicePage(){
        console.log("Called DisplayServicePage...")
    }

    function Start(){
        console.log("App Started...");

        switch(document.title){
            case "Harmony Hub":
                DisplayHomePage();
                break;
            case "Team":
                DisplayAboutPage();
                break;
            case "Blog":
                DisplayContactPage();
                break;
            case "Portfolio":
                DisplayProductPage();
                break;
            case "Services":
                DisplayServicePage();
                break;
        }
    }
    window.addEventListener("load", Start)
})()