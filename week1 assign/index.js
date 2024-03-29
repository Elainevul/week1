document.addEventListener('DOMContentLoaded', function() {
    const catCursor = document.createElement('img');
    catCursor.src = 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2ZyY2F0X2RvbWVzdGljX2NhdF9hbmltYWxzXzEzLWltYWdlLWpvYjE1NzcucG5n.png';
    catCursor.style.width = '40px'; // 设置猫头宽度
    catCursor.style.height = 'auto'; // 根据宽度自动调整高度
    catCursor.style.position = 'absolute';
    catCursor.style.zIndex = '9999'; // 设置层级高于其他元素
    catCursor.style.pointerEvents = 'none'; // 让鼠标点击事件能够穿透猫头
    document.body.appendChild(catCursor);

    document.addEventListener('mousemove', function(e) {
        catCursor.style.top = e.clientY + 'px';
        catCursor.style.left = e.clientX + 'px';
    });
});
