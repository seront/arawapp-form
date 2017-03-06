module.exports = {
  template: require('./App.html'),
  controller: App
};

function App($log, $timeout) {
  var $ctrl = this;
  $log.log('iniciando App');
  var blankObject = {
    name: '',
    location: '',
    address: '',
    description: '',
    projectStyle: '',
    projectFinishes: '',
    projectBrand: '',
    signatureBranding: '',
    mesurementUnit: '',
    preCountry: '',
    preState: '',
    preCity: '',
    neighborhood: '',
    stageOfDevelopment: '',
    online: '',
    views: '',
    totalTowers: '',
    preBrokerProposed: '',
    dateStarted: '',
    expectedDateCompletition: '',
    completionDelayedWeeks: '',
    projectPremiums: ''
  };

  var stageOfDevelopmentValues = [
    {id: 1, name: 'Proposed'},
    {id: 2, name: 'Pre Sales'},
    {id: 3, name: 'Ground breaking'},
    {id: 4, name: 'Top off'},
    {id: 5, name: 'Closing'}
  ];

  var projectPremiumsValues = [
    {name: 'waterfront', val: 'waterfront'},
    {name: 'beachfront', val: 'beachfront'},
    {name: 'retail-anchored', val: 'retail-anchored'},
    {name: 'city-views', val: 'city views'},
    {name: 'downtown', val: 'downtown'},
    {name: 'resorts', val: 'resorts'},
    {name: 'mountain', val: 'mountain'},
    {name: 'vacational', val: 'vacational'},
    {name: 'metropolitan', val: 'metropolitan'},
    {name: 'suburban', val: 'suburban'}
  ];

  var projectFinishedValues = [
    {name: 'Co decorator ready', val: 'co-decorator-ready'},
    {name: 'Finished', val: 'finished'},
    {name: 'Finished and furnished', val: 'furnished'}
  ];

  var projectStyles = [{name: 'Modern', val: 'modern'},
    {name: 'Signature Design', val: 'signature design'},
    {name: 'High Tech', val: 'high tech'},
    {name: 'Classic', val: 'classic'},
    {name: 'Mediterranean', val: 'mediterranean'},
    {name: 'Elegant', val: 'elegant'}];

  var objectConfig = {
    id: {order: 1, type: 'text', header: true},
    image: {order: 2, type: 'file', disabled: false, flex: '', header: true, style: 'md-avatar avatar-2x'},
    name: {order: 3, type: 'text', header: true, defaultValue: ''},
    address: {order: 5, type: 'text', header: true, defaultValue: ''},
    address2: {order: 6, type: 'text', defaultValue: ''},
    preCountry: {order: 7, type: 'select', defaultValue: '', values: [], model: 'countryCode', show: 'countryName', style: ['black-text'], options: {}},
    country: {order: 8, type: 'text', defaultValue: '', header: true, style: ['capitalize']},
    preState: {order: 9, type: 'select', values: [], model: 'adminCode1', show: 'adminName1', style: ['black-text'], options: {}},
    state: {order: 10, type: 'text', header: true, style: ['capitalize'], defaultValue: ''},
    preCity: {order: 11, type: 'select', values: [], model: 'name', show: 'name', style: ['black-text'], options: {}},
    city: {order: 12, header: true, type: 'text', style: ['capitalize'], defaultValue: ''},
    neighborhood: {order: 14, type: 'text', header: true},
    location: {order: 15, type: 'map'},
    totalTowers: {order: 16, type: 'number', min: 0, defaultValue: ''},
    preBrokerProposed: {order: 17, type: 'select', values: [], model: 'id', show: 'companyName', defaultValue: ''},
    stageOfDevelopment: {order: 18, type: 'select', values: stageOfDevelopmentValues, model: 'id', show: 'name', defaultValue: ''},
    projectStyle: {order: 19, type: 'select', values: projectStyles, model: 'val', show: 'name', defaultValue: ''},
    projectFinishes: {order: 20, type: 'select', values: projectFinishedValues, model: 'val', show: 'name', defaultValue: ''},
    projectPremiums: {order: 21, type: 'select-multiple', values: projectPremiumsValues, model: 'val', show: 'name', translate: true, defaultValue: ''},
//    views: {order: 22, type: 'select-multiple', values: ProjectView.values, model: 'id', show: 'name', defaultValue: ''},
    views: {order: 22, type: 'select-multiple', values: [], model: 'id', show: 'name', defaultValue: ''},
    projectBrand: {order: 23, type: 'text', defaultValue: ''},
    signatureBranding: {order: 24, type: 'switch', defaultValue: false},
    dateStarted: {order: 25, dateOnly: true, defaultValue: new Date()},
    expectedDateCompletition: {order: 26, dateOnly: true, defaultValue: new Date()},
    completionDelayedWeeks: {order: 27, options: {disabled: 'disabled'}, defaultValue: ''},
    mesurementUnit: {order: 28, type: 'radio', model: 'model', show: 'name',
      values: [{name: 'Imperial', model: true}, {name: 'Metric', model: false}], defaultValue: ''},
    description: {order: 29, type: 'text', defaultValue: ''},
    online: {order: 30, type: 'checkbox', defaultValue: ''},
    pctSold: {order: 31, options: {disabled: 'disabled'}, defaultValue: ''},
    totalFloors: {order: 32, options: {disabled: 'disabled'}, defaultValue: ''},
    avgPriceSqft: {order: 33, options: {disabled: 'disabled'}, defaultValue: ''},
    parkingSpaces: {order: 34, options: {disabled: 'disabled'}, defaultValue: ''},
    totalUnits: {order: 35, options: {disabled: 'disabled'}, defaultValue: ''},
    projectFail: {order: 36, type: 'switch', defaultValue: ''}
  };

  var formExclude = {
    developer: true,
    restangularized: true,
    reqParams: true,
    fromServer: true,
    parentResource: true,
    restangularCollection: true,
    singleOne: true,
    feature: true,
    route: true,
    broker: true,
    investors: true,
    projectScore: true,
    currentScore: true,
    latitude: true,
    longitude: true,
    country: true,
    state: true,
    city: true,
    //  neighborhood: true,
    dateCreated: true,
    image: true,
    imageFile: true,
    updatedAt: true,
    brokerProposed: true,
    visits: true,
    developerName: true
  };
  var formInclude = {};

  $timeout(function () {
    $ctrl.formConfig = {
      columns: 2,
      object: blankObject,
      objectConfig: objectConfig,
      exclude: formExclude,
      include: formInclude
    };
  }, 3000);

  $log.log('luego delformconfg');
}

