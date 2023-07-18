package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDLineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDLineSelectionScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDLineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDLineSelectionScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewLine) at APDLineSelectionScreen.pcf: line 61, column 94
    function action_27 () : void {
      APDNewCoverablePopup.push(lineContainer)
    }
    
    // 'action' attribute on MenuItem (id=NewLine) at APDLineSelectionScreen.pcf: line 61, column 94
    function action_dest_28 () : pcf.api.Destination {
      return pcf.APDNewCoverablePopup.createDestination(lineContainer)
    }
    
    // 'available' attribute on ToolbarButton (id=AddButton) at APDLineSelectionScreen.pcf: line 44, column 58
    function available_29 () : java.lang.Boolean {
      return policyPeriod.Policy.APDProduct.ProductLines.Count < 5
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=RemoveLink) at APDLineSelectionScreen.pcf: line 68, column 98
    function checkedRowAction_30 (productLine :  entity.APDProductLine, CheckedValue :  entity.APDProductLine) : void {
      if (lineContainer.getLineExists(productLine)) lineContainer.removeFromRiskCoverables(lineContainer.getLine(productLine)); product.removeProductLine(productLine, false)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteLine) at APDLineSelectionScreen.pcf: line 74, column 95
    function checkedRowAction_31 (productLine :  entity.APDProductLine, CheckedValue :  entity.APDProductLine) : void {
      if (lineContainer.getLineExists(productLine)) lineContainer.removeFromRiskCoverables(lineContainer.getLine(productLine)); product.removeProductLine(productLine, true)
    }
    
    // 'def' attribute on PanelRef at APDLineSelectionScreen.pcf: line 36, column 58
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at APDLineSelectionScreen.pcf: line 36, column 58
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'editable' attribute on RowIterator (id=ADPLinesLV) at APDLineSelectionScreen.pcf: line 86, column 47
    function editable_35 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at APDLineSelectionScreen.pcf: line 20, column 26
    function initialValue_0 () : APDProduct {
      return policyPeriod.Policy.APDProduct
    }
    
    // 'initialValue' attribute on Variable at APDLineSelectionScreen.pcf: line 24, column 35
    function initialValue_1 () : APDManualPolicyLine {
      return policyPeriod.ManualLine
    }
    
    // 'initialValue' attribute on Variable at APDLineSelectionScreen.pcf: line 28, column 23
    function initialValue_2 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().canDesign()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function mode_3 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDLineSelectionScreen.pcf: line 95, column 41
    function sortValue_33 (productLine :  entity.APDProductLine) : java.lang.Object {
      return productLine.Name
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at APDLineSelectionScreen.pcf: line 102, column 45
    function sortValue_34 (productLine :  entity.APDProductLine) : java.lang.Object {
      var checkboxWrapper : gw.apd.policy.APDLineSelectionCheckboxWrapper = (new gw.apd.policy.APDLineSelectionCheckboxWrapper(productLine, policyPeriod))
return checkboxWrapper.Value
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_21 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDLineSelectionScreen.pcf: line 33, column 104
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'value' attribute on MenuItemIterator at APDLineSelectionScreen.pcf: line 51, column 44
    function value_26 () : APDProductLine[] {
      return product.UnusedProductLines
    }
    
    // 'value' attribute on RowIterator (id=ADPLinesLV) at APDLineSelectionScreen.pcf: line 86, column 47
    function value_48 () : entity.APDProductLine[] {
      return policyPeriod.Policy.APDProduct.ProductLines*.ProductLine
    }
    
    // 'visible' attribute on Toolbar at APDLineSelectionScreen.pcf: line 39, column 29
    function visible_32 () : java.lang.Boolean {
      return canDesign
    }
    
    property get canDesign () : Boolean {
      return getVariableValue("canDesign", 0) as Boolean
    }
    
    property set canDesign ($arg :  Boolean) {
      setVariableValue("canDesign", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get lineContainer () : APDManualPolicyLine {
      return getVariableValue("lineContainer", 0) as APDManualPolicyLine
    }
    
    property set lineContainer ($arg :  APDManualPolicyLine) {
      setVariableValue("lineContainer", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getVariableValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setVariableValue("product", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDLineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends APDLineSelectionScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canPick' attribute on RowIterator (id=ADPLinesLV) at APDLineSelectionScreen.pcf: line 86, column 47
    function canPick_45 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=ADPLinesLV) at APDLineSelectionScreen.pcf: line 86, column 47
    function checkBoxVisible_46 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at APDLineSelectionScreen.pcf: line 102, column 45
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      checkboxWrapper.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at APDLineSelectionScreen.pcf: line 90, column 67
    function initialValue_36 () : gw.apd.policy.APDLineSelectionCheckboxWrapper {
      return new gw.apd.policy.APDLineSelectionCheckboxWrapper(productLine, policyPeriod)
    }
    
    // RowIterator (id=ADPLinesLV) at APDLineSelectionScreen.pcf: line 86, column 47
    function initializeVariables_47 () : void {
        checkboxWrapper = new gw.apd.policy.APDLineSelectionCheckboxWrapper(productLine, policyPeriod);

    }
    
    // 'showConfirmMessage' attribute on CheckBoxCell (id=LineSelected_Cell) at APDLineSelectionScreen.pcf: line 102, column 45
    function showConfirmMessage_40 () : java.lang.Boolean {
      return lineContainer.getLineExists(productLine) 
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDLineSelectionScreen.pcf: line 95, column 41
    function valueRoot_38 () : java.lang.Object {
      return productLine
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at APDLineSelectionScreen.pcf: line 102, column 45
    function valueRoot_43 () : java.lang.Object {
      return checkboxWrapper
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDLineSelectionScreen.pcf: line 95, column 41
    function value_37 () : java.lang.String {
      return productLine.Name
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at APDLineSelectionScreen.pcf: line 102, column 45
    function value_41 () : java.lang.Boolean {
      return checkboxWrapper.Value
    }
    
    property get checkboxWrapper () : gw.apd.policy.APDLineSelectionCheckboxWrapper {
      return getVariableValue("checkboxWrapper", 1) as gw.apd.policy.APDLineSelectionCheckboxWrapper
    }
    
    property set checkboxWrapper ($arg :  gw.apd.policy.APDLineSelectionCheckboxWrapper) {
      setVariableValue("checkboxWrapper", 1, $arg)
    }
    
    property get productLine () : entity.APDProductLine {
      return getIteratedValue(1) as entity.APDProductLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDLineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDLineSelectionScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Unusedline) at APDLineSelectionScreen.pcf: line 55, column 42
    function action_24 () : void {
      product.createAndAddLineLink(unusedLine); unusedLine.buildRiskPolicyLine(lineContainer)
    }
    
    // 'label' attribute on MenuItem (id=Unusedline) at APDLineSelectionScreen.pcf: line 55, column 42
    function label_25 () : java.lang.Object {
      return unusedLine.Name
    }
    
    property get unusedLine () : APDProductLine {
      return getIteratedValue(1) as APDProductLine
    }
    
    
  }
  
  
}