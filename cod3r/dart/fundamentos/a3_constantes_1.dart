import 'dart:io';

main() {
  //Área da circunferência = PI * raio * raio

  const PI = 3.1415;
  stdout.write("Diga o raio :");
  final entrada = stdin.readLineSync()!;
  final double raio = double.parse(entrada);
  final area = PI * raio * raio;

  print("O valor do raio é:" + area.toString());
}
