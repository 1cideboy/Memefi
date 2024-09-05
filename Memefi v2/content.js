// === helpers ===
(function() {
    window.changeHashPlatform = () => {
        var lochash = location.hash.toString();
		if (lochash.indexOf('tgWebAppPlatform=weba') !== -1) {
			lochash = lochash.replaceAll("tgWebAppPlatform=weba", "tgWebAppPlatform=android");
		} else if (lochash.indexOf('tgWebAppPlatform=web') !== -1) {
			lochash = lochash.replaceAll("tgWebAppPlatform=web", "tgWebAppPlatform=android");
		}
        location.hash = lochash;
		if (index == 0) {
			location.reload();
			index = 1;
		}
    };
    window.changeHashPlatform();
    addEventListener("hashchange", (event) => {
        window.changeHashPlatform();
    });
})();

var index = 0;
const xpath = '//*[@width="3200" and @height="4000" and @xmlns="http://www.w3.org/2000/svg"]';
const svgNamespace = 'http://www.w3.org/2000/svg';


const clickCoin = () => {
    try {
        let check = document.querySelector('.dotlottie-container');
        if(check != undefined && check.textContent == 'Failed to fetch'){
            location.reload();
        }

        let gElement = check.querySelector('canvas');
        if (gElement) {
            // Trỏ vào phần tử con <g> thành công. Thực hiện các hành động mong muốn tại đây.
            let pointerdownEvent = new MouseEvent('pointerdown', {
                view: null,
                bubbles: true,
                cancelable: true
            });
            gElement.dispatchEvent(pointerdownEvent);
        }

        // if (result.singleNodeValue) {
            
        // }
    } catch (error) {
        console.error('Error:', error);
    }
}

var count = 0;
setInterval(function() {
    if (count < 80) {
        setTimeout(clickCoin, 100);
    } else {
		if (count == 119) {
			count = 0;
		}
    }
    
    count++;
}, 100); // Lặp lại mỗi 0.1 giây