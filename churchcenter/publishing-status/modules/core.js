export function produceViewState({
  churchCenterAppIsActive = false,
  userIsOrgAdmin = false,
  productName,
  churchCenterWebIsActive = false,
  settingsURL: _settingsURL = "",
  churchCenterProductURL: _churchCenterProductURL = "",
  ...restIncomingState
}) {
  let state = {
    churchCenterAppIsActive,
    userIsOrgAdmin,
    productName,
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
    get productIsPublished() {
      return Boolean(
        this.churchCenterAppIsActive || this.churchCenterWebIsActive
      );
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
