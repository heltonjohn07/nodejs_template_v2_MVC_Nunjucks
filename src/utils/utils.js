

module.exports = function (array,params){
    var aluno  = []
    var str = []

    for (let i = 0; i < array.length; i++) {
        if(i==0){
            let obj = {
                'id':array[i].id,
                'name': array[i].name,
                'idade':array[i].idade,
                'mat_name': [array[i].mat_name]
            }
            
            aluno.push(obj)
        }else{
            if(array[i].id!==array[i-1].id){
                str = []
                let obj = {
                    'id':array[i].id,
                    'name': array[i].name,
                    'idade':array[i].idade,
                    'mat_name': [array[i].mat_name]
                }
                aluno.push(obj)
            }else{
                str.push(array[i-1].mat_name)

                if((str.indexOf(array[1].mat_name))!==-1){
                    str.push(array[i].mat_name)
                }

                let obj = {
                    'id':array[i].id,
                    'name': array[i].name,
                    'idade':array[i].idade,
                    'mat_name': str
                }
                aluno.pop()
                aluno.push(obj)
                // aluno.splice((aluno.length)-1, 1, obj)
                // aluno[(aluno.length)-1] = obj
            }
        }
    }
    return aluno
}


