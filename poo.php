<?php
class Etudiant {
    public $nom;
    public $niveau;
    public $ecole;

    public function __construct($nom, $niveau, $ecole) {
        $this->nom    = $nom;
        $this->niveau = $niveau;
        $this->ecole  = $ecole;
    }

    public function presentation() {
        echo "Je suis " . $this->nom . 
             ", étudiant en " . $this->niveau . 
             " à " . $this->ecole . ".<br>";
    }
}

// Création d'objets
$etudiant1 = new Etudiant("Paenéach", "L2", "ESAG-NDE");
$etudiant2 = new Etudiant("Koffi", "L1", "ESAG-NDE");

$etudiant1->presentation();
$etudiant2->presentation();

// HERITAGE : Etudiant_Boursier hérite de Etudiant
class Etudiant_Boursier extends Etudiant {
    private $montant_bourse;

    public function __construct($nom, $niveau, $ecole, $montant_bourse) {
        // appelle le __construct du parent
        parent::__construct($nom, $niveau, $ecole);
        $this->montant_bourse = $montant_bourse;
    }

    public function presentation() {
        // surcharge la méthode du parent
        parent::presentation();
        echo "Bourse : " . $this->montant_bourse . " FCFA<br>";
    }
}

$boursier = new Etudiant_Boursier("Ama", "L2", "ESAG-NDE", 50000);
$boursier->presentation();
?>

