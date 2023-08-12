const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add custom routes for updating progress
server.put('/api/goals/:id', (req, res) => {
  const goalId = parseInt(req.params.id);
  const { currentValue } = req.body;

  const goalIndex = db.get('goals').findIndex({ id: goalId }).value();
  if (goalIndex !== -1) {
    db.get('goals')
      .find({ id: goalId })
      .assign({ currentValue })
      .write();

    res.json(db.get('goals').find({ id: goalId }).value());
  } else {
    res.status(404).json({ error: 'Goal not found' });
  }
});

server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
