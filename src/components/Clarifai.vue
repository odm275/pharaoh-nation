<template>
	<div>
		Clarifai

		<div>
			<img 
				v-for="baseUrl in baseUrls"
				:src="baseUrl" 
				class="apparel-img" 
			/>
		</div>

		<div>
			
		</div>

	</div>
</template>


<script>
import Clarifai from 'clarifai';
import haveOneMatchingEl from '@/haveOneMatchingElement.js';

const API_KEY = '';

export default {
	name: "Clarifai",

	data() {
		return {
			app: null,
			baseConcepts: [],
			matchingApparel: [],
			predConfig: {
				// confidence of concepts must be higher than this value
				minValue: 0.5
			},


			baseUrls: [
				"http://www.whyguides.com/wp-content/uploads/2009/06/man-in-suit.jpg",
				"https://i.pinimg.com/736x/3d/1a/29/3d1a29192708526e5f1e310370c66046.jpg"
			],
			catalogUrls: [
				"http://media2.newlookassets.com/i/newlook/551409974.jpg",
				"http://1.bp.blogspot.com/-ocXJ3Yv0sgw/T-MnJLJU0DI/AAAAAAAAAVQ/DG32qzkGnbM/s1600/wear-formal-christmas-party-men.jpg",
				"http://www.jimmyjazz.com/images/products/JA2324/jj/JA2324_black_essentials_mens_tank_top1.jpg",
				"https://slimages.macysassets.com/is/image/MCY/products/2/optimized/1677222_fpx.tif?op_sharpen=1&wid=400&hei=489&fit=fit,1&$filterlrg$"
			]
		}
	},

	methods: {

		getConceptsFor: async function(images) {

			let allConcepts = [];

			let res = 
			await this.app.models.predict(Clarifai.APPAREL_MODEL, images, this.predConfig)
			.catch(err => {throw err});

			return res.outputs.map(output => {

				return output.data.concepts.map(concept => concept.name);
			});

			// res.outputs.forEach(output => {

			// 	output.data.concepts.forEach(concept => allConcepts.push(concept));
			// });
			
			// return allConcepts;

			

				// .then(res => {

				// 	// go through each image's results
				// 	res.outputs.forEach(output => {

				// 		// go through each concept in the results
				// 		output.data.concepts.forEach(concept => {

				// 			// store every concept
				// 			allConcepts.push(concept);
				// 		});
				// 	});
				// })
				// .catch(err => {return Promise.reject(err)});
		},

		findMatchingApparel() {
			
			
		}
	},

	created() {

		this.app = new Clarifai.App({apiKey: API_KEY});
	},

	mounted() {

	}
};
	
</script>


<style>

.apparel-img {
	height: 300px;
	width: auto
}

</style>