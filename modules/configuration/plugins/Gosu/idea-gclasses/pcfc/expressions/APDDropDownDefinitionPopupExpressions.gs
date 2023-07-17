package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropDownDefinitionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropDownDefinitionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (attribute :  APDAttribute, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    static function __constructorIndex (attribute :  APDAttribute, isTerm :  Boolean, edition :  APDProductLineEdition, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'afterCommit' attribute on Popup (id=APDDropDownDefinitionPopup) at APDDropDownDefinitionPopup.pcf: line 12, column 82
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      if (isTerm and (attribute as APDTerm).ScheduleItemAttribute) (attribute as APDTerm).updateGenerateAsClauseTermBasedOnType()
    }
    
    // 'afterEnter' attribute on Popup (id=APDDropDownDefinitionPopup) at APDDropDownDefinitionPopup.pcf: line 12, column 82
    function afterEnter_7 () : void {
      onEnter()
    }
    
    // 'def' attribute on PanelRef at APDDropDownDefinitionPopup.pcf: line 40, column 59
    function def_onEnter_2 (def :  pcf.APDDropDownDefinitionDV) : void {
      def.onEnter(attribute, isTerm)
    }
    
    // 'def' attribute on PanelRef at APDDropDownDefinitionPopup.pcf: line 42, column 76
    function def_onEnter_4 (def :  pcf.APDDropDownDefinitionListDetail) : void {
      def.onEnter(attribute, isTerm, edition)
    }
    
    // 'def' attribute on PanelRef at APDDropDownDefinitionPopup.pcf: line 40, column 59
    function def_refreshVariables_3 (def :  pcf.APDDropDownDefinitionDV) : void {
      def.refreshVariables(attribute, isTerm)
    }
    
    // 'def' attribute on PanelRef at APDDropDownDefinitionPopup.pcf: line 42, column 76
    function def_refreshVariables_5 (def :  pcf.APDDropDownDefinitionListDetail) : void {
      def.refreshVariables(attribute, isTerm, edition)
    }
    
    // 'initialValue' attribute on Variable at APDDropDownDefinitionPopup.pcf: line 34, column 28
    function initialValue_0 () : APDAttribute {
      return attribute.OwningDropDown
    }
    
    // EditButtons at APDDropDownDefinitionPopup.pcf: line 37, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'startInEditMode' attribute on Popup (id=APDDropDownDefinitionPopup) at APDDropDownDefinitionPopup.pcf: line 12, column 82
    function startInEditMode_8 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.APDDropDownDefinitionPopup {
      return super.CurrentLocation as pcf.APDDropDownDefinitionPopup
    }
    
    property get attribute () : APDAttribute {
      return getVariableValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setVariableValue("attribute", 0, $arg)
    }
    
    property get currentOwningDropDown () : APDAttribute {
      return getVariableValue("currentOwningDropDown", 0) as APDAttribute
    }
    
    property set currentOwningDropDown ($arg :  APDAttribute) {
      setVariableValue("currentOwningDropDown", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get isTerm () : Boolean {
      return getVariableValue("isTerm", 0) as Boolean
    }
    
    property set isTerm ($arg :  Boolean) {
      setVariableValue("isTerm", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    function onEnter() {
      if (isTerm) {
        (attribute as APDTerm).maybeFixStructure()
      } else {
        attribute.DropDownType = APDDropDownType.TC_TYPELIST
      }
    }
    
    
  }
  
  
}