let domainBlocks = document.getElementById('piShapedHacker_').getElementsByClassName('domain');

for (let i = 0; i < domainBlocks.length; i++) {

    domainBlocks[i].addEventListener('mouseenter', () => {

        if (domainBlocks[i].style.background) return;

        setTimeout(() => {
            domainBlocks[i].classList.remove('domain1st');

            for (let j = 240; j >= 216; j--) {
                setTimeout(() => {
                    let bS = 2 * ((240 - j) / 24);

                    domainBlocks[i].style.background = `linear-gradient(145deg, #f0f0f0, #${j.toString(16)}${j.toString(16)}${j.toString(16)})`.toString();
                    domainBlocks[i].style.boxShadow = `${bS}px ${bS}px ${bS * 2}px #b5b5b5, -${bS}px -${bS}px ${bS * 2}px #ffffff`.toString();

                    domainBlocks[i].getElementsByTagName('svg')[0].style.filter = `drop-shadow(${2 - (2 * ((240 - j) / 24))}px ${2 - (2 * ((240 - j) / 24))}px 1px #b5b5b5)`;

                    domainBlocks[i].getElementsByTagName('h1')[0].style.fontSize = `${16 + (0.5 * ((240 - j) / 24))}px`;
                }, 400 * ((240 - j) / 24));
            }

            setTimeout(() => {
                domainBlocks[i].style.background = null;
                domainBlocks[i].style.boxShadow = null;

                domainBlocks[i].classList.add('domain2nd');
            }, 400);
        }, 400);
    });
}

for (let i = 0; i < domainBlocks.length; i++) {

    domainBlocks[i].addEventListener('mouseleave', () => {

        if (domainBlocks[i].style.background) return;

        domainBlocks[i].getElementsByTagName('h1')[0].style.fontSize = null;

        for (let j = 216; j <= 240; j++) {
            setTimeout(() => {
                let bS = 10 * ((j - 216) / 24);

                domainBlocks[i].style.background = `linear-gradient(145deg, #f0f0f0, #${j.toString(16)}${j.toString(16)}${j.toString(16)})`.toString();
                domainBlocks[i].style.boxShadow = `inset ${bS}px ${bS}px ${bS * 3}px #b5b5b5, inset -${bS}px -${bS}px ${bS * 3}px #ffffff`.toString();

                domainBlocks[i].getElementsByTagName('svg')[0].style.filter = `drop-shadow(${2 * ((j - 216) / 24)}px ${2 * ((j - 216) / 24)}px 1px #b5b5b5)`;
            }, 400 + (400 * ((j - 216) / 24)));
        }

        setTimeout(() => {
            domainBlocks[i].style.background = null;
            domainBlocks[i].style.boxShadow = null;

            domainBlocks[i].getElementsByTagName('svg')[0].style.filter = null;

            domainBlocks[i].classList.remove('domain2nd');
            domainBlocks[i].classList.add('domain1st');
        }, 800);
    });
}

let iconBlocks = document.getElementById('piShapedHacker_').getElementsByClassName('icon');

for (let i = 0; i < iconBlocks.length; i++) {
    iconBlocks[i].addEventListener('mouseenter', () => {
        iconBlocks[i].style.zIndex = '10';

        if (iconBlocks[i].querySelector('#rev')) {
            for (let j = iconBlocks[i].querySelector('#rev').style.opacity * 100; j <= 100; j++) {
                setTimeout(() => {
                    iconBlocks[i].querySelector('#rev').style.opacity = `${j / 100}`;
                    iconBlocks[i].querySelector('#rev').style.height = `calc(100% - ${1.1 - ((j / 100) / 2.85)}rem)`;
                }, 400 * (j / 100));
            }
        }

        setTimeout(() => {
            if (iconBlocks[i].getBoundingClientRect().width >= (parseInt(iconBlocks[i].style.height) * 3) + 19
                && iconBlocks[i].getElementsByClassName('moreInfo').length) {
                iconBlocks[i].getElementsByClassName('moreInfo')[0].classList.remove('hidden');
            }
        }, 400);
    });

    iconBlocks[i].addEventListener('mouseleave', () => {
        setTimeout(() => {
            iconBlocks[i].style.zIndex = null;
        }, 400);

        if (iconBlocks[i].querySelector('#rev')) {
            for (let j = iconBlocks[i].querySelector('#rev').style.opacity * 100; j >= 0; j--) {
                setTimeout(() => {
                    iconBlocks[i].querySelector('#rev').style.opacity = `${j / 100}`;
                    iconBlocks[i].querySelector('#rev').style.height = `calc(100% - ${.75 + ((j / 100) / 2.85)}rem)`;
                }, 400 * (j / 100));
            }
            console.log(iconBlocks[i].querySelector('#rev'));
        }

        if (iconBlocks[i].getElementsByClassName('moreInfo').length) {
            iconBlocks[i].getElementsByClassName('moreInfo')[0].classList.add('hidden');
        }
    });
}

function iconsResize() {
    for (let i = 0; i < iconBlocks.length; i++) {
        iconBlocks[i].style.height = null;
    }

    for (let j = 0; j < iconBlocks.length; j++) {
        iconBlocks[j].style.height = `${iconBlocks[j].getBoundingClientRect().width}px`;
    }
}

iconsResize();

window.addEventListener('resize', iconsResize);

let badgeBlocks = document.getElementById('piShapedHacker_').getElementsByClassName('badge');

function badgeResize() {
    for (let i = 0; i < badgeBlocks.length; i++) {
        badgeBlocks[i].style.height = null;
    }

    for (let j = 0; j < badgeBlocks.length; j++) {
        badgeBlocks[j].style.height = `${badgeBlocks[j].getBoundingClientRect().width}px`;
    }
}

badgeResize();

window.addEventListener('resize', badgeResize);

let logoBlocks = document.getElementById('piShapedHacker_').getElementsByClassName('logo');

for (let i = 0; i < logoBlocks.length; i++) {
    logoBlocks[i].addEventListener('mouseenter', () => {
        logoBlocks[i].style.zIndex = '10';

        setTimeout(() => {
            if (logoBlocks[i].getBoundingClientRect().width >= (parseInt(logoBlocks[i].style.height) * 3) + 19
                && logoBlocks[i].getElementsByClassName('moreInfo').length) {
                logoBlocks[i].getElementsByClassName('moreInfo')[0].classList.remove('hidden');

                if (logoBlocks[i].getElementsByClassName('moreInfo').length > 1) {
                    logoBlocks[i].getElementsByClassName('moreInfo')[1].classList.remove('hidden');
                }
            }
        }, 400);
    });

    logoBlocks[i].addEventListener('mouseleave', () => {
        setTimeout(() => {
            logoBlocks[i].style.zIndex = null;
        }, 400);

        if (logoBlocks[i].getElementsByClassName('moreInfo').length) {
            logoBlocks[i].getElementsByClassName('moreInfo')[0].classList.add('hidden');

            if (logoBlocks[i].getElementsByClassName('moreInfo').length > 1) {
                logoBlocks[i].getElementsByClassName('moreInfo')[1].classList.add('hidden');
            }
        }
    });
}

function logoResize() {
    for (let i = 0; i < logoBlocks.length; i++) {
        logoBlocks[i].style.height = null;
    }

    for (let j = 0; j < logoBlocks.length; j++) {
        logoBlocks[j].style.height = `${logoBlocks[j].getBoundingClientRect().width}px`;
    }
}

logoResize();

window.addEventListener('resize', logoResize);
