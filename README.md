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
