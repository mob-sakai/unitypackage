import createUnityPackage from './index';

const files = [
    'Assets/Voiceer.meta',
    'Assets/Voiceer/VoiceResources.meta',
    'Assets/Voiceer/VoiceResources/MusubimeYuiVoices.meta',
    'Assets/Voiceer/VoiceResources/MusubimeYuiVoices/MusubimeYui.asset.meta',
];

const Run = () => {
    const path = "D:\\Saved Games\\Voiceer\\";
    const output = 'Voiceer+sample.unitypackage';
    createUnityPackage(files, path, output, console.log);
};

Run();