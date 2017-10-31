
export default {
  authentcatedUser(request, response, next) {
    if (isNaN(request.body.userId)) {
      response.status(401).send({
        message: 'Invalid User Id : Id must be a number'
      });
    } else {
      next();
    }
  }
};
