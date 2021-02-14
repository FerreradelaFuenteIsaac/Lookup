/* Salario total por tienda ordenado de mayor a menor 
que no supere el presupuesto limite ordenados por salario
*/

db.Tienda.aggregate([
    {
        $lookup: {
            from: "Empleados2",
            localField: "Cod_Tienda",
            foreignField: "Cod_Tienda",
            as: "Info"
        }
    },
    {
        $unwind: "$Info"
    },
    {
        $project: {
            Nombre: 1,
            Sal_Hor: 1,
            Presupuesto: 1,
            "Info.Nombre": 1,
            "Info.Horas_Sem": 1,
            "Info.Extra": 1,
            Sal_Sem: { $multiply: [
                "$Sal_Hor", "$Info.Horas_Sem"
            ]},
            Sal_Men: { $sum: [ { $multiply: [
                "$Sal_Hor", "$Info.Horas_Sem", 4
            ]}, "$Info.Extra"]}}
        },
        {
            $group: {
                _id: ["$Nombre", "$Presupuesto"] ,
                Sal_Tie: { $sum: "$Sal_Men"}
            }
        },
        {
            $match: {
                $expr: {
                    Sal_Fin: { $gt: [ "$Presupuesto", "$Sal_Tie"]}
                }
            }
        },
        {
            $sort: {
                Sal_Tie: -1,
                Presupuesto: -1
            }
        }
]).pretty()

/*
Salario total de cada empleado contando 
en cuantas tiendas trabaja ordenados de mayor a menor
*/

db.Tienda.aggregate([
    {
        $lookup: {
            from: "Empleados3",
            localField: "Cod_Tienda",
            foreignField: "Cod_Tienda",
            as: "Info"
        }
    },
    {
        $unwind: "$Info"
    },
    {
        $project: {
            Info: 1,
            Sal_Men: { $sum: [ { $multiply: [
                "$Sal_Hor", "$Info.Horas_Sem", 4
            ]}, "$Info.Extra"]}}
    },
    {
        $group: {
            _id: ["$Info.Nombre", "$Info.Encargado"],
            Sal_Tot: { $sum: "$Sal_Men"}
        }
    },
    {
        $match: {
            Sal_Tot: { $gt: 2000}
        }
    },
    {
        $sort: {
            Sal_Tot: -1,
            Nombre: -1
        }
    }
]).pretty()