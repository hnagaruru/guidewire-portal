package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPBuilding_DetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPBuilding_DetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPBuilding_DetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPBuilding_DetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=BOPBuildingClassCodePicker) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function action_11 () : void {
      BOPClassCodeSearchPopup.push(building.PolicyLine as BOPLine, building)
    }
    
    // 'action' attribute on PickerMenuItem (id=BOPBuildingClassCodePicker) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function action_dest_12 () : pcf.api.Destination {
      return pcf.BOPClassCodeSearchPopup.createDestination(building.PolicyLine as BOPLine, building)
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at BOPBuilding_DetailsDV.pcf: line 163, column 40
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.Plumbing.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at BOPBuilding_DetailsDV.pcf: line 170, column 40
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.Roofing.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at BOPBuilding_DetailsDV.pcf: line 177, column 40
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.Wiring.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=BuildingAlarmType_Input) at BOPBuilding_DetailsDV.pcf: line 186, column 48
    function defaultSetter_114 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.BuildingAlarmType = (__VALUE_TO_SET as typekey.BuildingAlarmType)
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmGrade_Input) at BOPBuilding_DetailsDV.pcf: line 192, column 41
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.AlarmGrade = (__VALUE_TO_SET as typekey.AlarmGrade)
    }
    
    // 'value' attribute on TextInput (id=AlarmCertificate_Input) at BOPBuilding_DetailsDV.pcf: line 197, column 53
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.AlarmCertificate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=AlarmExpiration_Input) at BOPBuilding_DetailsDV.pcf: line 202, column 52
    function defaultSetter_126 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.AlarmExpiration = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmCertification_Input) at BOPBuilding_DetailsDV.pcf: line 208, column 49
    function defaultSetter_130 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.AlarmCertification = (__VALUE_TO_SET as typekey.AlarmCertification)
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at BOPBuilding_DetailsDV.pcf: line 214, column 58
    function defaultSetter_134 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.FrontSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at BOPBuilding_DetailsDV.pcf: line 219, column 57
    function defaultSetter_138 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.RearSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at BOPBuilding_DetailsDV.pcf: line 224, column 57
    function defaultSetter_142 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.LeftSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at BOPBuilding_DetailsDV.pcf: line 229, column 58
    function defaultSetter_146 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.RightSide.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.ClassCode = (__VALUE_TO_SET as entity.BOPClassCode)
    }
    
    // 'value' attribute on TypeKeyInput (id=InterestType_Input) at BOPBuilding_DetailsDV.pcf: line 236, column 43
    function defaultSetter_150 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.InterestType = (__VALUE_TO_SET as typekey.InterestType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentOccupied_Input) at BOPBuilding_DetailsDV.pcf: line 243, column 46
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.PercentOccupied = (__VALUE_TO_SET as typekey.PercentOccupied)
    }
    
    // 'value' attribute on TypeKeyInput (id=AnyAreaLeased_Input) at BOPBuilding_DetailsDV.pcf: line 249, column 41
    function defaultSetter_158 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.AreaLeased = (__VALUE_TO_SET as typekey.AreaLeased)
    }
    
    // 'value' attribute on TextInput (id=BasisAmount_Input) at BOPBuilding_DetailsDV.pcf: line 66, column 262
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.BasisAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at BOPBuilding_DetailsDV.pcf: line 92, column 40
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.YearBuilt = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at BOPBuilding_DetailsDV.pcf: line 98, column 50
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.ConstructionType = (__VALUE_TO_SET as typekey.BOPConstructionType)
    }
    
    // 'value' attribute on TextInput (id=NumStories_Input) at BOPBuilding_DetailsDV.pcf: line 105, column 40
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.NumStories = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=NumBasements_Input) at BOPBuilding_DetailsDV.pcf: line 113, column 39
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.NumBasements = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at BOPBuilding_DetailsDV.pcf: line 37, column 48
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AreaFinished_Input) at BOPBuilding_DetailsDV.pcf: line 126, column 42
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.AreaFinished = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=AreaUnfinished_Input) at BOPBuilding_DetailsDV.pcf: line 133, column 42
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.AreaUnfinished = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=TotalArea_Input) at BOPBuilding_DetailsDV.pcf: line 141, column 40
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.TotalArea = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentSprinklered_Input) at BOPBuilding_DetailsDV.pcf: line 147, column 42
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.SprinklerCoverage = (__VALUE_TO_SET as typekey.Sprinklered)
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at BOPBuilding_DetailsDV.pcf: line 156, column 40
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.Building.Heating.YearAdded = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at BOPBuilding_DetailsDV.pcf: line 17, column 53
    function initialValue_0 () : gw.api.productmodel.CoveragePattern[] {
      return building == null ? null : building.PolicyLine.Pattern.getCoverageCategoryByPublicId("BOPBuildingCat").coveragePatternsForEntity(BOPBuilding).whereSelectedOrAvailable(building, openForEdit)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=BOPBuildingClassCodePicker) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function onPick_13 (PickedValue :  BOPClassCode) : void {
      building.ClassCode = PickedValue
    }
    
    // 'optionLabel' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function optionLabel_17 (VALUE :  entity.BOPClassCode) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at BOPBuilding_DetailsDV.pcf: line 76, column 26
    function sortBy_31 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function valueRange_18 () : java.lang.Object {
      return building.ClassCodes
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at BOPBuilding_DetailsDV.pcf: line 163, column 40
    function valueRoot_103 () : java.lang.Object {
      return building.Building.Plumbing
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at BOPBuilding_DetailsDV.pcf: line 170, column 40
    function valueRoot_107 () : java.lang.Object {
      return building.Building.Roofing
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at BOPBuilding_DetailsDV.pcf: line 177, column 40
    function valueRoot_111 () : java.lang.Object {
      return building.Building.Wiring
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at BOPBuilding_DetailsDV.pcf: line 214, column 58
    function valueRoot_135 () : java.lang.Object {
      return building.Building.FrontSide
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at BOPBuilding_DetailsDV.pcf: line 219, column 57
    function valueRoot_139 () : java.lang.Object {
      return building.Building.RearSide
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at BOPBuilding_DetailsDV.pcf: line 224, column 57
    function valueRoot_143 () : java.lang.Object {
      return building.Building.LeftSide
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at BOPBuilding_DetailsDV.pcf: line 229, column 58
    function valueRoot_147 () : java.lang.Object {
      return building.Building.RightSide
    }
    
    // 'value' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function valueRoot_16 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextInput (id=LocationInfo_Input) at BOPBuilding_DetailsDV.pcf: line 25, column 63
    function valueRoot_2 () : java.lang.Object {
      return building.Building.PolicyLocation
    }
    
    // 'value' attribute on TextInput (id=BasisType_Input) at BOPBuilding_DetailsDV.pcf: line 58, column 55
    function valueRoot_23 () : java.lang.Object {
      return building.ClassCode.Basis
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at BOPBuilding_DetailsDV.pcf: line 32, column 40
    function valueRoot_5 () : java.lang.Object {
      return building.Building
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at BOPBuilding_DetailsDV.pcf: line 156, column 40
    function valueRoot_99 () : java.lang.Object {
      return building.Building.Heating
    }
    
    // 'value' attribute on TextInput (id=LocationInfo_Input) at BOPBuilding_DetailsDV.pcf: line 25, column 63
    function value_1 () : java.lang.String {
      return building.Building.PolicyLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LastUpdatePlumbing_Input) at BOPBuilding_DetailsDV.pcf: line 163, column 40
    function value_101 () : java.lang.Integer {
      return building.Building.Plumbing.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdateRoofing_Input) at BOPBuilding_DetailsDV.pcf: line 170, column 40
    function value_105 () : java.lang.Integer {
      return building.Building.Roofing.YearAdded
    }
    
    // 'value' attribute on TextInput (id=LastUpdateWiring_Input) at BOPBuilding_DetailsDV.pcf: line 177, column 40
    function value_109 () : java.lang.Integer {
      return building.Building.Wiring.YearAdded
    }
    
    // 'value' attribute on TypeKeyInput (id=BuildingAlarmType_Input) at BOPBuilding_DetailsDV.pcf: line 186, column 48
    function value_113 () : typekey.BuildingAlarmType {
      return building.Building.BuildingAlarmType
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmGrade_Input) at BOPBuilding_DetailsDV.pcf: line 192, column 41
    function value_117 () : typekey.AlarmGrade {
      return building.Building.AlarmGrade
    }
    
    // 'value' attribute on TextInput (id=AlarmCertificate_Input) at BOPBuilding_DetailsDV.pcf: line 197, column 53
    function value_121 () : java.lang.String {
      return building.Building.AlarmCertificate
    }
    
    // 'value' attribute on DateInput (id=AlarmExpiration_Input) at BOPBuilding_DetailsDV.pcf: line 202, column 52
    function value_125 () : java.util.Date {
      return building.Building.AlarmExpiration
    }
    
    // 'value' attribute on TypeKeyInput (id=AlarmCertification_Input) at BOPBuilding_DetailsDV.pcf: line 208, column 49
    function value_129 () : typekey.AlarmCertification {
      return building.Building.AlarmCertification
    }
    
    // 'value' attribute on TextInput (id=FrontExposure_Input) at BOPBuilding_DetailsDV.pcf: line 214, column 58
    function value_133 () : java.lang.String {
      return building.Building.FrontSide.Description
    }
    
    // 'value' attribute on TextInput (id=RearExposure_Input) at BOPBuilding_DetailsDV.pcf: line 219, column 57
    function value_137 () : java.lang.String {
      return building.Building.RearSide.Description
    }
    
    // 'value' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function value_14 () : entity.BOPClassCode {
      return building.ClassCode
    }
    
    // 'value' attribute on TextInput (id=LeftExposure_Input) at BOPBuilding_DetailsDV.pcf: line 224, column 57
    function value_141 () : java.lang.String {
      return building.Building.LeftSide.Description
    }
    
    // 'value' attribute on TextInput (id=RightExposure_Input) at BOPBuilding_DetailsDV.pcf: line 229, column 58
    function value_145 () : java.lang.String {
      return building.Building.RightSide.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=InterestType_Input) at BOPBuilding_DetailsDV.pcf: line 236, column 43
    function value_149 () : typekey.InterestType {
      return building.Building.InterestType
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentOccupied_Input) at BOPBuilding_DetailsDV.pcf: line 243, column 46
    function value_153 () : typekey.PercentOccupied {
      return building.Building.PercentOccupied
    }
    
    // 'value' attribute on TypeKeyInput (id=AnyAreaLeased_Input) at BOPBuilding_DetailsDV.pcf: line 249, column 41
    function value_157 () : typekey.AreaLeased {
      return building.Building.AreaLeased
    }
    
    // 'value' attribute on TextInput (id=BasisType_Input) at BOPBuilding_DetailsDV.pcf: line 58, column 55
    function value_22 () : java.lang.String {
      return building.ClassCode.Basis.Description
    }
    
    // 'value' attribute on TextInput (id=BasisAmount_Input) at BOPBuilding_DetailsDV.pcf: line 66, column 262
    function value_26 () : java.lang.Integer {
      return building.BasisAmount
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at BOPBuilding_DetailsDV.pcf: line 32, column 40
    function value_4 () : java.lang.Integer {
      return building.Building.BuildingNum
    }
    
    // 'value' attribute on InputIterator (id=BOPBuildingCatIterator) at BOPBuilding_DetailsDV.pcf: line 73, column 59
    function value_63 () : gw.api.productmodel.CoveragePattern[] {
      return bopBuildingCatCoveragePatterns
    }
    
    // 'value' attribute on TextInput (id=YearBuilt_Input) at BOPBuilding_DetailsDV.pcf: line 92, column 40
    function value_64 () : java.lang.Integer {
      return building.Building.YearBuilt
    }
    
    // 'value' attribute on TypeKeyInput (id=ConstructionType_Input) at BOPBuilding_DetailsDV.pcf: line 98, column 50
    function value_68 () : typekey.BOPConstructionType {
      return building.ConstructionType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at BOPBuilding_DetailsDV.pcf: line 37, column 48
    function value_7 () : java.lang.String {
      return building.Building.Description
    }
    
    // 'value' attribute on TextInput (id=NumStories_Input) at BOPBuilding_DetailsDV.pcf: line 105, column 40
    function value_72 () : java.lang.Integer {
      return building.Building.NumStories
    }
    
    // 'value' attribute on TextInput (id=NumBasements_Input) at BOPBuilding_DetailsDV.pcf: line 113, column 39
    function value_76 () : java.lang.Integer {
      return building.Building.NumBasements
    }
    
    // 'value' attribute on TextInput (id=AreaFinished_Input) at BOPBuilding_DetailsDV.pcf: line 126, column 42
    function value_80 () : java.lang.Integer {
      return building.Building.AreaFinished
    }
    
    // 'value' attribute on TextInput (id=AreaUnfinished_Input) at BOPBuilding_DetailsDV.pcf: line 133, column 42
    function value_84 () : java.lang.Integer {
      return building.Building.AreaUnfinished
    }
    
    // 'value' attribute on TextInput (id=TotalArea_Input) at BOPBuilding_DetailsDV.pcf: line 141, column 40
    function value_89 () : java.lang.Integer {
      return building.Building.TotalArea
    }
    
    // 'value' attribute on TypeKeyInput (id=PercentSprinklered_Input) at BOPBuilding_DetailsDV.pcf: line 147, column 42
    function value_93 () : typekey.Sprinklered {
      return building.Building.SprinklerCoverage
    }
    
    // 'value' attribute on TextInput (id=LastUpdateHeating_Input) at BOPBuilding_DetailsDV.pcf: line 156, column 40
    function value_97 () : java.lang.Integer {
      return building.Building.Heating.YearAdded
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function verifyValueRangeIsAllowedType_19 ($$arg :  entity.BOPClassCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.api.database.IQueryBeanResult<entity.BOPClassCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBuildingClassCodeRange_Input) at BOPBuilding_DetailsDV.pcf: line 46, column 41
    function verifyValueRange_20 () : void {
      var __valueRangeArg = building.ClassCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=BasisAmount_Input) at BOPBuilding_DetailsDV.pcf: line 66, column 262
    function visible_25 () : java.lang.Boolean {
      return building.ClassCode.Basis.Code == "Payroll - per $100" or                       building.ClassCode.Basis.Code == "Payroll - per $1000" or                       building.ClassCode.Basis.Code == "Sales - per $1000"
    }
    
    // 'visible' attribute on InputSet (id=BasementInputSet) at BOPBuilding_DetailsDV.pcf: line 119, column 100
    function visible_88 () : java.lang.Boolean {
      return building.Building.NumBasements != null and building.Building.NumBasements > 0
    }
    
    property get bopBuildingCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("bopBuildingCatCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set bopBuildingCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("bopBuildingCatCoveragePatterns", 0, $arg)
    }
    
    property get building () : BOPBuilding {
      return getRequireValue("building", 0) as BOPBuilding
    }
    
    property set building ($arg :  BOPBuilding) {
      setRequireValue("building", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPBuilding_DetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPBuilding_DetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_32 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_34 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_36 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_38 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_40 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_42 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_44 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_46 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_48 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_50 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_52 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_54 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_56 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_58 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_onEnter_60 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_33 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_35 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_37 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_39 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_41 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_43 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, building, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at BOPBuilding_DetailsDV.pcf: line 79, column 44
    function mode_62 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}