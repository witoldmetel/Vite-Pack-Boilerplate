import { Link } from './Link';
import renderer from 'react-test-renderer';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();

  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);

  return result as renderer.ReactTestRendererJSON;
}

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Link page="http://antfu.me">Anthony Fu</Link>);

  let tree = toJson(component);

  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();

  // re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
