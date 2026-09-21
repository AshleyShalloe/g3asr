"use strict";

// globals

function initHeader() {
    var headerHtml = `<div id="header">
        <div class="logocontainer"><img src="res/logo.svg" id="logo" /></div>
        <div class="textcontainer">
            <h1>Edgware &amp; District<br>Radio Society</h1>
            Since 1937
        </div>
    </div>
    <div id="nav">
        <a href="index.html"><div>Home</div></a>
        <a href="programme.html"><div>Programme</div></a>
        <a href="history.html"><div>History</div></a>
        <a href="contact.html"><div>Contact</div></a>

    </div>`;

    var headerDiv = document.createElement("div");
    headerDiv.innerHTML = headerHtml;
    document.getElementsByTagName("body")[0].prepend(headerDiv);
}

function init() {
    initHeader();
}
