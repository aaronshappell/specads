var ads = [];
var adsClosed = 0;

var Ad = function(){
    this.container = document.createElement("div");
    this.container.style = "position: fixed; width: 250px; left: " + Math.floor(Math.random() * (window.innerWidth - 250)) + "px; top: " + Math.floor(Math.random() * (window.innerHeight - 100)) + "px;";
    this.img = document.createElement("img");
    console.log(1 / (1 + Math.pow(Math.E, -0.4 * (adsClosed - 18))));
    if(Math.random() < 1 / (1 + Math.pow(Math.E, -0.4 * (adsClosed - 18)))){
        this.img.src = darkAdImages[Math.floor(Math.random() * darkAdImages.length)];
    } else{
        this.img.src = adImages[Math.floor(Math.random() * adImages.length)];
    }
    this.img.style = "width: 100%; height: auto;"
    this.closeButton = document.createElement("img");
    this.closeButton.src = "https://openclipart.org/image/2400px/svg_to_png/10941/TzeenieWheenie-red-green-OK-not-OK-Icons-1.png";
    this.closeButton.style = "position: absolute; right: 0px; top: 0px; width: 30px; height: 30px;";
    this.closeButton.addEventListener("click", this.close.bind(this));
    this.container.appendChild(this.img);
    this.container.appendChild(this.closeButton);
    document.body.appendChild(this.container);
}
Ad.prototype.close = function(){
    adsClosed++;
    this.container.remove();
    ads.splice(ads.indexOf(this), 1);
}

var addAd = function(){
    ads.push(new Ad());
    console.log(Math.max(5000 - 200 * adsClosed, 100));
    setTimeout(addAd, Math.max(5000 - 200 * adsClosed, 100));
}

window.onload = function(){
    setTimeout(addAd, 5000);
}