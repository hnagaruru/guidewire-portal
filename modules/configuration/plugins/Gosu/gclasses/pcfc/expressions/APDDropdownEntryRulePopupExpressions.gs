package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropdownEntryRulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropdownEntryRulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (currentRule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    static function __constructorIndex (currentRule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, edition :  APDProductLineEdition, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'action' attribute on ToolbarButton (id=Delete) at APDDropdownEntryRulePopup.pcf: line 45, column 73
    function action_3 () : void {
      dropdownEntry.Attribute.removeFromRules(rule); CurrentLocation.commit()
    }
    
    // 'afterEnter' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 13, column 112
    function afterEnter_26 () : void {
      initialise()
    }
    
    // 'beforeCancel' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 13, column 112
    function beforeCancel_27 () : void {
      removeUneditedCopy()
    }
    
    // 'beforeCommit' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 13, column 112
    function beforeCommit_28 (pickedValue :  java.lang.Object) : void {
      rule.removeIfUnnecessary()
    }
    
    // 'def' attribute on InputSetRef at APDDropdownEntryRulePopup.pcf: line 74, column 58
    function def_onEnter_21 (def :  pcf.APDRuleEditionInputSet) : void {
      def.onEnter(rule, edition)
    }
    
    // 'def' attribute on PanelRef at APDDropdownEntryRulePopup.pcf: line 79, column 45
    function def_onEnter_24 (def :  pcf.APDRuleDV) : void {
      def.onEnter(rule, edition)
    }
    
    // 'def' attribute on InputSetRef at APDDropdownEntryRulePopup.pcf: line 74, column 58
    function def_refreshVariables_22 (def :  pcf.APDRuleEditionInputSet) : void {
      def.refreshVariables(rule, edition)
    }
    
    // 'def' attribute on PanelRef at APDDropdownEntryRulePopup.pcf: line 79, column 45
    function def_refreshVariables_25 (def :  pcf.APDRuleDV) : void {
      def.refreshVariables(rule, edition)
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultExistence = (__VALUE_TO_SET as APDDataExistenceType)
    }
    
    // 'editable' attribute on PanelRef at APDDropdownEntryRulePopup.pcf: line 79, column 45
    function editable_23 () : java.lang.Boolean {
      return rule.Edition == edition
    }
    
    // EditButtons at APDDropdownEntryRulePopup.pcf: line 40, column 57
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function label_9 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getDefaultValueLabel(rule)
    }
    
    // 'startInEditMode' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 13, column 112
    function startInEditMode_29 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'title' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 13, column 112
    static function title_30 (currentRule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, edition :  APDProductLineEdition, ruleType :  APDRuleType, startInEditMode :  boolean) : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRulePopupTitle(ruleType, typekey.APDRule.TC_APDDROPDOWNENTRYRULE)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function valueRange_13 () : java.lang.Object {
      return APDDataExistenceType.TF_DROPDOWNENTRYEXISTENCE.TypeKeys
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function valueRoot_12 () : java.lang.Object {
      return rule
    }
    
    // 'value' attribute on TextInput (id=dropdownEntryLabel_Input) at APDDropdownEntryRulePopup.pcf: line 53, column 54
    function valueRoot_6 () : java.lang.Object {
      return dropdownEntry
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function value_10 () : APDDataExistenceType {
      return rule.DefaultExistence
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDDropdownEntryRulePopup.pcf: line 69, column 86
    function value_18 () : java.lang.String {
      return gw.apd.web.APDRulePopupHelper.getRuleDisplayDescription(rule)
    }
    
    // 'value' attribute on TextInput (id=dropdownEntryLabel_Input) at APDDropdownEntryRulePopup.pcf: line 53, column 54
    function value_5 () : java.lang.String {
      return dropdownEntry.Name
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function verifyValueRangeIsAllowedType_14 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 63, column 48
    function verifyValueRange_15 () : void {
      var __valueRangeArg = APDDataExistenceType.TF_DROPDOWNENTRYEXISTENCE.TypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'editVisible' attribute on EditButtons at APDDropdownEntryRulePopup.pcf: line 40, column 57
    function visible_0 () : java.lang.Boolean {
      return currentRule.Edition != edition
    }
    
    // 'visible' attribute on ToolbarButton (id=Delete) at APDDropdownEntryRulePopup.pcf: line 45, column 73
    function visible_2 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and currentRule != null
    }
    
    // 'visible' attribute on InputSet at APDDropdownEntryRulePopup.pcf: line 55, column 65
    function visible_20 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    // 'visible' attribute on TextInput (id=dropdownEntryLabel_Input) at APDDropdownEntryRulePopup.pcf: line 53, column 54
    function visible_4 () : java.lang.Boolean {
      return dropdownEntry.Name.HasContent
    }
    
    override property get CurrentLocation () : pcf.APDDropdownEntryRulePopup {
      return super.CurrentLocation as pcf.APDDropdownEntryRulePopup
    }
    
    property get currentRule () : APDDropdownEntryRule {
      return getVariableValue("currentRule", 0) as APDDropdownEntryRule
    }
    
    property set currentRule ($arg :  APDDropdownEntryRule) {
      setVariableValue("currentRule", 0, $arg)
    }
    
    property get dropdownEntry () : APDDropdownEntry {
      return getVariableValue("dropdownEntry", 0) as APDDropdownEntry
    }
    
    property set dropdownEntry ($arg :  APDDropdownEntry) {
      setVariableValue("dropdownEntry", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get rule () : APDDropdownEntryRule {
      return getVariableValue("rule", 0) as APDDropdownEntryRule
    }
    
    property set rule ($arg :  APDDropdownEntryRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get ruleType () : APDRuleType {
      return getVariableValue("ruleType", 0) as APDRuleType
    }
    
    property set ruleType ($arg :  APDRuleType) {
      setVariableValue("ruleType", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    function initialise() {
      if (currentRule.Edition != edition) { // there is not a rule for the current edition
        if (currentRule == null) { // there is no rule
          rule = buildNewRule(edition)
        } else { // there is a rule already of a previous edition
          rule = currentRule.copyToNewEdition(edition) as APDDropdownEntryRule
          dropdownEntry.Attribute.addToRules(rule)
        }
      } else if (currentRule == null) { // there is no rule (or edition!)
        rule = buildNewRule(null) // this builds a base rule
      } else { // there is a rule for the current edition
        rule = currentRule
      }
    }
    
    private function buildNewRule(e : APDEdition) : APDDropdownEntryRule {
      var newRule = dropdownEntry.createAndAddRule(ruleType)
      newRule.Edition = e
      return newRule
    }
    
    function removeUneditedCopy() {
      // when the rule is copied for display and potential editing ...
      if (not CurrentLocation.InEditMode and currentRule != rule) {
        dropdownEntry.Attribute.removeFromRules(rule)
      }
    }
    
    
  }
  
  
}