

//#region  JUNTO E MISTURADO
const user = { name: 'Shivek Khurana', age: 23, password: 'SantaCl@use' };
const userWithoutPassword = Object.keys(user)
                                  .filter(key => key !== 'password')
                                  .map(key => ({ [key]: user[key] }))
                                  .reduce((accumulator, current) =>
                                      ({ ...accumulator, ...current }),
                                      {}
                                  )
 
console.log('unindo todas as funções podemos criar um validador de senhas: ', userWithoutPassword);
//#endregion