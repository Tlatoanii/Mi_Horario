// Crear mi horario
class Materia{
    constructor(materia, profesor, hora1, hora2, nrc, val)
    {
        this.materia = materia
        this.profesor = profesor
        this.hora1 = hora1  
        this.hora2 = hora2
        this.nrc = nrc
        this.val = val
    }
}

// Materia de Administración de seguridad en redes
const sRedes = [ new Materia(`Intercom. y Seguridad en Redes`, `RAMIREZ - ESPITIA CARLOS MAURICIO`, `L: 8-9`, `AJ: 7-9`, `11144`, `Bueno`), 
                 new Materia(`Intercom. y Seguridad en Redes`, `RODRIGUEZ - BERNAL FERNANDO`, `L: 18-19`, `AJ: 17-19`, `12285`, `Sin Datos`),
                 new Materia(`Intercom. y Seguridad en Redes`, `SORIANO - ROSAS JOSE ISABEL`, `L: 17-18`, `MV: 17-19`, `12820`, `Regular`)]

// Materia de Sistemas Empotrados 
const sEmpotrados = [new Materia(`Sistemas Empotrados`, `TRINIDAD - GARCIA GREGORIO`, `L: 8-9`, `AJ: 7-9`, `11952`, `Malo`),
                     new Materia(`Sistemas Empotrados`, `HERNANDEZ - AMECA JOSE LUIS`, `L: 12-13`, `AJ: 11-13`, `12274`, `Bueno`),
                     new Materia(`Sistemas Empotrados`, `HURTADO - MADRID JOSE`, `L: 15-16`, `MV: 15-17`, `14592`, `Pesimo`),
                     new Materia(`Sistemas Empotrados`, `AGUILAR - RODRIGUEZ MANUEL`, `L: 17-18`, `MV: 17-19`, `12818`, `Bueno`),
                     new Materia(`Sistemas Empotrados`, `MANTILLA - NARVAEZ LILIA`, `L: 10-11`, `AJ: 9-11`, `12818`, `Bueno`)]
            
// Materia Optativa
const optativa = [new Materia(`Desarrollo de Aplicaciones Moviles`, `CORTEZ - . ERNEST`, `L: 20-21`, `AJ: 19-21`, `11180`, `Bueno`)]         

var materias = [sRedes, sEmpotrados, optativa]

// document.write(materias[0][1].profesor)
// document.write(materias[n][j].profesor+`<br>`)

const choque = (h1, h2, hora1, hora2, i) =>
{
    for(let v = 0; v < i ; v++ )
    {
        if(h1 == hora1[v] || h2 == hora2[v])
            return false
    }
    return true
}

const horario = (n, h, hora1, hora2, i, sol1) =>
{   
    if(n == materias.length)
    {
        numero++
        document.write(`<h2><b style='color:black'>---Horario-${numero}---</b><br></h2>`)
        for(let x = 0; x < materias.length; x++)
        {
            document.write(`<br>${materias[x][sol1[x]].materia}<br>`)

            if(materias[x][sol1[x]].val == 'Pesimo')
            {
                document.write(`<b style='color:red'>${materias[x][sol1[x]].profesor}</b><br>`)
            }
            else if(materias[x][sol1[x]].val == 'Malo')
            {
                document.write(`<b style='color:orange'>${materias[x][sol1[x]].profesor}</b><br>`)
            }
            else if(materias[x][sol1[x]].val == 'Regular')
            {
                document.write(`<b style='color:black'>${materias[x][sol1[x]].profesor}</b><br>`)
            }
            else if(materias[x][sol1[x]].val == 'Bueno')
            {
                document.write(`<b style='color:blue'>${materias[x][sol1[x]].profesor}</b><br>`)
            }
            else if(materias[x][sol1[x]].val == 'Sin Datos')
            {
                document.write(`<b style='color:white'>${materias[x][sol1[x]].profesor}</b><br>`)
            }
            else
            {
                document.write(`<b style='color:green'>${materias[x][sol1[x]].profesor}</b><br>`)
            }

            document.write(`${materias[x][sol1[x]].val}<br>
                            ${materias[x][sol1[x]].hora1}<br>
                            ${materias[x][sol1[x]].hora2}<br>
                            ${materias[x][sol1[x]].nrc}<br><br>`)
        }
        console.log(`Horario ${numero}`)
        console.log('sol1 = '+sol1)
        console.log('i = '+ i)
        console.log('hora1 = '+hora1)
        console.log('hora2 = '+hora2)
    }
    else
    {
        for(let j in materias[n])
        {
            console.log(`[${n},${j}]`)
            console.log(`i = ${i}`)
            if(choque(materias[n][j].hora1, materias[n][j].hora2, hora1, hora2, i) == true)
            {
                sol1[n] = j
                hora1[i] = materias[n][j].hora1
                hora2[i] = materias[n][j].hora2
                i++
                horario((n+1), h, hora1, hora2, i, sol1) 
                i--
                hora1.pop
                hora2.pop
            }
            
        }
    }
}

var numero = 0
let sol1 = []
let sol2 = []
let hora1 = []
let hora2 = []
horario(0, '', hora1, hora2, 0, sol1, sol2)