const aboutModal = document.getElementById('infoModal');
const contactsModal = document.getElementById('contactsModal');
const personalInfoModal = document.getElementById('personalInfoModal');
const moreInfoButton = document.getElementById('moreInfo');
const contactInfoButton = document.getElementById('contactInfo');
const personalInfoButton = document.getElementById('personalInfoButton');

function createCloseButton(modalId) {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'closeModal';
    closeButton.addEventListener('click', () => {
        document.getElementById(modalId).style.display = 'none';
    });
    return closeButton;
}

function showModal(modal, event) {
    event.stopPropagation();
    modal.style.display = 'flex';
}

const modals = ['infoModal', 'contactsModal', 'personalInfoModal'];
modals.forEach(modalId => {
    if (!document.querySelector(`#${modalId} .closeModal`)) {
        document.querySelector(`#${modalId} .modal-content`).appendChild(createCloseButton(modalId));
    }
});

moreInfoButton.addEventListener('click', (event) => showModal(aboutModal, event));
contactInfoButton.addEventListener('click', (event) => showModal(contactsModal, event));
personalInfoButton.addEventListener('click', (event) => showModal(personalInfoModal, event));

window.addEventListener('click', (event) => {
    [aboutModal, contactsModal, personalInfoModal].forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});