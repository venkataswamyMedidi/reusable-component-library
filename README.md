# Reusable Component Library

This project is a reusable component library built using React. It includes configuration for linting, formatting, and other Developer Experience (DX) improvements.

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/reusable-component-lib.git
   cd reusable-component-lib
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Usage

To use the `ReusableButton` component:

```jsx
import ReusableButton from './components/ReusableButton'

function App() {
  return (
    <ReusableButton
      label="Click Me"
      onClick={() => alert('Button clicked!')}
      variant="primary"
    />
  )
}

export default App
```
# Reusable Modal Component Library

A simple and reusable modal component built with React, styled with CSS, and tested using Jest and React Testing Library. This library provides a flexible modal with customizable features, including content, title, and dismiss actions such as closing on clicking outside or pressing the ESC key.

## Features

- **Customizable Modal**: Easily configurable modal with title, content, and a close button.
- **Closable on ESC**: Closes the modal when the ESC key is pressed.
- **Dismissable by Clicking Outside**: Closes the modal when clicking outside the modal area.
- **Tested**: Includes tests for rendering and interaction behavior using Jest and React Testing Library.

## Developer Experience Improvements

- **ESLint & Prettier**: Enforces code consistency.
- **Husky & Lint-Staged**: Runs pre-commit hooks to check code quality.
- **Jest & React Testing Library**: Ensures components function correctly.
- **Storybook**: Provides an isolated environment to develop and test components.

## Future Improvements

- Expand component variants.
- Improve accessibility (ARIA attributes).
- Implement CI/CD for automated testing and deployment.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a pull request.

## License

This project is licensed under the MIT License.

UI Screen:

![image](https://github.com/user-attachments/assets/6ed958c5-5c7d-454e-8ee4-c6e41a5ee401)

![image](https://github.com/user-attachments/assets/b275745c-af95-45d2-b8e1-d886fb9fa470)


