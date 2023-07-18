package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseRulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseRulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (currentRule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, edition :  APDProductLineEdition, openForEdit :  boolean) : int {
      return 0
    }
    
    static function __constructorIndex (currentRule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, riskCoverable :  APDRiskCoverable, edition :  APDProductLineEdition, openForEdit :  boolean) : int {
      return 1
    }
    
    // 'action' attribute on ToolbarButton (id=Delete) at APDClauseRulePopup.pcf: line 48, column 73
    function action_3 () : void {
      clause.removeFromRules(rule); CurrentLocation.commit()
    }
    
    // 'afterEnter' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 13, column 105
    function afterEnter_30 () : void {
      initialise()
    }
    
    // 'beforeCancel' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 13, column 105
    function beforeCancel_31 () : void {
      removeUneditedCopy()
    }
    
    // 'beforeCommit' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 13, column 105
    function beforeCommit_32 (pickedValue :  java.lang.Object) : void {
      rule.removeIfUnnecessary(); if (riskCoverable != null) riskCoverable.syncClauseAvailability(clause)
    }
    
    // 'canEdit' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 13, column 105
    function canEdit_33 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on InputSetRef at APDClauseRulePopup.pcf: line 83, column 101
    function def_onEnter_25 (def :  pcf.APDRuleEditionInputSet) : void {
      def.onEnter(CurrentLocation.InEditMode ? rule : currentRule, edition)
    }
    
    // 'def' attribute on PanelRef at APDClauseRulePopup.pcf: line 88, column 45
    function def_onEnter_28 (def :  pcf.APDRuleDV) : void {
      def.onEnter(rule, edition)
    }
    
    // 'def' attribute on InputSetRef at APDClauseRulePopup.pcf: line 83, column 101
    function def_refreshVariables_26 (def :  pcf.APDRuleEditionInputSet) : void {
      def.refreshVariables(CurrentLocation.InEditMode ? rule : currentRule, edition)
    }
    
    // 'def' attribute on PanelRef at APDClauseRulePopup.pcf: line 88, column 45
    function def_refreshVariables_29 (def :  pcf.APDRuleDV) : void {
      def.refreshVariables(rule, edition)
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultExistence = (__VALUE_TO_SET as APDDataExistenceType)
    }
    
    // 'editable' attribute on PanelRef at APDClauseRulePopup.pcf: line 88, column 45
    function editable_27 () : java.lang.Boolean {
      return rule.Edition == edition
    }
    
    // EditButtons at APDClauseRulePopup.pcf: line 43, column 57
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function label_9 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getDefaultValueLabel(rule)
    }
    
    // 'startInEditMode' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 13, column 105
    function startInEditMode_34 () : java.lang.Boolean {
      return currentRule.Edition == edition
    }
    
    // 'title' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 13, column 105
    static function title_35 (clause :  APDClause, currentRule :  APDClauseRule, edition :  APDProductLineEdition, openForEdit :  boolean, riskCoverable :  APDRiskCoverable, ruleType :  APDRuleType) : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRulePopupTitle(ruleType, typekey.APDRule.TC_APDCLAUSERULE)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function valueRange_13 () : java.lang.Object {
      return APDDataExistenceType.TF_CLAUSEEXISTENCE.TypeKeys
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function valueRoot_12 () : java.lang.Object {
      return rule
    }
    
    // 'value' attribute on TextInput (id=clauseLabel_Input) at APDClauseRulePopup.pcf: line 57, column 47
    function valueRoot_6 () : java.lang.Object {
      return clause
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function value_10 () : APDDataExistenceType {
      return rule.DefaultExistence
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDClauseRulePopup.pcf: line 73, column 86
    function value_18 () : java.lang.String {
      return gw.apd.web.APDRulePopupHelper.getRuleDisplayDescription(rule)
    }
    
    // 'value' attribute on TextInput (id=SubClauseRuleDescText_Input) at APDClauseRulePopup.pcf: line 78, column 43
    function value_21 () : java.lang.String {
      return DisplayKey.get("Web.APDRule.SubClause.Available", clause.Name ?: "", clause.ParentClause.Name ?: "")
    }
    
    // 'value' attribute on TextInput (id=clauseLabel_Input) at APDClauseRulePopup.pcf: line 57, column 47
    function value_5 () : java.lang.String {
      return clause.Name
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function verifyValueRangeIsAllowedType_14 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 67, column 48
    function verifyValueRange_15 () : void {
      var __valueRangeArg = APDDataExistenceType.TF_CLAUSEEXISTENCE.TypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'editVisible' attribute on EditButtons at APDClauseRulePopup.pcf: line 43, column 57
    function visible_0 () : java.lang.Boolean {
      return currentRule.Edition != edition
    }
    
    // 'visible' attribute on ToolbarButton (id=Delete) at APDClauseRulePopup.pcf: line 48, column 73
    function visible_2 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and currentRule != null
    }
    
    // 'visible' attribute on TextInput (id=SubClauseRuleDescText_Input) at APDClauseRulePopup.pcf: line 78, column 43
    function visible_20 () : java.lang.Boolean {
      return clause.HasParent
    }
    
    // 'visible' attribute on InputSet at APDClauseRulePopup.pcf: line 59, column 65
    function visible_24 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    // 'visible' attribute on TextInput (id=clauseLabel_Input) at APDClauseRulePopup.pcf: line 57, column 47
    function visible_4 () : java.lang.Boolean {
      return clause.Name.HasContent
    }
    
    override property get CurrentLocation () : pcf.APDClauseRulePopup {
      return super.CurrentLocation as pcf.APDClauseRulePopup
    }
    
    property get clause () : APDClause {
      return getVariableValue("clause", 0) as APDClause
    }
    
    property set clause ($arg :  APDClause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get currentRule () : APDClauseRule {
      return getVariableValue("currentRule", 0) as APDClauseRule
    }
    
    property set currentRule ($arg :  APDClauseRule) {
      setVariableValue("currentRule", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    property get rule () : APDClauseRule {
      return getVariableValue("rule", 0) as APDClauseRule
    }
    
    property set rule ($arg :  APDClauseRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get ruleType () : APDRuleType {
      return getVariableValue("ruleType", 0) as APDRuleType
    }
    
    property set ruleType ($arg :  APDRuleType) {
      setVariableValue("ruleType", 0, $arg)
    }
    
    function initialise() {
      if (currentRule.Edition != edition) { // there is not a rule for the current edition
        if (currentRule == null) { // there is no rule
          rule = buildNewRule(edition)
        } else { // there is a rule already of a previous edition
          rule = currentRule.copyToNewEdition(edition) as APDClauseRule
          clause.addToRules(rule)
        }
      } else if (currentRule == null) { // there is no rule (or edition!)
        rule = buildNewRule(null) // this builds a base rule
      } else { // there is a rule for the current edition
        rule = currentRule
      }
    }
    
    private function buildNewRule(e : APDEdition) : APDClauseRule {
      var newRule = clause.createAndAddRule(ruleType)
      newRule.Edition = e
      return newRule
    }
    
    function removeUneditedCopy() {
      // when the rule is copied for display and potential editing ...
      if (not CurrentLocation.InEditMode and currentRule != rule) {
        clause.removeFromRules(rule)
      }
    }
    
    
  }
  
  
}