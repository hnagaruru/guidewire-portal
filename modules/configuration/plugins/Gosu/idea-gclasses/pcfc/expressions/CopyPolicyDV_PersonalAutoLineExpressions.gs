package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyPolicyDV_PersonalAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyPolicyDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDV.PersonalAutoLine.pcf: line 16, column 59
    function initialValue_0 () : List<gw.lob.pa.PersonalVehicleCopier> {
      return copier.getPersonalVehicleCopiers()
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDV.PersonalAutoLine.pcf: line 21, column 62
    function initialValue_1 () : List<gw.api.copy.Copier<Object>> {
      return copier.getPACovCopiers()
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDV.PersonalAutoLine.pcf: line 26, column 60
    function initialValue_2 () : List<gw.api.copy.Copier<Object>> {
      return copier.getPolicyDriverCopiers()
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDV.PersonalAutoLine.pcf: line 31, column 69
    function initialValue_3 () : java.util.List<gw.coverage.ClausePatternCopier> {
      return copier.PACopier.AllExclusionCopier.Copiers
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDV.PersonalAutoLine.pcf: line 36, column 69
    function initialValue_4 () : java.util.List<gw.coverage.ClausePatternCopier> {
      return copier.PACopier.AllConditionCopier.Copiers
    }
    
    // 'value' attribute on InputIterator (id=policyDriverCopierIterator) at CopyPolicyDV.PersonalAutoLine.pcf: line 44, column 86
    function value_11 () : java.util.List<gw.api.copy.Copier<java.lang.Object>> {
      return paPolicyDriverCopiers
    }
    
    // 'value' attribute on InputIterator (id=vehicleCopierIterator) at CopyPolicyDV.PersonalAutoLine.pcf: line 58, column 75
    function value_29 () : java.util.List<gw.lob.pa.PersonalVehicleCopier> {
      return vehicleCopiers
    }
    
    // 'value' attribute on InputIterator (id=coverageCopierIterator) at CopyPolicyDV.PersonalAutoLine.pcf: line 96, column 86
    function value_36 () : java.util.List<gw.api.copy.Copier<java.lang.Object>> {
      return paCoverageCopiers
    }
    
    // 'value' attribute on InputIterator (id=exclusionCopierIterator) at CopyPolicyDV.PersonalAutoLine.pcf: line 110, column 75
    function value_43 () : java.util.List<gw.coverage.ClausePatternCopier> {
      return exclusionCopiers
    }
    
    // 'value' attribute on InputIterator (id=conditionCopierIterator) at CopyPolicyDV.PersonalAutoLine.pcf: line 124, column 75
    function value_50 () : java.util.List<gw.coverage.ClausePatternCopier> {
      return conditionCopiers
    }
    
    property get conditionCopiers () : java.util.List<gw.coverage.ClausePatternCopier> {
      return getVariableValue("conditionCopiers", 0) as java.util.List<gw.coverage.ClausePatternCopier>
    }
    
    property set conditionCopiers ($arg :  java.util.List<gw.coverage.ClausePatternCopier>) {
      setVariableValue("conditionCopiers", 0, $arg)
    }
    
    property get copier () : gw.policy.PolicyPeriodCopier {
      return getRequireValue("copier", 0) as gw.policy.PolicyPeriodCopier
    }
    
    property set copier ($arg :  gw.policy.PolicyPeriodCopier) {
      setRequireValue("copier", 0, $arg)
    }
    
    property get exclusionCopiers () : java.util.List<gw.coverage.ClausePatternCopier> {
      return getVariableValue("exclusionCopiers", 0) as java.util.List<gw.coverage.ClausePatternCopier>
    }
    
    property set exclusionCopiers ($arg :  java.util.List<gw.coverage.ClausePatternCopier>) {
      setVariableValue("exclusionCopiers", 0, $arg)
    }
    
    property get paCoverageCopiers () : List<gw.api.copy.Copier<Object>> {
      return getVariableValue("paCoverageCopiers", 0) as List<gw.api.copy.Copier<Object>>
    }
    
    property set paCoverageCopiers ($arg :  List<gw.api.copy.Copier<Object>>) {
      setVariableValue("paCoverageCopiers", 0, $arg)
    }
    
    property get paPolicyDriverCopiers () : List<gw.api.copy.Copier<Object>> {
      return getVariableValue("paPolicyDriverCopiers", 0) as List<gw.api.copy.Copier<Object>>
    }
    
    property set paPolicyDriverCopiers ($arg :  List<gw.api.copy.Copier<Object>>) {
      setVariableValue("paPolicyDriverCopiers", 0, $arg)
    }
    
    property get vehicleCopiers () : List<gw.lob.pa.PersonalVehicleCopier> {
      return getVariableValue("vehicleCopiers", 0) as List<gw.lob.pa.PersonalVehicleCopier>
    }
    
    property set vehicleCopiers ($arg :  List<gw.lob.pa.PersonalVehicleCopier>) {
      setVariableValue("vehicleCopiers", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CopyPolicyDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=VehicleIndividualCoverages) at CopyPolicyDV.PersonalAutoLine.pcf: line 79, column 73
    function def_onEnter_17 (def :  pcf.SelectIndividualCoveragesLV) : void {
      def.onEnter(vehicleCopier.AllCoverageCopier.AllExistingCoverageCopier.Copiers)
    }
    
    // 'def' attribute on ListViewInput (id=VehicleIndividualCoverages) at CopyPolicyDV.PersonalAutoLine.pcf: line 79, column 73
    function def_refreshVariables_18 (def :  pcf.SelectIndividualCoveragesLV) : void {
      def.refreshVariables(vehicleCopier.AllCoverageCopier.AllExistingCoverageCopier.Copiers)
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeAllCoverages_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 72, column 67
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicleCopier.AllCoverageCopier.ShouldCopyAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeAddlInterests_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 86, column 79
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicleCopier.AllAddlInterestDetailsCopier.ShouldCopyAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on InputGroup (id=VehicleCopierInputGroup) at CopyPolicyDV.PersonalAutoLine.pcf: line 65, column 55
    function label_24 () : java.lang.Object {
      return vehicleCopier.Source
    }
    
    // 'onToggle' attribute on InputGroup (id=VehicleCopierInputGroup) at CopyPolicyDV.PersonalAutoLine.pcf: line 65, column 55
    function setter_25 (VALUE :  java.lang.Boolean) : void {
      vehicleCopier.ShouldCopy = VALUE
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeAllCoverages_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 72, column 67
    function valueRoot_14 () : java.lang.Object {
      return vehicleCopier.AllCoverageCopier
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeAddlInterests_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 86, column 79
    function valueRoot_21 () : java.lang.Object {
      return vehicleCopier.AllAddlInterestDetailsCopier
    }
    
    // 'value' attribute on InputGroup (id=VehicleCopierInputGroup) at CopyPolicyDV.PersonalAutoLine.pcf: line 65, column 55
    function valueRoot_27 () : java.lang.Object {
      return vehicleCopier
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeAllCoverages_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 72, column 67
    function value_12 () : java.lang.Boolean {
      return vehicleCopier.AllCoverageCopier.ShouldCopyAll
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeAddlInterests_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 86, column 79
    function value_19 () : java.lang.Boolean {
      return vehicleCopier.AllAddlInterestDetailsCopier.ShouldCopyAll
    }
    
    // 'visible' attribute on ListViewInput (id=VehicleIndividualCoverages) at CopyPolicyDV.PersonalAutoLine.pcf: line 79, column 73
    function visible_16 () : java.lang.Boolean {
      return not vehicleCopier.AllCoverageCopier.ShouldCopyAll
    }
    
    // 'childrenVisible' attribute on InputGroup (id=VehicleCopierInputGroup) at CopyPolicyDV.PersonalAutoLine.pcf: line 65, column 55
    function visible_23 () : java.lang.Boolean {
      return vehicleCopier.ShouldCopy
    }
    
    property get vehicleCopier () : gw.lob.pa.PersonalVehicleCopier {
      return getIteratedValue(1) as gw.lob.pa.PersonalVehicleCopier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends CopyPolicyDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxInput (id=Coverage_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 101, column 46
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageCopier.ShouldCopy = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on CheckBoxInput (id=Coverage_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 101, column 46
    function label_30 () : java.lang.Object {
      return coverageCopier.Source
    }
    
    // 'value' attribute on CheckBoxInput (id=Coverage_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 101, column 46
    function valueRoot_33 () : java.lang.Object {
      return coverageCopier
    }
    
    // 'value' attribute on CheckBoxInput (id=Coverage_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 101, column 46
    function value_31 () : java.lang.Boolean {
      return coverageCopier.ShouldCopy
    }
    
    property get coverageCopier () : gw.api.copy.Copier<java.lang.Object> {
      return getIteratedValue(1) as gw.api.copy.Copier<java.lang.Object>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends CopyPolicyDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxInput (id=Exclusion_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 115, column 47
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusionCopier.ShouldCopy = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on CheckBoxInput (id=Exclusion_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 115, column 47
    function label_37 () : java.lang.Object {
      return exclusionCopier.Source
    }
    
    // 'value' attribute on CheckBoxInput (id=Exclusion_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 115, column 47
    function valueRoot_40 () : java.lang.Object {
      return exclusionCopier
    }
    
    // 'value' attribute on CheckBoxInput (id=Exclusion_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 115, column 47
    function value_38 () : java.lang.Boolean {
      return exclusionCopier.ShouldCopy
    }
    
    property get exclusionCopier () : gw.coverage.ClausePatternCopier {
      return getIteratedValue(1) as gw.coverage.ClausePatternCopier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends CopyPolicyDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxInput (id=Condition_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 129, column 47
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionCopier.ShouldCopy = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on CheckBoxInput (id=Condition_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 129, column 47
    function label_44 () : java.lang.Object {
      return conditionCopier.Source
    }
    
    // 'value' attribute on CheckBoxInput (id=Condition_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 129, column 47
    function valueRoot_47 () : java.lang.Object {
      return conditionCopier
    }
    
    // 'value' attribute on CheckBoxInput (id=Condition_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 129, column 47
    function value_45 () : java.lang.Boolean {
      return conditionCopier.ShouldCopy
    }
    
    property get conditionCopier () : gw.coverage.ClausePatternCopier {
      return getIteratedValue(1) as gw.coverage.ClausePatternCopier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CopyPolicyDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxInput (id=PolicyDriver_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 49, column 50
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriverCopier.ShouldCopy = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on CheckBoxInput (id=PolicyDriver_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 49, column 50
    function label_5 () : java.lang.Object {
      return policyDriverCopier.Source
    }
    
    // 'value' attribute on CheckBoxInput (id=PolicyDriver_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 49, column 50
    function valueRoot_8 () : java.lang.Object {
      return policyDriverCopier
    }
    
    // 'value' attribute on CheckBoxInput (id=PolicyDriver_Input) at CopyPolicyDV.PersonalAutoLine.pcf: line 49, column 50
    function value_6 () : java.lang.Boolean {
      return policyDriverCopier.ShouldCopy
    }
    
    property get policyDriverCopier () : gw.api.copy.Copier<java.lang.Object> {
      return getIteratedValue(1) as gw.api.copy.Copier<java.lang.Object>
    }
    
    
  }
  
  
}