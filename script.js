// // for tensor you can pass a nested list or pair [array,shape]
// // simple tensors
// tf.tensor([1, 2, 3, 4]).print();
// tf.tensor([[1, 2], [3, 4]]).print();

// // shape of the tensor 
// tf.tensor([1, 2, 3, 4], [2, 2]).print();

// // scalar
// tf.scalar(3.14).print();

// tf.tensor3d([[[1], [2]], [[3], [4]]]).print();

// // Create a buffer and set values at particular indices.
// const buffer = tf.buffer([2, 2]);
// buffer.set(3, 0, 0);
// buffer.set(5, 1, 0);

// // Convert the buffer back to a tensor.
// buffer.toTensor().print();


const values = []
for (let i=0; i<30; i++){
	values[i] = Math.random(0,1000);
}

const shape = [2,5,3];

const data = tf.tensor(values,shape)


