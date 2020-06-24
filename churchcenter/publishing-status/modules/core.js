export function produceViewState({
  churchCenterAppIsActive = false,
  userIsOrgAdmin = false,
  productName,
  productIsPublished = false,
  churchCenterWebIsActive = false,
  settingsURL: _settingsURL = "",
  churchCenterProductURL: _churchCenterProductURL = "",
  ...restIncomingState
}) {
  let state = {
    churchCenterAppIsActive,
    userIsOrgAdmin,
    productName,
    productIsPublished,
    churchCenterWebIsActive,
    _churchCenterProductURL,
    _settingsURL,
    get settingsURL() {
      if (this.userIsOrgAdmin) return this._settingsURL;
      return "";
    },
    get churchCenterProductURL() {
      if (this.churchCenterWebIsActive) return this._churchCenterProductURL;
      return "";
    },
    ...restIncomingState,
  };

  if (state.churchCenterIsEnabled && state.productIsPublished) {
    return {
      view: "Status",
      ...state,
    };
  }

  if (!state.churchCenterIsEnabled && !state.productIsPublished) {
    return {
      view: "ProductNotPublished",
      ...state,
    };
  }

  if (state.churchCenterIsEnabled && !state.productIsPublished) {
    return {
      view: "ProductNotPublished",
      ...state,
    };
  }

  if (!state.churchCenterIsEnabled && state.productIsPublished) {
    return {
      view: "ChurchCenterNotEnabled",
      ...state,
    };
  }

  return {
    view: "Error",
    ...state,
  };
}
