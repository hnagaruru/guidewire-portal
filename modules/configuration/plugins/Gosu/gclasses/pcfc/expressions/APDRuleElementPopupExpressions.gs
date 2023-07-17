package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleElementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleElementPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleElementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleElementPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rule :  APDRule, element :  APDRuleElement, startInEditMode :  boolean) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=APDRuleElementPopup) at APDRuleElementPopup.pcf: line 11, column 67
    function afterCancel_134 () : void {
      if (element.RuleConditions.IsEmpty) {rule.removeElement(element)}
    }
    
    // 'canEdit' attribute on Popup (id=APDRuleElementPopup) at APDRuleElementPopup.pcf: line 11, column 67
    function canEdit_135 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'value' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDRuleElementPopup.pcf: line 67, column 111
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.DefaultBitValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.DefaultCodeValue = (__VALUE_TO_SET as APDDropdownEntry)
    }
    
    // 'value' attribute on DateInput (id=DefaultDateValue_Input) at APDRuleElementPopup.pcf: line 87, column 64
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.DefaultDateValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDRuleElementPopup.pcf: line 98, column 113
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.DefaultDecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=DefaultIntegerValue_Input) at APDRuleElementPopup.pcf: line 109, column 67
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.DefaultIntegerValue = (__VALUE_TO_SET as Integer)
    }
    
    // 'value' attribute on TextInput (id=DefaultStringValue_Input) at APDRuleElementPopup.pcf: line 118, column 111
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.DefaultStringValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDRuleElementPopup.pcf: line 131, column 48
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.Existence = (__VALUE_TO_SET as APDDataExistenceType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultTagValue_Input) at APDRuleElementPopup.pcf: line 143, column 47
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      element.DefaultTagValue = (__VALUE_TO_SET as APDTagApplicability)
    }
    
    // 'initialValue' attribute on Variable at APDRuleElementPopup.pcf: line 26, column 28
    function initialValue_0 () : APDAttribute {
      if (rule typeis APDAttributeRule) return rule.Attribute else return null
    }
    
    // 'initialValue' attribute on Variable at APDRuleElementPopup.pcf: line 30, column 25
    function initialValue_1 () : APDClause {
      if (rule typeis APDClauseRule) return rule.Clause else return null
    }
    
    // 'initialValue' attribute on Variable at APDRuleElementPopup.pcf: line 34, column 32
    function initialValue_2 () : APDDropdownEntry {
      if (rule typeis APDDropdownEntryRule) return rule.DropdownEntry else return null
    }
    
    // 'label' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDRuleElementPopup.pcf: line 67, column 111
    function label_20 () : java.lang.Object {
      return helper.getResultingLabel(rule)
    }
    
    // EditButtons at APDRuleElementPopup.pcf: line 40, column 23
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function sortValue_91 (condition :  APDRuleCondition) : java.lang.Object {
      return condition.Target
    }
    
    // 'value' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function sortValue_92 (condition :  APDRuleCondition) : java.lang.Object {
      return condition.Operator
    }
    
    // 'title' attribute on Popup (id=APDRuleElementPopup) at APDRuleElementPopup.pcf: line 11, column 67
    static function title_137 (element :  APDRuleElement, rule :  APDRule, startInEditMode :  boolean) : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRulePopupTitle(rule)
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=RuleConditions) at APDRuleElementPopup.pcf: line 169, column 44
    function toCreateAndAdd_131 () : APDRuleCondition {
      return element.createAndAddRuleCondition()
    }
    
    // 'toRemove' attribute on RowIterator (id=RuleConditions) at APDRuleElementPopup.pcf: line 169, column 44
    function toRemove_132 (condition :  APDRuleCondition) : void {
      element.removeFromRuleConditions(condition)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function valueRange_32 () : java.lang.Object {
      return attribute.CodesToUse
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDRuleElementPopup.pcf: line 131, column 48
    function valueRange_75 () : java.lang.Object {
      return rule.ExistenceOptions
    }
    
    // 'value' attribute on TextInput (id=clauseLabel_Input) at APDRuleElementPopup.pcf: line 53, column 47
    function valueRoot_11 () : java.lang.Object {
      return clause
    }
    
    // 'value' attribute on TextInput (id=dropdownEntryLabel_Input) at APDRuleElementPopup.pcf: line 58, column 54
    function valueRoot_16 () : java.lang.Object {
      return dropdownEntry
    }
    
    // 'value' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDRuleElementPopup.pcf: line 67, column 111
    function valueRoot_23 () : java.lang.Object {
      return element
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDRuleElementPopup.pcf: line 48, column 107
    function valueRoot_6 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on TextInput (id=clauseLabel_Input) at APDRuleElementPopup.pcf: line 53, column 47
    function value_10 () : java.lang.String {
      return clause.Name
    }
    
    // 'value' attribute on RowIterator (id=RuleConditions) at APDRuleElementPopup.pcf: line 169, column 44
    function value_133 () : APDRuleCondition[] {
      return element.RuleConditions
    }
    
    // 'value' attribute on TextInput (id=dropdownEntryLabel_Input) at APDRuleElementPopup.pcf: line 58, column 54
    function value_15 () : java.lang.String {
      return dropdownEntry.Name
    }
    
    // 'value' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDRuleElementPopup.pcf: line 67, column 111
    function value_21 () : java.lang.Boolean {
      return element.DefaultBitValue
    }
    
    // 'value' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function value_29 () : APDDropdownEntry {
      return element.DefaultCodeValue
    }
    
    // 'value' attribute on DateInput (id=DefaultDateValue_Input) at APDRuleElementPopup.pcf: line 87, column 64
    function value_40 () : java.util.Date {
      return element.DefaultDateValue
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDRuleElementPopup.pcf: line 98, column 113
    function value_48 () : java.math.BigDecimal {
      return element.DefaultDecimalValue
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDRuleElementPopup.pcf: line 48, column 107
    function value_5 () : java.lang.String {
      return attribute.Label
    }
    
    // 'value' attribute on TextInput (id=DefaultIntegerValue_Input) at APDRuleElementPopup.pcf: line 109, column 67
    function value_56 () : Integer {
      return element.DefaultIntegerValue
    }
    
    // 'value' attribute on TextInput (id=DefaultStringValue_Input) at APDRuleElementPopup.pcf: line 118, column 111
    function value_64 () : java.lang.String {
      return element.DefaultStringValue
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDRuleElementPopup.pcf: line 131, column 48
    function value_72 () : APDDataExistenceType {
      return element.Existence
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultTagValue_Input) at APDRuleElementPopup.pcf: line 143, column 47
    function value_82 () : APDTagApplicability {
      return element.DefaultTagValue
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDRuleElementPopup.pcf: line 150, column 71
    function value_89 () : java.lang.String {
      return helper.getRuleElementDisplayDescription(element)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function verifyValueRangeIsAllowedType_33 ($$arg :  APDDropdownEntry[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function verifyValueRangeIsAllowedType_33 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function verifyValueRangeIsAllowedType_33 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDRuleElementPopup.pcf: line 131, column 48
    function verifyValueRangeIsAllowedType_76 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDRuleElementPopup.pcf: line 131, column 48
    function verifyValueRangeIsAllowedType_76 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDRuleElementPopup.pcf: line 131, column 48
    function verifyValueRangeIsAllowedType_76 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function verifyValueRange_34 () : void {
      var __valueRangeArg = attribute.CodesToUse
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_33(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDRuleElementPopup.pcf: line 131, column 48
    function verifyValueRange_77 () : void {
      var __valueRangeArg = rule.ExistenceOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_76(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=DefaultTagValue_Input) at APDRuleElementPopup.pcf: line 143, column 47
    function verifyValueType_87 () : void {
      var __valueTypeArg : APDTagApplicability
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=dropdownEntryLabel_Input) at APDRuleElementPopup.pcf: line 58, column 54
    function visible_14 () : java.lang.Boolean {
      return dropdownEntry.Name.HasContent
    }
    
    // 'visible' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDRuleElementPopup.pcf: line 67, column 111
    function visible_19 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BOOLEAN and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on RangeInput (id=DefaultCodeValue_Input) at APDRuleElementPopup.pcf: line 78, column 111
    function visible_27 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_TYPEKEY and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on DateInput (id=DefaultDateValue_Input) at APDRuleElementPopup.pcf: line 87, column 64
    function visible_38 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_DATE
    }
    
    // 'visible' attribute on TextInput (id=attributeLabel_Input) at APDRuleElementPopup.pcf: line 48, column 107
    function visible_4 () : java.lang.Boolean {
      return rule.Subtype == typekey.APDRule.TC_APDATTRIBUTERULE and attribute.Label.HasContent
    }
    
    // 'visible' attribute on TextInput (id=DefaultDecimalValue_Input) at APDRuleElementPopup.pcf: line 98, column 113
    function visible_46 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BIGDECIMAL or attribute.Type == APDFieldType.TC_MONEY
    }
    
    // 'visible' attribute on TextInput (id=DefaultIntegerValue_Input) at APDRuleElementPopup.pcf: line 109, column 67
    function visible_54 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_INTEGER
    }
    
    // 'visible' attribute on TextInput (id=DefaultStringValue_Input) at APDRuleElementPopup.pcf: line 118, column 111
    function visible_62 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_VARCHAR and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on InputSet at APDRuleElementPopup.pcf: line 60, column 141
    function visible_70 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_DEFAULT or rule.RuleType == APDRuleType.TC_MIN or rule.RuleType == APDRuleType.TC_MAX
    }
    
    // 'visible' attribute on InputSet at APDRuleElementPopup.pcf: line 123, column 65
    function visible_80 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    // 'visible' attribute on InputSet at APDRuleElementPopup.pcf: line 136, column 59
    function visible_88 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TextInput (id=clauseLabel_Input) at APDRuleElementPopup.pcf: line 53, column 47
    function visible_9 () : java.lang.Boolean {
      return clause.Name.HasContent
    }
    
    override property get CurrentLocation () : pcf.APDRuleElementPopup {
      return super.CurrentLocation as pcf.APDRuleElementPopup
    }
    
    property get attribute () : APDAttribute {
      return getVariableValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setVariableValue("attribute", 0, $arg)
    }
    
    property get clause () : APDClause {
      return getVariableValue("clause", 0) as APDClause
    }
    
    property set clause ($arg :  APDClause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get dropdownEntry () : APDDropdownEntry {
      return getVariableValue("dropdownEntry", 0) as APDDropdownEntry
    }
    
    property set dropdownEntry ($arg :  APDDropdownEntry) {
      setVariableValue("dropdownEntry", 0, $arg)
    }
    
    property get element () : APDRuleElement {
      return getVariableValue("element", 0) as APDRuleElement
    }
    
    property set element ($arg :  APDRuleElement) {
      setVariableValue("element", 0, $arg)
    }
    
    property get helper () : gw.apd.web.APDRulePopupHelper {
      return getVariableValue("helper", 0) as gw.apd.web.APDRulePopupHelper
    }
    
    property set helper ($arg :  gw.apd.web.APDRulePopupHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get rule () : APDRule {
      return getVariableValue("rule", 0) as APDRule
    }
    
    property set rule ($arg :  APDRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleElementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRuleElementPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_110 (def :  pcf.APDRuleConditionValue_bigdecimal) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_112 (def :  pcf.APDRuleConditionValue_boolean) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_114 (def :  pcf.APDRuleConditionValue_date) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_116 (def :  pcf.APDRuleConditionValue_default) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_118 (def :  pcf.APDRuleConditionValue_integer) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_120 (def :  pcf.APDRuleConditionValue_location) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_122 (def :  pcf.APDRuleConditionValue_money) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_124 (def :  pcf.APDRuleConditionValue_typekey) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_onEnter_126 (def :  pcf.APDRuleConditionValue_varchar) : void {
      def.onEnter(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_111 (def :  pcf.APDRuleConditionValue_bigdecimal) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_113 (def :  pcf.APDRuleConditionValue_boolean) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_115 (def :  pcf.APDRuleConditionValue_date) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_117 (def :  pcf.APDRuleConditionValue_default) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_119 (def :  pcf.APDRuleConditionValue_integer) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_121 (def :  pcf.APDRuleConditionValue_location) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_123 (def :  pcf.APDRuleConditionValue_money) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_125 (def :  pcf.APDRuleConditionValue_typekey) : void {
      def.refreshVariables(condition)
    }
    
    // 'def' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function def_refreshVariables_127 (def :  pcf.APDRuleConditionValue_varchar) : void {
      def.refreshVariables(condition)
    }
    
    // 'value' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Operator = (__VALUE_TO_SET as APDRuleConditionOperator)
    }
    
    // 'value' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Target = (__VALUE_TO_SET as entity.KeyableBean)
    }
    
    // 'editable' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function editable_109 () : java.lang.Boolean {
      return condition.IsAttributeCondition
    }
    
    // 'mode' attribute on ModalCellRef at APDRuleElementPopup.pcf: line 197, column 50
    function mode_128 () : java.lang.Object {
      return condition.Attribute.Type
    }
    
    // 'optionLabel' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function optionLabel_96 (VALUE :  entity.KeyableBean) : java.lang.String {
      return helper.getRuleConditionTargetLabel(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function valueRange_105 () : java.lang.Object {
      return condition.ApplicableOperators
    }
    
    // 'valueRange' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function valueRange_97 () : java.lang.Object {
      return rule.CandidateDataRuleBeans
    }
    
    // 'value' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function valueRoot_95 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function value_102 () : APDRuleConditionOperator {
      return condition.Operator
    }
    
    // 'value' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function value_93 () : entity.KeyableBean {
      return condition.Target
    }
    
    // 'valueRange' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function verifyValueRangeIsAllowedType_106 ($$arg :  APDRuleConditionOperator[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function verifyValueRangeIsAllowedType_106 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function verifyValueRangeIsAllowedType_106 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function verifyValueRangeIsAllowedType_98 ($$arg :  entity.KeyableBean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function verifyValueRangeIsAllowedType_98 ($$arg :  gw.api.database.IQueryBeanResult<entity.KeyableBean>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function verifyValueRangeIsAllowedType_98 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function verifyValueRange_107 () : void {
      var __valueRangeArg = condition.ApplicableOperators
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_106(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Target_Cell) at APDRuleElementPopup.pcf: line 180, column 48
    function verifyValueRange_99 () : void {
      var __valueRangeArg = rule.CandidateDataRuleBeans
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_98(__valueRangeArg)
    }
    
    // 'valueVisible' attribute on RangeCell (id=Operator_Cell) at APDRuleElementPopup.pcf: line 191, column 66
    function visible_101 () : java.lang.Boolean {
      return condition.AttributeOrClauseTarget
    }
    
    property get condition () : APDRuleCondition {
      return getIteratedValue(1) as APDRuleCondition
    }
    
    
  }
  
  
}