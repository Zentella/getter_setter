//funcion constructora consultorio // paciente
function Consultorio(nombre, pacientes){
    this.nombre = nombre
    this.pacientes = pacientes || []    // 0...N
}

//metodo getter obtener paciente
Consultorio.prototype.getPaciente = function(){ //se prototipa
    return this._getPaciente
}
//metodo setter setAgregarPaciente -  *** push ***

Consultorio.prototype.setAgregarPaciente = function(paciente){ //se prototipa
    this.pacientes.push(paciente)
}
//funcion constructora Paciente
function Paciente(nombre, edad, rut, diagnostico){ 
    var _nombre = nombre
    var _edad = edad
    var _rut = rut
    var _diagnostico= diagnostico
    //encapsulamiento ES5 
    Object.defineProperty(this, "_getNombre", {get: function() {return _nombre}})// esta es la norma   getter ****
    Object.defineProperty(this, "_getEdad", {get: function() {return _edad}})
    Object.defineProperty(this, "_getRut", {get: function() {return _rut}})
    Object.defineProperty(this, "_getDiagnostico", {get: function() {return _diagnostico}})
    //podrá modificarla desde el exterior//pero no directamente sobre ella
    Object.defineProperty(this, "_setNombre", {set: function(nombre){_nombre = nombre}})// esta es la norma setter
    Object.defineProperty(this, "_setEdad", {set: function(edad){_edad = edad}})
    Object.defineProperty(this, "_setRut", {set: function(rut){_rut = rut}})
    Object.defineProperty(this, "_setDiagnostico", {set: function(diagnostico){_diagnostico= diagnostico}})
}
Paciente.prototype.getNombre = function(){return this._getNombre}// metodo getter para obtener el valor del atributo
Paciente.prototype.getEdad = function(){return this._getEdad}
Paciente.prototype.getRut = function(){return this._getRut}
Paciente.prototype.getDiagnostico = function(){return this._getDiagnostico}
// metodo setter para modificar el valor del atributo desde el exterior
Paciente.prototype.setNombre = function(nombre){this._setNombre = nombre}
Paciente.prototype.setEdad = function(edad){this._setEdad = edad}
Paciente.prototype.setRut = function(rut){this._setRut = rut}
Paciente.prototype.setDiagnostico = function(diagnostico){this._setDiagnostico = diagnostico}

// instanciar obj Paciente
var p1 = new Paciente("Felipe",35,'20.123.456-7','leve')
var p2 = new Paciente("Esteban",23,'21.123.456-5','sano')
// instanciar obj Consultorio
var c1 = new Consultorio("los rios",[p1,p2])
//
var p3 = new Paciente('Yamila',41,'15.321654-1','medicar')
var p4 = new Paciente('flabia',48,'12.321654-1','observacion')


console.log(p1.getNombre())//Felipe
console.log(c1)//Consultorio {nombre: "los rios", paciente: Array(2)}
console.log(c1.nombre)//los rios

p3.setNombre="Tania"
console.log(p3._getNombre)//"Yamila"

//p5 = new Paciente('hugo',62,'12.123.234-5','leve')
//p5
//c1.setAgregarPaciente(p5)
//c1
//p5._getNombre
//p5._getEdad
//p5._getRut
//p5._getDiagnostico
//c1.pacientes
//p1.setEdad(21)
//p1
//p1._getEdad

/*
puntaje: 1 (no hay método que permita mostrar todos los datos de los usuarios registrados)
*/