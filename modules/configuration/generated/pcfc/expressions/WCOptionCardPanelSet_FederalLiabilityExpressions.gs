package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.FederalLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_FederalLiabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.FederalLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function action_68 () : void {
      WCClassCodeSearchPopup.push(typekey.WCClassCodeFederalDomains.get(wcLine.WCFedEmpLiabCov.FedEmpLiabActTerm.Value.Code), firstBasis.LocationWM, wcLine, previousWCClassCode)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function action_dest_69 () : pcf.api.Destination {
      return pcf.WCClassCodeSearchPopup.createDestination(typekey.WCClassCodeFederalDomains.get(wcLine.WCFedEmpLiabCov.FedEmpLiabActTerm.Value.Code), firstBasis.LocationWM, wcLine, previousWCClassCode)
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      firstBasis.LocationWM = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      firstBasis.ClassCode = (__VALUE_TO_SET as entity.WCClassCode)
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 160, column 35
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      firstBasis.NumEmployees = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 165, column 73
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      firstBasis.IfAnyExposureAndClearBasisAmount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=AnnualRenum_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 179, column 35
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      firstBasis.BasisAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function editable_70 () : java.lang.Boolean {
      return firstBasis.LocationWM.State != null
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.FederalLiability.pcf: line 107, column 48
    function initialValue_58 () : WCFedCoveredEmployee {
      return exposure.AllVersions[0]
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.FederalLiability.pcf: line 112, column 50
    function initialValue_59 () : WCFedCoveredEmployee[] {
      return exceptFirstBases(exposure)
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.FederalLiability.pcf: line 116, column 39
    function initialValue_60 () : WCClassCode {
      return isNewTerm ? null :firstBasis.BasedOn.ClassCode
    }
    
    // RowIterator (id=BasisScalableEUs) at WCOptionCardPanelSet.FederalLiability.pcf: line 102, column 48
    function initializeVariables_94 () : void {
        firstBasis = exposure.AllVersions[0];
  additionalBases = exceptFirstBases(exposure);
  previousWCClassCode = isNewTerm ? null :firstBasis.BasedOn.ClassCode;

    }
    
    // 'inputConversion' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function inputConversion_71 (VALUE :  java.lang.String) : java.lang.Object {
      return findFirstMatchingClassCode(VALUE, gw.api.util.JurisdictionMappingUtil.getJurisdiction(firstBasis.LocationWM), wcLine.WCFedEmpLiabCov.FedEmpLiabActTerm.Value.Code, previousWCClassCode)
    }
    
    // 'outputConversion' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function outputConversion_72 (VALUE :  entity.WCClassCode) : java.lang.String {
      return VALUE == null ? "" : (VALUE).Code
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function valueRange_64 () : java.lang.Object {
      return wcLine.Branch.PolicyLocations
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function valueRoot_63 () : java.lang.Object {
      return firstBasis
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 152, column 66
    function valueRoot_79 () : java.lang.Object {
      return firstBasis.ClassCode
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function value_61 () : entity.PolicyLocation {
      return firstBasis.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function value_73 () : entity.WCClassCode {
      return firstBasis.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 152, column 66
    function value_78 () : java.lang.String {
      return firstBasis.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 160, column 35
    function value_81 () : java.lang.Integer {
      return firstBasis.NumEmployees
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 165, column 73
    function value_85 () : java.lang.Boolean {
      return firstBasis.IfAnyExposureAndClearBasisAmount
    }
    
    // 'value' attribute on TextCell (id=AnnualRenum_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 179, column 35
    function value_90 () : java.lang.Integer {
      return firstBasis.BasisAmount
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function verifyValueRangeIsAllowedType_65 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function verifyValueRangeIsAllowedType_65 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function verifyValueRangeIsAllowedType_65 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function verifyValueRange_66 () : void {
      var __valueRangeArg = wcLine.Branch.PolicyLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_65(__valueRangeArg)
    }
    
    // 'valueVisible' attribute on TextCell (id=AnnualRenum_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 179, column 35
    function visible_89 () : java.lang.Boolean {
      return !firstBasis.IfAnyExposureAndClearBasisAmount
    }
    
    property get additionalBases () : WCFedCoveredEmployee[] {
      return getVariableValue("additionalBases", 1) as WCFedCoveredEmployee[]
    }
    
    property set additionalBases ($arg :  WCFedCoveredEmployee[]) {
      setVariableValue("additionalBases", 1, $arg)
    }
    
    property get exposure () : entity.windowed.WCFedCoveredEmployeeVersionList {
      return getIteratedValue(1) as entity.windowed.WCFedCoveredEmployeeVersionList
    }
    
    property get firstBasis () : WCFedCoveredEmployee {
      return getVariableValue("firstBasis", 1) as WCFedCoveredEmployee
    }
    
    property set firstBasis ($arg :  WCFedCoveredEmployee) {
      setVariableValue("firstBasis", 1, $arg)
    }
    
    property get previousWCClassCode () : WCClassCode {
      return getVariableValue("previousWCClassCode", 1) as WCClassCode
    }
    
    property set previousWCClassCode ($arg :  WCClassCode) {
      setVariableValue("previousWCClassCode", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.FederalLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      liabCov.WCFedEmpLiabLimitTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionWCFedEmpLiabLimitType>)
    }
    
    // 'value' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      liabCov.FELADiseaseTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionFELADiseaseType>)
    }
    
    // 'value' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      liabCov.WCFedEmpLiabCovProgramTerm.Value = (__VALUE_TO_SET as typekey.FedEmpLiabProgram)
    }
    
    // 'value' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      liabCov.FedEmpLiabActTerm.Value = (__VALUE_TO_SET as typekey.FedEmpLiabAct)
    }
    
    // 'value' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      liabCov.WCFedEmpLiabilityLawTerm.Value = (__VALUE_TO_SET as typekey.SpecialCov)
    }
    
    // 'editable' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function editable_11 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(liabCov.WCFedEmpLiabLimitTerm)
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.FederalLiability.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return wcLine.Branch.Job.NewTerm
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.FederalLiability.pcf: line 21, column 44
    function initialValue_1 () : productmodel.WCFedEmpLiabCov {
      return wcLine.WCFedEmpLiabCov 
    }
    
    // 'label' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function label_12 () : java.lang.Object {
      return liabCov.WCFedEmpLiabLimitTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function label_2 () : java.lang.Object {
      return liabCov.FedEmpLiabActTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function label_23 () : java.lang.Object {
      return liabCov.FELADiseaseTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function label_33 () : java.lang.Object {
      return liabCov.WCFedEmpLiabCovProgramTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function label_43 () : java.lang.Object {
      return liabCov.WCFedEmpLiabilityLawTerm.DisplayName
    }
    
    // 'value' attribute on RangeCell (id=Loc_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 128, column 55
    function sortValue_53 (exposure :  entity.windowed.WCFedCoveredEmployeeVersionList) : java.lang.Object {
      var firstBasis : WCFedCoveredEmployee = (exposure.AllVersions[0])
var additionalBases : WCFedCoveredEmployee[] = (exceptFirstBases(exposure))
var previousWCClassCode : WCClassCode = (isNewTerm ? null :firstBasis.BasedOn.ClassCode)
return firstBasis.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 144, column 34
    function sortValue_54 (exposure :  entity.windowed.WCFedCoveredEmployeeVersionList) : java.lang.Object {
      var firstBasis : WCFedCoveredEmployee = (exposure.AllVersions[0])
var additionalBases : WCFedCoveredEmployee[] = (exceptFirstBases(exposure))
var previousWCClassCode : WCClassCode = (isNewTerm ? null :firstBasis.BasedOn.ClassCode)
return firstBasis.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 152, column 66
    function sortValue_55 (exposure :  entity.windowed.WCFedCoveredEmployeeVersionList) : java.lang.Object {
      var firstBasis : WCFedCoveredEmployee = (exposure.AllVersions[0])
var additionalBases : WCFedCoveredEmployee[] = (exceptFirstBases(exposure))
var previousWCClassCode : WCClassCode = (isNewTerm ? null :firstBasis.BasedOn.ClassCode)
return firstBasis.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 160, column 35
    function sortValue_56 (exposure :  entity.windowed.WCFedCoveredEmployeeVersionList) : java.lang.Object {
      var firstBasis : WCFedCoveredEmployee = (exposure.AllVersions[0])
var additionalBases : WCFedCoveredEmployee[] = (exceptFirstBases(exposure))
var previousWCClassCode : WCClassCode = (isNewTerm ? null :firstBasis.BasedOn.ClassCode)
return firstBasis.NumEmployees
    }
    
    // 'value' attribute on CheckBoxCell (id=IfAnyExposure_Cell) at WCOptionCardPanelSet.FederalLiability.pcf: line 165, column 73
    function sortValue_57 (exposure :  entity.windowed.WCFedCoveredEmployeeVersionList) : java.lang.Object {
      var firstBasis : WCFedCoveredEmployee = (exposure.AllVersions[0])
var additionalBases : WCFedCoveredEmployee[] = (exceptFirstBases(exposure))
var previousWCClassCode : WCClassCode = (isNewTerm ? null :firstBasis.BasedOn.ClassCode)
return firstBasis.IfAnyExposureAndClearBasisAmount
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=BasisScalableEUs) at WCOptionCardPanelSet.FederalLiability.pcf: line 102, column 48
    function toCreateAndAdd_95 () : entity.windowed.WCFedCoveredEmployeeVersionList {
      return makeEU()
    }
    
    // 'toRemove' attribute on RowIterator (id=BasisScalableEUs) at WCOptionCardPanelSet.FederalLiability.pcf: line 102, column 48
    function toRemove_96 (exposure :  entity.windowed.WCFedCoveredEmployeeVersionList) : void {
      removeEU(exposure)
    }
    
    // 'valueRange' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function valueRange_16 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(liabCov.WCFedEmpLiabLimitTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function valueRange_27 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(liabCov.FELADiseaseTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function valueRange_37 () : java.lang.Object {
      return liabCov.WCFedEmpLiabCovProgramTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function valueRange_47 () : java.lang.Object {
      return liabCov.WCFedEmpLiabilityLawTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function valueRange_6 () : java.lang.Object {
      return liabCov.FedEmpLiabActTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function valueRoot_15 () : java.lang.Object {
      return liabCov.WCFedEmpLiabLimitTerm
    }
    
    // 'value' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function valueRoot_26 () : java.lang.Object {
      return liabCov.FELADiseaseTerm
    }
    
    // 'value' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function valueRoot_36 () : java.lang.Object {
      return liabCov.WCFedEmpLiabCovProgramTerm
    }
    
    // 'value' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function valueRoot_46 () : java.lang.Object {
      return liabCov.WCFedEmpLiabilityLawTerm
    }
    
    // 'value' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function valueRoot_5 () : java.lang.Object {
      return liabCov.FedEmpLiabActTerm
    }
    
    // 'value' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function value_13 () : gw.api.productmodel.CovTermOpt<productmodel.OptionWCFedEmpLiabLimitType> {
      return liabCov.WCFedEmpLiabLimitTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function value_24 () : gw.api.productmodel.CovTermOpt<productmodel.OptionFELADiseaseType> {
      return liabCov.FELADiseaseTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function value_3 () : typekey.FedEmpLiabAct {
      return liabCov.FedEmpLiabActTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function value_34 () : typekey.FedEmpLiabProgram {
      return liabCov.WCFedEmpLiabCovProgramTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function value_44 () : typekey.SpecialCov {
      return liabCov.WCFedEmpLiabilityLawTerm.Value
    }
    
    // 'value' attribute on RowIterator (id=BasisScalableEUs) at WCOptionCardPanelSet.FederalLiability.pcf: line 102, column 48
    function value_97 () : java.lang.Object[] {
      return wcLine.WCFedCoveredEmployeeVLs.toArray()
    }
    
    // 'valueRange' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionWCFedEmpLiabLimitType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionFELADiseaseType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function verifyValueRangeIsAllowedType_38 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function verifyValueRangeIsAllowedType_38 ($$arg :  typekey.FedEmpLiabProgram[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function verifyValueRangeIsAllowedType_48 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function verifyValueRangeIsAllowedType_48 ($$arg :  typekey.SpecialCov[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function verifyValueRangeIsAllowedType_7 ($$arg :  typekey.FedEmpLiabAct[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FedEmpLiabLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 45, column 105
    function verifyValueRange_18 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(liabCov.WCFedEmpLiabLimitTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=FELADiseaseLimit_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 54, column 99
    function verifyValueRange_29 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(liabCov.FELADiseaseTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Program_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 62, column 51
    function verifyValueRange_39 () : void {
      var __valueRangeArg = liabCov.WCFedEmpLiabCovProgramTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_38(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function verifyValueRange_49 () : void {
      var __valueRangeArg = liabCov.WCFedEmpLiabilityLawTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_48(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=GoverningAct_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 33, column 47
    function verifyValueRange_8 () : void {
      var __valueRangeArg = liabCov.FedEmpLiabActTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=GoverningLaw2_Input) at WCOptionCardPanelSet.FederalLiability.pcf: line 74, column 110
    function visible_42 () : java.lang.Boolean {
      return wcLine.WCFedEmpLiabCov.WCFedEmpLiabCovProgramTerm.Value.Code == "ProgramII"
    }
    
    property get isNewTerm () : boolean {
      return getVariableValue("isNewTerm", 0) as java.lang.Boolean
    }
    
    property set isNewTerm ($arg :  boolean) {
      setVariableValue("isNewTerm", 0, $arg)
    }
    
    property get liabCov () : productmodel.WCFedEmpLiabCov {
      return getVariableValue("liabCov", 0) as productmodel.WCFedEmpLiabCov
    }
    
    property set liabCov ($arg :  productmodel.WCFedEmpLiabCov) {
      setVariableValue("liabCov", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    function makeEU() : entity.windowed.WCFedCoveredEmployeeVersionList {
      var eu = wcLine.createAndAddWCFedCoveredEmployee()
      return eu.VersionList
    }
    
    function exceptFirstBases(eu: entity.windowed.WCFedCoveredEmployeeVersionList): WCFedCoveredEmployee[] {
      var array = eu.AllVersions?.toTypedArray()
      return gw.api.util.ArrayUtil.subArray(array, 1, array.Count) as WCFedCoveredEmployee[]
    }
    
    function removeEU(eu: entity.windowed.WCFedCoveredEmployeeVersionList) {
      var basis = eu.AllVersions[0]
      basis.getSlice(basis.EffectiveDate).remove()
    }
    
    function findFirstMatchingClassCode(code : String, refDateState : Jurisdiction, wcDomain: String, peviousCode : WCClassCode) : WCClassCode{
      var classCode = wcLine.firstMatchingClassCode( code, refDateState, wcDomain, peviousCode )
      if (classCode == null) {
        gw.api.util.LocationUtil.addRequestScopedErrorMessage(DisplayKey.get("Java.ClassCodePickerWidget.WCInvalidCode", code, refDateState))
      }
      return classCode
    }
    
    
  }
  
  
}