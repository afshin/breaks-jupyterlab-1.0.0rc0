import { JupyterFrontEndPlugin } from '@jupyterlab/application';

export default [
  {
    activate: (): void => undefined,
    id: 'breaks-jupyterlab-1.0.0rc0'
  }
] as JupyterFrontEndPlugin<any>[];
