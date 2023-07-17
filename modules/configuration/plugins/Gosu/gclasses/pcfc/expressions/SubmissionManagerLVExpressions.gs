package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionManagerLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionManagerLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionManagerLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubmissionManagerLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionManagerLV.pcf: line 94, column 41
    function action_22 () : void {
      SubmissionView(submission, policyPeriod)
    }
    
    // 'action' attribute on Link (id=ConfirmLetter) at SubmissionManagerLV.pcf: line 124, column 159
    function action_39 () : void {
      SubmissionConfirmLetter.go(account)
    }
    
    // 'action' attribute on Link (id=DeclineLetter) at SubmissionManagerLV.pcf: line 130, column 158
    function action_42 () : void {
      SubmissionRejectLetter.go(TC_DECLINATION, account)
    }
    
    // 'action' attribute on Link (id=NotTakenLetter) at SubmissionManagerLV.pcf: line 136, column 158
    function action_45 () : void {
      SubmissionRejectLetter.go(TC_NOTTAKENACK, account)
    }
    
    // 'action' attribute on Link (id=InternalSubmissionsLV_ConfirmLink) at SubmissionManagerLV.pcf: line 143, column 95
    function action_48 () : void {
      confirmLetter.downloadContent()
    }
    
    // 'action' attribute on Link (id=InternalSubmissionsLV_DeclineLink) at SubmissionManagerLV.pcf: line 150, column 95
    function action_50 () : void {
      declineLetter.downloadContent()
    }
    
    // 'action' attribute on Link (id=InternalSubmissionsLV_NotTakenLink) at SubmissionManagerLV.pcf: line 157, column 96
    function action_52 () : void {
      notTakenLetter.downloadContent()
    }
    
    // 'action' attribute on Link (id=ConfirmLetter) at SubmissionManagerLV.pcf: line 124, column 159
    function action_dest_40 () : pcf.api.Destination {
      return pcf.SubmissionConfirmLetter.createDestination(account)
    }
    
    // 'action' attribute on Link (id=DeclineLetter) at SubmissionManagerLV.pcf: line 130, column 158
    function action_dest_43 () : pcf.api.Destination {
      return pcf.SubmissionRejectLetter.createDestination(TC_DECLINATION, account)
    }
    
    // 'action' attribute on Link (id=NotTakenLetter) at SubmissionManagerLV.pcf: line 136, column 158
    function action_dest_46 () : pcf.api.Destination {
      return pcf.SubmissionRejectLetter.createDestination(TC_NOTTAKENACK, account)
    }
    
    // 'available' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionManagerLV.pcf: line 94, column 41
    function available_21 () : java.lang.Boolean {
      return submission.Viewable
    }
    
    // 'def' attribute on MenuItemSetRef at SubmissionManagerLV.pcf: line 70, column 75
    function def_onEnter_17 (def :  pcf.SubmissionActionsMenuItemSet) : void {
      def.onEnter(submission, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at SubmissionManagerLV.pcf: line 70, column 75
    function def_refreshVariables_18 (def :  pcf.SubmissionActionsMenuItemSet) : void {
      def.refreshVariables(submission, policyPeriod)
    }
    
    // 'icon' attribute on Link (id=Icon) at SubmissionManagerLV.pcf: line 80, column 24
    function icon_19 () : java.lang.String {
      return policyPeriod.Policy.Product.Icon
    }
    
    // 'initialValue' attribute on Variable at SubmissionManagerLV.pcf: line 33, column 37
    function initialValue_12 () : entity.PolicyPeriod {
      return submission.LatestPeriod
    }
    
    // 'initialValue' attribute on Variable at SubmissionManagerLV.pcf: line 37, column 33
    function initialValue_13 () : entity.Document {
      return getConfirmLetter(policyPeriod) 
    }
    
    // 'initialValue' attribute on Variable at SubmissionManagerLV.pcf: line 41, column 33
    function initialValue_14 () : entity.Document {
      return getDeclinedLetter(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at SubmissionManagerLV.pcf: line 45, column 33
    function initialValue_15 () : entity.Document {
      return getNotTakenLetter(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at SubmissionManagerLV.pcf: line 49, column 25
    function initialValue_16 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod)
    }
    
    // RowIterator at SubmissionManagerLV.pcf: line 29, column 39
    function initializeVariables_57 () : void {
        policyPeriod = submission.LatestPeriod;
  confirmLetter = getConfirmLetter(policyPeriod) ;
  declineLetter = getDeclinedLetter(policyPeriod);
  notTakenLetter = getNotTakenLetter(policyPeriod);
  hasViewPermission = perm.PolicyPeriod.view(policyPeriod);

    }
    
    // 'label' attribute on Link (id=SubmissionProduct) at SubmissionManagerLV.pcf: line 86, column 59
    function label_20 () : java.lang.Object {
      return submission.Policy.ProductDisplayName
    }
    
    // 'label' attribute on Link (id=InternalSubmissionsLV_ActionsDisabled) at SubmissionManagerLV.pcf: line 162, column 199
    function label_54 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'useArchivedStyle' attribute on Row at SubmissionManagerLV.pcf: line 61, column 37
    function useArchivedStyle_56 () : java.lang.Boolean {
      return submission.LatestPeriod.Archived
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionManagerLV.pcf: line 94, column 41
    function valueRoot_24 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionManagerLV.pcf: line 103, column 62
    function valueRoot_30 () : java.lang.Object {
      return submission.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionManagerLV.pcf: line 94, column 41
    function value_23 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=QuoteType_Cell) at SubmissionManagerLV.pcf: line 99, column 42
    function value_27 () : typekey.QuoteType {
      return submission.getQuoteType()
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionManagerLV.pcf: line 103, column 62
    function value_29 () : java.util.Date {
      return submission.LatestPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionManagerLV.pcf: line 108, column 24
    function value_32 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalPremium_Cell) at SubmissionManagerLV.pcf: line 114, column 41
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return submission.TotalCost
    }
    
    // 'visible' attribute on Link (id=ConfirmLetter) at SubmissionManagerLV.pcf: line 124, column 159
    function visible_38 () : java.lang.Boolean {
      return gw.job.SubmissionLetterHelper.submissionCanSendLetterType(submissionLettertypes, LetterType.TC_CONFIRMATION, submission, policyPeriod)
    }
    
    // 'visible' attribute on Link (id=DeclineLetter) at SubmissionManagerLV.pcf: line 130, column 158
    function visible_41 () : java.lang.Boolean {
      return gw.job.SubmissionLetterHelper.submissionCanSendLetterType(submissionLettertypes, LetterType.TC_DECLINATION, submission, policyPeriod)
    }
    
    // 'visible' attribute on Link (id=NotTakenLetter) at SubmissionManagerLV.pcf: line 136, column 158
    function visible_44 () : java.lang.Boolean {
      return gw.job.SubmissionLetterHelper.submissionCanSendLetterType(submissionLettertypes, LetterType.TC_NOTTAKENACK, submission, policyPeriod)
    }
    
    // 'visible' attribute on Link (id=InternalSubmissionsLV_ConfirmLink) at SubmissionManagerLV.pcf: line 143, column 95
    function visible_47 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(confirmLetter)
    }
    
    // 'visible' attribute on Link (id=InternalSubmissionsLV_DeclineLink) at SubmissionManagerLV.pcf: line 150, column 95
    function visible_49 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(declineLetter)
    }
    
    // 'visible' attribute on Link (id=InternalSubmissionsLV_NotTakenLink) at SubmissionManagerLV.pcf: line 157, column 96
    function visible_51 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(notTakenLetter)
    }
    
    // 'visible' attribute on Link (id=InternalSubmissionsLV_ActionsDisabled) at SubmissionManagerLV.pcf: line 162, column 199
    function visible_53 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(confirmLetter) or documentsActionsHelper.isDocumentPending(declineLetter) or documentsActionsHelper.isDocumentPending(notTakenLetter)
    }
    
    // 'visible' attribute on Row at SubmissionManagerLV.pcf: line 61, column 37
    function visible_55 () : java.lang.Boolean {
      return hasViewPermission
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
    
    property get hasViewPermission () : boolean {
      return getVariableValue("hasViewPermission", 1) as java.lang.Boolean
    }
    
    property set hasViewPermission ($arg :  boolean) {
      setVariableValue("hasViewPermission", 1, $arg)
    }
    
    property get notTakenLetter () : entity.Document {
      return getVariableValue("notTakenLetter", 1) as entity.Document
    }
    
    property set notTakenLetter ($arg :  entity.Document) {
      setVariableValue("notTakenLetter", 1, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 1) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 1, $arg)
    }
    
    property get submission () : entity.Submission {
      return getIteratedValue(1) as entity.Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionManagerLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionManagerLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at SubmissionManagerLV.pcf: line 53, column 139
    function filter_2 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter( DisplayKey.get("Web.SubmissionManager.Filter.All"), \ x -> true )
    }
    
    // 'filter' attribute on ToolbarFilterOption at SubmissionManagerLV.pcf: line 55, column 166
    function filter_3 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter( DisplayKey.get("Web.SubmissionManager.Filter.Open"), \ x -> not (x as Submission).Complete )
    }
    
    // 'filter' attribute on ToolbarFilterOption at SubmissionManagerLV.pcf: line 57, column 166
    function filter_4 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter( DisplayKey.get("Web.SubmissionManager.Filter.Complete"), \ x -> (x as Submission).Complete )
    }
    
    // 'initialValue' attribute on Variable at SubmissionManagerLV.pcf: line 16, column 29
    function initialValue_0 () : java.util.Map {
      return gw.job.SubmissionLetterHelper.getDocumentsByPolicyPeriodAndDocType(submissions)
    }
    
    // 'initialValue' attribute on Variable at SubmissionManagerLV.pcf: line 20, column 43
    function initialValue_1 () : java.util.Set<String> {
      return gw.job.SubmissionLetterHelper.getSubmissionLettertypes(submissions)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalPremium_Cell) at SubmissionManagerLV.pcf: line 114, column 41
    function sortValue_10 (submission :  entity.Submission) : java.lang.Object {
      return submission.TotalCost
    }
    
    // 'sortBy' attribute on LinkCell (id=SubmissionDisplayProduct) at SubmissionManagerLV.pcf: line 76, column 23
    function sortValue_5 (submission :  entity.Submission) : java.lang.Object {
      return submission.Policy.Product.DisplayName
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at SubmissionManagerLV.pcf: line 94, column 41
    function sortValue_6 (submission :  entity.Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=QuoteType_Cell) at SubmissionManagerLV.pcf: line 99, column 42
    function sortValue_7 (submission :  entity.Submission) : java.lang.Object {
      return submission.getQuoteType()
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at SubmissionManagerLV.pcf: line 103, column 62
    function sortValue_8 (submission :  entity.Submission) : java.lang.Object {
      return submission.LatestPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SubmissionManagerLV.pcf: line 108, column 24
    function sortValue_9 (submission :  entity.Submission) : java.lang.Object {
      return submission.DisplayStatus
    }
    
    // 'footerSumValue' attribute on RowIterator at SubmissionManagerLV.pcf: line 114, column 41
    function sumValue_11 (submission :  entity.Submission) : java.lang.Object {
      return submission.TotalCost == null ? null : submission.TotalCost?.convertAmount(account.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator at SubmissionManagerLV.pcf: line 29, column 39
    function value_58 () : entity.Submission[] {
      return submissions
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get docMap () : java.util.Map {
      return getVariableValue("docMap", 0) as java.util.Map
    }
    
    property set docMap ($arg :  java.util.Map) {
      setVariableValue("docMap", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get submissionLettertypes () : java.util.Set<String> {
      return getVariableValue("submissionLettertypes", 0) as java.util.Set<String>
    }
    
    property set submissionLettertypes ($arg :  java.util.Set<String>) {
      setVariableValue("submissionLettertypes", 0, $arg)
    }
    
    property get submissions () : Submission[] {
      return getRequireValue("submissions", 0) as Submission[]
    }
    
    property set submissions ($arg :  Submission[]) {
      setRequireValue("submissions", 0, $arg)
    }
    
    function SubmissionView(sub : Submission, policyPeriod : PolicyPeriod) {
      if (policyPeriod.Status == TC_NEW) {
        gw.transaction.Transaction.runWithNewBundle(\ bun -> {
          policyPeriod = bun.add(policyPeriod)
          policyPeriod.SubmissionProcess.beginEditing()
        })
      }
      JobForward.go(sub, policyPeriod)
    }
    
    function getConfirmLetter(policyPeriod : PolicyPeriod) : Document {
      return docMap.get(policyPeriod.ID.toString() + ",confirm_letter") as Document
    }
    
    function getDeclinedLetter(policyPeriod : PolicyPeriod) : Document {
      return (policyPeriod.Status == PolicyPeriodStatus.TC_DECLINED)
        ? docMap.get(policyPeriod.ID.toString() + ",decline_letter") as Document
        : null
    }
    
    function getNotTakenLetter(policyPeriod : PolicyPeriod) : Document {
      return (policyPeriod.Status == PolicyPeriodStatus.TC_NOTTAKEN)
        ? docMap.get(policyPeriod.ID.toString() + ",not_taken_letter") as Document
        : null
    }
    
    
  }
  
  
}