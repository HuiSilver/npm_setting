module.exports = function myBabelPlugin(){
    return{
        visitor: {
           
                VariableDeclaration(path){
                    console.log('VariableDeclarartion() kind:',path.node.kind); 

                    //const => var로 변환
                    if(path.node.kind === 'const'){
                        path.node.kind = 'var' 
                    }
                }
            
        }
    }
}