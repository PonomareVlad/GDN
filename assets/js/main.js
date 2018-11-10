document.documentElement.classList.toggle('standalone', !!window.navigator.standalone);

function mainPage() {
    let covers = '';
    for (let i = 0; i <= 23; i++) {
        covers += '<div class="cover-item"></div>';
    }
    document.body.innerHTML = `
<header class="navigation-menu">
    <button class="menu-button"></button>
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
}