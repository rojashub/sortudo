// Inicia o validador ao carregar a página
$(function() {
    // valida o formulário
    $('#meuform').validate({
        // define regras para os campos
        rules: {
            number: {
                required: true,
                minlength: 1,
                maxlength: 2,
                number: true,
                range: [1, 10]
            }
            },


    // define messages para cada campo
        messages: {
            number: "Preencha com numero de 1 a 10"
        }
    });
});


