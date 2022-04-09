main() {
  num a = 1;
  double b;
  int c;
  String vv;
  bool s = true;
  dynamic x = "texto";
  x = 123;

//aceita repetição
  List aprovados = ['heder', 'matheus', 'moura','heder'];
  print(aprovados);
  print(aprovados.length);

  Map telefone = {'heder': '123', 'matheus': '456', 'moura': '789'};
  print(telefone['heder']);
  print(telefone.values);
  print(telefone.keys);
  print(telefone.entries);

//não aceita repetição
  Set times = {'vasco', 'flamengo', 'fortaleza', 'são paulo'};
  times.add('palmeiras');
  print(times.length);
}
