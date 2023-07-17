package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyPolicyDataDetailPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardIteratorEntryExpressionsImpl extends CopyPolicyDataDetailPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataDetailPopup.pcf: line 71, column 49
    function def_onEnter_11 (def :  pcf.CopyPolicyDV_PersonalAutoLine) : void {
      def.onEnter(helper.Copier)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataDetailPopup.pcf: line 71, column 49
    function def_onEnter_13 (def :  pcf.CopyPolicyDV_default) : void {
      def.onEnter(helper.Copier)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataDetailPopup.pcf: line 71, column 49
    function def_refreshVariables_12 (def :  pcf.CopyPolicyDV_PersonalAutoLine) : void {
      def.refreshVariables(helper.Copier)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataDetailPopup.pcf: line 71, column 49
    function def_refreshVariables_14 (def :  pcf.CopyPolicyDV_default) : void {
      def.refreshVariables(helper.Copier)
    }
    
    // 'mode' attribute on PanelRef at CopyPolicyDataDetailPopup.pcf: line 71, column 49
    function mode_15 () : java.lang.Object {
      return thePolicyLine.PatternCode
    }
    
    // 'title' attribute on Card (id=policyLineCard) at CopyPolicyDataDetailPopup.pcf: line 68, column 55
    function title_19 () : java.lang.String {
      return thePolicyLine.Pattern.DisplayName
    }
    
    // 'value' attribute on HiddenInput (id=PolicyLine_Input) at CopyPolicyDataDetailPopup.pcf: line 77, column 49
    function valueRoot_17 () : java.lang.Object {
      return thePolicyLine
    }
    
    // 'value' attribute on HiddenInput (id=PolicyLine_Input) at CopyPolicyDataDetailPopup.pcf: line 77, column 49
    function value_16 () : java.lang.String {
      return thePolicyLine.PatternCode
    }
    
    property get thePolicyLine () : entity.PolicyLine {
      return getIteratedValue(1) as entity.PolicyLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyPolicyDataDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (targetPeriod :  PolicyPeriod, initialSourcePeriod :  PolicyPeriod, initialSourceSliceDate :  java.util.Date, isJob :  boolean) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=CopyPolicyDataDetailPopup) at CopyPolicyDataDetailPopup.pcf: line 12, column 252
    function beforeCommit_23 (pickedValue :  java.lang.Object) : void {
      helper.copyPolicyDataIntoTargetPeriod()
    }
    
    // 'beforeValidate' attribute on Popup (id=CopyPolicyDataDetailPopup) at CopyPolicyDataDetailPopup.pcf: line 12, column 252
    function beforeValidate_24 (pickedValue :  java.lang.Object) : void {
      helper.checkForMatches()
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataDetailPopup.pcf: line 86, column 68
    function def_onEnter_21 (def :  pcf.CopyNotesDV) : void {
      def.onEnter(helper.Copier, helper.SourcePeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataDetailPopup.pcf: line 86, column 68
    function def_refreshVariables_22 (def :  pcf.CopyNotesDV) : void {
      def.refreshVariables(helper.Copier, helper.SourcePeriod)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at CopyPolicyDataDetailPopup.pcf: line 51, column 44
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      helper.SourceSliceDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateInput (id=EffectiveDate_Input) at CopyPolicyDataDetailPopup.pcf: line 51, column 44
    function editable_4 () : java.lang.Boolean {
      return not isJob
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDataDetailPopup.pcf: line 30, column 74
    function initialValue_0 () : gw.pcf.job.common.copydata.CopyPolicyDataDetailPopupHelper {
      return new gw.pcf.job.common.copydata.CopyPolicyDataDetailPopupHelper(targetPeriod, initialSourcePeriod, initialSourceSliceDate, isJob)
    }
    
    // 'label' attribute on Verbatim (id=NoItems) at CopyPolicyDataDetailPopup.pcf: line 44, column 44
    function label_2 () : java.lang.String {
      return helper.NoItemsMessage
    }
    
    // 'onChange' attribute on PostOnChange at CopyPolicyDataDetailPopup.pcf: line 53, column 65
    function onChange_3 () : void {
      helper.reslicePolicyPeriodAndCopier()
    }
    
    // 'sortBy' attribute on IteratorSort at CopyPolicyDataDetailPopup.pcf: line 65, column 28
    function sortBy_10 (thePolicyLine :  entity.PolicyLine) : java.lang.Object {
      return thePolicyLine.Pattern.Priority
    }
    
    // 'title' attribute on Popup (id=CopyPolicyDataDetailPopup) at CopyPolicyDataDetailPopup.pcf: line 12, column 252
    static function title_25 (initialSourcePeriod :  PolicyPeriod, initialSourceSliceDate :  java.util.Date, isJob :  boolean, targetPeriod :  PolicyPeriod) : java.lang.Object {
      return isJob ? DisplayKey.get("Web.CopyPolicyData.CopyDataSelect.WorkOrder.Title", initialSourcePeriod.Job.JobNumber) : DisplayKey.get("Web.CopyPolicyData.CopyDataSelect.Policy.Title", initialSourcePeriod.PolicyNumber)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at CopyPolicyDataDetailPopup.pcf: line 51, column 44
    function valueRoot_7 () : java.lang.Object {
      return helper
    }
    
    // 'value' attribute on CardIterator (id=policyLineCopierPanels) at CopyPolicyDataDetailPopup.pcf: line 62, column 43
    function value_20 () : entity.PolicyLine[] {
      return helper.SourcePeriod.Lines
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at CopyPolicyDataDetailPopup.pcf: line 51, column 44
    function value_5 () : java.util.Date {
      return helper.SourceSliceDate
    }
    
    // 'visible' attribute on Verbatim (id=NoItems) at CopyPolicyDataDetailPopup.pcf: line 44, column 44
    function visible_1 () : java.lang.Boolean {
      return helper.IsNoItemsVisible
    }
    
    override property get CurrentLocation () : pcf.CopyPolicyDataDetailPopup {
      return super.CurrentLocation as pcf.CopyPolicyDataDetailPopup
    }
    
    property get helper () : gw.pcf.job.common.copydata.CopyPolicyDataDetailPopupHelper {
      return getVariableValue("helper", 0) as gw.pcf.job.common.copydata.CopyPolicyDataDetailPopupHelper
    }
    
    property set helper ($arg :  gw.pcf.job.common.copydata.CopyPolicyDataDetailPopupHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get initialSourcePeriod () : PolicyPeriod {
      return getVariableValue("initialSourcePeriod", 0) as PolicyPeriod
    }
    
    property set initialSourcePeriod ($arg :  PolicyPeriod) {
      setVariableValue("initialSourcePeriod", 0, $arg)
    }
    
    property get initialSourceSliceDate () : java.util.Date {
      return getVariableValue("initialSourceSliceDate", 0) as java.util.Date
    }
    
    property set initialSourceSliceDate ($arg :  java.util.Date) {
      setVariableValue("initialSourceSliceDate", 0, $arg)
    }
    
    property get isJob () : boolean {
      return getVariableValue("isJob", 0) as java.lang.Boolean
    }
    
    property set isJob ($arg :  boolean) {
      setVariableValue("isJob", 0, $arg)
    }
    
    property get targetPeriod () : PolicyPeriod {
      return getVariableValue("targetPeriod", 0) as PolicyPeriod
    }
    
    property set targetPeriod ($arg :  PolicyPeriod) {
      setVariableValue("targetPeriod", 0, $arg)
    }
    
    
  }
  
  
}