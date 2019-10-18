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

function listar(){
  $.ajax({
        type: "post",
        url:"https://atividadecrudmobile.000webhostapp.com/listar.php",
        dataType: "json",
        success: function(data){
          var itemlista = "";
          $.each(data.pessoas,function(i,dados){
            itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>";
          });
          $("#lista").append(itemlista);
          $('select').formSelect();
        },
        error: function(data){
          navigator.notification.alert("Erro ao listar usuários");
        }
    });
}

    $(document).on("change","#lista",function(){
      var parametros = {
        "codigo": $("option:selected", ("#lista")).val()
        };
        $.ajax({
        type: "post",
        url:"https://atividadecrudmobile.000webhostapp.com/listar-um-registro.php",
        data: parametros,
        dataType:"json",
        success: function(data){
          $("#nome").val(data.pessoa.nome);
          $("#email").val(data.pessoa.email);
          $("#password").val(data.pessoa.senha);
        },
        error: function(data){
          navigator.notification.alert("Erro ao carregar");
        }
      });
    });

    $(document).on("click","#deletar",function(){
      if($("option:selected", ("#lista")).attr("disabled") != "disabled"){
        var parametros = {
          "codigo": $("option:selected", ("#lista")).val()
          };
          $.ajax({
          type: "post",
          url:"https://atividadecrudmobile.000webhostapp.com/delete.php",
          data: parametros,
          success: function(data){
            navigator.notification.alert(data);
            location.reload();
          },
          error: function(data){
            navigator.notification.alert("Erro ao deletar");
          }
        });
      }
    });

    $(document).on("click","#editar",function(){
      if($("option:selected", ("#lista")).attr("disabled") != "disabled"){
        $("#nome").attr( "disabled", false );
        $("#email").attr( "disabled", false );
        $("#password").attr( "disabled", false );
      }
    });

    $(document).on("click","#cancelar",function(){
      if($("option:selected", ("#lista")).attr("disabled") != "disabled"){
        var parametros = {
          "codigo": $("option:selected", ("#lista")).val()
          };
          $.ajax({
          type: "post",
          url:"https://atividadecrudmobile.000webhostapp.com/listar-um-registro.php",
          data: parametros,
          dataType:"json",
          success: function(data){
            $("#nome").attr( "disabled", true );
            $("#email").attr( "disabled", true );
            $("#password").attr( "disabled", true );
            $("#nome").val(data.pessoa.nome);
            $("#email").val(data.pessoa.email);
            $("#password").val(data.pessoa.senha);
          },
          error: function(data){
            navigator.notification.alert("Erro ao carregar");
          }
        });
      }
    });

    $(document).on("click","#atualizar",function(){
      if($("option:selected", ("#lista")).attr("disabled") != "disabled"){
        var parametros = {
          "codigo": $("option:selected", ("#lista")).val(),
          "nome" : $("#nome").val(),
          "senha" : $("#password").val(),
          "email" : $("#email").val()
        };

        $.ajax({
          type: "post",
          url:"https://atividadecrudmobile.000webhostapp.com/update.php",
          data: parametros,
          success: function(data){
            $("#nome").attr( "disabled", true );
            $("#email").attr( "disabled", true );
            $("#password").attr( "disabled", true );
            navigator.notification.alert(data);
          },
          error: function(data){
            navigator.notification.alert("Erro ao cadastrar");
          }
        });
      }
    });
