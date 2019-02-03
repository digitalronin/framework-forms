import css from './stylesheet.css';
import { Transformer } from './classes';

const transformer = new Transformer();

const exampleHtml = `
<label>Email</label>
<input id="email" type="email" placeholder="foo@bar.com" />

<label>Password</label>
<input id="password" type="password" placeholder="Password" />
`;

const transform = () => {
  const input = $('#plainFormTextarea').val();
  const transformed = transformer.transform(input);
  $('#transformedFormTextarea').val(transformed);
};

$().ready(() => {
  $('#plainFormTextarea').on('keyup', transform);

  // display initial example
  $('#plainFormTextarea').val(exampleHtml);
  transform();
});
