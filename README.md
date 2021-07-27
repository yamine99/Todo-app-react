# Todo Application version 1.0

### Spécificité fonctionnelle
      - Affichage de la liste de todo
      - Filterage sur le type 
      - Filterage par catégorie(Business) 
      - Trier par date de création
      - Filterage sur les todos éffecuer
      - Rénisialtiser les filters
      - Consulter les détailes d'un todo
      - Editer l'état d'un todo


#### Architecture des deux vues
     
     App
           TodoPage
                  Filter table 
                        CheckboxWithLabel
                        ButtonFilters (liste des types)
                        ButtonFilters (Croissant/ décroissant)
                        Button    (Rénisialiser)
                  Table
                        itemRow
                                CheckboxWithLabel - Catégorie business
                                Button    - permet de cosulter un todo
                                ButtonEditer  - permet de changer l'état d'un todo

           TodoDétailPage
                        liste ul
                        Button retour



#### Solution     
            - Le hook useReducer répond à la contarainte des différents comportement de l'objet :
                                    - Rénisialiser
                                    - Filtrer - Type 
                                              - Order
                                              - éffectuer 
                                              - Catégorie business
                                    - Retour à la page Todo
                                    
            - Patager l'état de l'objet avec tous les coposants de l'application  avec les contextes
            - Navigation entre les deux page avec react-Router
            - Intergir avec l'api avec Applo/client
            
       
### Pré-requis
      - Node V 12     

### Installation 
  #### Étape 1   Back | todo-provided-server
           1.1 Vous trouverez l'api Graphql utilisé ici https://github.com/Mrtblg/todo-provided-server
           1.2 Suivre les instructions d'installation du projet todo-provided-server
           1.3 Lancer le projet avec un `npm start`
        
  #### Étape 2   Front | todo-app-react
        
        Après avoir lancer le serveur         
          2.1 Ouvrez un autre terminale dans le dossier ou vous souhaiter avoir l'application
          2.2 Copier/coller cette ligne dans le terminal `git clone https://github.com/yamine99/Todo-app-react/`
          2.3 Placez vous dans le dossier projet cloner
          2.4 Installer les dépendences de l'application avec la commande  `npm install`
          
  #### Étape 3 
             Lancer l'application avec un `npm start`
