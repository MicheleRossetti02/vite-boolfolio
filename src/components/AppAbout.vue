<script>
import AppSkills from './AppSkills.vue';


export default {

    components: { AppSkills }
}
</script>

<template>
    <div class="container mt-5" id="about-skill">
        <div class="row">
            <div class="about col-6 d-flex">
                <h2>
                    ABOUT ME:
                </h2>
                <p class="my-4 info-text">
                    Sono un ragazzo di 20 anni nato in quest'era digitale che mi ha da subito catturato per la sua
                    capacità
                    incredibile di non avere limiti se non quelli umani dettati dalla fantasia. Da sempre ho avuto la
                    passione
                    per questo mondo che mi ha portato nel mio liceo grazia al mio professore di informatica a
                    gareggiare varie
                    volte nelle olimpiadi di informatica sia a livello regionale che nazionale. La mia passione per
                    questo mondo
                    non si è mai affievolita, tutt'altro da sempre in cerca di nuove tecnologie e nuovi stimoli che mi
                    permettano di aumentare la mia cultura in quest'ambito e che mi portino sempre maggiori conoscenze.
                </p>

            </div>
            <div class="col-5">
                <AppSkills />

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    .row {
        .about {
            flex-direction: column;
            align-items: center;
            justify-content: center;


            h2 {
                font-size: 2rem;
            }

            p {
                font-size: 20px;
            }
        }
    }
}
</style>