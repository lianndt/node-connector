import * as UserService from "../services/user.service";

export const sendInvitation = async (req, res, next) => {
  const email = req.body?.billing?.email;
  try {
    if (!email) {
      console.error("El campo email no puede ser vacio");
      return res.status(400).json({
        status: 400,
        msg: "El campo email no puede ser vacio",
      });
    }

    const { status } = req.body;

    if (!status || (status != "completed" && status != "processing")) {
      console.error("El status no es valido");
      return res.status(400).json({
        status: 400,
        msg: "El status no es valido",
      });
    }
    const response = await UserService.sendInvitation(req.body);
    return res.json(response);
  } catch (error) {
    console.error(`Error when sending invitation for email ${email}`);
    return next(error);
  }
};

export const saveResult = async (req, res, next) => {
  console.info(`Webhook request body: ${JSON.stringify(req.body)}`);
  if (!req.body.user) {
    return res.status(400).json({
      status: 400,
      msg: "El campo user no puede ser vacio",
    });
  }
  const { email } = req.body.user;
  try {
    if (!email) {
      return res.status(400).json({
        status: 400,
        msg: "El campo email no puede ser vacio",
      });
    }
    const response = await UserService.saveResult(req.body);
    return res.json(response);
  } catch (error) {
    console.error(`Error when saving result for email ${email}`);
    return next(error);
  }
};

export const getResults = async (req, res, next) => {
  try {
    const results = await UserService.getResults();
    return res.json(results);
  } catch (error) {
    console.error("Error when getting all results");
    return next(error);
  }
};
