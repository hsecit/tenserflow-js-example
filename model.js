console.log('model building...')

const model = tf.sequential();

// First layer must have an input shape defined.
const hidden = tf.layers.dense({
	units: 32, 
	inputShape: [2],
	
})
model.add(hidden);
// Afterwards, TF.js does automatic shape inference.
model.add(tf.layers.dense({
	units: 1,
	
}));

// optimizer using gradient 
const sgdOpt = tf.train.sgd(0.1)

model.compile({
	optimizer : sgdOpt,
	loss : tf.losses.meanSquaredError
})

// data

xs = tf.tensor2d([
	[1,1],
	[0,0],
	[2,3]
	])
ys = tf.tensor2d([
	[0],
	[1],
	[0.5]
	])

train().then( res => {
	let out = model.predict(xs)
	out.print()
	document.getElementById('loss').innerHtml = res
	console.log('done.')
})

async function train() {
	const lossList = []
	const conf = {
		shuffle : true,
		epoch : 10
	}
	for (let i = 0;i<1500;i++){
		const resp = await model.fit(xs,ys,conf);
		lossList[i] = await resp.history.loss[0]
		console.log(resp.history.loss[0])
	}
	return lossList;
}