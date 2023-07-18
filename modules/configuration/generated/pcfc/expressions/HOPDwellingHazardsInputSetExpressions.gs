package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingHazardsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingHazardsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingHazardsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingHazardsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=SpecificHazard_Cell) at HOPDwellingHazardsInputSet.pcf: line 44, column 51
    function sortValue_0 (hazard :  entity.DwellingHazard) : java.lang.Object {
      return hazard.SpecificHazard
    }
    
    // 'value' attribute on TypeKeyCell (id=HazardType_Cell) at HOPDwellingHazardsInputSet.pcf: line 52, column 47
    function sortValue_1 (hazard :  entity.DwellingHazard) : java.lang.Object {
      return hazard.HazardType
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at HOPDwellingHazardsInputSet.pcf: line 58, column 53
    function sortValue_2 (hazard :  entity.DwellingHazard) : java.lang.Object {
      return hazard.AdditionalInformation
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=HazardsIterator) at HOPDwellingHazardsInputSet.pcf: line 35, column 47
    function toCreateAndAdd_15 () : entity.DwellingHazard {
      return dwelling.createAndAddDwellingHazard()
    }
    
    // 'toRemove' attribute on RowIterator (id=HazardsIterator) at HOPDwellingHazardsInputSet.pcf: line 35, column 47
    function toRemove_16 (hazard :  entity.DwellingHazard) : void {
      dwelling.removeFromDwellingHazards(hazard)
    }
    
    // 'value' attribute on RowIterator (id=HazardsIterator) at HOPDwellingHazardsInputSet.pcf: line 35, column 47
    function value_17 () : entity.DwellingHazard[] {
      return dwelling.DwellingHazards
    }
    
    property get dwelling () : entity.HOPDwelling {
      return getRequireValue("dwelling", 0) as entity.HOPDwelling
    }
    
    property set dwelling ($arg :  entity.HOPDwelling) {
      setRequireValue("dwelling", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingHazardsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPDwellingHazardsInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at HOPDwellingHazardsInputSet.pcf: line 58, column 53
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      hazard.AdditionalInformation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=SpecificHazard_Cell) at HOPDwellingHazardsInputSet.pcf: line 44, column 51
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      hazard.SpecificHazard = (__VALUE_TO_SET as typekey.SpecificHazard)
    }
    
    // 'value' attribute on TypeKeyCell (id=HazardType_Cell) at HOPDwellingHazardsInputSet.pcf: line 52, column 47
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      hazard.HazardType = (__VALUE_TO_SET as typekey.HazardType)
    }
    
    // 'value' attribute on TypeKeyCell (id=SpecificHazard_Cell) at HOPDwellingHazardsInputSet.pcf: line 44, column 51
    function valueRoot_5 () : java.lang.Object {
      return hazard
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at HOPDwellingHazardsInputSet.pcf: line 58, column 53
    function value_11 () : java.lang.String {
      return hazard.AdditionalInformation
    }
    
    // 'value' attribute on TypeKeyCell (id=SpecificHazard_Cell) at HOPDwellingHazardsInputSet.pcf: line 44, column 51
    function value_3 () : typekey.SpecificHazard {
      return hazard.SpecificHazard
    }
    
    // 'value' attribute on TypeKeyCell (id=HazardType_Cell) at HOPDwellingHazardsInputSet.pcf: line 52, column 47
    function value_7 () : typekey.HazardType {
      return hazard.HazardType
    }
    
    property get hazard () : entity.DwellingHazard {
      return getIteratedValue(1) as entity.DwellingHazard
    }
    
    
  }
  
  
}