import * as Yup from 'yup';
import { Op } from 'sequelize';
import Developer from '../models/Developer';
import DeveloperTechnology from '../models/DeveloperTechnology';
import Technologies from '../models/Technology';

class DeveloperController {
  async index(req, res) {
    const { id } = req.query;

    if (id) {
      const developer = await Developer.findByPk(id, {
        attributes: ['id', 'name', 'email', 'age', 'url_linkedin'],
        include: [
          {
            model: Technologies,
            as: 'technologies',
            attributes: [['id', 'value'], ['name', 'label']],
            through: { attributes: [] },
          },
        ],
      });

      if (!developer) {
        return res.status(200).json({
          Message: 'There are no developers with this id',
        });
      }

      return res.json({ developer });
    }

    const developers = await Developer.findAll({
      attributes: ['id', 'name', 'email', 'age', 'url_linkedin'],
      include: [
        {
          model: Technologies,
          as: 'technologies',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
    });

    if (!developers.length) {
      return res
        .status(200)
        .json({ Message: 'There are no registered developers' });
    }

    return res.json(developers);
  }

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

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      age: Yup.number(),
      url_linkedin: Yup.string(),
      technologies: Yup.array(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos campos!' });
    }

    const { id } = req.params;
    const developer = await Developer.findByPk(id);

    if (!developer) {
      return res.status(400).json({ error: 'Developer does not exists.' });
    }

    const { technologies, ...dev } = req.body;

    await developer.update(dev);

    if (technologies) {
      await developer.setTechnologies(technologies);
    }

    return res.json({
      dev,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const developer = await Developer.findByPk(id);

    if (!developer) {
      return res.status(400).json({ Message: 'Developer does not exists.' });
    }

    await developer.destroy();

    return res.status(200).json({ Message: 'Deleted' });
  }
}

export default new DeveloperController();
