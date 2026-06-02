function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("excluir");

    botaoExcluir.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(botaoExcluir);

    document.getElementById("listaTarefas").appendChild(li);

    input.value = "";
}