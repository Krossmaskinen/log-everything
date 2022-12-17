import { connect } from '$lib/services/firebase';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';

export async function load() {
	const { db } = connect();

	const querySnapshot = await getDocs(collection(db, 'categories'));
	const categories = [];

	querySnapshot.forEach((doc) => {
		categories.push({
			...doc.data(),
			id: doc.id
		});
	});

	console.log({ categories });
	return {
		categories
	};
}

export const actions = {
	create: async ({ request }) => {
		console.log('test');
		const data = await request.formData();

		console.log({ data });

		const { db } = connect();
		const payload = { name: data.get('name') };

		try {
			const docRef = await addDoc(collection(db, 'categories'), payload);

			console.log('category added', { payload });
		} catch (error) {
			throw new Error('Failed to add category', error.message);
		}
	}
};
