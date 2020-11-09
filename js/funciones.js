
var tasaInteres
var cuota
var totalDevolver

class Prestamo {
    constructor (monto, plazo){
        this.plazo= Number (plazo);
        this.monto= Number (monto);
        this.calcularTasa=function(){
            if(this.plazo==12) { tasaInteres=0.3}
            else if (this.plazo==24) { tasaInteres=0.35}
            else if (this.plazo==36) { tasaInteres=0.4}
            else alert("el plazo ingresado no es válido")
            return tasaInteres
        }
        this.calcularMontoTotalDevolver = function(){
            totalDevolver=this.monto * this.calcularTasa() * this.plazo/12 + this.monto
            return totalDevolver
        }

        this.calcularCuotas = function () {
            cuota = this.calcularMontoTotalDevolver () / plazo
            return cuota
        }

    }
}

//FUNCIONALIDAD

/* var montoSolicitado = prompt ("Ingrese monto solicitado")
var plazoSolicitado = prompt ("Ingrese plazo por el cual solicita el préstamo") */


function resultadoCotizacion () {

    
    var montoSolicitado = document.getElementById("monto").value;
    var p = document.getElementById("plazo")
    var plazoSolicitado = p.options[p.selectedIndex].value
    
    var prestamoSolicitado = new Prestamo ( montoSolicitado, plazoSolicitado)
    
    var mostrarTasa = document.getElementById("tasa")
    var mostrarCuota = document.getElementById("cuota")
    var mostrarTotalDevolver= document.getElementById("montoDevolucion")
    
    
    mostrarTasa.value = prestamoSolicitado.calcularTasa()
    mostrarTotalDevolver.value = prestamoSolicitado.calcularMontoTotalDevolver()
    mostrarCuota.value =  prestamoSolicitado.calcularCuotas()
    return false
}

/* const form = document.getElementById("myForm");
form.onsubmit = resultadoCotizacion;
 */

// poner de vuelta onclick y eliminar líneas Pepin
//mostrar resultados de la función en el texto y los párrafos en lugar de en formulario