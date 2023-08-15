// ==UserScript==
// @name         RPlace 2023
// @namespace    https://okunamayanad.com/
// @version      1.0
// @description  Discord: @okunamayand, Github: https://github.com/okunamayanad/r-place-2023
// @author       okunamayanad
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    const url18 = 'https://mrkennyserver.000webhostapp.com/18/';
    const url36 = 'https://mrkennyserver.000webhostapp.com/36/';
    const url72 = 'https://mrkennyserver.000webhostapp.com/72/';
	const link0 = 'https://static-cdn.jtvnw.net/badges/v1/b99c049f-cb1b-485b-9eaf-afadcaba7add/';
	const link1 = 'https://static-cdn.jtvnw.net/badges/v1/b99c049f-cb1b-485b-9eaf-afadcaba7add/1';
	const link2 = 'https://static-cdn.jtvnw.net/badges/v1/b99c049f-cb1b-485b-9eaf-afadcaba7add/2';
	const link3 = 'https://static-cdn.jtvnw.net/badges/v1/b99c049f-cb1b-485b-9eaf-afadcaba7add/3';

    const numBadges = 5;
    let badgeIndex = 0;

    function cambiarBadge() {
        const elemento1 = document.querySelectorAll(`img[src^="${link0}"]`);
		const elemento2 = document.querySelectorAll(`img[src^="${url18}"]`);
		const elemento3 = document.querySelectorAll(`img[src^="${url36}"]`);
		const elemento4 = document.querySelectorAll(`img[src^="${url72}"]`);
		const elemento5 = document.querySelectorAll(`img[srcset*="${link0}"]`);
		const elemento6 = document.querySelectorAll(`img[srcset*="https://mrkennyserver.000webhostapp.com/"]`);

		
		elemento1.forEach(element => {
			const srcAtrib = element.getAttribute('src');
			if (srcAtrib === link1) {
				element.src = `${url18}${badgeIndex + 1}.png`;
			}
			if (srcAtrib === link2) {
				element.src = `${url36}${badgeIndex + 1}.png`;
			}
			if (srcAtrib === link3) {
				element.src = `${url72}${badgeIndex + 1}.png`;
			}
		});
		elemento2.forEach(element => {
			element.src = `${url18}${badgeIndex + 1}.png`;
		});
		elemento3.forEach(element => {
			element.src = `${url36}${badgeIndex + 1}.png`;
		});
		elemento4.forEach(element => {
			element.src = `${url72}${badgeIndex + 1}.png`;
		});

		elemento5.forEach(element => {
			const srcsetAtrib = element.getAttribute('srcset');
			const srcsetAtrib2 = srcsetAtrib
				.replace(link1, `${url18}${badgeIndex + 1}.png`)
				.replace(link2, `${url36}${badgeIndex + 1}.png`)
				.replace(link3, `${url72}${badgeIndex + 1}.png`);

			element.setAttribute('srcset', srcsetAtrib2);
		});
		elemento6.forEach(element => {
			const srcsetAtrib = element.getAttribute('srcset');
			const srcsetAtrib2 = srcsetAtrib.replace(/\/\d+\.png/g, `/${badgeIndex + 1}.png`);
			element.setAttribute('srcset', srcsetAtrib2);
		});
    }

    function updateButton() {
        button.textContent = `Change Badge: ${badgeIndex + 1}`;
    }

    const button = document.createElement('button');
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.left = '50%';
    button.style.transform = 'translateX(-50%)';
    button.style.zIndex = '9999';
    button.style.border = '1px solid #ccc';
    button.style.borderRadius = '5px';
    button.style.backgroundColor = '#f0f0f0';
    button.style.color = '#444';
    button.style.padding = '5px 10px';
    button.style.fontSize = '16px';
    button.style.fontWeight = 'bold';
    button.addEventListener('click', () => {
        badgeIndex = (badgeIndex + 1) % numBadges;
        cambiarBadge();
        updateButton();
    });

    window.addEventListener('load', function() {
        document.body.appendChild(button);
        cambiarBadge();
        updateButton();

        setInterval(() => {
            cambiarBadge();
        }, 100);
    });
})();
