import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class IntelProductCatalogue implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Intel Product Catalogue',
		name: 'N8nDevIntelProductCatalogue',
		icon: { light: 'file:./intel-product-catalogue.png', dark: 'file:./intel-product-catalogue.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'PIM Microservices documentation. Requires Basic Auth credentials and client ID.',
		defaults: { name: 'Intel Product Catalogue' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevIntelProductCatalogueApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
