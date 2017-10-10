export default function (state, data) {
	const result =  state.some( item => data.city.id === item.city.id );
  return result;
}