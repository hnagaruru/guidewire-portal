package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPLineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPLineSelectionScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPLineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPLineSelectionScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CPPLineSelectionScreen.pcf: line 28, column 58
    function def_onEnter_20 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineSelectionScreen.pcf: line 28, column 58
    function def_refreshVariables_21 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'value' attribute on TypeKeyInput (id=PackageRisk_Input) at CPPLineSelectionScreen.pcf: line 39, column 44
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.Policy.PackageRisk = (__VALUE_TO_SET as typekey.PackageRisk)
    }
    
    // 'editable' attribute on Screen (id=CPPLineSelectionScreen) at CPPLineSelectionScreen.pcf: line 7, column 33
    function editable_48 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'sortBy' attribute on IteratorSort at CPPLineSelectionScreen.pcf: line 59, column 32
    function sortBy_26 (policyLinePattern :  gw.api.productmodel.PolicyLinePattern) : java.lang.Object {
      return policyLinePattern.Priority
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CPPLineSelectionScreen.pcf: line 64, column 58
    function sortValue_27 (policyLinePattern :  gw.api.productmodel.PolicyLinePattern) : java.lang.Object {
      return policyLinePattern.DisplayName
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at CPPLineSelectionScreen.pcf: line 71, column 49
    function sortValue_28 (policyLinePattern :  gw.api.productmodel.PolicyLinePattern) : java.lang.Object {
      var checkboxWrapper : gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper = (new gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper(policyLinePattern, policyPeriod))
return checkboxWrapper.Value
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineSelectionScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'value' attribute on TypeKeyInput (id=PackageRisk_Input) at CPPLineSelectionScreen.pcf: line 39, column 44
    function valueRoot_24 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on TypeKeyInput (id=PackageRisk_Input) at CPPLineSelectionScreen.pcf: line 39, column 44
    function value_22 () : typekey.PackageRisk {
      return policyPeriod.Policy.PackageRisk
    }
    
    // 'value' attribute on RowIterator at CPPLineSelectionScreen.pcf: line 52, column 67
    function value_47 () : gw.api.productmodel.PolicyLinePattern[] {
      return policyPeriod.Policy.Product.LinePatterns.where(\p -> p.isAvailable(policyPeriod))
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at CPPLineSelectionScreen.pcf: line 26, column 80
    function visible_19 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on Cell (id=PreferredCoverageCurrency_Cell) at CPPLineSelectionScreen.pcf: line 80, column 77
    function visible_29 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPLineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPPLineSelectionScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=PreferredCoverageCurrency) at CPPLineSelectionScreen.pcf: line 80, column 77
    function def_onEnter_40 (def :  pcf.CPPPreferredCoverageCurrency_false) : void {
      def.onEnter(policyPeriod.getLine(policyLinePattern), jobWizardHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=PreferredCoverageCurrency) at CPPLineSelectionScreen.pcf: line 80, column 77
    function def_onEnter_42 (def :  pcf.CPPPreferredCoverageCurrency_true) : void {
      def.onEnter(policyPeriod.getLine(policyLinePattern), jobWizardHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=PreferredCoverageCurrency) at CPPLineSelectionScreen.pcf: line 80, column 77
    function def_refreshVariables_41 (def :  pcf.CPPPreferredCoverageCurrency_false) : void {
      def.refreshVariables(policyPeriod.getLine(policyLinePattern), jobWizardHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=PreferredCoverageCurrency) at CPPLineSelectionScreen.pcf: line 80, column 77
    function def_refreshVariables_43 (def :  pcf.CPPPreferredCoverageCurrency_true) : void {
      def.refreshVariables(policyPeriod.getLine(policyLinePattern), jobWizardHelper)
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at CPPLineSelectionScreen.pcf: line 71, column 49
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      checkboxWrapper.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at CPPLineSelectionScreen.pcf: line 56, column 71
    function initialValue_30 () : gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper {
      return new gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper(policyLinePattern, policyPeriod)
    }
    
    // RowIterator at CPPLineSelectionScreen.pcf: line 52, column 67
    function initializeVariables_46 () : void {
        checkboxWrapper = new gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper(policyLinePattern, policyPeriod);

    }
    
    // 'mode' attribute on ModalCellRef (id=PreferredCoverageCurrency) at CPPLineSelectionScreen.pcf: line 80, column 77
    function mode_44 () : java.lang.Object {
      return policyPeriod.getLine(policyLinePattern) typeis Coverable
    }
    
    // 'showConfirmMessage' attribute on CheckBoxCell (id=LineSelected_Cell) at CPPLineSelectionScreen.pcf: line 71, column 49
    function showConfirmMessage_34 () : java.lang.Boolean {
      return policyPeriod.getLineExists(policyLinePattern) 
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CPPLineSelectionScreen.pcf: line 64, column 58
    function valueRoot_32 () : java.lang.Object {
      return policyLinePattern
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at CPPLineSelectionScreen.pcf: line 71, column 49
    function valueRoot_37 () : java.lang.Object {
      return checkboxWrapper
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CPPLineSelectionScreen.pcf: line 64, column 58
    function value_31 () : java.lang.String {
      return policyLinePattern.DisplayName
    }
    
    // 'value' attribute on CheckBoxCell (id=LineSelected_Cell) at CPPLineSelectionScreen.pcf: line 71, column 49
    function value_35 () : java.lang.Boolean {
      return checkboxWrapper.Value
    }
    
    // 'visible' attribute on ModalCellRef (id=PreferredCoverageCurrency) at CPPLineSelectionScreen.pcf: line 80, column 77
    function visible_39 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get checkboxWrapper () : gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper {
      return getVariableValue("checkboxWrapper", 1) as gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper
    }
    
    property set checkboxWrapper ($arg :  gw.lob.cpp.ui.CPPLineSelectionCheckboxWrapper) {
      setVariableValue("checkboxWrapper", 1, $arg)
    }
    
    property get policyLinePattern () : gw.api.productmodel.PolicyLinePattern {
      return getIteratedValue(1) as gw.api.productmodel.PolicyLinePattern
    }
    
    
  }
  
  
}