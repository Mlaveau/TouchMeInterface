TouchMeInterface
================

Interface d'annotation pour iPad : Indications sur les formats JSON
--------------------------------


### - Layer d'annotations 

Chaque layer d'annotation contient autant d'Annotation que l'on veut

    * layer_type : Nom donne par le createur
    * data_type : "tracking"
    * fragment_type : "annotations"
    
Format de ses annotations

    * data : [{"t" : tempsT, "x" : posX, "y" : posY}, {"t" : tempsT, "x" : posX, "y" : posY}, ... ]
    * fragment : {"start" : numeroDeLaFrameDuDebut, "end" : numeroDeLaFrameDeFin}

### - Layer de segmentation
 
Chaque layer est une segmentation différente et contient une seule Annotation

    * layer_type : Nom de la segmentation. (Exemples : References, Automatique, ...)
    * data_type : "tracking"
    * fragment_type : "segmentation"

Format de son annotation

    * data : [numeroFrameSegmPlan, numeroFrameSegmPlan, ... ]
    * fragment : ""
