module.exports = function (application) {
	application.get('/teste', function (req, res) {

		res.format({
			html: () => {
				res.send('Bem vindo a sua app NodeJS!');
			},
			json: () => {
				var jsonRetorno = {
					body: 'Bem vindo a sua app NodeJS!'
				}
				res.json(jsonRetorno);
			}
		});

		
	});

	application.post('/', (req, res) => {
		var body = req.body;
		res.send(body);
	});
		
}