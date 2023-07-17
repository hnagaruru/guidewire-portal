package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionRejectLetterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionRejectLetterDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionRejectLetterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubmissionRejectLetterDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SubmissionRejectLetterDV.pcf: line 31, column 50
    function initialValue_6 () : typekey.PolicyPeriodStatus {
      return submission.LatestPeriod.Status
    }
    
    // RowIterator at SubmissionRejectLetterDV.pcf: line 27, column 45
    function initializeVariables_24 () : void {
        subStatus = submission.LatestPeriod.Status;

    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionRejectLetterDV.pcf: line 43, column 58
    function valueRoot_11 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionRejectLetterDV.pcf: line 47, column 62
    function valueRoot_14 () : java.lang.Object {
      return submission.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionRejectLetterDV.pcf: line 37, column 47
    function valueRoot_8 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionRejectLetterDV.pcf: line 43, column 58
    function value_10 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionRejectLetterDV.pcf: line 47, column 62
    function value_13 () : java.util.Date {
      return submission.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionRejectLetterDV.pcf: line 51, column 51
    function value_16 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=reason_Cell) at SubmissionRejectLetterDV.pcf: line 56, column 49
    function value_19 () : typekey.ReasonCode {
      return submission.RejectReason
    }
    
    // 'value' attribute on TextCell (id=text_Cell) at SubmissionRejectLetterDV.pcf: line 60, column 148
    function value_22 () : java.lang.String {
      return submission.RejectReasonText.length > 45 ? submission.RejectReasonText.substring( 0, 45 ) : submission.RejectReasonText
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionRejectLetterDV.pcf: line 37, column 47
    function value_7 () : java.lang.String {
      return submission.JobNumber
    }
    
    property get subStatus () : typekey.PolicyPeriodStatus {
      return getVariableValue("subStatus", 1) as typekey.PolicyPeriodStatus
    }
    
    property set subStatus ($arg :  typekey.PolicyPeriodStatus) {
      setVariableValue("subStatus", 1, $arg)
    }
    
    property get submission () : entity.Submission {
      return getIteratedValue(1) as entity.Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionRejectLetterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionRejectLetterDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionRejectLetterDV.pcf: line 37, column 47
    function sortValue_0 (submission :  entity.Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionRejectLetterDV.pcf: line 43, column 58
    function sortValue_1 (submission :  entity.Submission) : java.lang.Object {
      return submission.Policy.Product
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionRejectLetterDV.pcf: line 47, column 62
    function sortValue_2 (submission :  entity.Submission) : java.lang.Object {
      return submission.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionRejectLetterDV.pcf: line 51, column 51
    function sortValue_3 (submission :  entity.Submission) : java.lang.Object {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=reason_Cell) at SubmissionRejectLetterDV.pcf: line 56, column 49
    function sortValue_4 (submission :  entity.Submission) : java.lang.Object {
      return submission.RejectReason
    }
    
    // 'value' attribute on TextCell (id=text_Cell) at SubmissionRejectLetterDV.pcf: line 60, column 148
    function sortValue_5 (submission :  entity.Submission) : java.lang.Object {
      return submission.RejectReasonText.length > 45 ? submission.RejectReasonText.substring( 0, 45 ) : submission.RejectReasonText
    }
    
    // 'value' attribute on RowIterator at SubmissionRejectLetterDV.pcf: line 27, column 45
    function value_25 () : entity.Submission[] {
      return gw.job.SubmissionLetterHelper.getAccountSubmissionsByLetterType(account, letter.Type)
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get letter () : Letter {
      return getRequireValue("letter", 0) as Letter
    }
    
    property set letter ($arg :  Letter) {
      setRequireValue("letter", 0, $arg)
    }
    
    
  }
  
  
}