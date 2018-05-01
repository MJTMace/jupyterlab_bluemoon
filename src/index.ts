
import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
* A plugin for the BlueMoon theme for JupyterLab
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'BlueMoon:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
    name: 'Blue Moon',
      load: function() {
      return manager.loadCSS('BlueMoon/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
