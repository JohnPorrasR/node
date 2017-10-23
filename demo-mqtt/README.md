# demo-mqtt

## 'agent/connected'

``` js
{
    agent: {
        uuid, // auto generado
        username, // definir por configuración
        name, // definiir por configuracion
        hostname, // obtener del sistema operativo
        pid // obtener del proceso
    }
}
```

## 'agent/disconnected'

``` js
{
    agent: {
        uuid
    }
}
```

## 'agent/message'

``` js
{
    agent: {
        agent,
        metric: [
            {
                type,
                value
            }
        ],
        timestamp // generar cuando creamos el mensaje
    }
}
```
