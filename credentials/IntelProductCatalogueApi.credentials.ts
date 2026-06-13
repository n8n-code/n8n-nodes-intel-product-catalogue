import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class IntelProductCatalogueApi implements ICredentialType {
        name = 'N8nDevIntelProductCatalogueApi';

        displayName = 'Intel Product Catalogue API';

        icon: Icon = { light: 'file:../nodes/IntelProductCatalogue/intel-product-catalogue.png', dark: 'file:../nodes/IntelProductCatalogue/intel-product-catalogue.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Intel Product Catalogue API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
