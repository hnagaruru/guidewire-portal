package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionLetterSuccessLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubmissionLetterSuccessLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SubmissionLetterSuccessLV_ConfirmLink) at SubmissionLetterSuccessLV.pcf: line 62, column 95
    function action_20 () : void {
      confirmLetter.downloadContent()
    }
    
    // 'action' attribute on Link (id=SubmissionLetterSuccessLV_DeclineLink) at SubmissionLetterSuccessLV.pcf: line 69, column 95
    function action_22 () : void {
      declineLetter.downloadContent()
    }
    
    // 'action' attribute on Link (id=SubmissionLetterSuccessLV_NotTakenLink) at SubmissionLetterSuccessLV.pcf: line 76, column 96
    function action_24 () : void {
      notTakenLetter.downloadContent()
    }
    
    // 'initialValue' attribute on Variable at SubmissionLetterSuccessLV.pcf: line 23, column 33
    function initialValue_4 () : entity.Document {
      return submission.LatestPeriod.getLatestDocumentOfType(TC_CONFIRM_LETTER)
    }
    
    // 'initialValue' attribute on Variable at SubmissionLetterSuccessLV.pcf: line 27, column 33
    function initialValue_5 () : entity.Document {
      return submission.LatestPeriod.getLatestDocumentOfType(TC_DECLINE_LETTER)
    }
    
    // 'initialValue' attribute on Variable at SubmissionLetterSuccessLV.pcf: line 31, column 33
    function initialValue_6 () : entity.Document {
      return submission.LatestPeriod.getLatestDocumentOfType(TC_NOT_TAKEN_LETTER)
    }
    
    // RowIterator (id=SubmissionLetterSucess) at SubmissionLetterSuccessLV.pcf: line 19, column 39
    function initializeVariables_27 () : void {
        confirmLetter = submission.LatestPeriod.getLatestDocumentOfType(TC_CONFIRM_LETTER);
  declineLetter = submission.LatestPeriod.getLatestDocumentOfType(TC_DECLINE_LETTER);
  notTakenLetter = submission.LatestPeriod.getLatestDocumentOfType(TC_NOT_TAKEN_LETTER);

    }
    
    // 'label' attribute on Link (id=InternalSubmissionsLV_ActionsDisabled) at SubmissionLetterSuccessLV.pcf: line 81, column 139
    function label_26 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionLetterSuccessLV.pcf: line 43, column 41
    function valueRoot_11 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionLetterSuccessLV.pcf: line 47, column 56
    function valueRoot_14 () : java.lang.Object {
      return submission.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionLetterSuccessLV.pcf: line 51, column 63
    function valueRoot_17 () : java.lang.Object {
      return submission.LatestPeriod.Status
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionLetterSuccessLV.pcf: line 38, column 52
    function valueRoot_8 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionLetterSuccessLV.pcf: line 43, column 41
    function value_10 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionLetterSuccessLV.pcf: line 47, column 56
    function value_13 () : java.util.Date {
      return submission.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionLetterSuccessLV.pcf: line 51, column 63
    function value_16 () : java.lang.String {
      return submission.LatestPeriod.Status.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionLetterSuccessLV.pcf: line 38, column 52
    function value_7 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    // 'visible' attribute on Link (id=SubmissionLetterSuccessLV_ConfirmLink) at SubmissionLetterSuccessLV.pcf: line 62, column 95
    function visible_19 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(confirmLetter)
    }
    
    // 'visible' attribute on Link (id=SubmissionLetterSuccessLV_DeclineLink) at SubmissionLetterSuccessLV.pcf: line 69, column 95
    function visible_21 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(declineLetter)
    }
    
    // 'visible' attribute on Link (id=SubmissionLetterSuccessLV_NotTakenLink) at SubmissionLetterSuccessLV.pcf: line 76, column 96
    function visible_23 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(notTakenLetter)
    }
    
    // 'visible' attribute on Link (id=InternalSubmissionsLV_ActionsDisabled) at SubmissionLetterSuccessLV.pcf: line 81, column 139
    function visible_25 () : java.lang.Boolean {
      return notTakenLetter.PendingDocUID != null or confirmLetter.PendingDocUID != null or declineLetter.PendingDocUID != null
    }
    
    property get confirmLetter () : entity.Document {
      return getVariableValue("confirmLetter", 1) as entity.Document
    }
    
    property set confirmLetter ($arg :  entity.Document) {
      setVariableValue("confirmLetter", 1, $arg)
    }
    
    property get declineLetter () : entity.Document {
      return getVariableValue("declineLetter", 1) as entity.Document
    }
    
    property set declineLetter ($arg :  entity.Document) {
      setVariableValue("declineLetter", 1, $arg)
    }
    
    property get notTakenLetter () : entity.Document {
      return getVariableValue("notTakenLetter", 1) as entity.Document
    }
    
    property set notTakenLetter ($arg :  entity.Document) {
      setVariableValue("notTakenLetter", 1, $arg)
    }
    
    property get submission () : entity.Submission {
      return getIteratedValue(1) as entity.Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionLetterSuccessLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at SubmissionLetterSuccessLV.pcf: line 38, column 52
    function sortValue_0 (submission :  entity.Submission) : java.lang.Object {
      return submission.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionLetterSuccessLV.pcf: line 43, column 41
    function sortValue_1 (submission :  entity.Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionLetterSuccessLV.pcf: line 47, column 56
    function sortValue_2 (submission :  entity.Submission) : java.lang.Object {
      return submission.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionLetterSuccessLV.pcf: line 51, column 63
    function sortValue_3 (submission :  entity.Submission) : java.lang.Object {
      return submission.LatestPeriod.Status.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=SubmissionLetterSucess) at SubmissionLetterSuccessLV.pcf: line 19, column 39
    function value_28 () : entity.Submission[] {
      return Job.finder.findSelectedSubmissionsByAccount(account).toCollection().toTypedArray()
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    
  }
  
  
}