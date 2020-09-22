module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './generators/templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path:
          './src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: './generators/templates/Component.styles.ts.hbs'
      },
      {
        type: 'add',
        path:
          './src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './generators/templates/Component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          './src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './generators/templates/Component.test.tsx.hbs'
      }
    ]
  });
};
