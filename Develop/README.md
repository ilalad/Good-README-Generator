function generateMarkdown(answers) {
  return `
  # ${answers.Title}

  ## Description
  # ${answers.Description}

  ##Table of Contents
      *Installation
      *Usage
      *License
      *Contributing
      *Tests
      *Questions
  
  ## Installation
  # ${answers.Installation}

  ## Usage
  # ${answers.Usage}

  ## License
  # ${answers.License}

  ## Contributing
  # ${answers.Contribution}

  ## Questions
  # ${answers.Questions}
`;
}