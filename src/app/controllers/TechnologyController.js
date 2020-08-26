import * as Yup from 'yup';
import Technology from '../models/Technology';

class TechController {
  async store(req, res) {
    const schema = Yup.object().shape({
      technology: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      console.log('campo inv.');
      return res.status(400).json({ error: 'Falha na validação dos campos!' });
    }

    const { id, technology } = await Technology.create(req.body);

    return res.json({
      id,
      technology,
    });
  }
}

export default new TechController();
