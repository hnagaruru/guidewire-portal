package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleClassCodeSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleClassCodeSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at VehicleClassCodeSearchDV.pcf: line 72, column 41
    function def_onEnter_43 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at VehicleClassCodeSearchDV.pcf: line 72, column 41
    function def_refreshVariables_44 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TypeKeyInput (id=SizeClass_Input) at VehicleClassCodeSearchDV.pcf: line 37, column 114
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SizeClass = (__VALUE_TO_SET as typekey.VehicleSizeClass)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryUse_Input) at VehicleClassCodeSearchDV.pcf: line 44, column 54
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PrimaryUse = (__VALUE_TO_SET as typekey.VehiclePrimaryUse)
    }
    
    // 'value' attribute on TypeKeyInput (id=Radius_Input) at VehicleClassCodeSearchDV.pcf: line 52, column 137
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Radius = (__VALUE_TO_SET as typekey.RadiusCode)
    }
    
    // 'value' attribute on TypeKeyInput (id=Industry_Input) at VehicleClassCodeSearchDV.pcf: line 61, column 107
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Industry = (__VALUE_TO_SET as typekey.VehicleIndustry)
    }
    
    // 'value' attribute on TypeKeyInput (id=IndustryUse_Input) at VehicleClassCodeSearchDV.pcf: line 68, column 107
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.IndustryUse = (__VALUE_TO_SET as typekey.VehicleIndustryUse)
    }
    
    // 'value' attribute on TypeKeyInput (id=YearsExperience_Input) at VehicleClassCodeSearchDV.pcf: line 30, column 92
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Experience = (__VALUE_TO_SET as typekey.CombinedDriverExp)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Radius_Input) at VehicleClassCodeSearchDV.pcf: line 52, column 137
    function filter_28 (VALUE :  typekey.RadiusCode, VALUES :  typekey.RadiusCode[]) : java.lang.Boolean {
      return (searchCriteria.VehicleType != null) ? VALUE.hasCategory(searchCriteria.VehicleType) : true
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at VehicleClassCodeSearchDV.pcf: line 18, column 42
    function valueRoot_1 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=Fleet_Input) at VehicleClassCodeSearchDV.pcf: line 23, column 40
    function valueRoot_4 () : java.lang.Object {
      return businessAutoLine
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at VehicleClassCodeSearchDV.pcf: line 18, column 42
    function value_0 () : typekey.VehicleType {
      return searchCriteria.VehicleType
    }
    
    // 'value' attribute on TypeKeyInput (id=SizeClass_Input) at VehicleClassCodeSearchDV.pcf: line 37, column 114
    function value_13 () : typekey.VehicleSizeClass {
      return searchCriteria.SizeClass
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryUse_Input) at VehicleClassCodeSearchDV.pcf: line 44, column 54
    function value_19 () : typekey.VehiclePrimaryUse {
      return searchCriteria.PrimaryUse
    }
    
    // 'value' attribute on TypeKeyInput (id=Radius_Input) at VehicleClassCodeSearchDV.pcf: line 52, column 137
    function value_25 () : typekey.RadiusCode {
      return searchCriteria.Radius
    }
    
    // 'value' attribute on TypeKeyInput (id=Fleet_Input) at VehicleClassCodeSearchDV.pcf: line 23, column 40
    function value_3 () : typekey.FleetType {
      return businessAutoLine.Fleet
    }
    
    // 'value' attribute on TypeKeyInput (id=Industry_Input) at VehicleClassCodeSearchDV.pcf: line 61, column 107
    function value_32 () : typekey.VehicleIndustry {
      return searchCriteria.Industry
    }
    
    // 'value' attribute on TypeKeyInput (id=IndustryUse_Input) at VehicleClassCodeSearchDV.pcf: line 68, column 107
    function value_38 () : typekey.VehicleIndustryUse {
      return searchCriteria.IndustryUse
    }
    
    // 'value' attribute on TypeKeyInput (id=YearsExperience_Input) at VehicleClassCodeSearchDV.pcf: line 30, column 92
    function value_7 () : typekey.CombinedDriverExp {
      return searchCriteria.Experience
    }
    
    // 'visible' attribute on TypeKeyInput (id=SizeClass_Input) at VehicleClassCodeSearchDV.pcf: line 37, column 114
    function visible_12 () : java.lang.Boolean {
      return (searchCriteria.VehicleType==TC_PUBLICTRANSPORT or searchCriteria.VehicleType==TC_COMMERCIAL)
    }
    
    // 'visible' attribute on TypeKeyInput (id=PrimaryUse_Input) at VehicleClassCodeSearchDV.pcf: line 44, column 54
    function visible_18 () : java.lang.Boolean {
      return searchCriteria.VehicleType!=TC_PP
    }
    
    // 'visible' attribute on TypeKeyInput (id=Radius_Input) at VehicleClassCodeSearchDV.pcf: line 52, column 137
    function visible_24 () : java.lang.Boolean {
      return !(searchCriteria.VehicleType==TC_SPECIAL or (searchCriteria.VehicleType==TC_PP and businessAutoLine.Fleet==TC_FLEET))
    }
    
    // 'visible' attribute on TypeKeyInput (id=Industry_Input) at VehicleClassCodeSearchDV.pcf: line 61, column 107
    function visible_31 () : java.lang.Boolean {
      return searchCriteria.VehicleType==TC_COMMERCIAL and searchCriteria.Radius != TC_200PLUSMILES
    }
    
    // 'visible' attribute on TypeKeyInput (id=YearsExperience_Input) at VehicleClassCodeSearchDV.pcf: line 30, column 92
    function visible_6 () : java.lang.Boolean {
      return searchCriteria.VehicleType==TC_PP and businessAutoLine.Fleet!=TC_FLEET 
    }
    
    property get businessAutoLine () : BusinessAutoLine {
      return getRequireValue("businessAutoLine", 0) as BusinessAutoLine
    }
    
    property set businessAutoLine ($arg :  BusinessAutoLine) {
      setRequireValue("businessAutoLine", 0, $arg)
    }
    
    property get searchCriteria () : gw.api.domain.VehicleClassCodeSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.api.domain.VehicleClassCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.domain.VehicleClassCodeSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}