function expandImage(img) {
    const expandedImg = document.createElement('div');
    expandedImg.style.position = 'fixed';
    expandedImg.style.top = '0';
    expandedImg.style.left = '0';
    expandedImg.style.width = '100%';
    expandedImg.style.height = '100%';
    expandedImg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    expandedImg.style.display = 'flex';
    expandedImg.style.justifyContent = 'center';
    expandedImg.style.alignItems = 'center';
    expandedImg.style.zIndex = '1000';

    const expandedImgElement = document.createElement('img');
    expandedImgElement.src = img.src;
    expandedImgElement.style.maxWidth = '90%';
    expandedImgElement.style.maxHeight = '90%';

    expandedImg.appendChild(expandedImgElement);
    document.body.appendChild(expandedImg);

    expandedImg.onclick = function() {
        document.body.removeChild(expandedImg);
    };
}
