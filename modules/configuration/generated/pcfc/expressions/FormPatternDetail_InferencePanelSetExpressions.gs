package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_InferencePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetail_InferencePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_InferencePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetail_InferencePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 51, column 88
    function def_onEnter_15 (def :  pcf.FormPatternCoveragePartTypesPanelSet) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_onEnter_28 (def :  pcf.GenericInferenceClassPanelSet_GenericAdditionalInsuredForm) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_onEnter_30 (def :  pcf.GenericInferenceClassPanelSet_GenericAdditionalInterestForm) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_onEnter_32 (def :  pcf.GenericInferenceClassPanelSet_GenericClauseNonExistenceForm) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_onEnter_34 (def :  pcf.GenericInferenceClassPanelSet_GenericClauseSelectionForm) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_onEnter_36 (def :  pcf.GenericInferenceClassPanelSet_GenericCovTermSelectionForm) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_onEnter_38 (def :  pcf.GenericInferenceClassPanelSet_GenericCoverableTypeKeyForm) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_onEnter_40 (def :  pcf.GenericInferenceClassPanelSet_default) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 51, column 88
    function def_refreshVariables_16 (def :  pcf.FormPatternCoveragePartTypesPanelSet) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_refreshVariables_29 (def :  pcf.GenericInferenceClassPanelSet_GenericAdditionalInsuredForm) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_refreshVariables_31 (def :  pcf.GenericInferenceClassPanelSet_GenericAdditionalInterestForm) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_refreshVariables_33 (def :  pcf.GenericInferenceClassPanelSet_GenericClauseNonExistenceForm) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_refreshVariables_35 (def :  pcf.GenericInferenceClassPanelSet_GenericClauseSelectionForm) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_refreshVariables_37 (def :  pcf.GenericInferenceClassPanelSet_GenericCovTermSelectionForm) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_refreshVariables_39 (def :  pcf.GenericInferenceClassPanelSet_GenericCoverableTypeKeyForm) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function def_refreshVariables_41 (def :  pcf.GenericInferenceClassPanelSet_default) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'value' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.GenericInferenceClassRef = (__VALUE_TO_SET as gw.admin.FormInferenceClassRef)
    }
    
    // 'value' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.PolicyLinePatternRef = (__VALUE_TO_SET as gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>)
    }
    
    // 'initialValue' attribute on Variable at FormPatternDetail_InferencePanelSet.pcf: line 14, column 92
    function initialValue_0 () : List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return formPattern.PolicyLinePatternRange
    }
    
    // 'mode' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 72, column 45
    function mode_42 () : java.lang.Object {
      return formPattern.InferenceClassMode
    }
    
    // 'onChange' attribute on PostOnChange at FormPatternDetail_InferencePanelSet.pcf: line 65, column 68
    function onChange_17 () : void {
      formPattern.clearCustomInferenceFields()
    }
    
    // 'onChange' attribute on PostOnChange at FormPatternDetail_InferencePanelSet.pcf: line 44, column 60
    function onChange_4 () : void {
      formPattern.onPolicyLineChange()
    }
    
    // 'optionLabel' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function optionLabel_22 (VALUE :  gw.admin.FormInferenceClassRef) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'optionLabel' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function optionLabel_9 (VALUE :  gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'required' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function required_5 () : java.lang.Boolean {
      return formPattern.GenericInferenceClassRef.PolicyLineRequired
    }
    
    // 'valueRange' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function valueRange_10 () : java.lang.Object {
      return policyLineRange
    }
    
    // 'valueRange' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function valueRange_23 () : java.lang.Object {
      return formPattern.getGenericInferenceClassRange(formPattern.PolicyLinePatternRef.Pattern)
    }
    
    // 'value' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function valueRoot_8 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on HiddenInput (id=CustomInferenceLabel_Input) at FormPatternDetail_InferencePanelSet.pcf: line 32, column 31
    function value_1 () : java.lang.String {
      return "For testability" 
    }
    
    // 'value' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function value_19 () : gw.admin.FormInferenceClassRef {
      return formPattern.GenericInferenceClassRef
    }
    
    // 'value' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function value_6 () : gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern> {
      return formPattern.PolicyLinePatternRef
    }
    
    // 'valueRange' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.admin.FormInferenceClassRef[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LinePattern_Input) at FormPatternDetail_InferencePanelSet.pcf: line 42, column 90
    function verifyValueRange_12 () : void {
      var __valueRangeArg = policyLineRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function verifyValueRange_25 () : void {
      var __valueRangeArg = formPattern.getGenericInferenceClassRange(formPattern.PolicyLinePatternRef.Pattern)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelRef at FormPatternDetail_InferencePanelSet.pcf: line 51, column 88
    function visible_14 () : java.lang.Boolean {
      return formPattern.PolicyLinePatternRef.Pattern.CoveragePartTypes.HasElements
    }
    
    // 'visible' attribute on RangeInput (id=GenericInferenceClass_Input) at FormPatternDetail_InferencePanelSet.pcf: line 63, column 58
    function visible_18 () : java.lang.Boolean {
      return not formPattern.HasCustomInference
    }
    
    // 'visible' attribute on InputSet at FormPatternDetail_InferencePanelSet.pcf: line 23, column 54
    function visible_3 () : java.lang.Boolean {
      return formPattern.HasCustomInference
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get policyLineRange () : List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>> {
      return getVariableValue("policyLineRange", 0) as List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>
    }
    
    property set policyLineRange ($arg :  List<gw.admin.PatternRef<gw.api.productmodel.PolicyLinePattern>>) {
      setVariableValue("policyLineRange", 0, $arg)
    }
    
    
  }
  
  
}