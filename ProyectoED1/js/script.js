document.addEventListener('DOMContentLoaded', function() {
    // Cambiar categorías activas
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Aquí iría la lógica para filtrar los lugares por categoría
            console.log(`Filtrar por: ${this.textContent}`);
        });
    });
    
    // Simular búsqueda
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');
    
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    function performSearch(query) {
        if (query.trim() !== '') {
            console.log(`Buscando: ${query}`);
            // Aquí iría la lógica para buscar lugares
        }
    }
    
    // Simular controles del mapa
    const mapControls = document.querySelectorAll('.map-control-btn');
    mapControls.forEach(control => {
        control.addEventListener('click', function() {
            const icon = this.querySelector('i');
            console.log(`Acción del mapa: ${icon.classList.contains('fa-search-plus') ? 'Zoom in' : 
                        icon.classList.contains('fa-search-minus') ? 'Zoom out' : 'Centrar mapa'}`);
        });
    });
});

