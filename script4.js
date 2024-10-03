const draggableElement = document.querySelector("#ex3_element");
const dropZoneOne = document.querySelector("#ex3_one");
const dropZoneTwo = document.querySelector("#ex3_two");

draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const elementId = event.dataTransfer.getData('text');
    const draggable = document.getElementById(elementId);
    event.target.appendChild(draggable);
}

dropZoneOne.addEventListener('dragover', allowDrop);
dropZoneTwo.addEventListener('dragover', allowDrop);
dropZoneOne.addEventListener('drop', handleDrop);
dropZoneTwo.addEventListener('drop', handleDrop);
