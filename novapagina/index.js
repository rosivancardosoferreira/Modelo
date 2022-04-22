const fields = {
    name: document.getElementById("name"),
    cpf: document.getElementById("cpf"),
    age: document.getElementById("age"),
    form: document.getElementById("form"),
    btnSave: document.getElementById("btn-save"),
}

function sendDatas() {
    if(fields.name.value === "" ||
        fields.cpf.value === "" ||
        fields.age.value === "")
    {
        alert('Algum campo está vazio!')  
        return;
    }

    let data = {
        name: fields.name.value,
        cpf: fields.cpf.value,
        age: fields.age.value,
    }
    
    alert(`DADOS RECEBIDOS\n\nNOME: ${data.name}\nCPF: ${data.cpf}\nIDADE: ${data.age}`)
}

// call events
fields.form.addEventListener('submit', e => {
    e.preventDefault();
    sendDatas();
})