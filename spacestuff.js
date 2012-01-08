var spaceThings = [
    {
        name:'Moon',
        distance:5,
        width:220,
        height:220,
        img:'spacestuff/moon.png'
    },
    {
        name:'Mars',
        distance:20,
        width:640,
        height:524,
        img:'spacestuff/mars.png'
    },
    {
        name:'Asteroid Belt',
        distance:40,
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
        distance:80,
        width:640,
        height:524,
        img:'spacestuff/jupiter.png'
    },
    {
        name:'Saturn',
        distance:100,
        width:640,
        height:395,
        img:'spacestuff/saturn.png'
    },
    {
        name:'Uranus',
        distance:150,
        width:970,
        height:1000,
        img:'spacestuff/uranus.png'
    },
    {
        name:'Neptune',
        distance:180,
        width:600,
        height:588,
        img:'spacestuff/neptune.png'
    }
];