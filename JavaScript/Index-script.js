// La méthode `querySelectorAll` sélectionne tous les éléments `button` à l'intérieur de l'élément `nav`.
// selection de chaque bouton avec `forEach`.
document.querySelectorAll('nav button').forEach(button => {
  // Pour chaque bouton, ajout d'un écouteur d'événements de clic avec `addEventListener`.
  button.addEventListener('click', function (e) {
    //`preventDefault` empêcher le comportement par défaut du clic sur le bouton.
    e.preventDefault();
    // `getAttribute`Obtient la valeur de l'attribut `data-target` du bouton cliqué.
    const targetId = this.getAttribute('data-target');
    // `getElementById` Selectionne l'élément avec l'ID égal à la valeur de l'attribut `data-target`.
    const targetSection = document.getElementById(targetId);
    // Si la section existe, elle masque toutes les sections à l'intérieur de l'élément `main` avec la classe `hidden`.
    if (targetSection) {
      document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
      });
      // Montre la section cible en supprimant la classe `hidden` de celle-ci.
      targetSection.classList.remove('hidden');
    }
  });
});
