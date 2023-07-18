package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/losshistory/LossHistoryInputSet.att.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossHistoryInputSet_attExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/losshistory/LossHistoryInputSet.att.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LossHistoryInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at LossHistoryInputSet.att.pcf: line 75, column 93
    function action_19 () : void {
      Document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at LossHistoryInputSet.att.pcf: line 86, column 123
    function action_23 () : void {
      DocumentDetailsPopup.push(Document)
    }
    
    // 'action' attribute on Link (id=DocumentsLV_DeleteLink) at LossHistoryInputSet.att.pcf: line 95, column 89
    function action_27 () : void {
      gw.api.web.document.DocumentsHelper.deleteDocument(Document)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at LossHistoryInputSet.att.pcf: line 86, column 123
    function action_dest_24 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(Document)
    }
    
    // 'available' attribute on Link (id=NameLink) at LossHistoryInputSet.att.pcf: line 75, column 93
    function available_18 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(Document, contentActionsEnabled)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at LossHistoryInputSet.att.pcf: line 86, column 123
    function available_22 () : java.lang.Boolean {
      return metadataActionsEnabled
    }
    
    // 'label' attribute on Link (id=NameLink) at LossHistoryInputSet.att.pcf: line 75, column 93
    function label_20 () : java.lang.Object {
      return Document.Name
    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at LossHistoryInputSet.att.pcf: line 100, column 79
    function label_29 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at LossHistoryInputSet.att.pcf: line 75, column 93
    function tooltip_21 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(Document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_DeleteLink) at LossHistoryInputSet.att.pcf: line 95, column 89
    function visible_26 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkVisible(Document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at LossHistoryInputSet.att.pcf: line 100, column 79
    function visible_28 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(Document)
    }
    
    property get Document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/losshistory/LossHistoryInputSet.att.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossHistoryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=NewDocument) at LossHistoryInputSet.att.pcf: line 47, column 25
    function action_13 () : void {
      NewLossHistoryDocumentsWorksheet.goInWorkspace(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at LossHistoryInputSet.att.pcf: line 54, column 103
    function action_17 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=NewDocument) at LossHistoryInputSet.att.pcf: line 47, column 25
    function action_dest_14 () : pcf.api.Destination {
      return pcf.NewLossHistoryDocumentsWorksheet.createDestination(policyPeriod)
    }
    
    // 'available' attribute on ToolbarButton (id=NewDocument) at LossHistoryInputSet.att.pcf: line 47, column 25
    function available_12 () : java.lang.Boolean {
      return contentActionsEnabled
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=TotalIncurred_Input) at LossHistoryInputSet.att.pcf: line 39, column 55
    function currency_10 () : typekey.Currency {
      return policyPeriod.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextInput (id=NumberOfLosses_Input) at LossHistoryInputSet.att.pcf: line 32, column 38
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.Policy.NumPriorLosses = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalIncurred_Input) at LossHistoryInputSet.att.pcf: line 39, column 55
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.Policy.PriorTotalIncurred = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'initialValue' attribute on Variable at LossHistoryInputSet.att.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return documentsActionsHelper.DocumentContentServerAvailable
    }
    
    // 'initialValue' attribute on Variable at LossHistoryInputSet.att.pcf: line 21, column 23
    function initialValue_1 () : boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'initialValue' attribute on Variable at LossHistoryInputSet.att.pcf: line 25, column 64
    function initialValue_2 () : gw.api.database.IQueryBeanResult<Document> {
      return createLossHistorySearchCriteria().performSearch() as gw.api.database.IQueryBeanResult<Document>
    }
    
    // 'value' attribute on TextInput (id=NumberOfLosses_Input) at LossHistoryInputSet.att.pcf: line 32, column 38
    function valueRoot_5 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on TextInput (id=NumberOfLosses_Input) at LossHistoryInputSet.att.pcf: line 32, column 38
    function value_3 () : java.lang.Integer {
      return policyPeriod.Policy.NumPriorLosses
    }
    
    // 'value' attribute on RowIterator at LossHistoryInputSet.att.pcf: line 62, column 79
    function value_30 () : gw.api.database.IQueryBeanResult<entity.Document> {
      return documents
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalIncurred_Input) at LossHistoryInputSet.att.pcf: line 39, column 55
    function value_7 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.Policy.PriorTotalIncurred
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at LossHistoryInputSet.att.pcf: line 54, column 103
    function visible_16 () : java.lang.Boolean {
      return documentsActionsHelper.isShowAsynchronousRefreshAction(documents.toTypedArray())
    }
    
    property get contentActionsEnabled () : boolean {
      return getVariableValue("contentActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set contentActionsEnabled ($arg :  boolean) {
      setVariableValue("contentActionsEnabled", 0, $arg)
    }
    
    property get documents () : gw.api.database.IQueryBeanResult<Document> {
      return getVariableValue("documents", 0) as gw.api.database.IQueryBeanResult<Document>
    }
    
    property set documents ($arg :  gw.api.database.IQueryBeanResult<Document>) {
      setVariableValue("documents", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get metadataActionsEnabled () : boolean {
      return getVariableValue("metadataActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set metadataActionsEnabled ($arg :  boolean) {
      setVariableValue("metadataActionsEnabled", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function createLossHistorySearchCriteria() : DocumentSearchCriteria {
            var c = new DocumentSearchCriteria(policyPeriod)
            c.RelatedTo = policyPeriod
            c.Type = TC_LOSS_HISTORY
            return c
          }
    
    
  }
  
  
}