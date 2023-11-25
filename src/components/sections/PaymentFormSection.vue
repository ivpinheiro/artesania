<template>
    <div class="card-content">
        <div class="forms">
            <b>Insira Informações de Pagamento</b>

            <div class="forms-options">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" id="lblCartao"><b>Numero do Cartão</b></label>
                    <input type="number" class="form-control" id="inputCard" placeholder="Numero do seu cartão">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" id="lblNomeCartao"><b>Nome impresso no cartão</b></label>
                    <input type="text" class="form-control" id="inputCardName" placeholder="Nome do seu cartão">
                 </div>
                 <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" id="lblMes"><b>MES</b></label>
                    <select class="select-option" name="selectMouth">
                        <option></option>
                        <option value="JAN">Janeiro</option><option value="FEV">Fevereiro</option>
                        <option value="MAR">Março</option><option value="ABR">Abril</option>
                        <option value="NAI">Maio</option><option value="JUN">Junho</option>
                        <option value="JUL">Julho</option><option value="AGO">Agosto</option>
                        <option value="SET">Setembro</option><option value="OUT">Outubro</option>
                        <option value="NOV">Novembro</option><option value="DEZ">Dezembro</option>
                    </select>
                    <label for="exampleFormControlInput1" class="form-label" id="lblAno"><b>ANO</b></label>
                    <select class="selction-option" name="selectYear">
                        <option></option>
                        <option>1990</option><option>1991</option><option>1992</option><option>1993</option>
                        <option>1994</option><option>1995</option><option>1996</option><option>1997</option>
                        <option>1998</option><option>1999</option><option>2000</option><option>2001</option>
                        <option>2002</option><option>2003</option><option>2004</option><option>2005</option>
                        <option>2006</option><option>2007</option><option>2008</option><option>2009</option>
                        <option>2010</option><option>2011</option><option>2012</option><option>2013</option>
                        <option>2014</option><option>2015</option><option>2016</option><option>2017</option>
                        <option>2018</option><option>2019</option><option>2020</option><option>2021</option>
                        <option>2022</option><option>2023</option><option>2024</option><option>2025</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'PaymentForm'
}

</script>


<style lang="css" scoped>

.card-content{
    background-color: #f0eeed;
    border-radius: 5%;
    height: 100%;
    padding: 1rem
}

</style>