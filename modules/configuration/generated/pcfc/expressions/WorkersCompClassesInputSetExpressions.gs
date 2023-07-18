package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompClassesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkersCompClassesInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompClassesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 190, column 30
    function action_76 () : void {
      WCClassCodeSearchPopup.push(wcEmployee.LocationWM, wcLine, previousWCCoveredClassCode)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 190, column 30
    function action_dest_77 () : pcf.api.Destination {
      return pcf.WCClassCodeSearchPopup.createDestination(wcEmployee.LocationWM, wcLine, previousWCCoveredClassCode)
    }
    
    // 'available' attribute on TextCell (id=AnnualRenum_Cell) at WorkersCompClassesInputSet.pcf: line 223, column 31
    function available_97 () : java.lang.Boolean {
      return !wcCoveredEmployee.IfAnyExposureAndClearBasisAmount
    }
    
    // 'value' attribute on TextCell (id=AnnualRenum_Cell) at WorkersCompClassesInputSet.pcf: line 223, column 31
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcCoveredEmployee.BasisAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 164, column 31
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcCoveredEmployee.SpecialCov = (__VALUE_TO_SET as typekey.SpecialCov)
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcCoveredEmployee.LocationWM = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 190, column 30
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcCoveredEmployee.ClassCode = (__VALUE_TO_SET as entity.WCClassCode)
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WorkersCompClassesInputSet.pcf: line 205, column 31
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcCoveredEmployee.NumEmployees = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WorkersCompClassesInputSet.pcf: line 209, column 76
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcCoveredEmployee.IfAnyExposureAndClearBasisAmount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function editable_67 () : java.lang.Boolean {
      return wcCoveredEmployee.NewEmployee and wcCoveredEmployee.LocationWM.State != null
    }
    
    // 'editable' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 190, column 30
    function editable_78 () : java.lang.Boolean {
      return wcCoveredEmployee.LocationWM.State != null
    }
    
    // 'initialValue' attribute on Variable at WorkersCompClassesInputSet.pcf: line 148, column 42
    function initialValue_57 () : entity.WCClassCode {
      return isNewTerm ? null : wcCoveredEmployee.BasedOn.ClassCode
    }
    
    // RowIterator (id=CoveredEmployee) at WorkersCompClassesInputSet.pcf: line 144, column 52
    function initializeVariables_104 () : void {
        previousWCCoveredClassCode = isNewTerm ? null : wcCoveredEmployee.BasedOn.ClassCode;

    }
    
    // 'inputConversion' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 190, column 30
    function inputConversion_79 (VALUE :  java.lang.String) : java.lang.Object {
      return findFirstMatchingClassCode(VALUE, gw.api.util.JurisdictionMappingUtil.getJurisdiction(wcEmployee.LocationWM), gw.api.util.JurisdictionMappingUtil.getJurisdiction(wcEmployee.LocationWM).Code, previousWCCoveredClassCode)
    }
    
    // 'outputConversion' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 190, column 30
    function outputConversion_80 (VALUE :  entity.WCClassCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 164, column 31
    function valueRange_63 () : java.lang.Object {
      return jurisdiction.getPossibleGoverningLaws()
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function valueRange_71 () : java.lang.Object {
      return wcLine.Branch.getPolicyLocationWM(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(jurisdiction.State))
    }
    
    // 'value' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 164, column 31
    function valueRoot_62 () : java.lang.Object {
      return wcCoveredEmployee
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WorkersCompClassesInputSet.pcf: line 198, column 30
    function valueRoot_87 () : java.lang.Object {
      return wcCoveredEmployee.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Period2_Cell) at WorkersCompClassesInputSet.pcf: line 155, column 31
    function value_58 () : java.lang.String {
      return getPeriodNumbers(wcCoveredEmployee)
    }
    
    // 'value' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 164, column 31
    function value_60 () : typekey.SpecialCov {
      return wcCoveredEmployee.SpecialCov
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function value_68 () : entity.PolicyLocation {
      return wcCoveredEmployee.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 190, column 30
    function value_81 () : entity.WCClassCode {
      return wcCoveredEmployee.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WorkersCompClassesInputSet.pcf: line 198, column 30
    function value_86 () : java.lang.String {
      return wcCoveredEmployee.ClassCode.ShortDesc
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WorkersCompClassesInputSet.pcf: line 205, column 31
    function value_89 () : java.lang.Integer {
      return wcCoveredEmployee.NumEmployees
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WorkersCompClassesInputSet.pcf: line 209, column 76
    function value_93 () : java.lang.Boolean {
      return wcCoveredEmployee.IfAnyExposureAndClearBasisAmount
    }
    
    // 'value' attribute on TextCell (id=AnnualRenum_Cell) at WorkersCompClassesInputSet.pcf: line 223, column 31
    function value_99 () : java.lang.Integer {
      return wcCoveredEmployee.BasisAmount
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 164, column 31
    function verifyValueRangeIsAllowedType_64 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 164, column 31
    function verifyValueRangeIsAllowedType_64 ($$arg :  typekey.SpecialCov[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function verifyValueRangeIsAllowedType_72 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function verifyValueRangeIsAllowedType_72 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function verifyValueRangeIsAllowedType_72 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 164, column 31
    function verifyValueRange_65 () : void {
      var __valueRangeArg = jurisdiction.getPossibleGoverningLaws()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_64(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 175, column 29
    function verifyValueRange_73 () : void {
      var __valueRangeArg = wcLine.Branch.getPolicyLocationWM(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(jurisdiction.State))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_72(__valueRangeArg)
    }
    
    property get previousWCCoveredClassCode () : entity.WCClassCode {
      return getVariableValue("previousWCCoveredClassCode", 2) as entity.WCClassCode
    }
    
    property set previousWCCoveredClassCode ($arg :  entity.WCClassCode) {
      setVariableValue("previousWCCoveredClassCode", 2, $arg)
    }
    
    property get wcCoveredEmployee () : entity.WCCoveredEmployee {
      return getIteratedValue(2) as entity.WCCoveredEmployee
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompClassesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WorkersCompClassesInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function action_29 () : void {
      WCClassCodeSearchPopup.push(wcEmployee.LocationWM, wcLine, previousWCClassCode)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function action_dest_30 () : pcf.api.Destination {
      return pcf.WCClassCodeSearchPopup.createDestination(wcEmployee.LocationWM, wcLine, previousWCClassCode)
    }
    
    // 'available' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function available_31 () : java.lang.Boolean {
      return wcEmployee.LocationWM != null
    }
    
    // 'available' attribute on TextCell (id=AnnualRenum_Cell) at WorkersCompClassesInputSet.pcf: line 136, column 29
    function available_50 () : java.lang.Boolean {
      return !wcEmployee.IfAnyExposureAndClearBasisAmount
    }
    
    // 'value' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcEmployee.SpecialCov = (__VALUE_TO_SET as typekey.SpecialCov)
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcEmployee.LocationWM = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcEmployee.ClassCode = (__VALUE_TO_SET as entity.WCClassCode)
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WorkersCompClassesInputSet.pcf: line 116, column 29
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcEmployee.NumEmployees = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WorkersCompClassesInputSet.pcf: line 121, column 67
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcEmployee.IfAnyExposureAndClearBasisAmount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=AnnualRenum_Cell) at WorkersCompClassesInputSet.pcf: line 136, column 29
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcEmployee.BasisAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function editable_20 () : java.lang.Boolean {
      return wcEmployee.NewEmployee
    }
    
    // 'initialValue' attribute on Variable at WorkersCompClassesInputSet.pcf: line 51, column 40
    function initialValue_9 () : entity.WCClassCode {
      return isNewTerm ? null : wcEmployee.BasedOn.ClassCode
    }
    
    // RowIterator (id=EmployeeVersionList) at WorkersCompClassesInputSet.pcf: line 47, column 50
    function initializeVariables_106 () : void {
        previousWCClassCode = isNewTerm ? null : wcEmployee.BasedOn.ClassCode;

    }
    
    // 'inputConversion' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function inputConversion_32 (VALUE :  java.lang.String) : java.lang.Object {
      return findFirstMatchingClassCode(VALUE, gw.api.util.JurisdictionMappingUtil.getJurisdiction(wcEmployee.LocationWM), gw.api.util.JurisdictionMappingUtil.getJurisdiction(wcEmployee.LocationWM).Code, previousWCClassCode)
    }
    
    // 'outputConversion' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function outputConversion_33 (VALUE :  entity.WCClassCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function valueRange_16 () : java.lang.Object {
      return jurisdiction.getPossibleGoverningLaws()
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function valueRange_24 () : java.lang.Object {
      return wcLine.Branch.getPolicyLocationWM(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(jurisdiction.State))
    }
    
    // 'value' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function valueRoot_15 () : java.lang.Object {
      return wcEmployee
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WorkersCompClassesInputSet.pcf: line 108, column 28
    function valueRoot_40 () : java.lang.Object {
      return wcEmployee.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Period1_Cell) at WorkersCompClassesInputSet.pcf: line 60, column 29
    function value_10 () : java.lang.String {
      return getPeriodNumbers(wcEmployee)
    }
    
    // 'value' attribute on RowIterator (id=CoveredEmployee) at WorkersCompClassesInputSet.pcf: line 144, column 52
    function value_105 () : entity.WCCoveredEmployee[] {
      return wcEmployee.AdditionalVersions.whereTypeIs(WCCoveredEmployee)
    }
    
    // 'value' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function value_13 () : typekey.SpecialCov {
      return wcEmployee.SpecialCov
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function value_21 () : entity.PolicyLocation {
      return wcEmployee.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function value_34 () : entity.WCClassCode {
      return wcEmployee.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WorkersCompClassesInputSet.pcf: line 108, column 28
    function value_39 () : java.lang.String {
      return wcEmployee.ClassCode.ShortDesc
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WorkersCompClassesInputSet.pcf: line 116, column 29
    function value_42 () : java.lang.Integer {
      return wcEmployee.NumEmployees
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WorkersCompClassesInputSet.pcf: line 121, column 67
    function value_46 () : java.lang.Boolean {
      return wcEmployee.IfAnyExposureAndClearBasisAmount
    }
    
    // 'value' attribute on TextCell (id=AnnualRenum_Cell) at WorkersCompClassesInputSet.pcf: line 136, column 29
    function value_52 () : java.lang.Integer {
      return wcEmployee.BasisAmount
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function verifyValueRangeIsAllowedType_17 ($$arg :  typekey.SpecialCov[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function verifyValueRangeIsAllowedType_25 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function verifyValueRangeIsAllowedType_25 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function verifyValueRange_18 () : void {
      var __valueRangeArg = jurisdiction.getPossibleGoverningLaws()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function verifyValueRange_26 () : void {
      var __valueRangeArg = wcLine.Branch.getPolicyLocationWM(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(jurisdiction.State))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=Period1_Cell) at WorkersCompClassesInputSet.pcf: line 60, column 29
    function visible_11 () : java.lang.Boolean {
      return splitDates.Count > 2
    }
    
    property get previousWCClassCode () : entity.WCClassCode {
      return getVariableValue("previousWCClassCode", 1) as entity.WCClassCode
    }
    
    property set previousWCClassCode ($arg :  entity.WCClassCode) {
      setVariableValue("previousWCClassCode", 1, $arg)
    }
    
    property get wcEmployee () : entity.WCCoveredEmployee {
      return getIteratedValue(1) as entity.WCCoveredEmployee
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompClassesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkersCompClassesInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WorkersCompClassesInputSet.pcf: line 16, column 23
    function initialValue_0 () : boolean {
      return wcLine.Branch.Job.NewTerm
    }
    
    // 'initialValue' attribute on Variable at WorkersCompClassesInputSet.pcf: line 21, column 52
    function initialValue_1 () : java.util.List<java.util.Date> {
      return jurisdiction.SplitDates
    }
    
    // 'value' attribute on RangeCell (id=SpecialCoverage_Cell) at WorkersCompClassesInputSet.pcf: line 70, column 29
    function sortValue_3 (wcEmployee :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcEmployee.SpecialCov
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WorkersCompClassesInputSet.pcf: line 82, column 27
    function sortValue_4 (wcEmployee :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcEmployee.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WorkersCompClassesInputSet.pcf: line 99, column 28
    function sortValue_5 (wcEmployee :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcEmployee.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WorkersCompClassesInputSet.pcf: line 108, column 28
    function sortValue_6 (wcEmployee :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcEmployee.ClassCode.ShortDesc
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WorkersCompClassesInputSet.pcf: line 116, column 29
    function sortValue_7 (wcEmployee :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcEmployee.NumEmployees
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WorkersCompClassesInputSet.pcf: line 121, column 67
    function sortValue_8 (wcEmployee :  entity.WCCoveredEmployee) : java.lang.Object {
      return wcEmployee.IfAnyExposureAndClearBasisAmount
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=EmployeeVersionList) at WorkersCompClassesInputSet.pcf: line 47, column 50
    function toCreateAndAdd_107 () : entity.WCCoveredEmployee {
      return wcLine.addCoveredEmployeeWM(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(jurisdiction.State))
    }
    
    // 'toRemove' attribute on RowIterator (id=EmployeeVersionList) at WorkersCompClassesInputSet.pcf: line 47, column 50
    function toRemove_108 (wcEmployee :  entity.WCCoveredEmployee) : void {
      wcEmployee.removeWM()
    }
    
    // 'value' attribute on RowIterator (id=EmployeeVersionList) at WorkersCompClassesInputSet.pcf: line 47, column 50
    function value_109 () : entity.WCCoveredEmployee[] {
      return wcLine.getWCCoveredEmployeesWM(jurisdiction.State)
    }
    
    // 'visible' attribute on TextCell (id=Period1_Cell) at WorkersCompClassesInputSet.pcf: line 60, column 29
    function visible_2 () : java.lang.Boolean {
      return splitDates.Count > 2
    }
    
    property get isNewTerm () : boolean {
      return getVariableValue("isNewTerm", 0) as java.lang.Boolean
    }
    
    property set isNewTerm ($arg :  boolean) {
      setVariableValue("isNewTerm", 0, $arg)
    }
    
    property get jurisdiction () : WCJurisdiction {
      return getRequireValue("jurisdiction", 0) as WCJurisdiction
    }
    
    property set jurisdiction ($arg :  WCJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    property get splitDates () : java.util.List<java.util.Date> {
      return getVariableValue("splitDates", 0) as java.util.List<java.util.Date>
    }
    
    property set splitDates ($arg :  java.util.List<java.util.Date>) {
      setVariableValue("splitDates", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    function findFirstMatchingClassCode(code : String, refDateState : Jurisdiction, wcDomain: String, peviousCode : WCClassCode) : WCClassCode{
      var classCode = wcLine.firstMatchingClassCode( code,refDateState, wcDomain, peviousCode )
      if (classCode == null) {
        gw.api.util.LocationUtil.addRequestScopedErrorMessage(DisplayKey.get("Java.ClassCodePickerWidget.WCInvalidCode", code, refDateState))
      }
      return classCode
    }
    
    function getPeriodNumbers(wcEmployee : WCCoveredEmployee) : String{
      return gw.api.web.util.DateRangeUtil.getPeriodNumbers(wcEmployee.EffectiveDateRange, splitDates )
    }
    
    
  }
  
  
}