// 1
const numero1 = Number(prompt('Ingrese un numero para sumar'));
const numero2 = Number(prompt('Ingrese un numero para sumar'));

let resultado;

resultado = numero1 + numero2;

console.log(`el resultado es ${resultado}`);

// 2
const nota1 = Number(Math.round(prompt('Ingrese nota del alumno')));
const nota2 = Number(Math.round(prompt('Ingrese nota del alumno')));
const nota3 = Number(Math.round(prompt('Ingrese nota del alumno')));
const nota4 = Number(Math.round(prompt('Ingrese nota del alumno')));

let resultado;

resultado = (nota1 + nota2 + nota4 + nota4)/4

console.log(`el promedio del alumno es ${resultado}`);

// 3
const base = Number(prompt('Ingrese el valor de la base del rectangulo'));
const altura = Number(prompt('Ingrese el valor de la altura del rectangulo'));

let area;

area = base * altura;

console.log(`es área de un rectangulo es ${area}`)

// 4
const base = Number(prompt('Ingrese el valor de la base del triangulo'));
const altura = Number(prompt('Ingrese el valor de la altura del triangulo'));

let area;

area = (base * altura)/ 2;

console.log(`es área de un triangulo es ${area}`)

// 5
const pi = Math.PI;
const radio = parseFloat(prompt('Ingrese el radio del circulo'));

let area;

area = pi * Math.pow(radio,2);

console.log(`el área de una circunferencia es ${area}`);

// 6
const horasTrabajo = Number(prompt('Ingrese las horas de trabajo'));
const salarioXhora = 10;
const semana = 7;

let sueldoSemanal;

sueldoSemanal = (horasTrabajo * salarioXhora)* semana;

console.log(`Si tu salario por hora es ${salarioXhora}, tu sueldo semanal es ${SueldoSemanal}`);

// 7
const metrosTela = Number(parseFloat(prompt('Ingrese los metros de tela')));
const unmetroPulgadas = 39.3701;

let telaPulgadas;

telaPulgadas = metrosTela * unmetroPulgadas;

console.log(`Las pulgadas de tela a pedir son ${telaPulgadas}`);

// 8
const presupuestoSoles = Number(parseFloat(prompt('Ingrese el monto en soles')));
const solacentavo = 0.26;

let dolaresAdquirido;

dolaresAdquirido = solacentavo * presupuestoSoles;

console.log(`la cantidad de dolares adquirido con el monto X es ${dolaresAdquirido}`)

// 9
const anioNacimiento = Number(prompt('Ingrese su anio de nacimiento'));
const anioActual = 2021;

let edadPersonas;

edadPersonas =anioActual - anioNacimiento;

console.log(`la edad de las personas que solicitan trabajo es ${edadPersonas}`)

// 10
const roberto = Number(prompt('Ingrese la edad de roberto'));
const pedro = 20;
const lucia = 22;

if ((pedro > roberto && lucia > roberto)) {
    console.log(`roberto es menor de edad`);
} else if ((pedro < roberto && lucia < roberto)) {
    console.log(`roberto no es menor de edad`);
}

// 11
const anioAntiguedad = Number(prompt('ingrese su año de antiguedad'));


if (anioAntiguedad > 5 ) {
    console.log('recibessss 1000');
} else {
    switch (anioAntiguedad) {
        case 1:
            console.log('recibe 100$');
            break;
        case 2:
             console.log('recibe 200$');
             break;
        case 3:
            console.log('recibe 300$');
            break;
        case 4:
             console.log('recibe 400$');
             break;
        case 5:
            console.log('recibe 500$');
            break;
            default: console.log('recibe nada');
            break;
    }
}

// 12
const sueldoinicial = 1500;
const porcentajeAumentado = 0.1
const verificaanio = Number(prompt('Ingrese el años a verificar'))
const salario = 1500;
const incremento = 0.1;

const salarioAño1 = sueldoinicial * porcentajeAumentado  + sueldoinicial; 
const salarioAño2 = salarioAño1 * porcentajeAumentado + salarioAño1;
const salarioAño3 = salarioAño2 * porcentajeAumentado + salarioAño2;
const salarioAño4 = salarioAño3 * porcentajeAumentado + salarioAño3;
const salarioAño5 = salarioAño4 * porcentajeAumentado + salarioAño4;
const salarioAño6 = salarioAño5 * porcentajeAumentado + salarioAño5;

if (verificaanio >= 6 ) {
    console.log(`tu salario de 6 años es ${salarioAño6}`);
} else {
    switch (verificaanio) {
        case 1:
            console.log(`tu salario el primer año es ${salarioAño1}`);
            break;
        case 2:
             console.log(`tu salario el primer año es ${salarioAño2}`);
             break;
        case 3:
            console.log(`tu salario el primer año es ${salarioAño3}`);
            break;
        case 4:
             console.log(`tu salario el primer año es ${salarioAño4}`);
             break;
        case 5:
            console.log(`tu salario el primer año es ${salarioAño5}`);
            break;
        case 6:
            console.log(`tu salario el primer año es ${salarioAño6}`)
            default: console.log('recibe nada');
            break;
    }
}

// 13
const calificaciones = Number(prompt('Escriba la calificacion del alumno'));

const aprobado = calificaciones >= 6;
const desaprobado = calificaciones <=5;

const contaprob = 0;
const contdesaprb = 0;

while (calificaciones == aprobado) {
    contaprob = contaprob+1;
    console.log(`si la calificacion es ${calificaciones} el numero de aprobado es ${contaprob}`);
}
while (calificaciones == desaprobado) {
    contdesaprb = contdesaprb+1;
    console.log(`si la calificacion es ${calificaciones} el numero de aprobado es ${contdesaprb}`);
}
// 14

// 15
const edadVotante = Number(prompt('Ingrese su edad para determijnar si puede votar o no en estas elecciones'));

if (edadVotante > 18) {
    console.log('Usted puede votar');
} else if (edadVotante < 18 ){
    console.log('Usted no puede votar');
}

else {
    console.log('error');
}