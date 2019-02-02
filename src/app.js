import css from './stylesheet.css';
import { Transformer } from './classes';

(new Transformer({
  $inputControl: $('#plainFormTextarea'),
  $outputControl: $('#transformedFormTextarea'),
})).initialise();
