package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/PolicyMenuItemSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_CommercialPackageExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/PolicyMenuItemSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=InlandMarineLinks_InlandMarine_PolicyFilePart) at PolicyMenuItemSet.CommercialPackage.pcf: line 75, column 45
    function action_22 () : void {
      InlandMarine_PolicyFilePart.go(period, asOfDate, part)
    }
    
    // 'action' attribute on MenuItem (id=InlandMarineLinks_InlandMarine_PolicyFilePart) at PolicyMenuItemSet.CommercialPackage.pcf: line 75, column 45
    function action_dest_23 () : pcf.api.Destination {
      return pcf.InlandMarine_PolicyFilePart.createDestination(period, asOfDate, part)
    }
    
    // 'label' attribute on MenuItem (id=InlandMarineLinks_InlandMarine_PolicyFilePart) at PolicyMenuItemSet.CommercialPackage.pcf: line 75, column 45
    function label_24 () : java.lang.Object {
      return part.Subtype.DisplayName
    }
    
    property get part () : entity.IMCoveragePart {
      return getIteratedValue(1) as entity.IMCoveragePart
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/PolicyMenuItemSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.CommercialPackage.pcf: line 17, column 70
    function action_0 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiability) at PolicyMenuItemSet.CommercialPackage.pcf: line 27, column 37
    function action_11 () : void {
      GeneralLiabilityLinks.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=CommercialPropertyLinks_CommercialProperty_BuildingsAndLocations) at PolicyMenuItemSet.CommercialPackage.pcf: line 51, column 83
    function action_13 () : void {
      CommercialProperty_BuildingsAndLocations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=CommercialPropertyLinks_CommercialProperty_Modifiers) at PolicyMenuItemSet.CommercialPackage.pcf: line 55, column 71
    function action_15 () : void {
      CommercialProperty_Modifiers.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=CommercialProperty) at PolicyMenuItemSet.CommercialPackage.pcf: line 47, column 37
    function action_18 () : void {
      CommercialPropertyLinks.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.CommercialPackage.pcf: line 21, column 69
    function action_2 () : void {
      PolicyFile_Locations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=InlandMarineLinks_InlandMarine_BuildingsAndLocations) at PolicyMenuItemSet.CommercialPackage.pcf: line 67, column 83
    function action_20 () : void {
      InlandMarine_BuildingsAndLocations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=InlandMarine) at PolicyMenuItemSet.CommercialPackage.pcf: line 63, column 37
    function action_27 () : void {
      InlandMarineLinks.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.CommercialPackage.pcf: line 82, column 69
    function action_29 () : void {
      PolicyFile_ProductModifiers.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.CommercialPackage.pcf: line 86, column 67
    function action_31 () : void {
      PolicyFile_CPP_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.CommercialPackage.pcf: line 90, column 72
    function action_33 () : void {
      PolicyFile_Forms_CP.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiabilityLinks_GeneralLiability_Coverages_GL) at PolicyMenuItemSet.CommercialPackage.pcf: line 31, column 70
    function action_4 () : void {
      GeneralLiability_Coverages_GL.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiabilityLinks_GeneralLiability_ExposureUnits_GL) at PolicyMenuItemSet.CommercialPackage.pcf: line 35, column 85
    function action_6 () : void {
      GeneralLiability_ExposureUnits_GL.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiabilityLinks_GeneralLiability_Modifiers_GL) at PolicyMenuItemSet.CommercialPackage.pcf: line 39, column 71
    function action_8 () : void {
      GeneralLiability_Modifiers_GL.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.CommercialPackage.pcf: line 17, column 70
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiability) at PolicyMenuItemSet.CommercialPackage.pcf: line 27, column 37
    function action_dest_12 () : pcf.api.Destination {
      return pcf.GeneralLiabilityLinks.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=CommercialPropertyLinks_CommercialProperty_BuildingsAndLocations) at PolicyMenuItemSet.CommercialPackage.pcf: line 51, column 83
    function action_dest_14 () : pcf.api.Destination {
      return pcf.CommercialProperty_BuildingsAndLocations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=CommercialPropertyLinks_CommercialProperty_Modifiers) at PolicyMenuItemSet.CommercialPackage.pcf: line 55, column 71
    function action_dest_16 () : pcf.api.Destination {
      return pcf.CommercialProperty_Modifiers.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=CommercialProperty) at PolicyMenuItemSet.CommercialPackage.pcf: line 47, column 37
    function action_dest_19 () : pcf.api.Destination {
      return pcf.CommercialPropertyLinks.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=InlandMarineLinks_InlandMarine_BuildingsAndLocations) at PolicyMenuItemSet.CommercialPackage.pcf: line 67, column 83
    function action_dest_21 () : pcf.api.Destination {
      return pcf.InlandMarine_BuildingsAndLocations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=InlandMarine) at PolicyMenuItemSet.CommercialPackage.pcf: line 63, column 37
    function action_dest_28 () : pcf.api.Destination {
      return pcf.InlandMarineLinks.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Locations) at PolicyMenuItemSet.CommercialPackage.pcf: line 21, column 69
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_Locations.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Modifiers) at PolicyMenuItemSet.CommercialPackage.pcf: line 82, column 69
    function action_dest_30 () : pcf.api.Destination {
      return pcf.PolicyFile_ProductModifiers.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.CommercialPackage.pcf: line 86, column 67
    function action_dest_32 () : pcf.api.Destination {
      return pcf.PolicyFile_CPP_Pricing.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.CommercialPackage.pcf: line 90, column 72
    function action_dest_34 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_CP.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiabilityLinks_GeneralLiability_Coverages_GL) at PolicyMenuItemSet.CommercialPackage.pcf: line 31, column 70
    function action_dest_5 () : pcf.api.Destination {
      return pcf.GeneralLiability_Coverages_GL.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiabilityLinks_GeneralLiability_ExposureUnits_GL) at PolicyMenuItemSet.CommercialPackage.pcf: line 35, column 85
    function action_dest_7 () : pcf.api.Destination {
      return pcf.GeneralLiability_ExposureUnits_GL.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=GeneralLiabilityLinks_GeneralLiability_Modifiers_GL) at PolicyMenuItemSet.CommercialPackage.pcf: line 39, column 71
    function action_dest_9 () : pcf.api.Destination {
      return pcf.GeneralLiability_Modifiers_GL.createDestination(period, asOfDate)
    }
    
    // 'value' attribute on MenuItemIterator at PolicyMenuItemSet.CommercialPackage.pcf: line 71, column 45
    function value_25 () : entity.IMCoveragePart[] {
      return period.IMLine.IMCoverageParts.sortBy( \ part -> part.Subtype.DisplayName )
    }
    
    // 'visible' attribute on MenuItem (id=GeneralLiability) at PolicyMenuItemSet.CommercialPackage.pcf: line 27, column 37
    function visible_10 () : java.lang.Boolean {
      return period.GLLineExists
    }
    
    // 'visible' attribute on MenuItem (id=CommercialProperty) at PolicyMenuItemSet.CommercialPackage.pcf: line 47, column 37
    function visible_17 () : java.lang.Boolean {
      return period.CPLineExists
    }
    
    // 'visible' attribute on MenuItem (id=InlandMarine) at PolicyMenuItemSet.CommercialPackage.pcf: line 63, column 37
    function visible_26 () : java.lang.Boolean {
      return period.IMLineExists
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}