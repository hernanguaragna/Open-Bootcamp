// Un nuevo Set con los nombres de tu familia
const familia = ['Hernan','Vero', 'Nico', 'Morita', 'Sofi']
const miFamilia = new Set(familia)
console.log(miFamilia)

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add('Hernan')
console.log(miFamilia)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add("javaScript")
console.log(miFamilia)