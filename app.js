let headerText = document.getElementById('header-text');
let messageText = document.getElementById('message');

const blueColor = () => {
    document.body.style.backgroundColor = 'blue';
    headerText.style.color = 'white';
    messageText.innerHTML = `
        <h4 class='text-center text-white'>Blue color activated</h4>
    `;
};

const grayColor = () => {
    document.body.style.backgroundColor = 'gray';
    headerText.style.color = 'white';
    messageText.innerHTML = `
    <h4 class='text-center text-white'>Gray color activated</h4>
`;
};

const greenColor = () => {
    document.body.style.backgroundColor = 'green';
    headerText.style.color = 'white';
    messageText.innerHTML = `
    <h4 class='text-center text-white'>Green color activated</h4>
`;
};

const redColor = () => {
    document.body.style.backgroundColor = 'red';
    headerText.style.color = 'white';
    messageText.innerHTML = `
    <h4 class='text-center text-white'>Red color activated</h4>
`;
};

const yellowColor = () => {
    document.body.style.backgroundColor = 'yellow';
    headerText.style.color = 'black';
    messageText.innerHTML = `
    <h4 class='text-center text-dark'>Yellow color activated</h4>
`;
};

const skyBlueColor = () => {
    document.body.style.backgroundColor = 'skyblue';
    headerText.style.color = 'black';
    messageText.innerHTML = `
    <h4 class='text-center text-white'>Skyblue color activated</h4>
`;
};

const whiteColor = () => {
    document.body.style.backgroundColor = 'white';
    headerText.style.color = 'black';
    messageText.innerHTML = `
    <h4 class='text-center text-dark'>white color activated</h4>
`;
};

const blackColor = () => {
    document.body.style.backgroundColor = 'black';
    headerText.style.color = 'white';
    messageText.innerHTML = `
    <h4 class='text-center text-white'>Black color activated</h4>
`;
};


