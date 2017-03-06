module.exports = translateConfig;

/** @ngInject */
function translateConfig($translateProvider) {
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.translations('en', {
    name: 'Name',
    location: 'Location',
    address: 'Address',
    address2: 'Address 2',
    zip: 'Zip',
    country: 'Country',
    state: 'State',
    city: 'City',
    county: 'County',
    neighborhood: 'Neighborhood',
    percentageSold: 'Percentage Sold',
    description: 'Description',
    latitude: 'Latitude',
    longitude: 'Longitude',
    projectHighlights: 'Project Highlights',
    projectPremiums: 'Location Premiums',
    projectStyle: 'Project Style',
    projectFinishes: 'Project Finishes',
    projectBrand: 'Project Brand',
    currentProjectStage: 'Current Project Stage',
    currentScore: 'Current Score',
    currentRisk: 'Current Risk',
    monthlyMaintenanceCost: 'Monthly Maintenance Cost',
    marketRentalRate: 'Market Rental Rate',
    numberUnits: 'Number Units',
    numberStories: 'Number Stories',
    numberTower: 'Number Tower',
    towerNames: 'Tower Names',
    numberParking: 'Number Parking',
    architectName: 'Architect Name',
    interiorDesignerName: 'Interior Designer Name',
    dateCompletionPlaned: 'Date Completion Planed',
    dateLeadLenderLoan: 'Date Lead Lender Loan',
    dateStarted: 'Date Started',
    preDateCompletionPlaned: 'Date Completion Planed',
    preDateLeadLenderLoan: 'Date Lead Lender Loan',
    preDateStarted: 'Date Started',
    leadLenderName: 'Lead Lender Name',
    broker: 'Broker'
  });

  $translateProvider.preferredLanguage('en');
}
