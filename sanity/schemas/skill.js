export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Title of the skill',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'prominentSkill',
      title: 'Prominent skill?',
      type: 'boolean',
    },
    {
      name: 'experience',
      title: 'Experience',
      description: 'Skill experience',
      type: 'reference',
      to: [{ type: 'skillExperience' }],
    },
  ],
};
