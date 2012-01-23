var spaceThings = [
    {
        name:'Moon',
        realDistance:0.002,
        position:200,
        width:220,
        height:220,
        img:'spacestuff/moon.png'
    },
    {
        name:'Mars',
        realDistance:0.52,
        position:500,
        width:640,
        height:524,
        img:'spacestuff/mars.png'
    },
    {
        name:'Asteroid Belt',
        realDistance:1.7,
        position:700,
        run:function(el) {
            el.style.height = '900px';
            el.style.width = "100%";
            var pos = 0;
            el.style.backgroundPosition = pos+"px 0px";
            el.style.backgroundImage = 'url(spacestuff/asteroids.png)';
            setInterval(function(){
                pos += 2;
                el.style.backgroundPosition = pos+"px 0px";
            }, 50);
        }
    },
    {
        name:'Jupiter',
        realDistance:4.2,
        position:900,
        width:640,
        height:524,
        img:'spacestuff/jupiter.png'
    },
    {
        name:'Saturn',
        realDistance:8.3,
        position:1200,
        width:640,
        height:395,
        img:'spacestuff/saturn.png'
    },
    {
        name:'Uranus',
        realDistance:20.4,
        position:1800,
        width:970,
        height:1000,
        img:'spacestuff/uranus.png'
    },
    {
        name:'Neptune',
        realDistance:30,
        position:2800,
        width:600,
        height:588,
        img:'spacestuff/neptune.png'
    }
];
