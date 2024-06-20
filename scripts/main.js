$(document).ready(function () {
    $('#btn-buscar-usuario').on("click", function () {
        const nome = $('#nome').val();  // Obtém o valor do input
        const endpoint = `https://api.github.com/users/${nome}`;  // Define o endpoint da API
        console.log(endpoint);  // Log do endpoint para debug
        $(this).find('i').addClass('d-none');  // Esconde o ícone de busca
        $(this).find('span').removeClass('d-none');  // Mostra o spinner de loading

        try {
            $.ajax(endpoint).done(function (resposta) {
                // Extração dos dados da resposta da API
                const nameElement = resposta.name;
                const usernameElement = resposta.login;
                const avatarElement = resposta.avatar_url;
                const followersElement = resposta.followers;
                const followingElement = resposta.following;
                const linkElement = resposta.html_url;
                const reposElement = resposta.public_repos;

                // Atualização dos elementos HTML com os dados obtidos
                $('#name').text(nameElement);
                $('#username').text(usernameElement);
                $('#avatar').attr('src', avatarElement);
                $('#repos').text(reposElement);
                $('#followers').text(followersElement);
                $('#following').text(followingElement);
                $('#link').attr('href', linkElement).text('Ver no Github');
            })
        } catch (error) {
            console.error(error.message);  // Loga o erro no console
            alert(error.message);  // Mostra um alerta com a mensagem de erro
        } finally {
            $('#btn-buscar-usuario').find('i').removeClass('d-none');  // Mostra o ícone de busca
            $('#btn-buscar-usuario').find('span').addClass('d-none');  // Esconde o spinner de loading
        }
    });
});