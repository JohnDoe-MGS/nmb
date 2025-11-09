// Aguarda o documento HTML estar totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // Pega os elementos do HTML com os quais vamos interagir
    const fileInput = document.getElementById('file-input');
    const fileNameSpan = document.getElementById('file-name');
    const uploadForm = document.getElementById('upload-form');

    // 1. Lógica de UX: Mostrar o nome do arquivo selecionado
    fileInput.addEventListener('change', () => {
        // fileInput.files[0] é o primeiro (e único) arquivo que o usuário selecionou
        if (fileInput.files.length > 0) {
            // Se um arquivo foi escolhido, mostra o nome dele
            const fileName = fileInput.files[0].name;
            fileNameSpan.textContent = fileName;
        } else {
            // Se o usuário cancelar, volta ao texto padrão
            fileNameSpan.textContent = 'Nenhum selecionado';
        }
    });

    // 2. Lógica de UX: Simular o envio (para fins de exemplo)
    uploadForm.addEventListener('submit', (event) => {
        // Impede o formulário de recarregar a página (comportamento padrão)
        event.preventDefault(); 
        
        if (fileInput.files.length > 0) {
            alert(`Enviando o arquivo: ${fileInput.files[0].name}`);
            // Aqui, você enviaria o arquivo para o seu backend (a gem Ruby)
        } else {
            alert('Por favor, selecione um arquivo .docx ou .pdf primeiro.');
        }
    });

});
