import { ViteSetupModule } from '@/types/ViteSetupModule';
import PrimeVue from 'primevue/config';


export const install: ViteSetupModule = ({ isClient, initialState, app }) => {
	app.use(PrimeVue)
};
