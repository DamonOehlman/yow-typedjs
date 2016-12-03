// @flow
type SettingKey = 'MODAL_COLOR' | 'MODAL_STYLE' | 'TOOLBAR_POSITION';
type ToolbarPosition = 'TOP' | 'BOTTOM';
type SettingsMap = Map<SettingKey, string>;

const settingMap: SettingsMap = new Map();

settingMap.set('MODAL_COLOR', 'red');
settingMap.set('MODAL_STYLE', 'popover');
settingMap.set('TOOLBAR_POSITION', 'top');

// $FlowFixMe
settingMap.set('TOOLBAR_COLOR', '#eeeeee');