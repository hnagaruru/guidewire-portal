package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RatingParameterSetScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingParameterSetScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RatingParameterSetScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CalcRoutineParameterSetsLDVExpressionsImpl extends RatingParameterSetScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=paramSetUpdate) at RatingParameterSetScreen.pcf: line 94, column 55
    function action_29 () : void {
      helper.updateParameterSetIfModified(parameterSet); CurrentLocation.commit()
    }
    
    // 'def' attribute on PanelRef at RatingParameterSetScreen.pcf: line 136, column 136
    function def_onEnter_53 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(parameterSet, { "Name" }, { DisplayKey.get("Web.Rating.ParameterSet.Name") })
    }
    
    // 'def' attribute on PanelRef at RatingParameterSetScreen.pcf: line 136, column 136
    function def_refreshVariables_54 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(parameterSet, { "Name" }, { DisplayKey.get("Web.Rating.ParameterSet.Name") })
    }
    
    // 'value' attribute on TextInput (id=ParamsetCode_Input) at RatingParameterSetScreen.pcf: line 107, column 46
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameterSet.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ParamSetName_Input) at RatingParameterSetScreen.pcf: line 113, column 46
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameterSet.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=ParamSetPolicyLine_Input) at RatingParameterSetScreen.pcf: line 123, column 48
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameterSet.PolicyLinePatternCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=ParamSetContainsCost_Input) at RatingParameterSetScreen.pcf: line 131, column 54
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameterSet.IncludesCost = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on DetailViewPanel at RatingParameterSetScreen.pcf: line 100, column 67
    function editable_52 () : java.lang.Boolean {
      return helper.canEditParameterSet(parameterSet)
    }
    
    // EditButtons at RatingParameterSetScreen.pcf: line 97, column 40
    function label_31 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'optionLabel' attribute on RangeInput (id=ParamSetPolicyLine_Input) at RatingParameterSetScreen.pcf: line 123, column 48
    function optionLabel_43 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.productmodel.PolicyLinePattern.DisplayNameForCode(VALUE)
    }
    
    // 'sortBy' attribute on TextCell (id=ParameterSetCode_Cell) at RatingParameterSetScreen.pcf: line 62, column 30
    function sortValue_12 (paramSet :  entity.CalcRoutineParameterSet) : java.lang.Object {
      return paramSet.Code
    }
    
    // 'sortBy' attribute on TextCell (id=ParameterSetName_Cell) at RatingParameterSetScreen.pcf: line 70, column 30
    function sortValue_13 (paramSet :  entity.CalcRoutineParameterSet) : java.lang.Object {
      return paramSet.Name
    }
    
    // 'sortBy' attribute on TextCell (id=ParameterSetPolicyLine_Cell) at RatingParameterSetScreen.pcf: line 78, column 30
    function sortValue_14 (paramSet :  entity.CalcRoutineParameterSet) : java.lang.Object {
      return paramSet.PolicyLinePatternCode
    }
    
    // 'sortBy' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function sortValue_55 (parameter :  entity.CalcRoutineParameter) : java.lang.Object {
      return parameter.Code
    }
    
    // 'value' attribute on TextCell (id=ParameterParamType_Cell) at RatingParameterSetScreen.pcf: line 181, column 33
    function sortValue_56 (parameter :  entity.CalcRoutineParameter) : java.lang.Object {
      return parameter.ParamType
    }
    
    // 'value' attribute on CheckBoxCell (id=useWrapper_Cell) at RatingParameterSetScreen.pcf: line 189, column 50
    function sortValue_57 (parameter :  entity.CalcRoutineParameter) : java.lang.Object {
      return parameter.UseWrapper
    }
    
    // 'value' attribute on CheckBoxCell (id=ParameterWritable_Cell) at RatingParameterSetScreen.pcf: line 203, column 49
    function sortValue_58 (parameter :  entity.CalcRoutineParameter) : java.lang.Object {
      return parameter.Writable
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ParameterSetIterator) at RatingParameterSetScreen.pcf: line 53, column 96
    function toCreateAndAdd_24 () : entity.CalcRoutineParameterSet {
      return helper.newParameterSet()
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ParameterIterator) at RatingParameterSetScreen.pcf: line 158, column 59
    function toCreateAndAdd_92 () : entity.CalcRoutineParameter {
      return helper.newParameter(parameterSet)
    }
    
    // 'toRemove' attribute on RowIterator (id=ParameterSetIterator) at RatingParameterSetScreen.pcf: line 53, column 96
    function toRemove_25 (paramSet :  entity.CalcRoutineParameterSet) : void {
      paramSet.remove()
    }
    
    // 'toRemove' attribute on RowIterator (id=ParameterIterator) at RatingParameterSetScreen.pcf: line 158, column 59
    function toRemove_93 (parameter :  entity.CalcRoutineParameter) : void {
      parameter.remove()
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=CalcRoutineParameterSetsLV) at RatingParameterSetScreen.pcf: line 43, column 76
    function validationExpression_27 () : java.lang.Object {
      return helper.validateParameterSet(parameterSet)
    }
    
    // 'valueRange' attribute on RangeInput (id=ParamSetPolicyLine_Input) at RatingParameterSetScreen.pcf: line 123, column 48
    function valueRange_44 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLines()
    }
    
    // 'value' attribute on TextInput (id=ParamsetCode_Input) at RatingParameterSetScreen.pcf: line 107, column 46
    function valueRoot_34 () : java.lang.Object {
      return parameterSet
    }
    
    // 'value' attribute on RowIterator (id=ParameterSetIterator) at RatingParameterSetScreen.pcf: line 53, column 96
    function value_26 () : gw.api.database.IQueryBeanResult<entity.CalcRoutineParameterSet> {
      return helper.ParameterSets
    }
    
    // 'value' attribute on TextInput (id=ParamsetCode_Input) at RatingParameterSetScreen.pcf: line 107, column 46
    function value_32 () : java.lang.String {
      return parameterSet.Code
    }
    
    // 'value' attribute on TextInput (id=ParamSetName_Input) at RatingParameterSetScreen.pcf: line 113, column 46
    function value_36 () : java.lang.String {
      return parameterSet.Name
    }
    
    // 'value' attribute on RangeInput (id=ParamSetPolicyLine_Input) at RatingParameterSetScreen.pcf: line 123, column 48
    function value_40 () : java.lang.String {
      return parameterSet.PolicyLinePatternCode
    }
    
    // 'value' attribute on CheckBoxInput (id=ParamSetContainsCost_Input) at RatingParameterSetScreen.pcf: line 131, column 54
    function value_48 () : java.lang.Boolean {
      return parameterSet.IncludesCost
    }
    
    // 'value' attribute on RowIterator (id=ParameterIterator) at RatingParameterSetScreen.pcf: line 158, column 59
    function value_94 () : entity.CalcRoutineParameter[] {
      return parameterSet.Parameters
    }
    
    // 'valueRange' attribute on RangeInput (id=ParamSetPolicyLine_Input) at RatingParameterSetScreen.pcf: line 123, column 48
    function verifyValueRangeIsAllowedType_45 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ParamSetPolicyLine_Input) at RatingParameterSetScreen.pcf: line 123, column 48
    function verifyValueRangeIsAllowedType_45 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ParamSetPolicyLine_Input) at RatingParameterSetScreen.pcf: line 123, column 48
    function verifyValueRange_46 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLines()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_45(__valueRangeArg)
    }
    
    // 'addVisible' attribute on IteratorButtons (id=ParamSetIteratorButtons) at RatingParameterSetScreen.pcf: line 39, column 55
    function visible_10 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'visible' attribute on ToolbarButton (id=paramSetUpdate) at RatingParameterSetScreen.pcf: line 94, column 55
    function visible_28 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'editVisible' attribute on EditButtons at RatingParameterSetScreen.pcf: line 97, column 40
    function visible_30 () : java.lang.Boolean {
      return helper.editVisibleForParameterSet(parameterSet)
    }
    
    property get parameterSet () : CalcRoutineParameterSet {
      return getCurrentSelection(1) as CalcRoutineParameterSet
    }
    
    property set parameterSet ($arg :  CalcRoutineParameterSet) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RatingParameterSetScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CalcRoutineParameterSetsLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=ParameterIterator) at RatingParameterSetScreen.pcf: line 158, column 59
    function checkBoxVisible_91 () : java.lang.Boolean {
      return helper.canRemoveParameter(parameterSet, parameter)
    }
    
    // 'def' attribute on ModalCellRef (id=WrapperOrCovCode) at RatingParameterSetScreen.pcf: line 198, column 82
    function def_onEnter_79 (def :  pcf.WrapperOrCovCode_coverage) : void {
      def.onEnter(parameter, parameterSet, helper)
    }
    
    // 'def' attribute on ModalCellRef (id=WrapperOrCovCode) at RatingParameterSetScreen.pcf: line 198, column 82
    function def_onEnter_81 (def :  pcf.WrapperOrCovCode_default) : void {
      def.onEnter(parameter, parameterSet, helper)
    }
    
    // 'def' attribute on ModalCellRef (id=WrapperOrCovCode) at RatingParameterSetScreen.pcf: line 198, column 82
    function def_onEnter_83 (def :  pcf.WrapperOrCovCode_wrapper) : void {
      def.onEnter(parameter, parameterSet, helper)
    }
    
    // 'def' attribute on ModalCellRef (id=WrapperOrCovCode) at RatingParameterSetScreen.pcf: line 198, column 82
    function def_refreshVariables_80 (def :  pcf.WrapperOrCovCode_coverage) : void {
      def.refreshVariables(parameter, parameterSet, helper)
    }
    
    // 'def' attribute on ModalCellRef (id=WrapperOrCovCode) at RatingParameterSetScreen.pcf: line 198, column 82
    function def_refreshVariables_82 (def :  pcf.WrapperOrCovCode_default) : void {
      def.refreshVariables(parameter, parameterSet, helper)
    }
    
    // 'def' attribute on ModalCellRef (id=WrapperOrCovCode) at RatingParameterSetScreen.pcf: line 198, column 82
    function def_refreshVariables_84 (def :  pcf.WrapperOrCovCode_wrapper) : void {
      def.refreshVariables(parameter, parameterSet, helper)
    }
    
    // 'value' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameter.Code = (__VALUE_TO_SET as typekey.CalcRoutineParamName)
    }
    
    // 'value' attribute on TextCell (id=ParameterParamType_Cell) at RatingParameterSetScreen.pcf: line 181, column 33
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameter.ParamType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=useWrapper_Cell) at RatingParameterSetScreen.pcf: line 189, column 50
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameter.UseWrapper = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=ParameterWritable_Cell) at RatingParameterSetScreen.pcf: line 203, column 49
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameter.Writable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxCell (id=useWrapper_Cell) at RatingParameterSetScreen.pcf: line 189, column 50
    function editable_73 () : java.lang.Boolean {
      return helper.isUseWrapperEditable(parameterSet, parameter)
    }
    
    // 'editable' attribute on Row at RatingParameterSetScreen.pcf: line 160, column 79
    function editable_90 () : java.lang.Boolean {
      return helper.canEditParameter(parameterSet, parameter)
    }
    
    // 'mode' attribute on ModalCellRef (id=WrapperOrCovCode) at RatingParameterSetScreen.pcf: line 198, column 82
    function mode_85 () : java.lang.Object {
      return helper.parameterWrapperMode(parameterSet, parameter)
    }
    
    // 'onChange' attribute on PostOnChange at RatingParameterSetScreen.pcf: line 173, column 98
    function onChange_59 () : void {
      parameter.ParamType = helper.codeToDefaultType(parameter.Code)
    }
    
    // 'validationExpression' attribute on TextCell (id=ParameterParamType_Cell) at RatingParameterSetScreen.pcf: line 181, column 33
    function validationExpression_67 () : java.lang.Object {
      return helper.validateParameterType(parameter.ParamType)
    }
    
    // 'valueRange' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function valueRange_63 () : java.lang.Object {
      return typekey.CalcRoutineParamName.getTypeKeys(false)
    }
    
    // 'value' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function valueRoot_62 () : java.lang.Object {
      return parameter
    }
    
    // 'value' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function value_60 () : typekey.CalcRoutineParamName {
      return parameter.Code
    }
    
    // 'value' attribute on TextCell (id=ParameterParamType_Cell) at RatingParameterSetScreen.pcf: line 181, column 33
    function value_68 () : java.lang.String {
      return parameter.ParamType
    }
    
    // 'value' attribute on CheckBoxCell (id=useWrapper_Cell) at RatingParameterSetScreen.pcf: line 189, column 50
    function value_74 () : java.lang.Boolean {
      return parameter.UseWrapper
    }
    
    // 'value' attribute on CheckBoxCell (id=ParameterWritable_Cell) at RatingParameterSetScreen.pcf: line 203, column 49
    function value_86 () : java.lang.Boolean {
      return parameter.Writable
    }
    
    // 'valueRange' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function verifyValueRangeIsAllowedType_64 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function verifyValueRangeIsAllowedType_64 ($$arg :  typekey.CalcRoutineParamName[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ParameterCode_Cell) at RatingParameterSetScreen.pcf: line 171, column 33
    function verifyValueRange_65 () : void {
      var __valueRangeArg = typekey.CalcRoutineParamName.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_64(__valueRangeArg)
    }
    
    property get parameter () : entity.CalcRoutineParameter {
      return getIteratedValue(2) as entity.CalcRoutineParameter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RatingParameterSetScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CalcRoutineParameterSetsLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=ParameterSetIterator) at RatingParameterSetScreen.pcf: line 53, column 96
    function checkBoxVisible_23 () : java.lang.Boolean {
      return helper.canRemoveParameterSet(paramSet)
    }
    
    // 'value' attribute on TextCell (id=ParameterSetCode_Cell) at RatingParameterSetScreen.pcf: line 62, column 30
    function valueRoot_16 () : java.lang.Object {
      return paramSet
    }
    
    // 'value' attribute on TextCell (id=ParameterSetCode_Cell) at RatingParameterSetScreen.pcf: line 62, column 30
    function value_15 () : java.lang.String {
      return paramSet.Code
    }
    
    // 'value' attribute on TextCell (id=ParameterSetName_Cell) at RatingParameterSetScreen.pcf: line 70, column 30
    function value_18 () : java.lang.String {
      return paramSet.Name
    }
    
    // 'value' attribute on TextCell (id=ParameterSetPolicyLine_Cell) at RatingParameterSetScreen.pcf: line 78, column 30
    function value_21 () : java.lang.String {
      return gw.api.productmodel.PolicyLinePattern.DisplayNameForCode(paramSet.PolicyLinePatternCode)
    }
    
    property get paramSet () : entity.CalcRoutineParameterSet {
      return getIteratedValue(2) as entity.CalcRoutineParameterSet
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RatingParameterSetScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingParameterSetScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      helper.LinePattern = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RatingParameterSetScreen.pcf: line 11, column 65
    function initialValue_0 () : gw.pcf.rating.flow.RatingParameterSetScreenHelper {
      return new gw.pcf.rating.flow.RatingParameterSetScreenHelper()
    }
    
    // 'onChange' attribute on PostOnChange at RatingParameterSetScreen.pcf: line 23, column 154
    function onChange_1 () : void {
      gw.api.web.util.SessionUtil.putSetting(DisplayKey.get("Web.Rating.ParameterSets.PolicyLineSetting"), helper.LinePattern)
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function optionLabel_5 (VALUE :  java.lang.String) : java.lang.String {
      return helper.policyLineCodeToDescription(VALUE)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function valueRange_6 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
    }
    
    // 'value' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function valueRoot_4 () : java.lang.Object {
      return helper
    }
    
    // 'value' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function value_2 () : java.lang.String {
      return helper.LinePattern
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=PolicyLineSelection_Input) at RatingParameterSetScreen.pcf: line 21, column 38
    function verifyValueRange_8 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLinesForSearch()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get helper () : gw.pcf.rating.flow.RatingParameterSetScreenHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.flow.RatingParameterSetScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RatingParameterSetScreenHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    
  }
  
  
}