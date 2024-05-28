document.getElementById('formulaireRechercheJS').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire

    // Récupérer le mot clé à rechercher depuis le formulaire
    const mot_recherché = document.getElementById('rechercheMot').value;

    // Liste des pages à rechercher
    const pages = ['Accueil.html', 'Cérémonies.html', 'Média.html']; // Exemple de pages

    // Effacer les résultats précédents
    document.getElementById('resultats').innerHTML = '';

    // Parcourir chaque page pour effectuer la recherche
    pages.forEach(page => {
        fetch(page) // fetch: obtenir le contenu de la page
            .then(response => response.text()) // Convertir la réponse en texte
            .then(data => {
                // Vérifie si le mot-clé est présent dans le contenu de la page
                if (data.toLowerCase().includes(mot_recherché.toLowerCase())) {
                    // Si trouvé, ajouter un lien vers la page dans les résultats
                    document.getElementById('resultats').innerHTML += `<div><a href="${page}">${page}: Mot-clé trouvé</a></div>`;
                } else {
                    // Si non trouvé, indiquer que le mot-clé n'est pas présent
                    document.getElementById('resultats').innerHTML += `<div>${page}: Mot-clé non trouvé</div>`;
                }
            })
            .catch(() => {
                // En cas d'erreur lors de la récupération de la page, afficher un message d'erreur
                document.getElementById('resultats').innerHTML += `<div>${page}: Erreur lors de la récupération de la page</div>`;
            });
    });
});