<template>
  <div id="aula">
    <div class="mide-lesson-container is-full">
      <mide-aulas-container>
        <article id="componentes">
          <p>
            Assim, a cultura é o entendimento pelo qual fazemos da forma como
            uma sociedade vive e se comporta socialmente. Também é preciso
            lembrar que a cultura é dinâmica. Portanto, ela muda com o tempo,
            algumas características sociais são adquiridas, outras deixada de
            lado. Alguns aspectos permitem que essas mudanças culturais sejam
            incorporadas na sociedade, como por exemplo, contingências
            ambientais, consciência social e invenção ou desenvolvimento de
            tecnologias.
          </p>

          <p>
            Assim, a cultura é o entendimento pelo qual fazemos da forma como
            uma sociedade vive e se comporta socialmente. Também é preciso
            lembrar que a cultura é dinâmica. Portanto, ela muda com o tempo,
            algumas características sociais são adquiridas, outras deixada de
            lado. Alguns aspectos permitem que essas mudanças culturais sejam
            incorporadas na sociedade, como por exemplo, contingências
            ambientais, consciência social e invenção ou desenvolvimento de
            tecnologias. Os anos 1960 foram muito importantes para entender a
            sociedade do século XXI. Isto porque eles iniciaram uma série de
            grandes transformações culturais que constituíram um impacto
            decisivo em nossa maneira de perceber o mundo e de viver. Estas
            transformações foram possíveis porque, de um lado, havia um
            sentimento da necessidade de reconstrução da cidadania e do
            relacionamento entre os povos, após o trauma da Segunda Guerra
            Mundial e do nazismo; de outro lado, a chamada “Guerra Fria”
            continuava a lembrar às pessoas que tudo poderia acontecer
            novamente, e desta vez de maneira ainda mais catastrófica. Momentos
            assim costumam gerar grandes discussões e consequentemente
            tentativas de solução. Um destes debates, no nível cultural, foi a
            chamada “contracultura”, no qual principalmente jovens e artistas
            rebelavam-se contra as políticas belicistas, especialmente aquelas
            de cunho nuclear. Ao mesmo tempo, defendiam uma abertura nos
            costumes e nos direitos humanos, sobretudo quanto aos direitos das
            mulheres, ao exercício da sexualidade e à vida em comunidade.
          </p>

          <p>
            <center>
              Todos esses aspectos acima chamamos de cultura. <br />
              <b>Podemos definir cultura como: </b>
            </center>
          </p>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/carla-explicacao.png" />
                </figure>
              </div>
              <div class="column">
                <div class="dialog-box is-left">
                  Ullamco consequat laboris qui aliqua pariatur nisi. Tempor eu
                  ullamco officia proident irure. Proident velit quis quis sit
                  ullamco Lorem laborum pariatur amet ad dolore labore officia.
                </div>
              </div>
            </div>
          </div>

          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Ullamco consequat laboris qui aliqua pariatur nisi. Tempor eu
                  ullamco officia proident irure. Proident velit quis quis sit
                  ullamco Lorem laborum pariatur amet ad dolore labore officia.
                </div>
              </div>
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/marcos-explicacao.png" />
                </figure>
              </div>
            </div>
          </div>

          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/carla-explicacao.png" />
                </figure>
              </div>
              <div class="column">
                <div class="dialog-box">
                  Ullamco consequat laboris qui aliqua pariatur nisi. Tempor eu
                  ullamco officia proident irure. Proident velit quis quis sit
                  ullamco Lorem laborum pariatur amet ad dolore labore officia.
                </div>
              </div>
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/marcos-explicacao.png" />
                </figure>
              </div>
            </div>
          </div>

          <center>
            <quotes />
            <p>
              Assim, a cultura é o entendimento pelo qual fazemos da forma como
              uma sociedade vive e se comporta socialmente. Também é preciso
              lembrar que a cultura é dinâmica. Portanto, ela muda com o tempo,
              algumas características sociais são adquiridas, outras deixada de
              lado.
            </p>
            <question />
          </center>
          <div class="title">Form Button</div>

          <challenge
            name="challege-1"
            :options="challenge"
            correct="capitalismo"
          >
            <template slot="quesiton">
              <div class="question-title">DESAFIO!</div>
              <p>
                Quais dessas palavras você acha que o movimento da contracultura
                era contra?
              </p>
            </template>
          </challenge>

          <div class="title">Tabs</div>
          <mide-tabs>
            <b-tab-item label="Pictures">
              <p>
                Exercitation est commodo sit aliquip anim sint irure adipisicing
                reprehenderit irure tempor. Reprehenderit occaecat non aliquip
                dolor Lorem exercitation cillum deserunt. Magna irure Lorem et
                est fugiat labore voluptate aliqua laborum quis veniam ullamco
                eu.
              </p>
            </b-tab-item>

            <b-tab-item label="Music">
              <p>
                Deserunt sint culpa pariatur ea voluptate ullamco anim. Elit
                elit nulla sint magna voluptate eiusmod non Lorem sit ea non
                labore qui Lorem. Fugiat aliqua eu dolor laboris eiusmod sint
                nulla duis. Lorem qui veniam et laboris velit consequat dolor
                labore laborum exercitation est eu laborum. Laborum exercitation
                do ullamco magna nisi amet. Amet dolor ad do incididunt irure
                tempor nostrud. Dolore elit ipsum velit labore dolor laboris.
              </p>
            </b-tab-item>

            <b-tab-item label="Books">
              <p>
                Et consectetur voluptate pariatur ea in quis. Reprehenderit
                cillum nostrud eu ut laborum. Incididunt culpa ut esse aute
                voluptate minim ex laboris veniam ullamco. Elit esse magna ea
                dolor enim aliquip pariatur id veniam. Non est in elit aliquip
                dolore cupidatat sunt nisi.
              </p>
            </b-tab-item>

            <b-tab-item label="Videos">
              <p>
                Nunc nec velit nec libero vestibulum eleifend. Curabitur
                pulvinar congue luctus. Nullam hendrerit iaculis augue vitae
                ornare. Maecenas vehicula pulvinar tellus, id sodales felis
                lobortis eget.
              </p>
            </b-tab-item>
          </mide-tabs>

          <div class="title">Customs Form Button</div>

          <challenge
            name="challege-2"
            :options="challenge"
            correct="capitalismo"
          >
            <template slot="quesiton">
              <div class="question-title">DESAFIO!</div>
              <p>
                Tempor dolor nostrud ex et incididunt labore aliqua
                reprehenderit culpa occaecat amet id.
              </p>
            </template>
            <template #option="{option, disabled, active}">
              <b-button
                :type="active ? 'is-danger' : 'is-light'"
                tag="a"
                :disabled="disabled"
                >{{ option.text }}</b-button
              >
            </template>
          </challenge>

          <challenge
            name="challege-3"
            :options="challenge"
            correct="capitalismo"
          >
            <template slot="quesiton">
              <div class="question-title">DESAFIO!</div>
              <p>
                Voluptate minim pariatur elit nisi mollit sunt voluptate
                reprehenderit.
              </p>
            </template>
            <template #option="{option, model, disabled, setModel}">
              <label class="radio">
                <input
                  type="radio"
                  name="answer"
                  :disabled="disabled"
                  @input="() => setModel(option)"
                />
                {{ option.text }}
              </label>
            </template>
          </challenge>
        </article>
      </mide-aulas-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'layout-aulas',
  data() {
    return {
      challenge: [
        { text: 'Comunismo', value: 'comunismo' },
        { text: 'Capitalismo', value: 'capitalismo' },
        { text: 'Luta de Classe', value: 'luta-de-classe' },
        { text: 'Ditadura', value: 'ditadura' }
      ]
    }
  }
}
</script>

<style></style>
