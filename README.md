# Todo Application version 1.0

### Spécificité fonctionnelle
      - Affichage de la liste de todo
      - Filtrage sur le type
      - Filtrage par catégorie(Business)
      - Trier par date de création
      - Filtrage sur les todos effectuer
      - Réinitialiser les filtres
      - Consulter les détails d'un todo
      - Editer l'état d'un todo






#### Solution     
            - Le hook useReducer répond à la contrainte des différents comportement de l'objet :
                                    - Réinitialiser
                                    - Filtrer par: - Type
                                                    - Order
                                                     - état de la todo
                                                     - Catégorie business
                                    - Retour à la page Todo
                                    
            - Patager l'état de l'objet avec tous les composants de l'application  avec les contextes
            - Navigation entre les deux page avec react-Router
            - Interagir avec l'api avec les hooks useQuery et useMutation
            
       
### Pré-requis
      - Node V 12     

### Installation
  #### Étape 1   Back | todo-provided-server
           1.1 Vous trouverez l'api Graphql utilisé ici https://github.com/Mrtblg/todo-provided-server
           1.2 Suivre les instructions d'installation du projet todo-provided-server
           1.3 Lancer le projet avec un `npm start`
        
  #### Étape 2   Front | todo-app-react
        
        Après avoir lancer le serveur         
          2.1 Ouvrez un autre terminale dans le dossier ou vous souhaitez avoir l'application
          2.2 Copier/coller cette ligne dans le terminal `git clone https://github.com/yamine99/Todo-app-react/`
          2.3 Placez vous dans le dossier projet cloner
          2.4 Installer les dépendances de l'application avec la commande  `npm install`
          
  #### Étape 3
             Lancer l'application avec un `npm start`
