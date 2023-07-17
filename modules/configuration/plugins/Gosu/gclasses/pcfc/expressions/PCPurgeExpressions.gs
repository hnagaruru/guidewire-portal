package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/PCPurge.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCPurgeExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/PCPurge.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends JobPertinentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=FlipDoNotDestroyBit_Cell) at PCPurge.pcf: line 221, column 142
    function action_65 () : void {
      policyPeriod["DoNotDestroy"]=policyPeriod.DoNotDestroy?false:true
    }
    
    // 'action' attribute on ButtonCell (id=policyPeriodPurgeAction_Cell) at PCPurge.pcf: line 229, column 37
    function action_69 () : void {
      purgeHelper.purgePolicyPeriod(policyPeriod, skipValidationForPurgingPolicyPeriod)
    }
    
    // 'available' attribute on ButtonCell (id=policyPeriodPurgeAction_Cell) at PCPurge.pcf: line 229, column 37
    function available_68 () : java.lang.Boolean {
      return isPurgeable
    }
    
    // 'fontColor' attribute on TextCell (id=policyPeriodVersion_Cell) at PCPurge.pcf: line 192, column 281
    function fontColor_39 () : java.lang.Object {
      return selectedColor
    }
    
    // 'initialValue' attribute on Variable at PCPurge.pcf: line 182, column 35
    function initialValue_37 () : Boolean {
      return purgeHelper.isPurgeable(policyPeriod, jobToPurgeOrPrune)
    }
    
    // 'initialValue' attribute on Variable at PCPurge.pcf: line 186, column 52
    function initialValue_38 () : gw.api.web.color.GWColor {
      return isPurgeable ? null : gw.api.web.color.GWColor.THEME_INACTIVE
    }
    
    // RowIterator (id=policyPeriodsOnJob) at PCPurge.pcf: line 178, column 51
    function initializeVariables_71 () : void {
        isPurgeable = purgeHelper.isPurgeable(policyPeriod, jobToPurgeOrPrune);
  selectedColor = isPurgeable ? null : gw.api.web.color.GWColor.THEME_INACTIVE;

    }
    
    // 'value' attribute on TypeKeyCell (id=policyPeriodStatus_Cell) at PCPurge.pcf: line 208, column 61
    function valueRoot_56 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextCell (id=policyPeriodVersion_Cell) at PCPurge.pcf: line 192, column 281
    function value_40 () : java.lang.String {
      return DisplayKey.get("Web.Purge.VersionAndStatus", policyPeriod.BranchName, purgeHelper.isSelectedVersion(policyPeriod.PublicID, jobToPurgeOrPrune) ? DisplayKey.get("Web.Purge.Selected"):DisplayKey.get("Web.Purge.Unselected"))
    }
    
    // 'value' attribute on DateCell (id=policyPeriodStart_Cell) at PCPurge.pcf: line 197, column 110
    function value_45 () : java.util.Date {
      return policyPeriod.PeriodStart ?: gw.api.upgrade.Coercions.makeDateFrom("")
    }
    
    // 'value' attribute on DateCell (id=policyPeriodEnd_Cell) at PCPurge.pcf: line 202, column 108
    function value_50 () : java.util.Date {
      return policyPeriod.PeriodEnd ?: gw.api.upgrade.Coercions.makeDateFrom("")
    }
    
    // 'value' attribute on TypeKeyCell (id=policyPeriodStatus_Cell) at PCPurge.pcf: line 208, column 61
    function value_55 () : typekey.PolicyPeriodStatus {
      return policyPeriod.Status
    }
    
    // 'value' attribute on TextCell (id=policyPeriodDoNotDestroy_Cell) at PCPurge.pcf: line 213, column 80
    function value_61 () : java.lang.String {
      return policyPeriod.DoNotDestroy.toString().capitalize()
    }
    
    // 'value' attribute on ButtonCell (id=FlipDoNotDestroyBit_Cell) at PCPurge.pcf: line 221, column 142
    function value_66 () : java.lang.String {
      return policyPeriod.DoNotDestroy?DisplayKey.get("Web.Purge.Unset"):DisplayKey.get("Web.Purge.Set")
    }
    
    // 'fontColor' attribute on TextCell (id=policyPeriodVersion_Cell) at PCPurge.pcf: line 192, column 281
    function verifyFontColorIsAllowedType_41 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=policyPeriodVersion_Cell) at PCPurge.pcf: line 192, column 281
    function verifyFontColorIsAllowedType_41 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=policyPeriodStart_Cell) at PCPurge.pcf: line 197, column 110
    function verifyFontColorIsAllowedType_46 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=policyPeriodStart_Cell) at PCPurge.pcf: line 197, column 110
    function verifyFontColorIsAllowedType_46 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=policyPeriodEnd_Cell) at PCPurge.pcf: line 202, column 108
    function verifyFontColorIsAllowedType_51 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=policyPeriodEnd_Cell) at PCPurge.pcf: line 202, column 108
    function verifyFontColorIsAllowedType_51 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=policyPeriodStatus_Cell) at PCPurge.pcf: line 208, column 61
    function verifyFontColorIsAllowedType_57 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=policyPeriodStatus_Cell) at PCPurge.pcf: line 208, column 61
    function verifyFontColorIsAllowedType_57 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=policyPeriodDoNotDestroy_Cell) at PCPurge.pcf: line 213, column 80
    function verifyFontColorIsAllowedType_62 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=policyPeriodDoNotDestroy_Cell) at PCPurge.pcf: line 213, column 80
    function verifyFontColorIsAllowedType_62 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=policyPeriodVersion_Cell) at PCPurge.pcf: line 192, column 281
    function verifyFontColor_42 () : void {
      var __fontColorArg = selectedColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_41(__fontColorArg)
    }
    
    // 'fontColor' attribute on DateCell (id=policyPeriodStart_Cell) at PCPurge.pcf: line 197, column 110
    function verifyFontColor_47 () : void {
      var __fontColorArg = selectedColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_46(__fontColorArg)
    }
    
    // 'fontColor' attribute on DateCell (id=policyPeriodEnd_Cell) at PCPurge.pcf: line 202, column 108
    function verifyFontColor_52 () : void {
      var __fontColorArg = selectedColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_51(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=policyPeriodStatus_Cell) at PCPurge.pcf: line 208, column 61
    function verifyFontColor_58 () : void {
      var __fontColorArg = selectedColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_57(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=policyPeriodDoNotDestroy_Cell) at PCPurge.pcf: line 213, column 80
    function verifyFontColor_63 () : void {
      var __fontColorArg = selectedColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_62(__fontColorArg)
    }
    
    property get isPurgeable () : Boolean {
      return getVariableValue("isPurgeable", 3) as Boolean
    }
    
    property set isPurgeable ($arg :  Boolean) {
      setVariableValue("isPurgeable", 3, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getIteratedValue(3) as entity.PolicyPeriod
    }
    
    property get selectedColor () : gw.api.web.color.GWColor {
      return getVariableValue("selectedColor", 3) as gw.api.web.color.GWColor
    }
    
    property set selectedColor ($arg :  gw.api.web.color.GWColor) {
      setVariableValue("selectedColor", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PCPurge.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobPertinentPanelSetExpressionsImpl extends PCPurgeToolsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=PurgeJobButton_Input) at PCPurge.pcf: line 132, column 75
    function action_26 () : void {
      purgeHelper.purgeJob(jobToPurgeOrPrune, skipValidationForPurgingJob); jobToPurgeOrPrune = null
    }
    
    // 'action' attribute on ButtonInput (id=PruneJobButton_Input) at PCPurge.pcf: line 152, column 75
    function action_30 () : void {
      purgeHelper.pruneJob(jobToPurgeOrPrune, skipValidationForPruningJob)
    }
    
    // 'value' attribute on CheckBoxInput (id=skipValidationForPurgingJob_Input) at PCPurge.pcf: line 125, column 56
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      skipValidationForPurgingJob = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=skipValidationForPruningJob_Input) at PCPurge.pcf: line 145, column 56
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      skipValidationForPruningJob = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=skipValidationForPurgingPolicyPeriods_Input) at PCPurge.pcf: line 241, column 62
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      skipValidationForPurgingPolicyPeriod = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=policyPeriodVersion_Cell) at PCPurge.pcf: line 192, column 281
    function sortValue_31 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.Purge.VersionAndStatus", policyPeriod.BranchName, purgeHelper.isSelectedVersion(policyPeriod.PublicID, jobToPurgeOrPrune) ? DisplayKey.get("Web.Purge.Selected"):DisplayKey.get("Web.Purge.Unselected"))
    }
    
    // 'value' attribute on DateCell (id=policyPeriodStart_Cell) at PCPurge.pcf: line 197, column 110
    function sortValue_32 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodStart ?: gw.api.upgrade.Coercions.makeDateFrom("")
    }
    
    // 'value' attribute on DateCell (id=policyPeriodEnd_Cell) at PCPurge.pcf: line 202, column 108
    function sortValue_33 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.PeriodEnd ?: gw.api.upgrade.Coercions.makeDateFrom("")
    }
    
    // 'value' attribute on TypeKeyCell (id=policyPeriodStatus_Cell) at PCPurge.pcf: line 208, column 61
    function sortValue_34 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.Status
    }
    
    // 'value' attribute on TextCell (id=policyPeriodDoNotDestroy_Cell) at PCPurge.pcf: line 213, column 80
    function sortValue_35 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.DoNotDestroy.toString().capitalize()
    }
    
    // 'value' attribute on ButtonCell (id=FlipDoNotDestroyBit_Cell) at PCPurge.pcf: line 221, column 142
    function sortValue_36 (policyPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return policyPeriod.DoNotDestroy?DisplayKey.get("Web.Purge.Unset"):DisplayKey.get("Web.Purge.Set")
    }
    
    // 'value' attribute on TextInput (id=JobSubType_Input) at PCPurge.pcf: line 93, column 66
    function valueRoot_11 () : java.lang.Object {
      return jobToPurgeOrPrune.Subtype
    }
    
    // 'value' attribute on TextInput (id=JobNumberOfPeriods_Input) at PCPurge.pcf: line 108, column 50
    function valueRoot_18 () : java.lang.Object {
      return jobToPurgeOrPrune.Periods
    }
    
    // 'value' attribute on TextInput (id=JobPurgeStatus_Input) at PCPurge.pcf: line 89, column 56
    function valueRoot_8 () : java.lang.Object {
      return jobToPurgeOrPrune
    }
    
    // 'value' attribute on TextInput (id=JobSubType_Input) at PCPurge.pcf: line 93, column 66
    function value_10 () : java.lang.String {
      return jobToPurgeOrPrune.Subtype.DisplayName
    }
    
    // 'value' attribute on TextInput (id=JobCloseDate_Input) at PCPurge.pcf: line 97, column 131
    function value_13 () : java.lang.String {
      return jobToPurgeOrPrune.CloseDate == null ? "Null" : jobToPurgeOrPrune.CloseDate.formatDate(SHORT)
    }
    
    // 'value' attribute on TextInput (id=JobDoNotDestroyFlag_Input) at PCPurge.pcf: line 103, column 90
    function value_15 () : java.lang.String {
      return jobToPurgeOrPrune.Policy.DoNotDestroy.toString().capitalize()
    }
    
    // 'value' attribute on TextInput (id=JobNumberOfPeriods_Input) at PCPurge.pcf: line 108, column 50
    function value_17 () : java.lang.Integer {
      return jobToPurgeOrPrune.Periods.Count
    }
    
    // 'value' attribute on TextInput (id=EndOfCoverage_Input) at PCPurge.pcf: line 112, column 179
    function value_20 () : java.lang.String {
      return jobToPurgeOrPrune.SelectedVersion.EndOfCoverageDate == null ? "Null" : jobToPurgeOrPrune.SelectedVersion.EndOfCoverageDate.formatDate(SHORT)
    }
    
    // 'value' attribute on CheckBoxInput (id=skipValidationForPurgingJob_Input) at PCPurge.pcf: line 125, column 56
    function value_23 () : java.lang.Boolean {
      return skipValidationForPurgingJob
    }
    
    // 'value' attribute on CheckBoxInput (id=skipValidationForPruningJob_Input) at PCPurge.pcf: line 145, column 56
    function value_27 () : java.lang.Boolean {
      return skipValidationForPruningJob
    }
    
    // 'value' attribute on TextInput (id=JobPurgeStatus_Input) at PCPurge.pcf: line 89, column 56
    function value_7 () : java.lang.String {
      return jobToPurgeOrPrune.JobNumber
    }
    
    // 'value' attribute on RowIterator (id=policyPeriodsOnJob) at PCPurge.pcf: line 178, column 51
    function value_72 () : entity.PolicyPeriod[] {
      return jobToPurgeOrPrune.Periods
    }
    
    // 'value' attribute on CheckBoxInput (id=skipValidationForPurgingPolicyPeriods_Input) at PCPurge.pcf: line 241, column 62
    function value_73 () : java.lang.Boolean {
      return skipValidationForPurgingPolicyPeriod
    }
    
    // 'visible' attribute on DetailViewPanel at PCPurge.pcf: line 84, column 51
    function visible_22 () : java.lang.Boolean {
      return jobToPurgeOrPrune != null
    }
    
    property get skipValidationForPruningJob () : Boolean {
      return getVariableValue("skipValidationForPruningJob", 2) as Boolean
    }
    
    property set skipValidationForPruningJob ($arg :  Boolean) {
      setVariableValue("skipValidationForPruningJob", 2, $arg)
    }
    
    property get skipValidationForPurgingJob () : Boolean {
      return getVariableValue("skipValidationForPurgingJob", 2) as Boolean
    }
    
    property set skipValidationForPurgingJob ($arg :  Boolean) {
      setVariableValue("skipValidationForPurgingJob", 2, $arg)
    }
    
    property get skipValidationForPurgingPolicyPeriod () : Boolean {
      return getVariableValue("skipValidationForPurgingPolicyPeriod", 2) as Boolean
    }
    
    property set skipValidationForPurgingPolicyPeriod ($arg :  Boolean) {
      setVariableValue("skipValidationForPurgingPolicyPeriod", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PCPurge.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCPurgeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at PCPurge.pcf: line 16, column 52
    function initialValue_0 () : gw.api.web.purge.PurgeTestPageHelper {
      return new gw.api.web.purge.PurgeTestPageHelper()
    }
    
    // 'onConcurrentDataChange' attribute on Page (id=PCPurge) at PCPurge.pcf: line 12, column 73
    function onConcurrentDataChange_81 () : void {
      jobToPurgeOrPrune = null
    }
    
    // Page (id=PCPurge) at PCPurge.pcf: line 12, column 73
    static function parent_82 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PCPurge {
      return super.CurrentLocation as pcf.PCPurge
    }
    
    property get jobToPurgeOrPrune () : Job {
      return getVariableValue("jobToPurgeOrPrune", 0) as Job
    }
    
    property set jobToPurgeOrPrune ($arg :  Job) {
      setVariableValue("jobToPurgeOrPrune", 0, $arg)
    }
    
    property get purgeHelper () : gw.api.web.purge.PurgeTestPageHelper {
      return getVariableValue("purgeHelper", 0) as gw.api.web.purge.PurgeTestPageHelper
    }
    
    property set purgeHelper ($arg :  gw.api.web.purge.PurgeTestPageHelper) {
      setVariableValue("purgeHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PCPurge.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCPurgeToolsScreenExpressionsImpl extends PCPurgeExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=FindJobButton_Input) at PCPurge.pcf: line 47, column 79
    function action_6 () : void {
      purgeHelper.findJob(purgeJobID, \ job -> { jobToPurgeOrPrune = job })
    }
    
    // 'action' attribute on ButtonInput (id=FlushWorkQueuesButton_Input) at PCPurge.pcf: line 263, column 68
    function action_77 () : void {
      purgeHelper.doFlushWorkQueues()
    }
    
    // 'action' attribute on ButtonInput (id=RunPurgeBatchProcessButton_Input) at PCPurge.pcf: line 282, column 68
    function action_78 () : void {
      purgeHelper.runPurgeBatchProcess()
    }
    
    // 'def' attribute on PanelRef at PCPurge.pcf: line 288, column 42
    function def_onEnter_79 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PCPurge.pcf: line 288, column 42
    function def_refreshVariables_80 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=JobNumberTextInput_Input) at PCPurge.pcf: line 39, column 35
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      purgeJobID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on AlertBar (id=purgeSucceededMessage) at PCPurge.pcf: line 29, column 51
    function label_2 () : java.lang.Object {
      return purgeHelper.PurgeSucceededMessage
    }
    
    // 'value' attribute on TextInput (id=JobNumberTextInput_Input) at PCPurge.pcf: line 39, column 35
    function value_3 () : java.lang.String {
      return purgeJobID
    }
    
    // 'visible' attribute on AlertBar (id=purgeSucceededMessage) at PCPurge.pcf: line 29, column 51
    function visible_1 () : java.lang.Boolean {
      return purgeHelper.ShowPurgeSucceeded
    }
    
    property get purgeJobID () : String {
      return getVariableValue("purgeJobID", 1) as String
    }
    
    property set purgeJobID ($arg :  String) {
      setVariableValue("purgeJobID", 1, $arg)
    }
    
    
  }
  
  
}