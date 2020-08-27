import * as Yup from 'yup';
import Developer from '../models/Developer';
import DeveloperTechnology from '../models/DeveloperTechnology';

class DeveloperController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      age: Yup.number().required(),
      url_linkedin: Yup.string().required(),
      technologies: Yup.array().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos campos!' });
    }

    const { id, name, email, age, url_linkedin } = await Developer.create(
      req.body
    );

    const { technologies } = req.body;

    const techsArray = technologies.map(tech => {
      return {
        developer_id: id,
        technology_id: tech,
      };
    });

    console.log(techsArray);

    await DeveloperTechnology.bulkCreate(techsArray);

    return res.json({
      id,
      name,
      email,
      age,
      url_linkedin,
      techsArray,
    });
  }
}

export default new DeveloperController();
