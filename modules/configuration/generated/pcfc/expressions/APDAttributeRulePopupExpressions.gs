package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDAttributeRulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDAttributeRulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (currentRule :  APDAttributeRule, attribute :  APDAttribute, ruleType :  APDRuleType, edition :  APDProductLineEdition, openForEdit :  boolean) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Delete) at APDAttributeRulePopup.pcf: line 63, column 73
    function action_4 () : void {
      attribute.removeFromRules(rule); CurrentLocation.commit()
    }
    
    // 'afterEnter' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 13, column 108
    function afterEnter_106 () : void {
      initialise()
    }
    
    // 'beforeCancel' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 13, column 108
    function beforeCancel_107 () : void {
      removeUneditedCopy()
    }
    
    // 'beforeCommit' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 13, column 108
    function beforeCommit_108 (pickedValue :  java.lang.Object) : void {
      rule.adjustDefaultValues(valueType, selectedAttributes); rule.removeIfUnnecessary()
    }
    
    // 'canEdit' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 13, column 108
    function canEdit_109 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at APDAttributeRulePopup.pcf: line 199, column 196
    function def_onEnter_104 (def :  pcf.APDRuleDV) : void {
      def.onEnter(rule, edition)
    }
    
    // 'def' attribute on InputSetRef at APDAttributeRulePopup.pcf: line 193, column 101
    function def_onEnter_99 (def :  pcf.APDRuleEditionInputSet) : void {
      def.onEnter(CurrentLocation.InEditMode ? rule : currentRule, edition)
    }
    
    // 'def' attribute on InputSetRef at APDAttributeRulePopup.pcf: line 193, column 101
    function def_refreshVariables_100 (def :  pcf.APDRuleEditionInputSet) : void {
      def.refreshVariables(CurrentLocation.InEditMode ? rule : currentRule, edition)
    }
    
    // 'def' attribute on PanelRef at APDAttributeRulePopup.pcf: line 199, column 196
    function def_refreshVariables_105 (def :  pcf.APDRuleDV) : void {
      def.refreshVariables(rule, edition)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=ValueType_Input) at APDAttributeRulePopup.pcf: line 82, column 41
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueType = (__VALUE_TO_SET as APDRuleValueType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Function_Input) at APDAttributeRulePopup.pcf: line 93, column 53
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultCalculatedValue.Func = (__VALUE_TO_SET as typekey.APDFunctionType)
    }
    
    // 'value' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAttributes = (__VALUE_TO_SET as entity.APDAttribute[])
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 119, column 115
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultDecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDAttributeRulePopup.pcf: line 127, column 113
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultBitValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=DefaultDateValue_Input) at APDAttributeRulePopup.pcf: line 135, column 66
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultDateValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=DefaultStringValue_Input) at APDAttributeRulePopup.pcf: line 143, column 113
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultStringValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DefaultIntegerValue_Input) at APDAttributeRulePopup.pcf: line 153, column 69
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultIntegerValue = (__VALUE_TO_SET as Integer)
    }
    
    // 'value' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultCodeValue = (__VALUE_TO_SET as APDDropdownEntry)
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 177, column 48
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultExistence = (__VALUE_TO_SET as APDDataExistenceType)
    }
    
    // 'editable' attribute on TypeKeyRadioInput (id=ValueType_Input) at APDAttributeRulePopup.pcf: line 82, column 41
    function editable_10 () : java.lang.Boolean {
      return canChangeValueType
    }
    
    // 'editable' attribute on DetailViewPanel at APDAttributeRulePopup.pcf: line 66, column 44
    function editable_101 () : java.lang.Boolean {
      return rule.Edition == edition
    }
    
    // 'initialValue' attribute on Variable at APDAttributeRulePopup.pcf: line 47, column 32
    function initialValue_0 () : APDRuleValueType {
      return APDRuleValueType.TC_FIXED
    }
    
    // EditButtons at APDAttributeRulePopup.pcf: line 58, column 57
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 119, column 115
    function label_31 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getDefaultValueLabel(rule)
    }
    
    // 'optionLabel' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function optionLabel_24 (VALUE :  entity.APDAttribute) : java.lang.String {
      return VALUE.QualifiedLabel
    }
    
    // 'startInEditMode' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 13, column 108
    function startInEditMode_110 () : java.lang.Boolean {
      return currentRule.Edition == edition
    }
    
    // 'title' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 13, column 108
    static function title_111 (attribute :  APDAttribute, currentRule :  APDAttributeRule, edition :  APDProductLineEdition, openForEdit :  boolean, ruleType :  APDRuleType) : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRulePopupTitle(ruleType, typekey.APDRule.TC_APDATTRIBUTERULE)
    }
    
    // 'valueRange' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function valueRange_25 () : java.lang.Object {
      return attribute.FunctionArgumentCandidates
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function valueRange_75 () : java.lang.Object {
      return attribute.CodesToUse
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 177, column 48
    function valueRange_87 () : java.lang.Object {
      return APDDataExistenceType.TF_ATTRIBUTEEXISTENCE.TypeKeys
    }
    
    // 'value' attribute on TypeKeyInput (id=Function_Input) at APDAttributeRulePopup.pcf: line 93, column 53
    function valueRoot_20 () : java.lang.Object {
      return rule.DefaultCalculatedValue
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 119, column 115
    function valueRoot_34 () : java.lang.Object {
      return rule
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDAttributeRulePopup.pcf: line 72, column 51
    function valueRoot_7 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=ValueType_Input) at APDAttributeRulePopup.pcf: line 82, column 41
    function value_12 () : APDRuleValueType {
      return valueType
    }
    
    // 'value' attribute on TypeKeyInput (id=Function_Input) at APDAttributeRulePopup.pcf: line 93, column 53
    function value_18 () : typekey.APDFunctionType {
      return rule.DefaultCalculatedValue.Func
    }
    
    // 'value' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function value_22 () : entity.APDAttribute[] {
      return selectedAttributes
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 119, column 115
    function value_32 () : java.math.BigDecimal {
      return rule.DefaultDecimalValue
    }
    
    // 'value' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDAttributeRulePopup.pcf: line 127, column 113
    function value_40 () : java.lang.Boolean {
      return rule.DefaultBitValue
    }
    
    // 'value' attribute on DateInput (id=DefaultDateValue_Input) at APDAttributeRulePopup.pcf: line 135, column 66
    function value_48 () : java.util.Date {
      return rule.DefaultDateValue
    }
    
    // 'value' attribute on TextInput (id=DefaultStringValue_Input) at APDAttributeRulePopup.pcf: line 143, column 113
    function value_56 () : java.lang.String {
      return rule.DefaultStringValue
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDAttributeRulePopup.pcf: line 72, column 51
    function value_6 () : java.lang.String {
      return attribute.Label
    }
    
    // 'value' attribute on TextInput (id=DefaultIntegerValue_Input) at APDAttributeRulePopup.pcf: line 153, column 69
    function value_64 () : Integer {
      return rule.DefaultIntegerValue
    }
    
    // 'value' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function value_72 () : APDDropdownEntry {
      return rule.DefaultCodeValue
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 177, column 48
    function value_84 () : APDDataExistenceType {
      return rule.DefaultExistence
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDAttributeRulePopup.pcf: line 184, column 95
    function value_93 () : java.lang.String {
      return gw.apd.web.APDRulePopupHelper.getRuleDisplayDescription(rule, valueType)
    }
    
    // 'value' attribute on TextInput (id=FunctionText_Input) at APDAttributeRulePopup.pcf: line 189, column 113
    function value_96 () : java.lang.String {
      return formatFunctionWithArguments()
    }
    
    // 'valueRange' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function verifyValueRangeIsAllowedType_26 ($$arg :  entity.APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.database.IQueryBeanResult<entity.APDAttribute>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function verifyValueRangeIsAllowedType_76 ($$arg :  APDDropdownEntry[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function verifyValueRangeIsAllowedType_76 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function verifyValueRangeIsAllowedType_76 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 177, column 48
    function verifyValueRangeIsAllowedType_88 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 177, column 48
    function verifyValueRangeIsAllowedType_88 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 177, column 48
    function verifyValueRangeIsAllowedType_88 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FunctionArguments_Input) at APDAttributeRulePopup.pcf: line 106, column 51
    function verifyValueRange_27 () : void {
      var __valueRangeArg = attribute.FunctionArgumentCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function verifyValueRange_77 () : void {
      var __valueRangeArg = attribute.CodesToUse
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_76(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 177, column 48
    function verifyValueRange_89 () : void {
      var __valueRangeArg = APDDataExistenceType.TF_ATTRIBUTEEXISTENCE.TypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_88(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyRadioInput (id=ValueType_Input) at APDAttributeRulePopup.pcf: line 82, column 41
    function verifyValueType_17 () : void {
      var __valueTypeArg : APDRuleValueType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'editVisible' attribute on EditButtons at APDAttributeRulePopup.pcf: line 58, column 57
    function visible_1 () : java.lang.Boolean {
      return currentRule.Edition != edition
    }
    
    // 'visible' attribute on PanelRef at APDAttributeRulePopup.pcf: line 199, column 196
    function visible_103 () : java.lang.Boolean {
      return rule.DefaultExistence != APDDataExistenceType.TC_HIDDEN and not(attribute.Type == APDFieldType.TC_TYPEKEY and {APDRuleType.TC_MIN, APDRuleType.TC_MAX}.contains(rule.RuleType))
    }
    
    // 'visible' attribute on TypeKeyRadioInput (id=ValueType_Input) at APDAttributeRulePopup.pcf: line 82, column 41
    function visible_11 () : java.lang.Boolean {
      return canBeCalculated
    }
    
    // 'visible' attribute on InputSet at APDAttributeRulePopup.pcf: line 86, column 67
    function visible_29 () : java.lang.Boolean {
      return valueType == APDRuleValueType.TC_CALCULATED
    }
    
    // 'visible' attribute on ToolbarButton (id=Delete) at APDAttributeRulePopup.pcf: line 63, column 73
    function visible_3 () : java.lang.Boolean {
      return CurrentLocation.InEditMode and currentRule != null
    }
    
    // 'visible' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 119, column 115
    function visible_30 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BIGDECIMAL or attribute.Type == APDFieldType.TC_MONEY
    }
    
    // 'visible' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDAttributeRulePopup.pcf: line 127, column 113
    function visible_38 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BOOLEAN and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on DateInput (id=DefaultDateValue_Input) at APDAttributeRulePopup.pcf: line 135, column 66
    function visible_46 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_DATE
    }
    
    // 'visible' attribute on TextInput (id=attributeLabel_Input) at APDAttributeRulePopup.pcf: line 72, column 51
    function visible_5 () : java.lang.Boolean {
      return attribute.Label.HasContent
    }
    
    // 'visible' attribute on TextInput (id=DefaultStringValue_Input) at APDAttributeRulePopup.pcf: line 143, column 113
    function visible_54 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_VARCHAR and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on TextInput (id=DefaultIntegerValue_Input) at APDAttributeRulePopup.pcf: line 153, column 69
    function visible_62 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_INTEGER
    }
    
    // 'visible' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 163, column 113
    function visible_70 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_TYPEKEY and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on InputSet at APDAttributeRulePopup.pcf: line 111, column 64
    function visible_81 () : java.lang.Boolean {
      return valueType == APDRuleValueType.TC_FIXED
    }
    
    // 'visible' attribute on InputSet at APDAttributeRulePopup.pcf: line 74, column 49
    function visible_82 () : java.lang.Boolean {
      return defaultValueInputsVisible
    }
    
    // 'visible' attribute on InputSet at APDAttributeRulePopup.pcf: line 169, column 65
    function visible_92 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    // 'visible' attribute on TextInput (id=FunctionText_Input) at APDAttributeRulePopup.pcf: line 189, column 113
    function visible_95 () : java.lang.Boolean {
      return valueType == APDRuleValueType.TC_CALCULATED and rule.DefaultCalculatedValue.Func != null
    }
    
    override property get CurrentLocation () : pcf.APDAttributeRulePopup {
      return super.CurrentLocation as pcf.APDAttributeRulePopup
    }
    
    property get allAttributes () : APDAttribute[] {
      return getVariableValue("allAttributes", 0) as APDAttribute[]
    }
    
    property set allAttributes ($arg :  APDAttribute[]) {
      setVariableValue("allAttributes", 0, $arg)
    }
    
    property get attribute () : APDAttribute {
      return getVariableValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setVariableValue("attribute", 0, $arg)
    }
    
    property get canBeCalculated () : boolean {
      return getVariableValue("canBeCalculated", 0) as java.lang.Boolean
    }
    
    property set canBeCalculated ($arg :  boolean) {
      setVariableValue("canBeCalculated", 0, $arg)
    }
    
    property get canChangeValueType () : boolean {
      return getVariableValue("canChangeValueType", 0) as java.lang.Boolean
    }
    
    property set canChangeValueType ($arg :  boolean) {
      setVariableValue("canChangeValueType", 0, $arg)
    }
    
    property get currentRule () : APDAttributeRule {
      return getVariableValue("currentRule", 0) as APDAttributeRule
    }
    
    property set currentRule ($arg :  APDAttributeRule) {
      setVariableValue("currentRule", 0, $arg)
    }
    
    property get defaultValueInputsVisible () : boolean {
      return getVariableValue("defaultValueInputsVisible", 0) as java.lang.Boolean
    }
    
    property set defaultValueInputsVisible ($arg :  boolean) {
      setVariableValue("defaultValueInputsVisible", 0, $arg)
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
    
    property get rule () : APDAttributeRule {
      return getVariableValue("rule", 0) as APDAttributeRule
    }
    
    property set rule ($arg :  APDAttributeRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get ruleType () : APDRuleType {
      return getVariableValue("ruleType", 0) as APDRuleType
    }
    
    property set ruleType ($arg :  APDRuleType) {
      setVariableValue("ruleType", 0, $arg)
    }
    
    property get selectedAttributes () : APDAttribute[] {
      return getVariableValue("selectedAttributes", 0) as APDAttribute[]
    }
    
    property set selectedAttributes ($arg :  APDAttribute[]) {
      setVariableValue("selectedAttributes", 0, $arg)
    }
    
    property get valueType () : APDRuleValueType {
      return getVariableValue("valueType", 0) as APDRuleValueType
    }
    
    property set valueType ($arg :  APDRuleValueType) {
      setVariableValue("valueType", 0, $arg)
    }
    
    function initialise() {
      if (currentRule.Edition != edition) { // there is not a rule for the current edition
        if (currentRule == null) { // there is no rule
          rule = buildNewRule(edition)
        } else { // there is a rule already of a previous edition
          rule = currentRule.copyToNewEdition(edition) as APDAttributeRule
          attribute.addToRules(rule)
        }
      } else if (currentRule == null) { // there is no rule (or edition!)
        rule = buildNewRule(null) // this builds a base rule
      } else { // there is a rule for the current edition
        rule = currentRule
      }
    
      canBeCalculated = attribute.SupportsCalculatedValue and rule.SupportsCalculatedValue
      if (canBeCalculated) {
        valueType = rule.DefaultCalculatedValue != null ? TC_CALCULATED : TC_FIXED
        allAttributes = attribute.FunctionArgumentCandidates
        selectedAttributes = rule.DefaultCalculatedValue.FunctionArguments*.Attribute
      
        if (attribute.IsOptionTerm) {
          canChangeValueType = false
          valueType = TC_CALCULATED
        }
      }
    
      defaultValueInputsVisible = {APDRuleType.TC_DEFAULT, APDRuleType.TC_MIN, APDRuleType.TC_MAX}.contains(rule.RuleType)
    }
    
    private function buildNewRule(e : APDEdition) : APDAttributeRule {
      var newRule = attribute.createAndAddRule(ruleType)
      newRule.Edition = e
      return newRule
    }
    
    function removeUneditedCopy() {
      // when the rule is copied for display and potential editing ...
      if (not CurrentLocation.InEditMode and currentRule != rule) {
        attribute.removeFromRules(rule)
      }
    }
    
    function formatFunctionWithArguments() : String {
      var argLabels = selectedAttributes
          .map(\attr -> attr.QualifiedLabel)
          .join(", ")
      return "${rule.DefaultCalculatedValue.Func.DisplayName}(${argLabels})"
    }
    
    
  }
  
  
}