db.Tienda.drop()
db.Tienda.insertMany([
    {
        Cod_Tienda: 1,
        Nombre: "Game",
        Sal_Hor: 10,
        Presupuesto: 20000
    },
    {
        Cod_Tienda: 2,
        Nombre: "MediaMarkt",
        Sal_Hor: 12,
        Presupuesto: 25000
    },
    {
        Cod_Tienda: 3,
        Nombre: "Worten",
        Sal_Hor: 11,
        Presupuesto: 12000
    }
])

db.Empleados2.drop()
db.Empleados2.insertMany([
    {
        Nombre: "Gerard",
        Apellidos: "Valiente",
        Fecha_Nac: new Date("1990-09-24"),
        Horas_Sem: 40,
        Extra: 120,
        Cod_Tienda: 1,
        Encargado: true,
    },
    {
        Nombre: "Evaristo",
        Apellidos: "Roldan",
        Fecha_Nac: new Date("1999-01-15"),
        Horas_Sem: 35,
        Extra: 60,
        Cod_Tienda: 2,
        Encargado: false,
    },
    {
        Nombre: "Minerva",
        Apellidos: "Soriano",
        Fecha_Nac: new Date("1997-07-31"),
        Horas_Sem: 32,
        Extra: 80,
        Cod_Tienda: 3,
        Encargado: false,
    },
    {
        Nombre: "Leire",
        Apellidos: "Camacho",
        Fecha_Nac: new Date("1983-05-06"),
        Horas_Sem: 40,
        Extra: 160,
        Cod_Tienda: 3,
        Encargado: true,
    },
    {
        Nombre: "Izan",
        Apellidos: "Quintana",
        Fecha_Nac: new Date("1998-11-15"),
        Horas_Sem: 25,
        Extra: 15,
        Cod_Tienda: 1,
        Encargado: false,
    },
    {
        Nombre: "Natalia",
        Apellidos: "Picazo",
        Fecha_Nac: new Date("1998-09-02"),
        Horas_Sem: 36,
        Extra: 90,
        Cod_Tienda: 2,
        Encargado: false,
    },
    {
        Nombre: "Reyes",
        Apellidos: "Zaragoza",
        Fecha_Nac: new Date("1983-02-22"),
        Horas_Sem: 27,
        Extra: 150,
        Cod_Tienda: 2,
        Encargado: true,
    },
    {
        Nombre: "Luis",
        Apellidos: "Oviedo",
        Fecha_Nac: new Date("1987-12-05"),
        Horas_Sem: 28,
        Extra: 70,
        Cod_Tienda: 3,
        Encargado: false,
    },
    {
        Nombre: "Nerea",
        Apellidos: "Galán",
        Fecha_Nac: new Date("1985-06-28"),
        Horas_Sem: 40,
        Extra: 120,
        Cod_Tienda: 1,
        Encargado: false,
    },
    {
        Nombre: "Gisela",
        Apellidos: "Salas",
        Fecha_Nac: new Date("1990-09-24"),
        Horas_Sem: 40,
        Extra: 90,
        Cod_Tienda: 1,
        Encargado: false,
    },
    {
        Nombre: "Cesar",
        Apellidos: "Riera",
        Fecha_Nac: new Date("1986-02-15"),
        Horas_Sem: 33,
        Extra: 85,
        Cod_Tienda: 3,
        Encargado: false,
    },
    {
        Nombre: "Aleix",
        Apellidos: "Barrio",
        Fecha_Nac: new Date("1994-10-29"),
        Horas_Sem: 30,
        Extra: 75,
        Cod_Tienda: 2,
        Encargado: true,
    },
    {
        Nombre: "Narciso",
        Apellidos: "Tejedor",
        Fecha_Nac: new Date("1989-11-22"),
        Horas_Sem: 40,
        Extra: 170,
        Cod_Tienda: 2,
        Encargado: true,
    },
    {
        Nombre: "María",
        Apellidos: "Cárdenas",
        Fecha_Nac: new Date("1999-11-03"),
        Horas_Sem: 20,
        Extra: 0,
        Cod_Tienda: 3,
        Encargado: false,
    },
    {
        Nombre: "Jessica",
        Apellidos: "Prieto",
        Fecha_Nac: new Date("1995-07-22"),
        Horas_Sem: 30,
        Extra: 80,
        Tienda: 2,
        Encargado: false,
    }
])


