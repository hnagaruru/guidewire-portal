package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDTagPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDTagPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (container :  gw.apd.model.APDTagContainer, startInEditMode :  boolean) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=APDTagPopup) at APDTagPopup.pcf: line 11, column 63
    function beforeCommit_23 (pickedValue :  java.lang.Object) : void {
      container.TagRules.each(\rule -> rule.removeIfUnnecessary())
    }
    
    // 'canEdit' attribute on Popup (id=APDTagPopup) at APDTagPopup.pcf: line 11, column 63
    function canEdit_24 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // EditButtons at APDTagPopup.pcf: line 22, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDTagPopup.pcf: line 30, column 59
    function valueRoot_3 () : java.lang.Object {
      return container
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDTagPopup.pcf: line 30, column 59
    function value_2 () : java.lang.String {
      return container.ContainerName
    }
    
    // 'visible' attribute on TextInput (id=attributeLabel_Input) at APDTagPopup.pcf: line 30, column 59
    function visible_1 () : java.lang.Boolean {
      return container.ContainerName.HasContent
    }
    
    override property get CurrentLocation () : pcf.APDTagPopup {
      return super.CurrentLocation as pcf.APDTagPopup
    }
    
    property get container () : gw.apd.model.APDTagContainer {
      return getVariableValue("container", 0) as gw.apd.model.APDTagContainer
    }
    
    property set container ($arg :  gw.apd.model.APDTagContainer) {
      setVariableValue("container", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=TagName_Cell) at APDTagPopup.pcf: line 72, column 53
    function valueRoot_10 () : java.lang.Object {
      return rule.TagType
    }
    
    // 'value' attribute on TextCell (id=TagName_Cell) at APDTagPopup.pcf: line 72, column 53
    function value_9 () : java.lang.String {
      return rule.TagType.DisplayName
    }
    
    property get rule () : APDRule {
      return getIteratedValue(2) as APDRule
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=tagTypeAdd) at APDTagPopup.pcf: line 50, column 72
    function label_6 () : java.lang.Object {
      return tagType.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=tagTypeAdd) at APDTagPopup.pcf: line 50, column 72
    function toCreateAndAdd_7 (CheckedValues :  Object[]) : java.lang.Object {
      return container.createAndAddTag(tagType)
    }
    
    property get tagType () : APDTagType {
      return getIteratedValue(2) as APDTagType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDTagPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at APDTagPopup.pcf: line 100, column 51
    function def_onEnter_21 (def :  pcf.APDRuleDV) : void {
      def.onEnter(ruleDetails, null)
    }
    
    // 'def' attribute on PanelRef at APDTagPopup.pcf: line 100, column 51
    function def_refreshVariables_22 (def :  pcf.APDRuleDV) : void {
      def.refreshVariables(ruleDetails, null)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultTagValue_Input) at APDTagPopup.pcf: line 90, column 51
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleDetails.DefaultTagValue = (__VALUE_TO_SET as APDTagApplicability)
    }
    
    // 'toRemove' attribute on RowIterator (id=TagRulesLV) at APDTagPopup.pcf: line 65, column 37
    function toRemove_12 (rule :  APDRule) : void {
      rule.remove()
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultTagValue_Input) at APDTagPopup.pcf: line 90, column 51
    function valueRoot_16 () : java.lang.Object {
      return ruleDetails
    }
    
    // 'value' attribute on RowIterator (id=TagRulesLV) at APDTagPopup.pcf: line 65, column 37
    function value_13 () : APDRule[] {
      return container.TagRules
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultTagValue_Input) at APDTagPopup.pcf: line 90, column 51
    function value_14 () : APDTagApplicability {
      return ruleDetails.DefaultTagValue
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDTagPopup.pcf: line 96, column 97
    function value_19 () : java.lang.String {
      return gw.apd.web.APDRulePopupHelper.getRuleDisplayDescription(ruleDetails)
    }
    
    // 'value' attribute on AddMenuItemIterator at APDTagPopup.pcf: line 45, column 42
    function value_8 () : APDTagType[] {
      return container.AvailableTagTypes
    }
    
    // 'valueType' attribute on TypeKeyInput (id=DefaultTagValue_Input) at APDTagPopup.pcf: line 90, column 51
    function verifyValueType_18 () : void {
      var __valueTypeArg : APDTagApplicability
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get ruleDetails () : APDRule {
      return getCurrentSelection(1) as APDRule
    }
    
    property set ruleDetails ($arg :  APDRule) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}