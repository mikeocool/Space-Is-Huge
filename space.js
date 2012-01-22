var SpaceIsHuge = function() {
    var totalSpaceSize = 0;

    var addEventListener = function(elem, type, eventHandle) {
        if (elem == null || elem == undefined) return;
        if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );
        } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
        } else {
            elem["on"+type]=eventHandle;
        }
    };


    function mouseWheel(e) {
        var evt = window.event || e;

        var delta = 0;
        if (navigator.userAgent.toLowerCase().indexOf('webkit') >= 0) {
            delta = evt.wheelDelta / 4;
        } else {
            delta = -evt.detail * 5;
        }
        
        if(window.pageYOffset <= 0) {
            if(totalSpaceSize < 1000) {
                spaceTransition.height(Math.min(Math.max(spaceTransition.height() + delta, 0), 1000));
            } else {
                spaceSize = Math.max(spaceDiv.height() + delta, 0);
                spaceSpacer.height(spaceSize);
                spaceDiv.height(spaceSize);
                spaceTransition.css('top',spaceSize);
            }
            
            totalSpaceSize = Math.max(0, totalSpaceSize + delta);

            if(totalSpaceSize > 0) {
                //stop actual scrolling while you're in space
                if (evt.preventDefault) {
                    evt.preventDefault();
                } else {
                    return false
                }
            }

            updateCounter();
        }
    }

    function updateCounter() {
        var uas = Math.round((totalSpaceSize / 100000.0) * 1000.0) / 1000.0;
        var text = String(uas);
        while(text.length < 5) {
            text += '0';
        }
        text += ' AU';
        counterDiv.innerHTML = text;
    }
    
    if (navigator.userAgent.toLowerCase().indexOf('webkit') >= 0) {
        document.addEventListener('mousewheel', mouseWheel, false); // Chrome/Safari
    } else {
        document.body.addEventListener('DOMMouseScroll', mouseWheel, false); // Others
    }

    /*function scroll(e) {
        var evt = window.event || e;
        console.log(window.pageYOffset);
    }*/
    addEventListener(window, 'scroll', scroll);

    addEventListener(window, 'resize', function(e){
        spaceWidth = $('body').outerWidth(true);
        spaceDiv.width(spaceWidth);
        spaceTransition.width(spaceWidth);
    });

    var spaceDiv = $('<div id="hugespace"></div>').css({
                                    'position':'absolute',
                                    'top':0,
                                    'left':0,
                                    'overflow':'hidden',
                                    'width':$('body').outerWidth(true),
                                    'height':0,
                                    'background-image':'url(spacestuff/universe.jpg)',
                                    'background-position':'bottom center'}).prependTo('body');

    var spaceSpacer = $('<div id="spacer"></div>').css({
        'height':0
    }).prependTo('body');

    var spaceTransition = $('<div id="blastoff"></div>').css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'height': 0,
        'overflow': 'hidden',
        'width': $('body').outerWidth(true),
        'background-image': 'url(atmosphere_tall.png)',
        'background-position': 'bottom center',
    }).prependTo('body');
    
    //draw space counter
    var counterDiv = document.createElement('div');
    spaceDiv.get(0).appendChild(counterDiv);
    counterDiv.style.position = 'fixed';
    counterDiv.style.right = '10px';
    counterDiv.style.top = '10px';
    counterDiv.style.borderWidth = '1px';
    counterDiv.style.borderColor = '#fff';
    counterDiv.style.padding = '5px';
    counterDiv.style.color = '#fff';

    //draw space things
    var scale = 100000;
    for(var i = 0; i < spaceThings.length; i++) {
        var el = null;
        if(spaceThings[i].img) {
            el = document.createElement('img');
            el.src = spaceThings[i].img;
            el.style.left = '50%';
            el.style.marginLeft = (-(spaceThings[i].width / 2)) + 'px';
        } else {
            el = document.createElement('div');
            el.style.position = 'absolute';
        }
        el.style.position = 'absolute';
        el.style.bottom = (scale * spaceThings[i].distance) + 'px';
        spaceDiv.get(0).appendChild(el);

        if(spaceThings[i].run) {
            spaceThings[i].run(el);
        }
    }
    
}
$(document).ready(function(){
   SpaceIsHuge(); 
});

