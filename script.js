const languageData = {
    'swe': {
      'welcome': 'Välkommen till Nils student!',
      'instruction': 'Tryck på knappen nedan för att meddela oss om ditt deltagande!',
      'information': 'Ett formulär kommer att öppnas där ni kan fylla i all nödvändig information.',
      'button': 'Gå Till Formuläret'
      // ... other keys
    },
    'ger': {
      'welcome': 'Willkommen zu Nils Abitur!',
      'instruction': 'Klicken Sie auf die Schaltfläche unten, um uns Ihre Teilnahme mitzuteilen!',
      'information': 'Ein Formular wird dann geöffnet, in das Sie alle notwendigen Informationen eintragen können.',
      'button': 'Zum Formular gehen'
      // ... other keys
    },
    'eng': {
      'welcome': 'Welcome to Nils’ graduation!',
      'instruction': 'Click the button below to notify us of your participation!',
      'information': 'A form will open where you can enter all the necessary information.',
      'button': 'Go to the Form'
      // ... other keys
    },
    'fr': {
      'welcome': 'Bienvenue au bac de Nils!',
      'instruction': 'Cliquez sur le bouton ci-dessous pour nous informer de votre participation!',
      'information': 'Un formulaire s’ouvrira où vous pourrez remplir toutes les informations nécessaires.',
      'button': 'Aller au formulaire'
      // ... other keys
    }
  };
  
  // Function to change language
  function changeLanguage(lang) {
    // Find all elements that have a data-key attribute
    document.querySelectorAll("[data-key]").forEach(elem => {
      let key = elem.getAttribute("data-key");
      if(languageData[lang] && languageData[lang][key]) {
        elem.textContent = languageData[lang][key];
      }
    });
  }
  
  // Initial language load (optional, if you want to set a default language other than what's in the HTML)
  window.addEventListener('DOMContentLoaded', () => {
    changeLanguage('swe'); // Change 'swe' to your default language code if needed
  });