document.getElementById('bug1').addEventListener('click', function() {
    console.log("Bug 1: Ação não definida"); 
});

document.getElementById('bug2').addEventListener('click', function() {
    alert(document.getElementById('inputInexistente').value);
});
