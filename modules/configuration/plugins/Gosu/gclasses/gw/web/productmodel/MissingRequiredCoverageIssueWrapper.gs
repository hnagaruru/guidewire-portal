package gw.web.productmodel

uses gw.api.locale.DisplayKey

/**
 * Wrapper class for missing required coverage issues.  Missing required coverage issues are always fixed
 * and always displayed to the user.
 */
@Export
class MissingRequiredCoverageIssueWrapper extends ProductModelSyncIssueWrapper<gw.api.web.productmodel.MissingRequiredCoverageIssue> {

  construct(myIssue : gw.api.web.productmodel.MissingRequiredCoverageIssue) {
    super(myIssue)
  }
  
  override property get BaseMessage() : String {
    if (Issue.Fixed) {
      return DisplayKey.get("Web.JobWizard.ProductModelSync.MissingRequiredClauseAdded", Issue.Pattern.DisplayName)
    } else {
      return DisplayKey.get("Web.JobWizard.ProductModelSync.MissingRequiredClauseNotAdded", Issue.Pattern.DisplayName)
    }
  }

  override property get Severity() : ProductModelSyncIssueSeverity {
    if (Issue.Fixed) {
      return WARNING  
    } else {
      return ERROR
    }
  }
  
  override property get ShouldFixDuringNormalSync() : boolean { return true }
  
  override property get ShouldDisplayDuringNormalSync() : boolean { return true }
  
  override property get ShouldFixDuringQuote() : boolean { return false }
  
  override property get ShouldDisplayDuringQuote() : boolean { return true }

}
