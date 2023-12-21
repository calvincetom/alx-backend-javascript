export default function getNeighborhoodsList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	this.addNeighborhood = (newNeigborhood) => {
		self.sanFranciscoNeighborhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
