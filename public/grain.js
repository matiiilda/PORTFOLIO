/*! Grained.js
* Author : Sarath Saleem  - https://github.com/sarathsaleem
* MIT license: http://opensource.org/licenses/MIT
* GitHub : https://github.com/sarathsaleem/grained
* v0.0.1
*edited by Matilda, removed animation
*/
(function (window, doc) {

    "use strict";

    function grained(ele, opt) {

        var element = null,
            elementId = null,
            selectorElement = null;

        if (typeof ele === 'string') {
            element = doc.getElementById(ele.split('#')[1]);
        }
        else if (typeof ele === 'object') {
            element = ele;
        }

        if (!element) {
            console.error('Grained: cannot find the element with id ' + ele);
            return;
        } else {
            elementId = element.id;
        }

        //set style for parent
        if (element.style.position !== 'absolute') {
            element.style.position = 'relative';
        }
        element.style.overflow = 'hidden';

        //default option values
        var options = {
            animate: false,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.1,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1
        };

        Object.keys(opt).forEach(function (key) {
            options[key] = opt[key];
        });

        var generateNoise = function () {
            var canvas = doc.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = options.patternWidth;
            canvas.height = options.patternHeight;
            for (var w = 0; w < options.patternWidth; w += options.grainDensity) {
                for (var h = 0; h < options.patternHeight; h += options.grainDensity) {
                    var rgb = Math.random() * 256 | 0;
                    ctx.fillStyle = 'rgba(' + [rgb, rgb, rgb, options.grainOpacity].join() + ')';
                    ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
                }
            }
            return canvas.toDataURL('image/png');
        };

        function addCSSRule(sheet, selector, rules, index) {
            var ins = '';
            if (selector.length) {
                ins = selector + "{" + rules + "}";
            } else {
                ins = rules;
            }

            if ("insertRule" in sheet) {
                sheet.insertRule(ins, index);
            } else if ("addRule" in sheet) {
                sheet.addRule(selector, rules, index);
            }
        }

        var noise = generateNoise();

        var style = doc.createElement("style");
        style.type = "text/css";
        style.id = 'grained-animation-' + elementId;
        doc.body.appendChild(style);

        var rule = 'background-image: url(' + noise + ');';
        rule += 'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';

        selectorElement = '#' + elementId + '::before';
        addCSSRule(style.sheet, selectorElement, rule);
    }

    window.grained = grained;
    //END
})(window, document);
