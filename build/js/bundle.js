/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    {
        id: 1,
        imagePath: "images/img_elmina.jpg",
        description: "Faire le tour du Château d’Elmina",
        done: false,
        link: "http://www.everycastle.com/Elmina-Castle.html",
        coordinates: {
            lat: 5.082493,
            lng: -1.348430
        }
    },
    {
        id: 2,
        imagePath: "images/img_borabora.jpg",
        description: "Un week-end en Polynésie Française.",
        done: false,
        link: "https://www.boraborapearlbeachresort.com/",
        coordinates: {
            lat: -16.476606,
            lng: -151.771717
        }
    },
    {
        id: 3,
        imagePath: "images/img_dakar.jpg",
        description: "Monter sur le Monument de la Renaissance africaine",
        done: true,
        link: "http://www.senegal360.net/monument-de-la-renaissance-africaine",
        coordinates: {
            lat: 14.722018,
            lng: -17.495022
        }
    },
    {
        id: 4,
        imagePath: "images/img_ouagadougou.jpg",
        description: "Monter sur le Monument aux héros nationaux",
        done: false,
        link: "https://www.consulatburkinaparis.org/monument-des-martyrs/",
        coordinates: {
            lat: 12.395254,
            lng: -1.558007
        }
    },
    {
        id: 5,
        imagePath: "images/img_paris.jpg",
        description: "Monter sur la Tour Eiffel",
        done: true,
        link: "https://www.toureiffel.paris/fr",
        coordinates: {
            lat: 48.858088,
            lng: 2.294500
        }
    },
    {
        id: 6,
        imagePath: "images/img_bamako.jpg",
        description: "Monter sur la tour de l’Afrique",
        done: false,
        link: "http://tourdelafrique.gouv.ml/",
        coordinates: {
            lat: 12.584443,
            lng: -7.943459
        }
    }
]



/***/ }),

/***/ "./src/dream.js":
/*!**********************!*\
  !*** ./src/dream.js ***!
  \**********************/
/*! exports provided: buildAllDreams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAllDreams", function() { return buildAllDreams; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/map.js");



const dreamsContainer = document.querySelector('#dreams-container');

function buildAllDreams() {
    while (dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    _data__WEBPACK_IMPORTED_MODULE_0__["data"].forEach(buildOneDream);
    addDreamsListeners();
}

function buildOneDream(dream) {
    const dreamElement = document.createElement('div');
    dreamElement.innerHTML = `<div class="card text-center" id = "${dream.id}">
        <h8 class="card-header font-weight-bold">${dream.description}</h8>
        <img src="${dream.imagePath}" class="card-img-top" alt="...">
        <div class="card-body">
            <a href="#" class="button-action btn btn-${dream.done ? "secondary" : "danger"} font-weight-bold btn-block">${dream.done ? "Je veux le refaire !" : "Je me lance !"}</a>
        </div>
        <div class="card-footer text-muted text-right">
            <a href="#" class="button-visit btn btn-outline-secondary btn-sm">Visiter</a>
            <a href="${dream.link}" target = "_blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>
        </div>
    </div>`;

    dreamsContainer.appendChild(dreamElement);

    Object(_map__WEBPACK_IMPORTED_MODULE_1__["addMarkerOnMap"])(dream);
}

function addDreamsListeners() {
    document.querySelectorAll(".button-visit").forEach(item => {
        item.addEventListener("click", event => {
            visitDreams(item.parentElement.parentElement.getAttribute("id"));
        })
    });

    document.querySelectorAll(".button-action").forEach(item => {
        item.addEventListener("click", event => {
            toggleDreamDone(item.parentElement.parentElement.getAttribute("id"));
            buildAllDreams();
        })
    });
}

function visitDreams(dreamId) {
    let position = _data__WEBPACK_IMPORTED_MODULE_0__["data"].filter(item => item.id == dreamId)[0].coordinates;
    Object(_map__WEBPACK_IMPORTED_MODULE_1__["visitDreamOnMap"])(position)
}

function toggleDreamDone(dreamId) {
    let dream = _data__WEBPACK_IMPORTED_MODULE_0__["data"].filter(item => item.id == dreamId)[0];
    dream.done = !dream.done;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _dream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dream */ "./src/dream.js");



function init() {
    Object(_map__WEBPACK_IMPORTED_MODULE_0__["initMap"])();
    Object(_dream__WEBPACK_IMPORTED_MODULE_1__["buildAllDreams"])();
}
window.init = init;



/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: initMap, addMarkerOnMap, visitDreamOnMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMarkerOnMap", function() { return addMarkerOnMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitDreamOnMap", function() { return visitDreamOnMap; });
let map;
let panorama;
const panoramaElement = document.querySelector('#panorama');
const resetMapButton = document.querySelector("#reset-map");
const backToMapButton = document.querySelector("#back-to-map");


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.857906, lng: 2.294011},
        zoom: 3,
        streetViewControl: false
});

    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('panorama'), {
            position: {lat: 48.857906, lng: 2.294011},
            pov: {
                heading: 34,
                pitch: 10
            }
    });
      

        addMapListener();
}

function addMapListener() {
    resetMapButton.addEventListener("click", resetMap);  
    backToMapButton.addEventListener("click", backToMap);   
}


function addMarkerOnMap(dream) {
    const marker = new google.maps.Marker({
        position: dream.coordinates, 
        map: map,
        icon: dream.done ? "images/marker_done.png" : "images/marker.png"
    });

    marker.addListener('click', function() {
        zoomOn(marker.getPosition());
      });

    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    
  }

function zoomOn(position) {
    map.setZoom(20);
    map.setCenter(position);
    map.setMapTypeId('satellite');
}

function resetMap() {
    map.setZoom(3);
    map.setCenter({lat: 48.857906, lng: 2.294011});
    map.setMapTypeId('roadmap');
}
function backToMap() {
    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    resetMapButton.style.display = "block";
}

function visitDreamOnMap(position) {
    panorama.setPosition(position)
    panoramaElement.style.display = "block";
    backToMapButton.style.display = "block";
    resetMapButton.style.display = "none";
}






/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map