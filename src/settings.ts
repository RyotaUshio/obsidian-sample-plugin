import { PluginSettingTab } from 'obsidian';
import MyPlugin from './main';


export interface MyPluginSettings {
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
};


export class SampleSettingTab extends PluginSettingTab {
	constructor(public plugin: MyPlugin) {
		super(plugin.app, plugin);
	}
	
	display(): void {
		this.containerEl.empty();

		// do stuff
	}
}
