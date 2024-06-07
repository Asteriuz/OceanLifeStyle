# CEP - Correios

## Base URL

https://viacep.com.br/ws/

## Endpoints

### 1. Consultar CEP

- **_Endpoint_**: /ws/{cep}/json/
- **_Método_**: GET
- **_Descrição_**: Consulta informações de endereço com base no CEP fornecido.
- **_Exemplo de Request_**:
  ```http
  GET /ws/01001-000/json/
  ```
- **_Exemplo de Reposta_**:

  ```json
  {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
  }
  ```

# Firebase Realtime Database

## Base URL

https://ocean-style-d1724-default-rtdb.firebaseio.com/

### 1. Escrever Dados do Veículo

- **_Endpoint_**: vehicles/{vehicleId}
- **_Método_**: POST
- **_Descrição_**: Escreve os dados de um veículo na base de dados.
- **_Example Function_**:

  ```javascript
  function writeVehicleData(
    vehicleId,
    name,
    modelo,
    noise,
    status,
    image,
    place,
    data
  ) {
    const dbRef = ref(db, "vehicles/" + vehicleId);

    set(dbRef, {
      name: name,
      modelo: modelo,
      noise: noise,
      status: status,
      image: image,
      place: place,
      data: data,
    });
  }
  ```

- **_Exemplo de Request_**:

  ```http
  PUT /vehicles/17345
  Content-Type: application/json

  {
    "name": "Corsário",
    "modelo": "Cruzeiro de passeio",
    "noise": 60,
    "status": "Aprovado",
    "image": "https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
    "place": "Praia da Mococa",
    "data": "26/05/24"
  }
  ```

- **_Exemplo de Reposta_**:

  ```json
  {
    "name": "Corsário",
    "modelo": "Cruzeiro de passeio",
    "noise": 60,
    "status": "Aprovado",
    "image": "https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
    "place": "Praia da Mococa",
    "data": "26/05/24"
  }
  ```

### 2. Ler Dados dos Veículos

- **_Endpoint_**: vehicles/
- **_Método_**: GET
- **_Descrição_**: Obtém todos os veículos armazenados na base de dados.
- **_Example Function_**:

  ```javascript
  useEffect(() => {
    const vehicleRef = ref(db, "vehicles/");
    onValue(vehicleRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const vehicles = Object.keys(data).map((key) => {
          return {
            tie: key,
            ...data[key],
          };
        });
        setVehicles(vehicles);
      }
    });
  }, []);
  ```

- **_Exemplo de Request_**:

  ```http
  GET /vehicles/
  ```

- **_Exemplo de Reposta_**:
  ```json
  {
  "17345": {
    "name": "Corsário",
    "modelo": "Cruzeiro de passeio",
    "noise": 60,
    "status": "Aprovado",
    "image": "https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
    "place": "Praia da Mococa",
    "data": "26/05/24"
  },
    "98432": {
    "name": "Azimut 60",
    "modelo": "Iate de luxo",
    "noise": 70,
    "status": "Pendente",
    "image": "https://blackboats.com.br/wp-content/uploads/2022/04/   bf304ade-2eeb-4fdc-a7bd-94ce2713b60f.jpg",
    "place": "Praia da Tabatinga",
    "data": "12/01/22"
  },
  ...
  }
  ```

## Exemplos de Uso

### Exemplo de Escrever Dados do Veículo

```javascript
writeVehicleData(
  "17345",
  "Corsário",
  "Cruzeiro de passeio",
  60,
  "Aprovado",
  "https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
  "Praia da Mococa",
  "26/05/24"
);
```

### Exemplo de Ler Dados dos Veículos

```javascript
useEffect(() => {
  const vehicleRef = ref(db, "vehicles/");
  onValue(vehicleRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const vehicles = Object.keys(data).map((key) => {
        return {
          tie: key,
          ...data[key],
        };
      });
      setVehicles(vehicles);
    }
  });
}, []);
```
