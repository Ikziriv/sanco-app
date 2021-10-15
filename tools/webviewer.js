import { copy } from 'fs-extra';
import { resolve } from 'path';

const copyFiles = async () => {
    const sourcePath = resolve('./node_modules/@pdftron/webviewer/public');
    const destPath = resolve('./static/lib/');

    try {
        await copy(sourcePath, destPath);
        console.log('WebViewer files copied over successfully');
    } catch (err) {
        console.error(err);
    }
};

copyFiles();