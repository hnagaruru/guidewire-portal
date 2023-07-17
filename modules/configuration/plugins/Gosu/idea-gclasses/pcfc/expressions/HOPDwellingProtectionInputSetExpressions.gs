package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingProtectionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingProtectionInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingProtectionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingProtectionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AutoFillProtClass_Input) at HOPDwellingProtectionInputSet.pcf: line 51, column 105
    function action_20 () : void {
      gw.plugin.Plugins.get(gw.plugin.protectionclass.IProtectionClassPlugin).setProtectionClassCode(dwelling.Location)
    }
    
    // 'value' attribute on TypeKeyInput (id=BurglarAlarmType_Input) at HOPDwellingProtectionInputSet.pcf: line 23, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.BurglarAlarmType = (__VALUE_TO_SET as typekey.BurglarAlarmType)
    }
    
    // 'value' attribute on TextInput (id=DistanceToFireStation_Input) at HOPDwellingProtectionInputSet.pcf: line 40, column 38
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.DistanceToFireStation = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=ProtectionClass_Input) at HOPDwellingProtectionInputSet.pcf: line 46, column 45
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.Location.FireProtectClass = (__VALUE_TO_SET as typekey.FireProtectClass)
    }
    
    // 'value' attribute on TypeKeyInput (id=FireAlarm_Input) at HOPDwellingProtectionInputSet.pcf: line 57, column 42
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.FireAlarmType = (__VALUE_TO_SET as typekey.FireAlarmType)
    }
    
    // 'value' attribute on TextInput (id=NumberOfFireExtinguishers_Input) at HOPDwellingProtectionInputSet.pcf: line 63, column 38
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.NumberOfFireExtinguishers = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=SmokeAlarms_Input) at HOPDwellingProtectionInputSet.pcf: line 69, column 40
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SmokeAlarm = (__VALUE_TO_SET as typekey.SmokeAlarms)
    }
    
    // 'value' attribute on TypeKeyInput (id=SprinklerSystemType_Input) at HOPDwellingProtectionInputSet.pcf: line 75, column 48
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SprinklerSystemType = (__VALUE_TO_SET as typekey.SprinklerSystemType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VisibleToNeighbors_Input) at HOPDwellingProtectionInputSet.pcf: line 80, column 44
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.VisibleToNeighbors = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DoorsHaveDeadbolts_Input) at HOPDwellingProtectionInputSet.pcf: line 28, column 35
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.Deadbolts = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DistanceToFireHydrant_Input) at HOPDwellingProtectionInputSet.pcf: line 34, column 38
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.DistanceToFireHydrant = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=ProtectionClass_Input) at HOPDwellingProtectionInputSet.pcf: line 46, column 45
    function valueRoot_18 () : java.lang.Object {
      return dwelling.Location
    }
    
    // 'value' attribute on TypeKeyInput (id=BurglarAlarmType_Input) at HOPDwellingProtectionInputSet.pcf: line 23, column 45
    function valueRoot_2 () : java.lang.Object {
      return dwelling
    }
    
    // 'value' attribute on TypeKeyInput (id=BurglarAlarmType_Input) at HOPDwellingProtectionInputSet.pcf: line 23, column 45
    function value_0 () : typekey.BurglarAlarmType {
      return dwelling.BurglarAlarmType
    }
    
    // 'value' attribute on TextInput (id=DistanceToFireStation_Input) at HOPDwellingProtectionInputSet.pcf: line 40, column 38
    function value_12 () : java.lang.Integer {
      return dwelling.DistanceToFireStation
    }
    
    // 'value' attribute on TypeKeyInput (id=ProtectionClass_Input) at HOPDwellingProtectionInputSet.pcf: line 46, column 45
    function value_16 () : typekey.FireProtectClass {
      return dwelling.Location.FireProtectClass
    }
    
    // 'value' attribute on TypeKeyInput (id=FireAlarm_Input) at HOPDwellingProtectionInputSet.pcf: line 57, column 42
    function value_21 () : typekey.FireAlarmType {
      return dwelling.FireAlarmType
    }
    
    // 'value' attribute on TextInput (id=NumberOfFireExtinguishers_Input) at HOPDwellingProtectionInputSet.pcf: line 63, column 38
    function value_25 () : java.lang.Integer {
      return dwelling.NumberOfFireExtinguishers
    }
    
    // 'value' attribute on TypeKeyInput (id=SmokeAlarms_Input) at HOPDwellingProtectionInputSet.pcf: line 69, column 40
    function value_29 () : typekey.SmokeAlarms {
      return dwelling.SmokeAlarm
    }
    
    // 'value' attribute on TypeKeyInput (id=SprinklerSystemType_Input) at HOPDwellingProtectionInputSet.pcf: line 75, column 48
    function value_33 () : typekey.SprinklerSystemType {
      return dwelling.SprinklerSystemType
    }
    
    // 'value' attribute on BooleanRadioInput (id=VisibleToNeighbors_Input) at HOPDwellingProtectionInputSet.pcf: line 80, column 44
    function value_37 () : java.lang.Boolean {
      return dwelling.VisibleToNeighbors
    }
    
    // 'value' attribute on BooleanRadioInput (id=DoorsHaveDeadbolts_Input) at HOPDwellingProtectionInputSet.pcf: line 28, column 35
    function value_4 () : java.lang.Boolean {
      return dwelling.Deadbolts
    }
    
    // 'value' attribute on TextInput (id=DistanceToFireHydrant_Input) at HOPDwellingProtectionInputSet.pcf: line 34, column 38
    function value_8 () : java.lang.Integer {
      return dwelling.DistanceToFireHydrant
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