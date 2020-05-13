<template>
  <div class="card ">
    <nav-lateral />

    <div class="card-image">
      <figure class="bodyunit-image"></figure>
    </div>

    <div class="header">
      <h3>Unidade 1</h3>
      <h1>Aula 1 - Cibercultura e Educação</h1>

      <p>
        Lorem ip sum lo rem ipsum lore ipsum lorem ipem sum ip sum loremem ipsum
        ipsum lor em ipem sum ipsemum lo rem ipsum ipsum lorem ipsum ip sum
        lorem.
      </p>
    </div>
    <br />
    <div class="card-content">
      <div class="content">
        Assim, a cultura é o entendimento pelo qual fazemos da forma como uma
        sociedade vive e se comporta socialmente. Também é preciso lembrar que a
        cultura é dinâmica. Portanto, ela muda com o tempo, algumas
        características sociais são adquiridas, outras deixada de lado. Alguns
        aspectos permitem que essas mudanças culturais sejam incorporadas na
        sociedade, como por exemplo, contingências ambientais, consciência
        social e invenção ou desenvolvimento de tecnologias.
        <br /><br />

        Assim, a cultura é o entendimento pelo qual fazemos da forma como uma
        sociedade vive e se comporta socialmente. Também é preciso lembrar que a
        cultura é dinâmica. Portanto, ela muda com o tempo, algumas
        características sociais são adquiridas, outras deixada de lado. Alguns
        aspectos permitem que essas mudanças culturais sejam incorporadas na
        sociedade, como por exemplo, contingências ambientais, consciência
        social e invenção ou desenvolvimento de tecnologias. Os anos 1960 foram
        muito importantes para entender a sociedade do século XXI. Isto porque
        eles iniciaram uma série de grandes transformações culturais que
        constituíram um impacto decisivo em nossa maneira de perceber o mundo e
        de viver. Estas transformações foram possíveis porque, de um lado, havia
        um sentimento da necessidade de reconstrução da cidadania e do
        relacionamento entre os povos, após o trauma da Segunda Guerra Mundial e
        do nazismo; de outro lado, a chamada “Guerra Fria” continuava a lembrar
        às pessoas que tudo poderia acontecer novamente, e desta vez de maneira
        ainda mais catastrófica. Momentos assim costumam gerar grandes
        discussões e consequentemente tentativas de solução. Um destes debates,
        no nível cultural, foi a chamada “contracultura”, no qual principalmente
        jovens e artistas rebelavam-se contra as políticas belicistas,
        especialmente aquelas de cunho nuclear. Ao mesmo tempo, defendiam uma
        abertura nos costumes e nos direitos humanos, sobretudo quanto aos
        direitos das mulheres, ao exercício da sexualidade e à vida em
        comunidade.
      </div>
      <div>
        <center>
          Todos esses aspectos acima chamamos de cultura. <br />
          <b>Podemos definir cultura como: </b>
        </center>
      </div>
    </div>

    <center>
      <quotes />
      <br />
      Assim, a cultura é o entendimento pelo qual fazemos da forma como uma
      sociedade vive e se comporta socialmente. Também é preciso lembrar que a
      cultura é dinâmica. Portanto, ela muda com o tempo, algumas
      características sociais são adquiridas, outras deixada de lado. Alguns
      aspectos permitem que essas mudanças culturais sejam incorporadas na
      sociedade, como por exemplo, contingências ambientais, consciência social
      e invenção ou desenvolvimento de tecnologias.
      <br />
      <question /> <br />

      <challenge />
    </center>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.card {
  box-shadow: 0px 12px 19px #3c80d116;
  border-radius: 15px;
  opacity: 1;
  width: 859px;
  height: 100%;
  .card-image {
    background: transparent url('~assets/images/bannerunit.png') 0% 0% no-repeat
      padding-box;

    border-radius: 25px 25px 0px 0px;
    .bodyunit-image {
      margin-top: 5%;
      background: linear-gradient(180deg, #3153b2c7 0%, #192a59 100%);
      border-radius: 25px 25px 0px 0px;
      mix-blend-mode: multiply;
      height: 293px;
    }
  }
  .header {
    text-align: center;
    color: #fff;
    margin-top: -16%;
    position: relative;
    p {
      width: 647px;
      margin-left: 12%;
    }
    h1 {
      font: Bold 28px/37px Segoe UI;
    }
    h3 {
      text-transform: uppercase;
      font: Bold 14px/16px Avenir Next LT Pro;
      letter-spacing: 1.4px;
    }
  }
  .unit-content {
    font-size: 14px;
    text-align: center;
  }
}
</style>
