import * as Yup from 'yup';
import Developer from '../models/Developer';

class DeveloperController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      age: Yup.number().required(),
      url_linkedin: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos campos!' });
    }

    const { id, name, email, age, url_linkedin } = await Developer.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      url_linkedin,
    });
  }
}

export default new DeveloperController();
