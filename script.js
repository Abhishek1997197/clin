function startAutomation() {
    const url = document.getElementById('websiteInput').value;
    if (!url) {
        alert('Please enter a website URL');
        return;
    }

    document.getElementById('container').innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.onload = function () {
            clickLinks(iframe);
        };
        document.getElementById('container').appendChild(iframe);
    }
}

function clickLinks(iframe) {
    setTimeout(() => {
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const links = doc.querySelectorAll('a');
            if (links.length > 0) {
                links[Math.floor(Math.random() * links.length)].click();
            }
            setTimeout(() => {
                iframe.src = iframe.src;
            }, 2000);
        } catch (error) {
            console.error('Cross-origin restriction prevents access to the site:', error);
        }
    }, 3000);
}
