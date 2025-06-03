document.getElementById("insertTOP").innerHTML = `
<div id="disclaimer"></div>
<div id="header"></div>
<div id="navbar"></div>
<div id="statusHeader" class="body-redX" style="user-select: none; -webkit-user-select: none;"></div>
`
document.getElementById("navbar").innerHTML = `
<div id="header-links">
    <em>Tyrants rise in the <span style="background-color:rgb(64, 54, 54); border-radius: 15px; padding: 5px">darkness</span></em>
</div>
`;
/*
To be added into the navbar
<a href="index.html"><div style="padding-left:10px; padding-right:10px">Home</div></a>
<div style="padding-left:10px; padding-right:10px">News & Legislation</div>
<div style="padding-left:10px; padding-right:10px">Parliament</div>
<div style="padding-left:10px; padding-right:10px">Committees & Divisions</div>

*/
document.getElementById("header").innerHTML = `
<!--<img src="parliament-full.svg" id="logo">-->
<img src="logo.png" id="logo">
`
document.getElementById("logo").onclick = function() {
    window.location.href="index.html";
}
document.getElementById("disclaimer").innerHTML = `
    <h3>The United Republic of Hack Club and other associated entities are not associated with the Hack Club non-profit organization
`
fetch("config.json")
        .then(function(response) {
            return response.json();
        })
        .then (function(data) {
            if (data.broadcast === true) {
                document.getElementById("statusHeader").innerHTML = "<h3>● LIVE <span>Broadcasting Now</span></h3>";
            }
            else {
                document.getElementById("statusHeader").innerHTML = null;
                document.getElementById("statusHeader").classList.add("nullify");
            }
        })
                
