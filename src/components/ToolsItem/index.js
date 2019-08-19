import React from 'react';
import { useDispatch } from 'react-redux';
import { removeToolRequest } from '../../store/modules/tools/actions';
// import { Container } from './styles';

export default function ToolsItem({ tool }) {
	const dispatch = useDispatch();

	function handleRemove() {
		dispatch(removeToolRequest(tool.id));
	}
	return (
		<li>
			<button data-testid="remove-tool" onClick={handleRemove}>
				remover
			</button>
			<strong>{tool.title}</strong>
			<small>{tool.description}</small>
		</li>
	);
}
