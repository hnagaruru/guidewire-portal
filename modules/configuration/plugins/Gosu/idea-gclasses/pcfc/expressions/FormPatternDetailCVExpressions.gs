package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetailCVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetailCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 18, column 56
    function def_onEnter_1 (def :  pcf.FormPatternDetail_BasicsDV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 27, column 57
    function def_onEnter_10 (def :  pcf.FormPatternDetail_ProductsLV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 61, column 53
    function def_onEnter_18 (def :  pcf.FormPatternDetail_JobsLV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 101, column 62
    function def_onEnter_23 (def :  pcf.FormPatternDetail_JurisdictionsLV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 141, column 62
    function def_onEnter_25 (def :  pcf.FormPatternDetail_JurisdictionsDV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 152, column 61
    function def_onEnter_27 (def :  pcf.FormPatternDetail_PolicyChangeDV) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 162, column 65
    function def_onEnter_30 (def :  pcf.FormPatternDetail_InferencePanelSet) : void {
      def.onEnter(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 21, column 63
    function def_onEnter_4 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(formPattern, { "Description"}, { DisplayKey.get("Web.Admin.FormPatternDetail.L10nDV.Name") })
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 27, column 57
    function def_refreshVariables_11 (def :  pcf.FormPatternDetail_ProductsLV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 61, column 53
    function def_refreshVariables_19 (def :  pcf.FormPatternDetail_JobsLV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 18, column 56
    function def_refreshVariables_2 (def :  pcf.FormPatternDetail_BasicsDV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 101, column 62
    function def_refreshVariables_24 (def :  pcf.FormPatternDetail_JurisdictionsLV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 141, column 62
    function def_refreshVariables_26 (def :  pcf.FormPatternDetail_JurisdictionsDV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 152, column 61
    function def_refreshVariables_28 (def :  pcf.FormPatternDetail_PolicyChangeDV) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 162, column 65
    function def_refreshVariables_31 (def :  pcf.FormPatternDetail_InferencePanelSet) : void {
      def.refreshVariables(formPattern)
    }
    
    // 'def' attribute on PanelRef at FormPatternDetailCV.pcf: line 21, column 63
    function def_refreshVariables_5 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(formPattern, { "Description"}, { DisplayKey.get("Web.Admin.FormPatternDetail.L10nDV.Name") })
    }
    
    // 'initialValue' attribute on Variable at FormPatternDetailCV.pcf: line 13, column 29
    function initialValue_0 () : typekey.Job[] {
      return {typekey.Job.TC_SUBMISSION, typekey.Job.TC_RENEWAL, typekey.Job.TC_REWRITE, typekey.Job.TC_POLICYCHANGE, typekey.Job.TC_REWRITENEWACCOUNT}
    }
    
    // 'onSelect' attribute on Card (id=InferenceDetailCard) at FormPatternDetailCV.pcf: line 160, column 81
    function onSelect_32 () : void {
      if(formPattern.PolicyLinePatternCode == null and formPattern.PolicyLinePatternRange.Count == 1) { formPattern.PolicyLinePatternCode = formPattern.PolicyLinePatternRange[0].Code }
    }
    
    // 'sortBy' attribute on IteratorSort at FormPatternDetailCV.pcf: line 80, column 32
    function sortBy_14 (job :  typekey.Job) : java.lang.Object {
      return job.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at FormPatternDetailCV.pcf: line 40, column 32
    function sortBy_6 (product :  gw.api.productmodel.Product) : java.lang.Object {
      return product.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AllIssuanceAndChangeJobs) at FormPatternDetailCV.pcf: line 73, column 69
    function toCreateAndAdd_13 (CheckedValues :  Object[]) : java.lang.Object {
      return formPattern.addJobs(issuanceAndChangeJobs)
    }
    
    // 'value' attribute on AddMenuItemIterator at FormPatternDetailCV.pcf: line 77, column 41
    function value_17 () : typekey.Job[] {
      return formPattern.AvailableJobs
    }
    
    // 'value' attribute on AddMenuItemIterator (id=numberOfTimesOptions) at FormPatternDetailCV.pcf: line 120, column 47
    function value_22 () : java.lang.Integer[] {
      return formPattern.NumberOfTimesThatRowsCanBeDuplicated
    }
    
    // 'value' attribute on AddMenuItemIterator at FormPatternDetailCV.pcf: line 37, column 57
    function value_9 () : gw.api.productmodel.Product[] {
      return formPattern.AvailableProducts
    }
    
    // 'visible' attribute on AddMenuItem (id=AllIssuanceAndChangeJobs) at FormPatternDetailCV.pcf: line 73, column 69
    function visible_12 () : java.lang.Boolean {
      return getIssuanceAndChangeJobsButtonVisibility()
    }
    
    // 'visible' attribute on Card (id=PolicyChangeDetailCard) at FormPatternDetailCV.pcf: line 149, column 65
    function visible_29 () : java.lang.Boolean {
      return formPattern.hasJob(typekey.Job.TC_POLICYCHANGE)
    }
    
    // 'visible' attribute on PanelRef at FormPatternDetailCV.pcf: line 21, column 63
    function visible_3 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage()
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get issuanceAndChangeJobs () : typekey.Job[] {
      return getVariableValue("issuanceAndChangeJobs", 0) as typekey.Job[]
    }
    
    property set issuanceAndChangeJobs ($arg :  typekey.Job[]) {
      setVariableValue("issuanceAndChangeJobs", 0, $arg)
    }
    
    function getIssuanceAndChangeJobsButtonVisibility() : boolean {
      for (job in issuanceAndChangeJobs) {
        if (not formPattern.Jobs.contains(job)) {
          return true
        }
      }
      return false
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends FormPatternDetailCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=JobItem) at FormPatternDetailCV.pcf: line 85, column 59
    function label_15 () : java.lang.Object {
      return job.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=JobItem) at FormPatternDetailCV.pcf: line 85, column 59
    function toCreateAndAdd_16 (CheckedValues :  Object[]) : java.lang.Object {
      return formPattern.addJob(job)
    }
    
    property get job () : typekey.Job {
      return getIteratedValue(1) as typekey.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends FormPatternDetailCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=numberOfTimesOption) at FormPatternDetailCV.pcf: line 126, column 125
    function label_20 () : java.lang.Object {
      return numberOfTimes
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=numberOfTimesOption) at FormPatternDetailCV.pcf: line 126, column 125
    function toCreateAndAdd_21 (CheckedValues :  Object[]) : java.lang.Object {
      return formPattern.duplicateMultipleLookups(numberOfTimes, CheckedValues as FormPatternLookup[])
    }
    
    property get numberOfTimes () : java.lang.Integer {
      return getIteratedValue(1) as java.lang.Integer
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternDetailCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ProductItem) at FormPatternDetailCV.pcf: line 45, column 67
    function label_7 () : java.lang.Object {
      return product.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=ProductItem) at FormPatternDetailCV.pcf: line 45, column 67
    function toCreateAndAdd_8 (CheckedValues :  Object[]) : java.lang.Object {
      return formPattern.addProduct(product)
    }
    
    property get product () : gw.api.productmodel.Product {
      return getIteratedValue(1) as gw.api.productmodel.Product
    }
    
    
  }
  
  
}