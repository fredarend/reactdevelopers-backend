import * as Yup from 'yup';
import Technology from '../models/Technology';

class TechController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos campos!' });
    }

    const { id, name } = await Technology.create(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new TechController();
