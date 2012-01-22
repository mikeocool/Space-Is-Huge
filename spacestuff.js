var spaceThings = [
    {
        name:'Moon',
        distance:0.002,
        width:220,
        height:220,
        img:'spacestuff/moon.png'
    },
    {
        name:'Mars',
        distance:0.52,
        width:640,
        height:524,
        img:'spacestuff/mars.png'
    },
    {
        name:'Asteroid Belt',
        distance:1.7,
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
        distance:4.2,
        width:640,
        height:524,
        img:'spacestuff/jupiter.png'
    },
    {
        name:'Saturn',
        distance:8.3,
        width:640,
        height:395,
        img:'spacestuff/saturn.png'
    },
    {
        name:'Uranus',
        distance:20.4,
        width:970,
        height:1000,
        img:'spacestuff/uranus.png'
    },
    {
        name:'Neptune',
        distance:30,
        width:600,
        height:588,
        img:'spacestuff/neptune.png'
    }
];
