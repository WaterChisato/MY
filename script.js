const fish = document.getElementById('woodenFish');
const hammer = document.getElementById('hammer');
const countDisplay = document.getElementById('count');
const resetBtn = document.getElementById('resetBtn');
const audio = document.getElementById('clickSound');

let count = 0;

// 点击事件处理
fish.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
    
    // 触发动画
    fish.style.transform = 'scale(1.1)';
    hammer.style.transform = 'rotate(-25deg)';
    
    // 播放音效
    audio.play();
    
    // 恢复原状
    setTimeout(() => {
        fish.style.transform = 'scale(1)';
        hammer.style.transform = 'rotate(0)';
    }, 100);
});

// 清零功能
resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});

// 移动端适配
window.addEventListener('resize', () => {
    fish.style.transform = 'scale(1)';
    hammer.style.transform = 'rotate(0)';
});
