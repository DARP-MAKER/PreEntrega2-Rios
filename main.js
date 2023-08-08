class Loan {
    constructor(capital, cuotas, interes) {
        this.capital = capital;
        this.cuotas = cuotas;
        this.interes = interes;
    }

    calcularAmortizacion() {
        let amortizacion = [];
        let totalInteres = 0;
        for (let i = 1; i <= this.cuotas; i++) {
            let cuota = this.capital / this.cuotas;
            let interesCuota = (this.capital * this.interes) / 100 / this.cuotas;
            let totalCuota = cuota + interesCuota;
            totalInteres += interesCuota;

            amortizacion.push({
                cuota: cuota.toFixed(2),
                interes: interesCuota.toFixed(2),
                total: totalCuota.toFixed(2)
            });
        }

        return {
            amortizacion: amortizacion,
            totalInteres: totalInteres.toFixed(2),
            totalPrestamo: (this.capital + totalInteres).toFixed(2)
        };
    }
}

let prestamos = [];

function agregarPrestamo(capital, cuotas, interes) {
    if (capital > 0) {
        const nuevoPrestamo = new Loan(capital, cuotas, interes);
        prestamos.push(nuevoPrestamo);
        console.log("Nuevo préstamo agregado");
    } else {
        console.log("Falta ingresar un Número");
    }
}

function mostrarResultados() {
    prestamos.forEach((prestamo, index) => {
        const resultado = prestamo.calcularAmortizacion();
        console.log(`Resultados del préstamo ${index + 1}`);
        console.log("Amortización:", resultado.amortizacion);
        console.log("Total Interés:", resultado.totalInteres);
        console.log("Total Préstamo:", resultado.totalPrestamo);
    });
}

function ingresarDatos() {
    let capital = parseFloat(prompt("Ingrese el monto del préstamo:"));
    let cuotas = parseInt(prompt("Ingrese el número de cuotas:"));
    let interes = parseFloat(prompt("Ingrese la tasa de interés (%):"));

    agregarPrestamo(capital, cuotas, interes);
    mostrarResultados();
}

ingresarDatos();
