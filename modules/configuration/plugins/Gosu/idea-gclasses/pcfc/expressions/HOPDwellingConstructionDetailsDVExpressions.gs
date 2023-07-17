package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingConstructionDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingConstructionDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingConstructionDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingConstructionDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ConstructionTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 45, column 78
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.ConstructionTypeDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=NumberOfStories_Input) at HOPDwellingConstructionDetailsDV.pcf: line 51, column 40
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.StoriesNumber = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=GarageType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 57, column 41
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.GarageType = (__VALUE_TO_SET as typekey.GarageType)
    }
    
    // 'value' attribute on TypeKeyInput (id=FoundationType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 63, column 45
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.Foundation = (__VALUE_TO_SET as typekey.FoundationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=RoofType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 69, column 41
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.RoofType = (__VALUE_TO_SET as typekey.HOPRoofType)
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at HOPDwellingConstructionDetailsDV.pcf: line 30, column 40
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.YearBuilt = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=RoofTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 78, column 62
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.RoofTypeDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryHeatingType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 84, column 41
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.PrimaryHeatingType = (__VALUE_TO_SET as typekey.HeatingType)
    }
    
    // 'value' attribute on TypeKeyInput (id=FuelStorageTankLocation_Input) at HOPDwellingConstructionDetailsDV.pcf: line 94, column 70
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.PrimaryHeatingFuelTankLocation = (__VALUE_TO_SET as typekey.FuelTankLocationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=FuelLineLocation_Input) at HOPDwellingConstructionDetailsDV.pcf: line 102, column 70
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.PrimaryHeatingFuelLineLocation = (__VALUE_TO_SET as typekey.FuelLineLocationType)
    }
    
    // 'value' attribute on TextInput (id=HeatingTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 109, column 72
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.PrimaryHeatingDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecondaryHeatingType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 115, column 42
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SecondaryHeatingType = (__VALUE_TO_SET as typekey.HeatingType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PlumbingType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 121, column 42
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.PlumbingType = (__VALUE_TO_SET as typekey.PlumbingType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 36, column 49
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.ConstructionType = (__VALUE_TO_SET as typekey.HOPConstructionType)
    }
    
    // 'value' attribute on TextInput (id=PlumbingTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 130, column 67
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.PlumbingTypeDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=WiringType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 136, column 41
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.WiringType = (__VALUE_TO_SET as typekey.WiringType)
    }
    
    // 'value' attribute on TypeKeyInput (id=BreakerType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 142, column 42
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.ElectricalType = (__VALUE_TO_SET as typekey.BreakerType)
    }
    
    // 'value' attribute on TextInput (id=HeatingUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 152, column 40
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HeatingUpgradeDate = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PlumbingUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 158, column 40
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.PlumbingUpgradeDate = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=RoofingUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 164, column 40
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.RoofingUpgradeDate = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=WiringUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 170, column 40
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.ElectricalSystemUpgradeDate = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingConstructionDetailsDV.pcf: line 19, column 30
    function initialValue_0 () : entity.HOPLine {
      return policyPeriod.HOPLine
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingConstructionDetailsDV.pcf: line 23, column 34
    function initialValue_1 () : entity.HOPDwelling {
      return line.HOPDwellings.single()
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at HOPDwellingConstructionDetailsDV.pcf: line 30, column 40
    function valueRoot_4 () : java.lang.Object {
      return dwelling
    }
    
    // 'value' attribute on TextInput (id=ConstructionTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 45, column 78
    function value_11 () : java.lang.String {
      return dwelling.ConstructionTypeDescription
    }
    
    // 'value' attribute on TextInput (id=NumberOfStories_Input) at HOPDwellingConstructionDetailsDV.pcf: line 51, column 40
    function value_16 () : java.lang.Integer {
      return dwelling.StoriesNumber
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at HOPDwellingConstructionDetailsDV.pcf: line 30, column 40
    function value_2 () : java.lang.Integer {
      return dwelling.YearBuilt
    }
    
    // 'value' attribute on TypeKeyInput (id=GarageType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 57, column 41
    function value_20 () : typekey.GarageType {
      return dwelling.GarageType
    }
    
    // 'value' attribute on TypeKeyInput (id=FoundationType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 63, column 45
    function value_24 () : typekey.FoundationType {
      return dwelling.Foundation
    }
    
    // 'value' attribute on TypeKeyInput (id=RoofType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 69, column 41
    function value_28 () : typekey.HOPRoofType {
      return dwelling.RoofType
    }
    
    // 'value' attribute on TextInput (id=RoofTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 78, column 62
    function value_33 () : java.lang.String {
      return dwelling.RoofTypeDescription
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryHeatingType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 84, column 41
    function value_38 () : typekey.HeatingType {
      return dwelling.PrimaryHeatingType
    }
    
    // 'value' attribute on TypeKeyInput (id=FuelStorageTankLocation_Input) at HOPDwellingConstructionDetailsDV.pcf: line 94, column 70
    function value_43 () : typekey.FuelTankLocationType {
      return dwelling.PrimaryHeatingFuelTankLocation
    }
    
    // 'value' attribute on TypeKeyInput (id=FuelLineLocation_Input) at HOPDwellingConstructionDetailsDV.pcf: line 102, column 70
    function value_49 () : typekey.FuelLineLocationType {
      return dwelling.PrimaryHeatingFuelLineLocation
    }
    
    // 'value' attribute on TextInput (id=HeatingTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 109, column 72
    function value_55 () : java.lang.String {
      return dwelling.PrimaryHeatingDescription
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 36, column 49
    function value_6 () : typekey.HOPConstructionType {
      return dwelling.ConstructionType
    }
    
    // 'value' attribute on TypeKeyInput (id=SecondaryHeatingType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 115, column 42
    function value_60 () : typekey.HeatingType {
      return dwelling.SecondaryHeatingType
    }
    
    // 'value' attribute on TypeKeyInput (id=PlumbingType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 121, column 42
    function value_64 () : typekey.PlumbingType {
      return dwelling.PlumbingType
    }
    
    // 'value' attribute on TextInput (id=PlumbingTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 130, column 67
    function value_69 () : java.lang.String {
      return dwelling.PlumbingTypeDescription
    }
    
    // 'value' attribute on TypeKeyInput (id=WiringType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 136, column 41
    function value_74 () : typekey.WiringType {
      return dwelling.WiringType
    }
    
    // 'value' attribute on TypeKeyInput (id=BreakerType_Input) at HOPDwellingConstructionDetailsDV.pcf: line 142, column 42
    function value_78 () : typekey.BreakerType {
      return dwelling.ElectricalType
    }
    
    // 'value' attribute on TextInput (id=HeatingUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 152, column 40
    function value_82 () : java.lang.Integer {
      return dwelling.HeatingUpgradeDate
    }
    
    // 'value' attribute on TextInput (id=PlumbingUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 158, column 40
    function value_86 () : java.lang.Integer {
      return dwelling.PlumbingUpgradeDate
    }
    
    // 'value' attribute on TextInput (id=RoofingUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 164, column 40
    function value_90 () : java.lang.Integer {
      return dwelling.RoofingUpgradeDate
    }
    
    // 'value' attribute on TextInput (id=WiringUpgradeDate_Input) at HOPDwellingConstructionDetailsDV.pcf: line 170, column 40
    function value_94 () : java.lang.Integer {
      return dwelling.ElectricalSystemUpgradeDate
    }
    
    // 'visible' attribute on TextInput (id=ConstructionTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 45, column 78
    function visible_10 () : java.lang.Boolean {
      return dwelling.ConstructionType == HOPConstructionType.TC_OTHER
    }
    
    // 'visible' attribute on TextInput (id=RoofTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 78, column 62
    function visible_32 () : java.lang.Boolean {
      return dwelling.RoofType == HOPRoofType.TC_OTHER
    }
    
    // 'visible' attribute on TypeKeyInput (id=FuelStorageTankLocation_Input) at HOPDwellingConstructionDetailsDV.pcf: line 94, column 70
    function visible_42 () : java.lang.Boolean {
      return dwelling.PrimaryHeatingType == HeatingType.TC_OIL
    }
    
    // 'visible' attribute on TextInput (id=HeatingTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 109, column 72
    function visible_54 () : java.lang.Boolean {
      return dwelling.PrimaryHeatingType == HeatingType.TC_OTHER
    }
    
    // 'visible' attribute on TextInput (id=PlumbingTypeDescription_Input) at HOPDwellingConstructionDetailsDV.pcf: line 130, column 67
    function visible_68 () : java.lang.Boolean {
      return dwelling.PlumbingType == PlumbingType.TC_OTHER
    }
    
    property get dwelling () : entity.HOPDwelling {
      return getVariableValue("dwelling", 0) as entity.HOPDwelling
    }
    
    property set dwelling ($arg :  entity.HOPDwelling) {
      setVariableValue("dwelling", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : entity.HOPLine {
      return getVariableValue("line", 0) as entity.HOPLine
    }
    
    property set line ($arg :  entity.HOPLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}