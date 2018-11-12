document.documentElement.classList.toggle('standalone', !!window.navigator.standalone);

function mainPage() {
    let covers = '';
    for (let i = 0; i <= 23; i++) {
        covers += '<div class="cover-item"></div>';
    }
    document.body.innerHTML = `
<header class="navigation-menu">
    <button class="menu-button" onclick="document.querySelector('.side-menu').classList.toggle('active',true);"></button>
    <button class="search-button"></button>
</header>
<main>
    <section class="featured-banner">
        <span class="title">Subway Creatures</span>
        <span class="subtitle">Thursdays at 12PM ET / 9AM PT</span>
    </section>
    <section class="up-next">Up Next: Real Ass Podcast (11AM ET MON)</section>
    <section class="covers-grid">${covers}</section>
</main>
<footer class="tab-bar">
    <button class="home active">Home</button>
    <button class="feed">Feed</button>
    <button class="live">Live</button>
    <button>
    <button class="podcasts">Podcasts</button>
    <button class="profile">Profile</button>
</footer>`;
    genSideMenu();
}

function genSideMenu() {
    let menuWrapper = document.createElement('aside');
    menuWrapper.classList.add('side-menu');
    menuWrapper.innerHTML = `
<div class="menu-header">
    <button class="close-menu" onclick="document.querySelector('.side-menu').classList.toggle('active',false);">Close</button>
    <span>Menu</span>
    <button class="edit-menu">Edit</button>
</div>
<div class="menu-body">
    <div class="menu-section">
        <div class="title">Shortcuts</div>
        <div class="menu-item">Favorites</div>
        <div class="menu-item">Downloads</div>
        <div class="menu-item danger-item">Log Out</div>
    </div>
    <div class="menu-section">
        <div class="title">Browse by Feed</div>
        <div class="menu-item">SDR</div>
        <div class="menu-item">Subway Creatures</div>
        <div class="menu-item">Alexander Ljung</div>
        <div class="menu-item">Trashae Hubbard</div>
        <div class="menu-item">Benedikt Safiyulin</div>
        <div class="menu-item">Yogarasa Gandhi</div>
        <div class="menu-item">Maria Illescas</div>
        <div class="menu-item">Lacara Jones</div>
        <div class="menu-item">Gabie Sheber</div>
        <div class="menu-item">Ahmad Nazeri</div>
        <div class="menu-item">Xun Guiying</div>
        <div class="menu-item">Emiliya Perevalova</div>
        <div class="menu-item">Sukhbirpal Dhalan</div>
        <div class="menu-item">Hu Hyon-Suk</div>
        <div class="menu-item">Zikoranaudodimma Nkechi</div>
    </div>
</div>`;
    document.body.insertBefore(menuWrapper, document.body.querySelector('main'));
}