// Shared Components - Reusable UI components

// Navigation Component
function renderNavigation(currentPage = 'home') {
    const navLinks = [
        { href: 'JAYCHOUweb.html', text: 'HOME', id: 'home' },
        { href: 'JAYCHOUweb.html#events', text: 'EVENTS', id: 'events' },
        { href: 'JAYCHOUweb.html#concert', text: 'CONCERT', id: 'concert' },
        { href: 'about.html', text: 'ABOUT US', id: 'about' }
    ];

    return `
        <nav class="navbar" role="navigation" aria-label="Main navigation">
            <div class="nav-container">
                <ul class="nav-links">
                    ${navLinks.map(link => `
                        <li><a href="${link.href}" class="${currentPage === link.id ? 'active' : ''}">${link.text}</a></li>
                    `).join('')}
                </ul>
            </div>
        </nav>
    `;
}

// Footer Component
function renderFooter() {
    return `
        <footer>
            <p>&copy; 2024 Jay Chou Fan Website. This is a fan-made website, not affiliated with Jay Chou or JVR Music.</p>
        </footer>
    `;
}

// Helper function to get album by ID
function getAlbumById(id) {
    return albumsData.find(album => album.id === parseInt(id));
}

// Helper function to get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

