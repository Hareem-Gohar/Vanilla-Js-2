// part #1

const trips = [
    { to: 'Brazil', distance: 1000 },
    { to: 'Chine', distance: 2500 },
    { to: 'India', distance: 3000 }
];
let calculateDistance = () => {
    const totalDistance = trips.reduce((total, trips) => total + trips.distance, 0);
    document.getElementById('result').textContent = `Total Distance User Travelled: ${totalDistance} km / ${totalDistance * 0.6213}`;
}

const computers = [
    { type: 'Laptop', price: 124, os: 'Windows' },
    { type: 'Desk', price: 124, os: 'Mac' },
    { type: 'Desk', price: 124, os: 'Windows' },
    { type: 'Laptop', price: 124, os: 'Mac' },
    { type: 'Laptop', price: 124, os: 'Windows' },
    { type: 'Laptop', price: 124, os: 'Mac' },
    { type: 'Laptop', price: 124, os: 'Windows' },
    { type: 'Laptop', price: 124, os: 'Mac' },
    { type: 'Laptop', price: 124, os: 'Windows' },
];

// part#2

let calculateComputers = () => {
    const totalComputers = computers.reduce((total, comp) => {
        if (comp.os === 'Windows') {
            total.windows++;
        } else if (comp.os === 'Mac') {
            total.mac++;
        }
        return total;
    }, { mac: 0, windows: 0 });

    document.getElementById('mac-count').textContent = 'Mac Computers: ' + totalComputers.mac;
    document.getElementById('windows-count').textContent = 'Windows Computers: ' + totalComputers.windows;
};