db.Empleados3.drop()
db.Empleados3.insertMany([
    {
        Nombre: "Gerard",
        Apellidos: "Valiente",
        Fecha_Nac: new Date("1990-09-24"),
        Horas_Sem: 40,
        Extra: 120,
        Cod_Tienda: 1,
        Encargado: true,
    },
    {
        Nombre: "Evaristo",
        Apellidos: "Roldan",
        Fecha_Nac: new Date("1999-01-15"),
        Horas_Sem: 20,
        Extra: 60,
        Cod_Tienda: [
            2, 3
        ],
        Encargado: false,
    },
    {
        Nombre: "Minerva",
        Apellidos: "Soriano",
        Fecha_Nac: new Date("1997-07-31"),
        Horas_Sem: 30,
        Extra: 80,
        Cod_Tienda: [
            1, 3
        ],
        Encargado: false,
    },
    {
        Nombre: "Leire",
        Apellidos: "Camacho",
        Fecha_Nac: new Date("1983-05-06"),
        Horas_Sem: 40,
        Extra: 160,
        Cod_Tienda: 3,
        Encargado: true,
    },
    {
        Nombre: "Izan",
        Apellidos: "Quintana",
        Fecha_Nac: new Date("1998-11-15"),
        Horas_Sem: 25,
        Extra: 15,
        Cod_Tienda: [
            1, 2
        ],
        Encargado: false,
    },
    {
        Nombre: "Natalia",
        Apellidos: "Picazo",
        Fecha_Nac: new Date("1998-09-02"),
        Horas_Sem: 36,
        Extra: 90,
        Cod_Tienda: [
            2, 3
        ],
        Encargado: false,
    },
    {
        Nombre: "Reyes",
        Apellidos: "Zaragoza",
        Fecha_Nac: new Date("1983-02-22"),
        Horas_Sem: 27,
        Extra: 150,
        Cod_Tienda: 2,
        Encargado: true,
    },
    {
        Nombre: "Luis",
        Apellidos: "Oviedo",
        Fecha_Nac: new Date("1987-12-05"),
        Horas_Sem: 28,
        Extra: 70,
        Cod_Tienda: [
            1, 3
        ],
        Encargado: false,
    },
    {
        Nombre: "Nerea",
        Apellidos: "Galán",
        Fecha_Nac: new Date("1985-06-28"),
        Horas_Sem: 40,
        Extra: 120,
        Cod_Tienda: [
            1, 2
        ],
        Encargado: false,
    },
    {
        Nombre: "Gisela",
        Apellidos: "Salas",
        Fecha_Nac: new Date("1990-09-24"),
        Horas_Sem: 40,
        Extra: 90,
        Cod_Tienda: [
            1, 2, 3
        ],
        Encargado: false,
    },
    {
        Nombre: "Cesar",
        Apellidos: "Riera",
        Fecha_Nac: new Date("1986-02-15"),
        Horas_Sem: 33,
        Extra: 85,
        Cod_Tienda: [
            2, 3
        ],
        Encargado: false,
    },
    {
        Nombre: "Aleix",
        Apellidos: "Barrio",
        Fecha_Nac: new Date("1994-10-29"),
        Horas_Sem: 30,
        Extra: 75,
        Cod_Tienda: [
            2, 3
        ],
        Encargado: true,
    },
    {
        Nombre: "Narciso",
        Apellidos: "Tejedor",
        Fecha_Nac: new Date("1989-11-22"),
        Horas_Sem: 40,
        Extra: 170,
        Cod_Tienda: 2,
        Encargado: true,
    },
    {
        Nombre: "María",
        Apellidos: "Cárdenas",
        Fecha_Nac: new Date("1999-11-03"),
        Horas_Sem: 20,
        Extra: 0,
        Cod_Tienda: 3,
        Encargado: false,
    },
    {
        Nombre: "Jessica",
        Apellidos: "Prieto",
        Fecha_Nac: new Date("1995-07-22"),
        Horas_Sem: 30,
        Extra: 80,
        Tienda: [
            1, 2, 3
        ],
        Encargado: false,
    }
])