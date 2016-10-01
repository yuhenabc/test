window.onload = function () {
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(meta);

    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    document.body.style.width = height + 'px';
    document.body.style.height = width + 'px';
    document.body.style.left = width + 'px';
    
    var app = document.getElementById('app');
    app.style.transform = 'scale(' + height/1920 + ')';
    
};
