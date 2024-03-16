const inputMessage = document.getElementById('input_message');
const outputMessage = document.getElementById('output_message');
const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
const copyButton = document.getElementById('copy-button');

let outputEncode = '';
let outputDecode = '';
outputMessage.value = '';

encodeButton.addEventListener('click', () => {
  outputMessage.value = '';
  if (inputMessage.value.trim() === '') {
    outputMessage.value = 'Ningún mensaje fue encontrado';
  } else {
    for (let index = 0; index < inputMessage.value.length; index++) {
      if (inputMessage.value[index] === 'a') {
        outputEncode += 'ai';
      } else if (inputMessage.value[index] === 'e') {
        outputEncode += 'enter';
      } else if (inputMessage.value[index] === 'i') {
        outputEncode += 'imes';
      } else if (inputMessage.value[index] === 'o') {
        outputEncode += 'ober';
      } else if (inputMessage.value[index] === 'u') {
        outputEncode += 'ufat';
      } else {
        outputEncode += inputMessage.value[index];
      }
    }
    outputMessage.value = outputEncode;
    copyButton.style.display = 'block';
    outputEncode = '';
  }
});

decodeButton.addEventListener('click', () => {
  outputMessage.value = '';
  if (inputMessage.value.trim() === '') {
    outputMessage.value = 'Ningún mensaje fue encontrado';
  } else {
    outputDecode = inputMessage.value
      .replace(/ai/g, 'a')
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
    outputMessage.value = outputDecode;
    copyButton.style.display = 'block';
  }
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(outputMessage.value);
    console.log('Copiado en portapapeles');
  } catch (err) {
    console.error('Error al copiar en porta papeles', err);
  }

  alert('Copiado en portapapeles');
});
