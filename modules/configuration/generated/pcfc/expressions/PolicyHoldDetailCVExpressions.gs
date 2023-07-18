package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyHoldDetailCVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldDetailCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddHoldRegion) at PolicyHoldDetailCV.pcf: line 55, column 69
    function action_7 () : void {
      RegionSearchPopup.push(policyHold)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddHoldRegion) at PolicyHoldDetailCV.pcf: line 55, column 69
    function action_dest_8 () : pcf.api.Destination {
      return pcf.RegionSearchPopup.createDestination(policyHold)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 23, column 67
    function def_onEnter_1 (def :  pcf.PolicyHoldDetailDV) : void {
      def.onEnter(policyHold, showTimeStamps)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 48, column 41
    function def_onEnter_10 (def :  pcf.HoldRegionsLV) : void {
      def.onEnter(policyHold)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 27, column 232
    function def_onEnter_3 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(policyHold, { "Description", "UWIssueLongDesc"}, { DisplayKey.get("Web.Admin.PolicyHold.Description"), DisplayKey.get("Web.Admin.PolicyHold.LongDesc") })
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 33, column 48
    function def_onEnter_5 (def :  pcf.PolicyHoldRuleLV) : void {
      def.onEnter(policyHold)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 48, column 41
    function def_refreshVariables_11 (def :  pcf.HoldRegionsLV) : void {
      def.refreshVariables(policyHold)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 23, column 67
    function def_refreshVariables_2 (def :  pcf.PolicyHoldDetailDV) : void {
      def.refreshVariables(policyHold, showTimeStamps)
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 27, column 232
    function def_refreshVariables_4 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(policyHold, { "Description", "UWIssueLongDesc"}, { DisplayKey.get("Web.Admin.PolicyHold.Description"), DisplayKey.get("Web.Admin.PolicyHold.LongDesc") })
    }
    
    // 'def' attribute on PanelRef at PolicyHoldDetailCV.pcf: line 33, column 48
    function def_refreshVariables_6 (def :  pcf.PolicyHoldRuleLV) : void {
      def.refreshVariables(policyHold)
    }
    
    // 'initialValue' attribute on Variable at PolicyHoldDetailCV.pcf: line 16, column 31
    function initialValue_0 () : typekey.Country {
      return gw.api.admin.BaseAdminUtil.getDefaultCountry()
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddHoldRegion) at PolicyHoldDetailCV.pcf: line 55, column 69
    function onPick_9 (PickedValue :  entity.Zone[]) : void {
      policyHold.createPolicyHoldZones(PickedValue)
    }
    
    property get country () : typekey.Country {
      return getVariableValue("country", 0) as typekey.Country
    }
    
    property set country ($arg :  typekey.Country) {
      setVariableValue("country", 0, $arg)
    }
    
    property get policyHold () : PolicyHold {
      return getRequireValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setRequireValue("policyHold", 0, $arg)
    }
    
    property get showTimeStamps () : boolean {
      return getRequireValue("showTimeStamps", 0) as java.lang.Boolean
    }
    
    property set showTimeStamps ($arg :  boolean) {
      setRequireValue("showTimeStamps", 0, $arg)
    }
    
    
  }
  
  
}