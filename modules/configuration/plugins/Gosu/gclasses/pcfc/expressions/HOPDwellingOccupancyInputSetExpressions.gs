package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingOccupancyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingOccupancyInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingOccupancyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingOccupancyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingUsageType_Input) at HOPDwellingOccupancyInputSet.pcf: line 23, column 42
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.DwellingUsage = (__VALUE_TO_SET as typekey.DwellingUsage)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingOccupancyType_Input) at HOPDwellingOccupancyInputSet.pcf: line 29, column 50
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.Occupancy = (__VALUE_TO_SET as typekey.DwellingOccupancyType)
    }
    
    // 'value' attribute on TextInput (id=NumberOfRoomers_Input) at HOPDwellingOccupancyInputSet.pcf: line 35, column 38
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.RoomerBoardersNumber = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingUsageType_Input) at HOPDwellingOccupancyInputSet.pcf: line 23, column 42
    function valueRoot_2 () : java.lang.Object {
      return dwelling
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingUsageType_Input) at HOPDwellingOccupancyInputSet.pcf: line 23, column 42
    function value_0 () : typekey.DwellingUsage {
      return dwelling.DwellingUsage
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingOccupancyType_Input) at HOPDwellingOccupancyInputSet.pcf: line 29, column 50
    function value_4 () : typekey.DwellingOccupancyType {
      return dwelling.Occupancy
    }
    
    // 'value' attribute on TextInput (id=NumberOfRoomers_Input) at HOPDwellingOccupancyInputSet.pcf: line 35, column 38
    function value_8 () : java.lang.Integer {
      return dwelling.RoomerBoardersNumber
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
  
  
}