const data = {
    labels: ["Força", "Estamina", "Mana", "Inteligência", "Velocidade", "Destreza"],
    datasets: [{
        label: "Kobold - Status",
        data: [18, 32,98,91,27,53],
        backgroundColor: "#00000080",
        borderColor: "#000",
        borderWidth: 1
    }]
};

const data2 = {
    labels: ["Força", "Estamina", "Mana", "Inteligência", "Velocidade", "Destreza"],
    datasets: [{
        label: "Tarrasque - Status",
        data: [100, 43,0,0,88,45],
        backgroundColor: "#00000080",
        borderColor: "#000",
        borderWidth: 1
    }]
}

const config = {
    type: 'radar',
    data: data,
    options: {
        scales: {
            r: {
                angleLines: {
                    color: 'red'
                },
                grid: {
                    color: 'red'
                },
                pointLabels: {
                    color: 'blue'
                },
                ticks: {
                    color: 'purple'
                }
            }
        }
    }
  };

  const config2 = {
    type: 'radar',
    data: data2,
    options: {
        scales: {
            r: {
                angleLines: {
                    color: 'red'
                },
                grid: {
                    color: 'red'
                },
                pointLabels: {
                    color: 'blue'
                },
                ticks: {
                    color: 'purple'
                }
            }
        }
    }
  };

const myChart = new Chart(document.getElementById('myChart'), config)

const otherChart = new Chart(document.getElementById('otherChart'), config2)