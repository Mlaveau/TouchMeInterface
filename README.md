TouchMeInterface
================

Interface d'annotation pour iPad


Indications sur les formats JSON 

 - Layer d'annotations 
Chaque layer d'annotation contient autant d'Annotation que l'on veut
    * layer_type : Nom donne par le createur
    * data_type : "tracking"
    * fragment_type : "annotations"

 - Layer de Segmentation
Chaque layer est une segmentation différente et contient une seule Annotation ("data" : [ ], "fragment" : "")
    * layer_type : Nom de la segmentation. (Exemples : References, Automatique, ...)
    * data_type : "tracking"
    * fragment_type : "segmentation"
