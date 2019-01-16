(function () {
    let elements = document.querySelectorAll('[data-tw-bind]'),
        scope = {};
    elements.forEach(function (element) {
        //execute scope setter
        if (element.type === 'text' || element.type === 'textarea') {
            let propToBind = element.getAttribute('data-tw-bind');
            addScopeProp(propToBind);
            element.onkeyup = function () {
                scope[propToBind] = element.value;
            }
        };

        //bind prop to elements
        function addScopeProp(prop) {
            //add property if needed
            if (!scope.hasOwnProperty(prop)) {
                //value to populate with newvalue
                let value;
                Object.defineProperty(scope, prop, {
                    set: function (newValue) {
                        value = newValue;
                        elements.forEach(function (element) {
                            //change value to binded elements
                            if (element.getAttribute('data-tw-bind') === prop) {
                                if (element.type && (element.type === 'text' ||
                                        element.type === 'textarea')) {
                                    element.value = newValue;
                                } else if (!element.type) {
                                    element.innerHTML = newValue;
                                }
                            }
                        });
                    },
                    get: function () {
                        return value;
                    },
                    enumerable: true
                });
            }
        }
    });

    log = function () {
        Object.keys(scope).forEach(function (key) {
            console.log(key + ': ' + scope[key]);
        });
    }

    /*changeNameByCode = function () {
      scope.name = 'name Changed by Code';
    }
  
    changeSurnameByCode = function () {
      scope.surname = 'surname Changed by Code';
    }*/
})();

// node list of all images
const allImg = document.querySelectorAll('.img');
//console.log(allImg);

let counter = 0;

function goRight() {
    //console.log(counter);
    document.getElementById("button-left").disabled = false;
    if (counter === (allImg.length - 2)) {
        document.getElementById("button-right").disabled = true;
    }
    allImg[counter].classList.add("hidden");
    allImg[counter + 1].classList.remove("hidden");
    counter++;
}

function goLeft() {
    document.getElementById("button-right").disabled = false;
    console.log(counter);
    console.log(allImg[counter]);
    if (counter === 1) {
        document.getElementById("button-left").disabled = true;
    }
    allImg[counter].classList.add("hidden");
    allImg[counter - 1].classList.remove("hidden");
    counter--;
}

const colorInput = document.querySelector('input[type=color]');
const colorCSS = document.querySelectorAll('.textcolor');
//console.log(colorCSS);


colorInput.addEventListener('change', () => {
    console.log(colorInput.value);
    document.getElementById("body-of-letter").style.setProperty('--text-color', colorInput.value);
    document.getElementById("header-of-letter").style.setProperty('--text-color', colorInput.value);
    document.getElementById("end-of-letter").style.setProperty('--text-color', colorInput.value);
})