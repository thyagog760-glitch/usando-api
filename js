 <script>
       async function cadastrar(){
           let input = document.getElementById("codigoCep")
           let codigo1 = input.value;

           let conteiner = document.getElementById("resultado")
           conteiner.innerHTML = ""

           let resposta = await fetch(`http://viacep.com.br/ws/${codigo1}/json/`)
           let dados = await resposta.json();

           conteiner.innerHTML = `
           <h1><p>rua: ${dados.logradouro}</p></h1>
           <h2><p>uf: ${dados.uf}</p</h2>
            <h2><p>ddd: ${dados.ddd}</p></h2>
           `
        }
    </script>
