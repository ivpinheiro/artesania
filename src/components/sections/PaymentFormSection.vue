<template>
    <div class="card-content" id="insira-informações-de-pagamento">
        <div class="forms">
            <b>Insira Informações de Pagamento</b>

            <div class="forms-options">
                <div class="mb-3">
                    <label for="inputCard" class="form-label" id="lblCartao"><b>Numero do Cartão</b></label>
                    <input type="number" class="form-control" name="inputCard" id="inputCard" placeholder="Numero do seu cartão">
                </div>
                <div class="mb-3">
                    <label for="inputCardName" class="form-label" id="lblNomeCartao"><b>Nome impresso no cartão</b></label>
                    <input type="text" class="form-control" name="inputCardName" id="inputCardName" placeholder="Nome do seu cartão">
                </div>
                <div class="forms-double">
                    <div class="select-align">
                        <label for="selectMouth" class="form-label" id="lblMes"><b>MES</b></label>
                        <select class="select-double" name="selectMouth">
                            <option></option>
                            <option value="JAN">Janeiro</option><option value="FEV">Fevereiro</option>
                            <option value="MAR">Março</option><option value="ABR">Abril</option>
                            <option value="NAI">Maio</option><option value="JUN">Junho</option>
                            <option value="JUL">Julho</option><option value="AGO">Agosto</option>
                            <option value="SET">Setembro</option><option value="OUT">Outubro</option>
                            <option value="NOV">Novembro</option><option value="DEZ">Dezembro</option>
                        </select>
                    </div>
                    <div class="select-align">
                        <label for="selectYear" class="form-label" id="lblAno"><b>ANO</b></label>
                        <select class="select-double" name="selectYear">
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
                <div class="mb-3">
                    <label for="selectParcelas" class="form-label" id="lblParcelas"><b>Parcelas</b></label><br>
                    <select class="select-option" name="selectParcelas" width="100px">
                        <option></option>
                        <option value="1x">1x</option><option value="2x">2x</option><option value="3x">3x</option>
                        <option value="4x">4x</option><option value="5x">5x</option><option value="6x">6x</option>
                        <option value="7x">7x</option><option value="8x">8x</option><option value="9x">9x</option>
                        <option value="10x">10x</option><option value="11x">11x</option><option value="12x">12x</option>
                    </select>
                </div>
                <div class="forms-double">
                    <div class="select-align">
                        <label for="inputCVV" class="form-label" id="lblCVV"><b>CVV</b></label>
                        <input type="number" class="form-control" name="inputCVV" id="inputCVV" placeholder="">
                    </div>
                    <div class="select-align">
                        <label for="inputCPF" class="form-label" id="lblCPF"><b>CPF do titular</b></label>
                        <input type="number" class="form-control" name="inputCPF" id="inputCPF" placeholder="Seu CPF">
                    </div>
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
    width: 100%;
    height: 100%;
    padding: 1rem
}

.forms-options{
    padding-top: 1rem;
}

.forms-double {
    display: flex;
    justify-content: space-between;
}

.select-align {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.select-double{
    border-radius: 10%;
    border-style: solid 1px #000;
    width: 20vh;
}

.form-control{
    border: solid 1px #000;
}

#inputCPF{
    width: 90%;
}
#inputCVV{
    width: 90%;
}

.select-option{
    width: 100%;
    border-radius: 10%;
    border-style: solid 1px #000;
}

</style>