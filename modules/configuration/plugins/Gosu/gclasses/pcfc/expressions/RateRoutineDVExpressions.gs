package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateRoutineDV.pcf: line 114, column 41
    function actionAvailable_62 () : java.lang.Boolean {
      return rateroutine.UpdateUser != null
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateRoutineDV.pcf: line 114, column 41
    function action_58 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateRoutineDV.pcf: line 114, column 41
    function action_60 () : void {
      UserDetailPage.go(rateroutine.UpdateUser)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateRoutineDV.pcf: line 114, column 41
    function action_dest_59 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateRoutineDV.pcf: line 114, column 41
    function action_dest_61 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(rateroutine.UpdateUser)
    }
    
    // 'available' attribute on ContentInput at RateRoutineDV.pcf: line 102, column 80
    function available_57 () : java.lang.Boolean {
      return rateroutine.ParameterSet != null
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateRoutineDV.pcf: line 52, column 47
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateroutine.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RateRoutineDV.pcf: line 63, column 42
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateroutine.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateroutine.PolicyLinePatternCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Jurisdiction_Input) at RateRoutineDV.pcf: line 86, column 43
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateroutine.Jurisdiction = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateroutine.ParameterSet = (__VALUE_TO_SET as entity.CalcRoutineParameterSet)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateRoutineDV.pcf: line 45, column 35
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateroutine.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function editable_25 () : java.lang.Boolean {
      return canEditIdentifyingFields
    }
    
    // 'editable' attribute on TextInput (id=Code_Input) at RateRoutineDV.pcf: line 45, column 35
    function editable_3 () : java.lang.Boolean {
      return canEditIdentifyingFields and copyVersionType != BRANCH
    }
    
    // 'editable' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function editable_43 () : java.lang.Boolean {
      return not rateroutine.isIncludedInAnyRateBook()
    }
    
    // 'editable' attribute on TextInput (id=Name_Input) at RateRoutineDV.pcf: line 52, column 47
    function editable_9 () : java.lang.Boolean {
      return canEditIdentifyingFields or copyVersionType == BRANCH
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDV.pcf: line 25, column 62
    function initialValue_0 () : gw.pcf.rating.flow.RateRoutineEditScreenHelper {
      return new gw.pcf.rating.flow.RateRoutineEditScreenHelper( rateroutine, CurrentLocation )
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDV.pcf: line 30, column 51
    function initialValue_1 () : List<CalcRoutineParameterSet> {
      return helper.getAvailableParamSets()
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDV.pcf: line 38, column 23
    function initialValue_2 () : boolean {
      return rateroutine.canEditIdentifyingFields()
    }
    
    // 'label' attribute on Link (id=ParamInfo) at RateRoutineDV.pcf: line 107, column 58
    function label_55 () : java.lang.Object {
      return helper.getStringForParamTypes()
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineDV.pcf: line 77, column 54
    function onChange_24 () : void {
      helper.resetCalcRoutine(true);
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineDV.pcf: line 98, column 66
    function onChange_42 () : void {
      helper.changeParameterSet(highlightedRows)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function optionLabel_30 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID(VALUE) as String
    }
    
    // 'optionLabel' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function optionLabel_48 (VALUE :  entity.CalcRoutineParameterSet) : java.lang.String {
      return VALUE.Name
    }
    
    // 'showConfirmMessage' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function showConfirmMessage_26 () : java.lang.Boolean {
      return rateroutine.Steps.Count > 0
    }
    
    // 'tooltip' attribute on Link (id=ParamInfo) at RateRoutineDV.pcf: line 107, column 58
    function tooltip_56 () : java.lang.String {
      return helper.getHelpStringForParamTypes()
    }
    
    // 'validationExpression' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function validationExpression_44 () : java.lang.Object {
      return helper.getParamSetValidation()
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function valueRange_31 () : java.lang.Object {
      return helper.getAllLOBsWithParamSets()
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function valueRange_49 () : java.lang.Object {
      return paramSets
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateRoutineDV.pcf: line 45, column 35
    function valueRoot_6 () : java.lang.Object {
      return rateroutine
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateRoutineDV.pcf: line 52, column 47
    function value_11 () : java.lang.String {
      return rateroutine.Name
    }
    
    // 'value' attribute on TextInput (id=Version_Input) at RateRoutineDV.pcf: line 58, column 40
    function value_17 () : java.lang.Integer {
      return rateroutine.Version
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RateRoutineDV.pcf: line 63, column 42
    function value_20 () : java.lang.String {
      return rateroutine.Description
    }
    
    // 'value' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function value_27 () : java.lang.String {
      return rateroutine.PolicyLinePatternCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Jurisdiction_Input) at RateRoutineDV.pcf: line 86, column 43
    function value_37 () : typekey.Jurisdiction {
      return rateroutine.Jurisdiction
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateRoutineDV.pcf: line 45, column 35
    function value_4 () : java.lang.String {
      return rateroutine.Code
    }
    
    // 'value' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function value_45 () : entity.CalcRoutineParameterSet {
      return rateroutine.ParameterSet
    }
    
    // 'value' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateRoutineDV.pcf: line 114, column 41
    function value_63 () : entity.User {
      return rateroutine.UpdateUser
    }
    
    // 'value' attribute on DateInput (id=LastUpdateTime_Input) at RateRoutineDV.pcf: line 120, column 40
    function value_66 () : java.util.Date {
      return rateroutine.UpdateTime
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function verifyValueRangeIsAllowedType_50 ($$arg :  entity.CalcRoutineParameterSet[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function verifyValueRangeIsAllowedType_50 ($$arg :  gw.api.database.IQueryBeanResult<entity.CalcRoutineParameterSet>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineLOB_Input) at RateRoutineDV.pcf: line 75, column 38
    function verifyValueRange_33 () : void {
      var __valueRangeArg = helper.getAllLOBsWithParamSets()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateRoutineDV.pcf: line 96, column 52
    function verifyValueRange_51 () : void {
      var __valueRangeArg = paramSets
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Name_Input) at RateRoutineDV.pcf: line 52, column 47
    function visible_10 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get canEditIdentifyingFields () : boolean {
      return getVariableValue("canEditIdentifyingFields", 0) as java.lang.Boolean
    }
    
    property set canEditIdentifyingFields ($arg :  boolean) {
      setVariableValue("canEditIdentifyingFields", 0, $arg)
    }
    
    property get copyVersionType () : gw.rating.flow.util.CopyVersionType {
      return getRequireValue("copyVersionType", 0) as gw.rating.flow.util.CopyVersionType
    }
    
    property set copyVersionType ($arg :  gw.rating.flow.util.CopyVersionType) {
      setRequireValue("copyVersionType", 0, $arg)
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("costDataUsages", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEditScreenHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEditScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEditScreenHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get highlightedRows () : java.util.Map<CalcStepDefinition, java.util.List<java.lang.Integer>> {
      return getRequireValue("highlightedRows", 0) as java.util.Map<CalcStepDefinition, java.util.List<java.lang.Integer>>
    }
    
    property set highlightedRows ($arg :  java.util.Map<CalcStepDefinition, java.util.List<java.lang.Integer>>) {
      setRequireValue("highlightedRows", 0, $arg)
    }
    
    property get newRateRoutine () : boolean {
      return getRequireValue("newRateRoutine", 0) as java.lang.Boolean
    }
    
    property set newRateRoutine ($arg :  boolean) {
      setRequireValue("newRateRoutine", 0, $arg)
    }
    
    property get paramSets () : List<CalcRoutineParameterSet> {
      return getVariableValue("paramSets", 0) as List<CalcRoutineParameterSet>
    }
    
    property set paramSets ($arg :  List<CalcRoutineParameterSet>) {
      setVariableValue("paramSets", 0, $arg)
    }
    
    property get rateroutine () : CalcRoutineDefinition {
      return getRequireValue("rateroutine", 0) as CalcRoutineDefinition
    }
    
    property set rateroutine ($arg :  CalcRoutineDefinition) {
      setRequireValue("rateroutine", 0, $arg)
    }
    
    property get showParamTypes () : boolean {
      return getVariableValue("showParamTypes", 0) as java.lang.Boolean
    }
    
    property set showParamTypes ($arg :  boolean) {
      setVariableValue("showParamTypes", 0, $arg)
    }
    
    
  }
  
  
}