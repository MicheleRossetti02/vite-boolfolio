<script>
import AppBanner from '../components/AppBanner.vue';
import AppNav from '../components/AppNav.vue';
export default {
    name: 'AboutView',

    components: { AppBanner, AppNav }
}
</script>

<template>
    <AppNav />
    <AppBanner title="About" />
    <div class="container text-white">
        <h2> Myself:</h2>
        <p class="mb-3">
            Sono un ragazzo di 20 anni nato in quest'era digitale che mi ha da subito catturato per la sua capacità
            incredibile di non avere limiti se non quelli umani dettati dalla fantasia. Da sempre ho avuto la passione
            per questo mondo che mi ha portato nel mio liceo grazia al mio professore di informatica a gareggiare varie
            volte nelle olimpiadi di informatica sia a livello regionale che nazionale. La mia passione per questo mondo
            non si è mai affievolita, tutt'altro da sempre in cerca di nuove tecnologie e nuovi stimoli che mi
            permettano di aumentare la mia cultura in quest'ambito e che mi portino sempre maggiori conoscenze.</p>

        <h2>Training Academy:</h2>
        <h4>Master Full Stack Web Developper</h4>
        <span> BOOLEAN CARRERS | AGOSTO 2022 FEBBRAIO 2023
        </span>
        <p>In questo corso intensivo dalla durata di 6 mesi con più di 700 ore di lezioni ho avuto modo di acquisire ed
            approfondire quel mondo che mi ha affascinato fin da bambino. Mostrandomi l'approccio da avere nelle diverse
            situazioni e mostrandomi svariati linguaggi attraverso lo sviluppo di svariati progetti ispirati a quelli
            che sono i grandi business odierni ma anche dando sfogo alla mia fantasia.</p>

        <h4>Università Tor Vergata</h4>
        <span></span>
        <p>Alcuni esami sostenuti</p>
        <ul>
            <li>
                Matematica Generale

            </li>
            <li>
                Micoreconomia
            </li>
            <li>
                Informatica
            </li>
            <li>
                Inglese
            </li>
        </ul>
        <h4>Istituto Telesi@</h4>
        <span>Liceo Scientifico opzione Scienze Applicate
        </span>

    </div>

</template>


<style lang="scss" scoped>

</style>