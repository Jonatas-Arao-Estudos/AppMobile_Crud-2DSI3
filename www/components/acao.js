// This is a JavaScript file
    $(document).on("click","#salvar",function(){
      var parametros = {
        "nome" : $("#nome").val(),
        "senha" : $("#password").val(),
        "email" : $("#email").val()
      };

      $.ajax({
        type: "post",
        url:"https://atividadecrudmobile.000webhostapp.com/cadastra.php",
        data: parametros,
        success: function(data){
          navigator.notification.alert(data);
          $("#nome").val("");
          $("#password").val("");
          $("#email").val("");
        },
        error: function(data){
          navigator.notification.alert("Erro ao cadastrar");
        }
      });
    });
