import RiskItem from './RiskItem';

const texts = {
  low: 'Great! your privacy risk level is Low. It will be very hard for a random person to scam, fraud or steal your identity',
  medium: `Your privacy risk level is Medium.
     It is usually not dangerous but you should consider harden you facebook privacy settings.
     It will be hard for a random person to scam, fraud or steal your identity`,
  high: `Your privacy risk level is High.
     You should consider harden you facebook privacy settings.
     It will be easy for a random person to scam, fraud or steal your identity`,
};

export default class AnalyzeResult {
  constructor(riskItems) {
    this.riskItems = riskItems;
    const scope = RiskItem.scope(this.riskItems);
    this.lines = scope.sortByLevel().reverse().finish();
    this.highest = this.getHighest();
    this.message = this.getMessage();
  }

  getHighest() {
    return this.lines[0].level;
  }

  getMessage() {
    console.log('texts: ', texts);

    console.log('this.highest: ', this.highest);
    console.log('texts[this.highest]: ', texts[this.highest]);
    return texts[this.highest];
  }
}
