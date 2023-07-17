package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleDVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddButton) at APDRuleDV.pcf: line 35, column 69
    function action_2 () : void {
      APDRuleElementPopup.push(rule, rule.createAndAddElement(), CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on ToolbarButton (id=AddButton) at APDRuleDV.pcf: line 35, column 69
    function action_dest_3 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, rule.createAndAddElement(), CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at APDRuleDV.pcf: line 16, column 28
    function initialValue_0 () : APDAttribute {
      if (rule typeis APDAttributeRule) return rule.Attribute else return null
    }
    
    // 'label' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function label_5 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRuleTypeString(rule)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRuleDV.pcf: line 49, column 30
    function sortBy_4 (element :  entity.APDRuleElement) : java.lang.Object {
      return element.Sequence
    }
    
    // 'toRemove' attribute on RowIterator (id=ElementLV) at APDRuleDV.pcf: line 46, column 49
    function toRemove_78 (element :  entity.APDRuleElement) : void {
      rule.removeElement(element)
    }
    
    // 'value' attribute on RowIterator (id=ElementLV) at APDRuleDV.pcf: line 46, column 49
    function value_79 () : entity.APDRuleElement[] {
      return rule.RuleElements
    }
    
    // 'visible' attribute on ToolbarButton (id=AddButton) at APDRuleDV.pcf: line 35, column 69
    function visible_1 () : java.lang.Boolean {
      return rule.CandidateDataRuleAttributes.HasElements
    }
    
    // 'visible' attribute on TextCell (id=DefaultDecimalValue_Cell) at APDRuleDV.pcf: line 97, column 203
    function visible_10 () : java.lang.Boolean {
      return (attribute.Type == APDFieldType.TC_BIGDECIMAL or attribute.Type == APDFieldType.TC_MONEY) and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TextCell (id=DefaultIntegerValue_Cell) at APDRuleDV.pcf: line 107, column 155
    function visible_11 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_INTEGER and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TextCell (id=DefaultStringValue_Cell) at APDRuleDV.pcf: line 115, column 155
    function visible_12 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_VARCHAR and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TypeKeyCell (id=DefaultTagValue_Cell) at APDRuleDV.pcf: line 124, column 64
    function visible_13 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on ButtonCell (id=MoveButton_Cell) at APDRuleDV.pcf: line 135, column 58
    function visible_14 () : java.lang.Boolean {
      return rule.RuleElements.Count > 1
    }
    
    // 'visible' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function visible_6 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    // 'visible' attribute on TextCell (id=DefaultBitValue_Cell) at APDRuleDV.pcf: line 71, column 155
    function visible_7 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BOOLEAN and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function visible_8 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_TYPEKEY and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on DateCell (id=DefaultDateValue_Cell) at APDRuleDV.pcf: line 88, column 153
    function visible_9 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_DATE and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    property get attribute () : APDAttribute {
      return getVariableValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setVariableValue("attribute", 0, $arg)
    }
    
    property get edition () : APDEdition {
      return getRequireValue("edition", 0) as APDEdition
    }
    
    property set edition ($arg :  APDEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get rule () : APDRule {
      return getRequireValue("rule", 0) as APDRule
    }
    
    property set rule ($arg :  APDRule) {
      setRequireValue("rule", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRuleDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function action_17 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultBitValue_Cell) at APDRuleDV.pcf: line 71, column 155
    function action_25 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function action_30 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on DateCell (id=DefaultDateValue_Cell) at APDRuleDV.pcf: line 88, column 153
    function action_39 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultDecimalValue_Cell) at APDRuleDV.pcf: line 97, column 203
    function action_45 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultIntegerValue_Cell) at APDRuleDV.pcf: line 107, column 155
    function action_51 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultStringValue_Cell) at APDRuleDV.pcf: line 115, column 155
    function action_57 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TypeKeyCell (id=DefaultTagValue_Cell) at APDRuleDV.pcf: line 124, column 64
    function action_63 () : void {
      APDRuleElementPopup.push(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRuleDV.pcf: line 140, column 100
    function action_74 () : void {
      element.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRuleElement)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRuleDV.pcf: line 145, column 102
    function action_76 () : void {
      element.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRuleElement)
    }
    
    // 'action' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function action_dest_18 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultBitValue_Cell) at APDRuleDV.pcf: line 71, column 155
    function action_dest_26 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function action_dest_31 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on DateCell (id=DefaultDateValue_Cell) at APDRuleDV.pcf: line 88, column 153
    function action_dest_40 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultDecimalValue_Cell) at APDRuleDV.pcf: line 97, column 203
    function action_dest_46 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultIntegerValue_Cell) at APDRuleDV.pcf: line 107, column 155
    function action_dest_52 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=DefaultStringValue_Cell) at APDRuleDV.pcf: line 115, column 155
    function action_dest_58 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TypeKeyCell (id=DefaultTagValue_Cell) at APDRuleDV.pcf: line 124, column 64
    function action_dest_64 () : pcf.api.Destination {
      return pcf.APDRuleElementPopup.createDestination(rule, element, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRuleDV.pcf: line 140, column 100
    function available_73 () : java.lang.Boolean {
      return element.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRuleDV.pcf: line 145, column 102
    function available_75 () : java.lang.Boolean {
      return element.Sequence != rule.RuleElements.Count
    }
    
    // 'label' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function label_19 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRuleTypeString(rule)
    }
    
    // 'valueRange' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function valueRange_34 () : java.lang.Object {
      return attribute.CodesToUse
    }
    
    // 'value' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function valueRoot_21 () : java.lang.Object {
      return element
    }
    
    // 'value' attribute on TextCell (id=Priority_Cell) at APDRuleDV.pcf: line 55, column 53
    function value_15 () : java.lang.String {
      return element.Sequence.toString()
    }
    
    // 'value' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function value_20 () : typekey.APDDataExistenceType {
      return element.Existence
    }
    
    // 'value' attribute on TextCell (id=DefaultBitValue_Cell) at APDRuleDV.pcf: line 71, column 155
    function value_27 () : java.lang.String {
      return element.DefaultBitValue.toString()
    }
    
    // 'value' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function value_32 () : entity.APDDropdownEntry {
      return element.DefaultCodeValue
    }
    
    // 'value' attribute on DateCell (id=DefaultDateValue_Cell) at APDRuleDV.pcf: line 88, column 153
    function value_41 () : java.util.Date {
      return element.DefaultDateValue
    }
    
    // 'value' attribute on TextCell (id=DefaultDecimalValue_Cell) at APDRuleDV.pcf: line 97, column 203
    function value_47 () : java.math.BigDecimal {
      return element.DefaultDecimalValue
    }
    
    // 'value' attribute on TextCell (id=DefaultIntegerValue_Cell) at APDRuleDV.pcf: line 107, column 155
    function value_53 () : Integer {
      return element.DefaultIntegerValue
    }
    
    // 'value' attribute on TextCell (id=DefaultStringValue_Cell) at APDRuleDV.pcf: line 115, column 155
    function value_59 () : java.lang.String {
      return element.DefaultStringValue
    }
    
    // 'value' attribute on TypeKeyCell (id=DefaultTagValue_Cell) at APDRuleDV.pcf: line 124, column 64
    function value_65 () : APDTagApplicability {
      return element.DefaultTagValue
    }
    
    // 'value' attribute on TextCell (id=ConditionDisplay_Cell) at APDRuleDV.pcf: line 129, column 49
    function value_70 () : java.lang.String {
      return element.ConditionLabel
    }
    
    // 'valueRange' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function verifyValueRangeIsAllowedType_35 ($$arg :  entity.APDDropdownEntry[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function verifyValueRangeIsAllowedType_35 ($$arg :  gw.api.database.IQueryBeanResult<entity.APDDropdownEntry>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function verifyValueRange_36 () : void {
      var __valueRangeArg = attribute.CodesToUse
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=DefaultTagValue_Cell) at APDRuleDV.pcf: line 124, column 64
    function verifyValueType_69 () : void {
      var __valueTypeArg : APDTagApplicability
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyCell (id=Existence_Cell) at APDRuleDV.pcf: line 64, column 70
    function visible_22 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    // 'visible' attribute on TextCell (id=DefaultBitValue_Cell) at APDRuleDV.pcf: line 71, column 155
    function visible_28 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BOOLEAN and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on RangeCell (id=DefaultCodeValue_Cell) at APDRuleDV.pcf: line 81, column 156
    function visible_37 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_TYPEKEY and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on DateCell (id=DefaultDateValue_Cell) at APDRuleDV.pcf: line 88, column 153
    function visible_43 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_DATE and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TextCell (id=DefaultDecimalValue_Cell) at APDRuleDV.pcf: line 97, column 203
    function visible_49 () : java.lang.Boolean {
      return (attribute.Type == APDFieldType.TC_BIGDECIMAL or attribute.Type == APDFieldType.TC_MONEY) and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TextCell (id=DefaultIntegerValue_Cell) at APDRuleDV.pcf: line 107, column 155
    function visible_55 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_INTEGER and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TextCell (id=DefaultStringValue_Cell) at APDRuleDV.pcf: line 115, column 155
    function visible_61 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_VARCHAR and rule.RuleType != APDRuleType.TC_EXISTENCE and rule.RuleType != APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on TypeKeyCell (id=DefaultTagValue_Cell) at APDRuleDV.pcf: line 124, column 64
    function visible_67 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_TAG
    }
    
    // 'visible' attribute on ButtonCell (id=MoveButton_Cell) at APDRuleDV.pcf: line 135, column 58
    function visible_77 () : java.lang.Boolean {
      return rule.RuleElements.Count > 1
    }
    
    property get element () : entity.APDRuleElement {
      return getIteratedValue(1) as entity.APDRuleElement
    }
    
    
  }
  
  
}