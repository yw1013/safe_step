
const routes = [
  {
  	method: 'get',
  	path: '/api/scenario',
  	handler: require('./serverHandlers/getAllScenarios.handler.js')
  },
  {
    method: 'get',
    path: '/api/scenario/:id',
    handler: require('./serverHandlers/getOneScenario.handler.js')
  },
  {
    method: 'post',
    path: '/api/scenario',
    handler: require('./serverHandlers/submitScenario.handler.js')
  },
  {
    method: 'post',
    path: '/api/safetyplan',
    handler: require('./serverHandlers/safetyPlan.handler.js')
  },
  {
    method: 'get',
    path: '/*',
    handler: require('./serverHandlers/render.handler.js')
  }
]

export default routes;
