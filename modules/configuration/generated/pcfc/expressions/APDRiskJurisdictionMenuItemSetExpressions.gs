package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskJurisdictionMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskJurisdictionMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskJurisdictionMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskJurisdictionMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=TurnOffJurisdiction) at APDRiskJurisdictionMenuItemSet.pcf: line 21, column 120
    function action_0 () : void {
      exposureHeading.toggleJurisdiction()
    }
    
    // 'action' attribute on MenuItem (id=TurnOnJurisdiction) at APDRiskJurisdictionMenuItemSet.pcf: line 30, column 119
    function action_2 () : void {
      exposureHeading.toggleJurisdiction()
    }
    
    // 'visible' attribute on MenuItem (id=IsJurisdiction) at APDRiskJurisdictionMenuItemSet.pcf: line 17, column 73
    function visible_1 () : java.lang.Boolean {
      return canDesign and exposureHeading.IsLocationAndJurisdiction
    }
    
    // 'visible' attribute on MenuItem (id=NotJurisdiction) at APDRiskJurisdictionMenuItemSet.pcf: line 26, column 114
    function visible_3 () : java.lang.Boolean {
      return canDesign and exposureHeading.Type == APDFieldType.TC_LOCATION and !exposureHeading.Jurisdiction
    }
    
    property get canDesign () : Boolean {
      return getRequireValue("canDesign", 0) as Boolean
    }
    
    property set canDesign ($arg :  Boolean) {
      setRequireValue("canDesign", 0, $arg)
    }
    
    property get exposureHeading () : APDExposureField {
      return getRequireValue("exposureHeading", 0) as APDExposureField
    }
    
    property set exposureHeading ($arg :  APDExposureField) {
      setRequireValue("exposureHeading", 0, $arg)
    }
    
    
  }
  
  
}