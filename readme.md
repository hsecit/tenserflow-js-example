# Tensorflow.js

## tensor
structure to store data(scalar,vector,metrix)


```js
// value? shape?
tf.tensor()
// you can specify
tf.scalar()
tf.tensor1d()
tf.tensor2d()
```

## vars 

tensor umutable
```js
const tens = tf.tensor(val,shape)
let vtense = tf.variable(tens)
```