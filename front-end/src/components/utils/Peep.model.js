export default class PeepModel {
  constructor(userHandle, peepTitle, peepContent, _id = null) {
    this.userHandle = userHandle;
    this.peepTitle = peepTitle;
    this.peepContent = peepContent;
    this._id = _id;
  }
}
