import renderer from 'react-test-renderer';
import OneTodo from '../src/Todos/OneTodo';

it('changes the class when hovered', () => {
  const component = renderer.create(<OneTodo />);

  // Simulate hover
  component.root.findByType('div').props.onMouseEnter();

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot("One todo component on hover");
});
