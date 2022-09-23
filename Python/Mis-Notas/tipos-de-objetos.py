Python 3.10.7 (tags/v3.10.7:6cc6b13, Sep  5 2022, 14:08:36) [MSC v.1933 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
string = "Hola"
type(string)
<class 'str'>


lista= ["a",2,4, "hola"]
type(lista)
<class 'list'>


lista[1]=3
print(lista)
['a', 3, 4, 'hola']
id(lista)
1570363111744
lista[1]=2
print(lista)
['a', 2, 4, 'hola']
id(lista)
1570363111744


tupla=(10,"b",4,"chau",10)
type(tupla)
<class 'tuple'>
//agregar caracteres a una lista append
SyntaxError: invalid syntax
lista.append("queso")
lista(print)
Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    lista(print)
TypeError: 'list' object is not callable
print(lista)
['a', 2, 4, 'hola', 'queso']
para eliminar un caracter a una lista se utiliza .remove
SyntaxError: invalid syntax
lista.remove('queso')
print(lista)
['a', 2, 4, 'hola']

unodostres=[1,2,3]
cuatrocincoseis = [4,5,6]
unodostres.append(cuatrocincoseis)
print(unodostres)
[1, 2, 3, [4, 5, 6]]
type(unodostres)
<class 'list'>
lista[3]="hola"
print(lista)
['a', 2, 4, 'hola']
lista[3]=4
print(lista)
['a', 2, 4, 4]
ç

diccionario = {
    'clave'='valor'
    
SyntaxError: '{' was never closed
diccionario ={
    'clave'= 'valor'
    
SyntaxError: '{' was never closed
diccionario = {'clave'='valor','clave2'=15}
    
SyntaxError: cannot assign to literal here. Maybe you meant '==' instead of '='?
diccionario = {"clave":"valor",'clave2':15}
    
print(diccionario)
    
{'clave': 'valor', 'clave2': 15}
print(diccionario['clave2'])
    
15
quince = diccionario['clave2']
    
print(quince)
    
15
diccionario2= {'clave1':1,'clave2':2,'clave3':3,'clave4':4}
    
print(diccionario2)
    
{'clave1': 1, 'clave2': 2, 'clave3': 3, 'clave4': 4}
import pprint
pprint.pprint(diccionario2)
{'clave1': 1, 'clave2': 2, 'clave3': 3, 'clave4': 4}
diccionario.pop('clave1')
Traceback (most recent call last):
  File "<pyshell#50>", line 1, in <module>
    diccionario.pop('clave1')
KeyError: 'clave1'
diccionario2.pop('clave1')
1
print(diccionario2)
{'clave2': 2, 'clave3': 3, 'clave4': 4}
guardarclave2 = diccionario2.pop('clave2')
print(guardarclave2)
2
lista=[1,2,3,1,2,3]
print(lista)
[1, 2, 3, 1, 2, 3]
conjunto = {1,2,3,1,2,3}
print(conjunto)
{1, 2, 3}
set = conjunto
print(set)
{1, 2, 3}
a={0,2,4,6,8}
b={1,2,3,4,5,6,7,8}
a
{0, 2, 4, 6, 8}
b
{1, 2, 3, 4, 5, 6, 7, 8}
a|b
{0, 1, 2, 3, 4, 5, 6, 7, 8}

a&b
{8, 2, 4, 6}

a-b
{0}
a^b
{0, 1, 3, 5, 7}

numeros = 5
cadenas= 'soy una cadena de texto'
booleanos = True
flotantes = 3,2
listas = ['a','b','c']
tupla = ('a','b','c')
diccionario = {'clave':1,'clave':'valor'}
conjuntos = {1,2,3,4,5}


mitexto= 'hola, esto es un textO'
mitexto.capitalize()
'Hola, esto es un texto'
mitexto.title()
'Hola, Esto Es Un Texto'
mitexto.lower()
'hola, esto es un texto'
mitexto.upper()
'HOLA, ESTO ES UN TEXTO'
mitexto.replece('o', 'i')
Traceback (most recent call last):
  File "<pyshell#87>", line 1, in <module>
    mitexto.replece('o', 'i')
AttributeError: 'str' object has no attribute 'replece'. Did you mean: 'replace'?
mitexto.replace('o','i')
'hila, esti es un textO'
mitexto.find('esto')
6
mitexto.find('h')
0
mitexto.split()
['hola,', 'esto', 'es', 'un', 'textO']
mitexto.replace(',','').upper().split()
['HOLA', 'ESTO', 'ES', 'UN', 'TEXTO']
listaTexto = ['HOLA', 'ESTO', 'ES', 'UN', 'TEXTO']
''.join(listaTexto)
'HOLAESTOESUNTEXTO'
' '.join(listaTexto)
'HOLA ESTO ES UN TEXTO'
print(listaTexto)
['HOLA', 'ESTO', 'ES', 'UN', 'TEXTO']
deListaACadena = ' '.join(listaTexto)
print(deListaATexto)
Traceback (most recent call last):
  File "<pyshell#98>", line 1, in <module>
    print(deListaATexto)
NameError: name 'deListaATexto' is not defined. Did you mean: 'listaTexto'?
print(deListaACadena)
HOLA ESTO ES UN TEXTO
help(str)
Help on class str in module builtins:

class str(object)
 |  str(object='') -> str
 |  str(bytes_or_buffer[, encoding[, errors]]) -> str
 |  
 |  Create a new string object from the given object. If encoding or
 |  errors is specified, then the object must expose a data buffer
 |  that will be decoded using the given encoding and error handler.
 |  Otherwise, returns the result of object.__str__() (if defined)
 |  or repr(object).
 |  encoding defaults to sys.getdefaultencoding().
 |  errors defaults to 'strict'.
 |  
 |  Methods defined here:
 |  
 |  __add__(self, value, /)
 |      Return self+value.
 |  
 |  __contains__(self, key, /)
 |      Return key in self.
 |  
 |  __eq__(self, value, /)
 |      Return self==value.
 |  
 |  __format__(self, format_spec, /)
 |      Return a formatted version of the string as described by format_spec.
 |  
 |  __ge__(self, value, /)
 |      Return self>=value.
 |  
 |  __getattribute__(self, name, /)
 |      Return getattr(self, name).
 |  
 |  __getitem__(self, key, /)
 |      Return self[key].
 |  
 |  __getnewargs__(...)
 |  
 |  __gt__(self, value, /)
 |      Return self>value.
 |  
 |  __hash__(self, /)
 |      Return hash(self).
 |  
 |  __iter__(self, /)
 |      Implement iter(self).
 |  
 |  __le__(self, value, /)
 |      Return self<=value.
 |  
 |  __len__(self, /)
 |      Return len(self).
 |  
 |  __lt__(self, value, /)
 |      Return self<value.
 |  
 |  __mod__(self, value, /)
 |      Return self%value.
 |  
 |  __mul__(self, value, /)
 |      Return self*value.
 |  
 |  __ne__(self, value, /)
 |      Return self!=value.
 |  
 |  __repr__(self, /)
 |      Return repr(self).
 |  
 |  __rmod__(self, value, /)
 |      Return value%self.
 |  
 |  __rmul__(self, value, /)
 |      Return value*self.
 |  
 |  __sizeof__(self, /)
 |      Return the size of the string in memory, in bytes.
 |  
 |  __str__(self, /)
 |      Return str(self).
 |  
 |  capitalize(self, /)
 |      Return a capitalized version of the string.
 |      
 |      More specifically, make the first character have upper case and the rest lower
 |      case.
 |  
 |  casefold(self, /)
 |      Return a version of the string suitable for caseless comparisons.
 |  
 |  center(self, width, fillchar=' ', /)
 |      Return a centered string of length width.
 |      
 |      Padding is done using the specified fill character (default is a space).
 |  
 |  count(...)
 |      S.count(sub[, start[, end]]) -> int
 |      
 |      Return the number of non-overlapping occurrences of substring sub in
 |      string S[start:end].  Optional arguments start and end are
 |      interpreted as in slice notation.
 |  
 |  encode(self, /, encoding='utf-8', errors='strict')
 |      Encode the string using the codec registered for encoding.
 |      
 |      encoding
 |        The encoding in which to encode the string.
 |      errors
 |        The error handling scheme to use for encoding errors.
 |        The default is 'strict' meaning that encoding errors raise a
 |        UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and
 |        'xmlcharrefreplace' as well as any other name registered with
 |        codecs.register_error that can handle UnicodeEncodeErrors.
 |  
 |  endswith(...)
 |      S.endswith(suffix[, start[, end]]) -> bool
 |      
 |      Return True if S ends with the specified suffix, False otherwise.
 |      With optional start, test S beginning at that position.
 |      With optional end, stop comparing S at that position.
 |      suffix can also be a tuple of strings to try.
 |  
 |  expandtabs(self, /, tabsize=8)
 |      Return a copy where all tab characters are expanded using spaces.
 |      
 |      If tabsize is not given, a tab size of 8 characters is assumed.
 |  
 |  find(...)
 |      S.find(sub[, start[, end]]) -> int
 |      
 |      Return the lowest index in S where substring sub is found,
 |      such that sub is contained within S[start:end].  Optional
 |      arguments start and end are interpreted as in slice notation.
 |      
 |      Return -1 on failure.
 |  
 |  format(...)
 |      S.format(*args, **kwargs) -> str
 |      
 |      Return a formatted version of S, using substitutions from args and kwargs.
 |      The substitutions are identified by braces ('{' and '}').
 |  
 |  format_map(...)
 |      S.format_map(mapping) -> str
 |      
 |      Return a formatted version of S, using substitutions from mapping.
 |      The substitutions are identified by braces ('{' and '}').
 |  
 |  index(...)
 |      S.index(sub[, start[, end]]) -> int
 |      
 |      Return the lowest index in S where substring sub is found,
 |      such that sub is contained within S[start:end].  Optional
 |      arguments start and end are interpreted as in slice notation.
 |      
 |      Raises ValueError when the substring is not found.
 |  
 |  isalnum(self, /)
 |      Return True if the string is an alpha-numeric string, False otherwise.
 |      
 |      A string is alpha-numeric if all characters in the string are alpha-numeric and
 |      there is at least one character in the string.
 |  
 |  isalpha(self, /)
 |      Return True if the string is an alphabetic string, False otherwise.
 |      
 |      A string is alphabetic if all characters in the string are alphabetic and there
 |      is at least one character in the string.
 |  
 |  isascii(self, /)
 |      Return True if all characters in the string are ASCII, False otherwise.
 |      
 |      ASCII characters have code points in the range U+0000-U+007F.
 |      Empty string is ASCII too.
 |  
 |  isdecimal(self, /)
 |      Return True if the string is a decimal string, False otherwise.
 |      
 |      A string is a decimal string if all characters in the string are decimal and
 |      there is at least one character in the string.
 |  
 |  isdigit(self, /)
 |      Return True if the string is a digit string, False otherwise.
 |      
 |      A string is a digit string if all characters in the string are digits and there
 |      is at least one character in the string.
 |  
 |  isidentifier(self, /)
 |      Return True if the string is a valid Python identifier, False otherwise.
 |      
 |      Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
 |      such as "def" or "class".
 |  
 |  islower(self, /)
 |      Return True if the string is a lowercase string, False otherwise.
 |      
 |      A string is lowercase if all cased characters in the string are lowercase and
 |      there is at least one cased character in the string.
 |  
 |  isnumeric(self, /)
 |      Return True if the string is a numeric string, False otherwise.
 |      
 |      A string is numeric if all characters in the string are numeric and there is at
 |      least one character in the string.
 |  
 |  isprintable(self, /)
 |      Return True if the string is printable, False otherwise.
 |      
 |      A string is printable if all of its characters are considered printable in
 |      repr() or if it is empty.
 |  
 |  isspace(self, /)
 |      Return True if the string is a whitespace string, False otherwise.
 |      
 |      A string is whitespace if all characters in the string are whitespace and there
 |      is at least one character in the string.
 |  
 |  istitle(self, /)
 |      Return True if the string is a title-cased string, False otherwise.
 |      
 |      In a title-cased string, upper- and title-case characters may only
 |      follow uncased characters and lowercase characters only cased ones.
 |  
 |  isupper(self, /)
 |      Return True if the string is an uppercase string, False otherwise.
 |      
 |      A string is uppercase if all cased characters in the string are uppercase and
 |      there is at least one cased character in the string.
 |  
 |  join(self, iterable, /)
 |      Concatenate any number of strings.
 |      
 |      The string whose method is called is inserted in between each given string.
 |      The result is returned as a new string.
 |      
 |      Example: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'
 |  
 |  ljust(self, width, fillchar=' ', /)
 |      Return a left-justified string of length width.
 |      
 |      Padding is done using the specified fill character (default is a space).
 |  
 |  lower(self, /)
 |      Return a copy of the string converted to lowercase.
 |  
 |  lstrip(self, chars=None, /)
 |      Return a copy of the string with leading whitespace removed.
 |      
 |      If chars is given and not None, remove characters in chars instead.
 |  
 |  partition(self, sep, /)
 |      Partition the string into three parts using the given separator.
 |      
 |      This will search for the separator in the string.  If the separator is found,
 |      returns a 3-tuple containing the part before the separator, the separator
 |      itself, and the part after it.
 |      
 |      If the separator is not found, returns a 3-tuple containing the original string
 |      and two empty strings.
 |  
 |  removeprefix(self, prefix, /)
 |      Return a str with the given prefix string removed if present.
 |      
 |      If the string starts with the prefix string, return string[len(prefix):].
 |      Otherwise, return a copy of the original string.
 |  
 |  removesuffix(self, suffix, /)
 |      Return a str with the given suffix string removed if present.
 |      
 |      If the string ends with the suffix string and that suffix is not empty,
 |      return string[:-len(suffix)]. Otherwise, return a copy of the original
 |      string.
 |  
 |  replace(self, old, new, count=-1, /)
 |      Return a copy with all occurrences of substring old replaced by new.
 |      
 |        count
 |          Maximum number of occurrences to replace.
 |          -1 (the default value) means replace all occurrences.
 |      
 |      If the optional argument count is given, only the first count occurrences are
 |      replaced.
 |  
 |  rfind(...)
 |      S.rfind(sub[, start[, end]]) -> int
 |      
 |      Return the highest index in S where substring sub is found,
 |      such that sub is contained within S[start:end].  Optional
 |      arguments start and end are interpreted as in slice notation.
 |      
 |      Return -1 on failure.
 |  
 |  rindex(...)
 |      S.rindex(sub[, start[, end]]) -> int
 |      
 |      Return the highest index in S where substring sub is found,
 |      such that sub is contained within S[start:end].  Optional
 |      arguments start and end are interpreted as in slice notation.
 |      
 |      Raises ValueError when the substring is not found.
 |  
 |  rjust(self, width, fillchar=' ', /)
 |      Return a right-justified string of length width.
 |      
 |      Padding is done using the specified fill character (default is a space).
 |  
 |  rpartition(self, sep, /)
 |      Partition the string into three parts using the given separator.
 |      
 |      This will search for the separator in the string, starting at the end. If
 |      the separator is found, returns a 3-tuple containing the part before the
 |      separator, the separator itself, and the part after it.
 |      
 |      If the separator is not found, returns a 3-tuple containing two empty strings
 |      and the original string.
 |  
 |  rsplit(self, /, sep=None, maxsplit=-1)
 |      Return a list of the substrings in the string, using sep as the separator string.
 |      
 |        sep
 |          The separator used to split the string.
 |      
 |          When set to None (the default value), will split on any whitespace
 |          character (including \\n \\r \\t \\f and spaces) and will discard
 |          empty strings from the result.
 |        maxsplit
 |          Maximum number of splits (starting from the left).
 |          -1 (the default value) means no limit.
 |      
 |      Splitting starts at the end of the string and works to the front.
 |  
 |  rstrip(self, chars=None, /)
 |      Return a copy of the string with trailing whitespace removed.
 |      
 |      If chars is given and not None, remove characters in chars instead.
 |  
 |  split(self, /, sep=None, maxsplit=-1)
 |      Return a list of the substrings in the string, using sep as the separator string.
 |      
 |        sep
 |          The separator used to split the string.
 |      
 |          When set to None (the default value), will split on any whitespace
 |          character (including \\n \\r \\t \\f and spaces) and will discard
 |          empty strings from the result.
 |        maxsplit
 |          Maximum number of splits (starting from the left).
 |          -1 (the default value) means no limit.
 |      
 |      Note, str.split() is mainly useful for data that has been intentionally
 |      delimited.  With natural text that includes punctuation, consider using
 |      the regular expression module.
 |  
 |  splitlines(self, /, keepends=False)
 |      Return a list of the lines in the string, breaking at line boundaries.
 |      
 |      Line breaks are not included in the resulting list unless keepends is given and
 |      true.
 |  
 |  startswith(...)
 |      S.startswith(prefix[, start[, end]]) -> bool
 |      
 |      Return True if S starts with the specified prefix, False otherwise.
 |      With optional start, test S beginning at that position.
 |      With optional end, stop comparing S at that position.
 |      prefix can also be a tuple of strings to try.
 |  
 |  strip(self, chars=None, /)
 |      Return a copy of the string with leading and trailing whitespace removed.
 |      
 |      If chars is given and not None, remove characters in chars instead.
 |  
 |  swapcase(self, /)
 |      Convert uppercase characters to lowercase and lowercase characters to uppercase.
 |  
 |  title(self, /)
 |      Return a version of the string where each word is titlecased.
 |      
 |      More specifically, words start with uppercased characters and all remaining
 |      cased characters have lower case.
 |  
 |  translate(self, table, /)
 |      Replace each character in the string using the given translation table.
 |      
 |        table
 |          Translation table, which must be a mapping of Unicode ordinals to
 |          Unicode ordinals, strings, or None.
 |      
 |      The table must implement lookup/indexing via __getitem__, for instance a
 |      dictionary or list.  If this operation raises LookupError, the character is
 |      left untouched.  Characters mapped to None are deleted.
 |  
 |  upper(self, /)
 |      Return a copy of the string converted to uppercase.
 |  
 |  zfill(self, width, /)
 |      Pad a numeric string with zeros on the left, to fill a field of the given width.
 |      
 |      The string is never truncated.
 |  
 |  ----------------------------------------------------------------------
 |  Static methods defined here:
 |  
 |  __new__(*args, **kwargs) from builtins.type
 |      Create and return a new object.  See help(type) for accurate signature.
 |  
 |  maketrans(...)
 |      Return a translation table usable for str.translate().
 |      
 |      If there is only one argument, it must be a dictionary mapping Unicode
 |      ordinals (integers) or characters to Unicode ordinals, strings or None.
 |      Character keys will be then converted to ordinals.
 |      If there are two arguments, they must be strings of equal length, and
 |      in the resulting dictionary, each character in x will be mapped to the
 |      character at the same position in y. If there is a third argument, it
 |      must be a string, whose characters will be mapped to None in the result.

>>> a=5
>>> b=10
>>> a+b
15
>>> b-a
5
>>> a//b
0
>>> b//a
2
>>> b%a
0
>>> a%b
5
>>> a**b
9765625
>>> a*b
50
>>> import math
>>> math.pi
3.141592653589793
>>> math.floor(5.7)
5
>>> math.ceil(5.7)
6
>>> math.random()
Traceback (most recent call last):
  File "<pyshell#115>", line 1, in <module>
    math.random()
AttributeError: module 'math' has no attribute 'random'
