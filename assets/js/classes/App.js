import page from "page";
class App {
    constructor() {
        this.afficherAccueil = this.afficherAccueil.bind(this);

        page("/", this.afficherAccueil);
        page();
    }
    afficherAccueil() {
        console.log("Accueil");
    }
}
export default App;
