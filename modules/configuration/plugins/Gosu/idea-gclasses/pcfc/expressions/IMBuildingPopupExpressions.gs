package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMBuildingPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMBuildingPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (imLine :  InlandMarineLine, imBuilding :  IMBuilding, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    static function __constructorIndex (imLine :  InlandMarineLine, imLocation :  IMLocation, building :  Building, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 2
    }
    
    static function __constructorIndex (imLine :  InlandMarineLine, imLocation :  IMLocation, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 1
    }
    
    // 'afterEnter' attribute on Popup (id=IMBuildingPopup) at IMBuildingPopup.pcf: line 11, column 134
    function afterEnter_104 () : void {
      initialize()
    }
    
    // 'canEdit' attribute on Popup (id=IMBuildingPopup) at IMBuildingPopup.pcf: line 11, column 134
    function canEdit_105 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on TypeKeyInput (id=AnyAreaLeased_Input) at IMBuildingPopup.pcf: line 229, column 49
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.AreaLeased = (__VALUE_TO_SET as typekey.AreaLeased)
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at IMBuildingPopup.pcf: line 78, column 48
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.YearBuilt = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at IMBuildingPopup.pcf: line 84, column 55
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.ConstructionType = (__VALUE_TO_SET as typekey.ConstructionType)
    }
    
    // 'value' attribute on TextInput (id=NumStories_Input) at IMBuildingPopup.pcf: line 91, column 48
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.NumStories = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=NumBasements_Input) at IMBuildingPopup.pcf: line 99, column 47
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.NumBasements = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=AreaFinished_Input) at IMBuildingPopup.pcf: line 112, column 50
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.AreaFinished = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=AreaUnfinished_Input) at IMBuildingPopup.pcf: line 119, column 50
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.AreaUnfinished = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=TotalArea_Input) at IMBuildingPopup.pcf: line 127, column 48
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.TotalArea = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentSprinklered_Input) at IMBuildingPopup.pcf: line 133, column 50
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.SprinklerCoverage = (__VALUE_TO_SET as typekey.Sprinklered)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at IMBuildingPopup.pcf: line 142, column 48
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.Heating.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at IMBuildingPopup.pcf: line 149, column 48
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.Plumbing.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at IMBuildingPopup.pcf: line 156, column 48
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.Roofing.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at IMBuildingPopup.pcf: line 163, column 48
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.Wiring.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=BuildingAlarmType_Input) at IMBuildingPopup.pcf: line 172, column 56
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.BuildingAlarmType = (__VALUE_TO_SET as typekey.BuildingAlarmType)
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmGrade_Input) at IMBuildingPopup.pcf: line 178, column 49
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.AlarmGrade = (__VALUE_TO_SET as typekey.AlarmGrade)
    }
    
    // 'value' attribute on TextInput (id=AlarmCertificate_Input) at IMBuildingPopup.pcf: line 183, column 63
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.AlarmCertificate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=AlarmExpiration_Input) at IMBuildingPopup.pcf: line 188, column 62
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.AlarmExpiration = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmCertification_Input) at IMBuildingPopup.pcf: line 194, column 57
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.AlarmCertification = (__VALUE_TO_SET as typekey.AlarmCertification)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at IMBuildingPopup.pcf: line 65, column 58
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at IMBuildingPopup.pcf: line 200, column 68
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.FrontSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at IMBuildingPopup.pcf: line 205, column 67
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.RearSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at IMBuildingPopup.pcf: line 210, column 67
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.LeftSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at IMBuildingPopup.pcf: line 215, column 68
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.RightSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentOccupied_Input) at IMBuildingPopup.pcf: line 223, column 54
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      imBuilding.Building.PercentOccupied = (__VALUE_TO_SET as typekey.PercentOccupied)
    }
    
    // EditButtons at IMBuildingPopup.pcf: line 38, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'title' attribute on Popup (id=IMBuildingPopup) at IMBuildingPopup.pcf: line 11, column 134
    static function title_107 (building :  Building, imBuilding :  IMBuilding, imLine :  InlandMarineLine, imLocation :  IMLocation, jobWizardHelper :  gw.api.web.job.JobWizardHelper, openForEdit :  boolean) : java.lang.Object {
      return imBuilding == null ? DisplayKey.get("CommercialProperty.Building.NewBuilding") : imBuilding.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LocationInfo_Input) at IMBuildingPopup.pcf: line 53, column 73
    function valueRoot_2 () : java.lang.Object {
      return imBuilding.Building.PolicyLocation
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at IMBuildingPopup.pcf: line 142, column 48
    function valueRoot_46 () : java.lang.Object {
      return imBuilding.Building.Heating
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at IMBuildingPopup.pcf: line 60, column 48
    function valueRoot_5 () : java.lang.Object {
      return imBuilding.Building
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at IMBuildingPopup.pcf: line 149, column 48
    function valueRoot_50 () : java.lang.Object {
      return imBuilding.Building.Plumbing
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at IMBuildingPopup.pcf: line 156, column 48
    function valueRoot_54 () : java.lang.Object {
      return imBuilding.Building.Roofing
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at IMBuildingPopup.pcf: line 163, column 48
    function valueRoot_58 () : java.lang.Object {
      return imBuilding.Building.Wiring
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at IMBuildingPopup.pcf: line 200, column 68
    function valueRoot_82 () : java.lang.Object {
      return imBuilding.Building.FrontSide
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at IMBuildingPopup.pcf: line 205, column 67
    function valueRoot_86 () : java.lang.Object {
      return imBuilding.Building.RearSide
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at IMBuildingPopup.pcf: line 210, column 67
    function valueRoot_90 () : java.lang.Object {
      return imBuilding.Building.LeftSide
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at IMBuildingPopup.pcf: line 215, column 68
    function valueRoot_94 () : java.lang.Object {
      return imBuilding.Building.RightSide
    }
    
    // 'value' attribute on TextInput (id=LocationInfo_Input) at IMBuildingPopup.pcf: line 53, column 73
    function value_1 () : java.lang.String {
      return imBuilding.Building.PolicyLocation.DisplayName
    }
    
    // 'value' attribute on TypeKeyInput (id=AnyAreaLeased_Input) at IMBuildingPopup.pcf: line 229, column 49
    function value_100 () : typekey.AreaLeased {
      return imBuilding.Building.AreaLeased
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at IMBuildingPopup.pcf: line 78, column 48
    function value_11 () : java.lang.Integer {
      return imBuilding.Building.YearBuilt
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at IMBuildingPopup.pcf: line 84, column 55
    function value_15 () : typekey.ConstructionType {
      return imBuilding.Building.ConstructionType
    }
    
    // 'value' attribute on TextInput (id=NumStories_Input) at IMBuildingPopup.pcf: line 91, column 48
    function value_19 () : java.lang.Integer {
      return imBuilding.Building.NumStories
    }
    
    // 'value' attribute on TextInput (id=NumBasements_Input) at IMBuildingPopup.pcf: line 99, column 47
    function value_23 () : java.lang.Integer {
      return imBuilding.Building.NumBasements
    }
    
    // 'value' attribute on TextInput (id=AreaFinished_Input) at IMBuildingPopup.pcf: line 112, column 50
    function value_27 () : java.lang.Integer {
      return imBuilding.Building.AreaFinished
    }
    
    // 'value' attribute on TextInput (id=AreaUnfinished_Input) at IMBuildingPopup.pcf: line 119, column 50
    function value_31 () : java.lang.Integer {
      return imBuilding.Building.AreaUnfinished
    }
    
    // 'value' attribute on TextInput (id=TotalArea_Input) at IMBuildingPopup.pcf: line 127, column 48
    function value_36 () : java.lang.Integer {
      return imBuilding.Building.TotalArea
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at IMBuildingPopup.pcf: line 60, column 48
    function value_4 () : java.lang.Integer {
      return imBuilding.Building.BuildingNum
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentSprinklered_Input) at IMBuildingPopup.pcf: line 133, column 50
    function value_40 () : typekey.Sprinklered {
      return imBuilding.Building.SprinklerCoverage
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at IMBuildingPopup.pcf: line 142, column 48
    function value_44 () : java.lang.Integer {
      return imBuilding.Building.Heating.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at IMBuildingPopup.pcf: line 149, column 48
    function value_48 () : java.lang.Integer {
      return imBuilding.Building.Plumbing.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at IMBuildingPopup.pcf: line 156, column 48
    function value_52 () : java.lang.Integer {
      return imBuilding.Building.Roofing.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at IMBuildingPopup.pcf: line 163, column 48
    function value_56 () : java.lang.Integer {
      return imBuilding.Building.Wiring.YearAdded
    }
    
    // 'value' attribute on TypeKeyInput (id=BuildingAlarmType_Input) at IMBuildingPopup.pcf: line 172, column 56
    function value_60 () : typekey.BuildingAlarmType {
      return imBuilding.Building.BuildingAlarmType
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmGrade_Input) at IMBuildingPopup.pcf: line 178, column 49
    function value_64 () : typekey.AlarmGrade {
      return imBuilding.Building.AlarmGrade
    }
    
    // 'value' attribute on TextInput (id=AlarmCertificate_Input) at IMBuildingPopup.pcf: line 183, column 63
    function value_68 () : java.lang.String {
      return imBuilding.Building.AlarmCertificate
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at IMBuildingPopup.pcf: line 65, column 58
    function value_7 () : java.lang.String {
      return imBuilding.Building.Description
    }
    
    // 'value' attribute on DateInput (id=AlarmExpiration_Input) at IMBuildingPopup.pcf: line 188, column 62
    function value_72 () : java.util.Date {
      return imBuilding.Building.AlarmExpiration
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmCertification_Input) at IMBuildingPopup.pcf: line 194, column 57
    function value_76 () : typekey.AlarmCertification {
      return imBuilding.Building.AlarmCertification
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at IMBuildingPopup.pcf: line 200, column 68
    function value_80 () : java.lang.String {
      return imBuilding.Building.FrontSide.Description
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at IMBuildingPopup.pcf: line 205, column 67
    function value_84 () : java.lang.String {
      return imBuilding.Building.RearSide.Description
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at IMBuildingPopup.pcf: line 210, column 67
    function value_88 () : java.lang.String {
      return imBuilding.Building.LeftSide.Description
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at IMBuildingPopup.pcf: line 215, column 68
    function value_92 () : java.lang.String {
      return imBuilding.Building.RightSide.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentOccupied_Input) at IMBuildingPopup.pcf: line 223, column 54
    function value_96 () : typekey.PercentOccupied {
      return imBuilding.Building.PercentOccupied
    }
    
    // 'visible' attribute on InputSet (id=BasementInputSet) at IMBuildingPopup.pcf: line 105, column 112
    function visible_35 () : java.lang.Boolean {
      return imBuilding.Building.NumBasements != null and imBuilding.Building.NumBasements > 0
    }
    
    override property get CurrentLocation () : pcf.IMBuildingPopup {
      return super.CurrentLocation as pcf.IMBuildingPopup
    }
    
    property get building () : Building {
      return getVariableValue("building", 0) as Building
    }
    
    property set building ($arg :  Building) {
      setVariableValue("building", 0, $arg)
    }
    
    property get imBuilding () : IMBuilding {
      return getVariableValue("imBuilding", 0) as IMBuilding
    }
    
    property set imBuilding ($arg :  IMBuilding) {
      setVariableValue("imBuilding", 0, $arg)
    }
    
    property get imLine () : InlandMarineLine {
      return getVariableValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setVariableValue("imLine", 0, $arg)
    }
    
    property get imLocation () : IMLocation {
      return getVariableValue("imLocation", 0) as IMLocation
    }
    
    property set imLocation ($arg :  IMLocation) {
      setVariableValue("imLocation", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    function initialize() {
      if (building != null and openForEdit) {
        imBuilding = imLocation.addToLineSpecificBuildings(building) as IMBuilding
      } else if (imBuilding == null and openForEdit) {
        imBuilding = imLocation.addNewLineSpecificBuilding() as IMBuilding
      } else if (imBuilding != null) {
        imLocation = imBuilding.IMLocation
      }
    }
    
    
  }
  
  
}