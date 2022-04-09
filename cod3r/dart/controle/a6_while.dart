import 'dart:io';
import 'dart:io';

main() {
  var digitado = '';

  do{
    stdout.write('digite algo ou sair: ');
    digitado = stdin.readLineSync().toString();
  }while (digitado != 'sair');
  
  print('fim');
}
