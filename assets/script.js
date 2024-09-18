// script.js

// Citation functionality
function showCitation(citationId) {
    const citations = {
        'citation0': 'Oberbichler, Sarah. "Large-Scale Research with Historical Newspapers: A Turning Point through Generative AI." DH-Lab Blog, [Date], https://dhlab.hypotheses.org/4938.',
        'citation1': 'Rastinger, Nina. "Informationsextraktion aus frühneuzeitlichen Ankunftslisten." DHd 2024, [Date].',
        'citation7': 'Oberbichler, Sarah. "Notebooks4Historical_Newspapers." GitHub, [Date], https://github.com/ieg-dhr/Notebooks4Historical_Newspapers/tree/main.'
    };
    document.getElementById('citationText').textContent = citations[citationId];
    document.getElementById('citationPopup').style.display = 'block';
}

function copyCitation() {
    const citationText = document.getElementById('citationText').textContent;
    navigator.clipboard.writeText(citationText).then(() => {
        alert('Citation copied to clipboard!');
    });
}

function closeCitation() {
    document.getElementById('citationPopup').style.display = 'none';
}

// Webinar content loading
function loadWebinarContent(webinarId) {
    fetch(`pages/${webinarId}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('webinar-content').innerHTML = html;
            document.getElementById('webinar-content').scrollIntoView({behavior: 'smooth'});
        });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-group a[href^="#webinar-"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const webinarId = this.getAttribute('href').substring(1);
            loadWebinarContent(webinarId);
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});