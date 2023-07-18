package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionConfirmLetterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionConfirmLetterDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionConfirmLetterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubmissionConfirmLetterDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionConfirmLetterDV.pcf: line 43, column 62
    function valueRoot_11 () : java.lang.Object {
      return submission.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionConfirmLetterDV.pcf: line 33, column 47
    function valueRoot_5 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionConfirmLetterDV.pcf: line 39, column 58
    function valueRoot_8 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionConfirmLetterDV.pcf: line 43, column 62
    function value_10 () : java.util.Date {
      return submission.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionConfirmLetterDV.pcf: line 47, column 51
    function value_13 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionConfirmLetterDV.pcf: line 33, column 47
    function value_4 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionConfirmLetterDV.pcf: line 39, column 58
    function value_7 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    property get submission () : entity.Submission {
      return getIteratedValue(1) as entity.Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionConfirmLetterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionConfirmLetterDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionConfirmLetterDV.pcf: line 33, column 47
    function sortValue_0 (submission :  entity.Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionConfirmLetterDV.pcf: line 39, column 58
    function sortValue_1 (submission :  entity.Submission) : java.lang.Object {
      return submission.Policy.Product
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionConfirmLetterDV.pcf: line 43, column 62
    function sortValue_2 (submission :  entity.Submission) : java.lang.Object {
      return submission.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionConfirmLetterDV.pcf: line 47, column 51
    function sortValue_3 (submission :  entity.Submission) : java.lang.Object {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on RowIterator at SubmissionConfirmLetterDV.pcf: line 27, column 45
    function value_16 () : entity.Submission[] {
      return gw.job.SubmissionLetterHelper.getAccountSubmissionsByLetterType(account, LetterType.TC_CONFIRMATION)
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