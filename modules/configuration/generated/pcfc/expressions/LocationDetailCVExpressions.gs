package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/LocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocationDetailCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/LocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationDetailCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at LocationDetailCV.pcf: line 42, column 101
    function action_9 () : void {
      AccountLocationPopup.push(polLocation.AccountLocation, polLocation.Branch.Policy.Account, false)
    }
    
    // 'action' attribute on Link (id=SynchronizedLink) at LocationDetailCV.pcf: line 42, column 101
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(polLocation.AccountLocation, polLocation.Branch.Policy.Account, false)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 23, column 98
    function def_onEnter_0 (def :  pcf.LocationDetailInputSet) : void {
      def.onEnter(polLocation, supportsNonSpecificLocation, openForEdit)
    }
    
    // 'def' attribute on PanelRef at LocationDetailCV.pcf: line 53, column 60
    function def_onEnter_12 (def :  pcf.AdditionalCoveragesCardPanelSet_BusinessOwners) : void {
      def.onEnter(polLocation, openForEdit)
    }
    
    // 'def' attribute on PanelRef at LocationDetailCV.pcf: line 53, column 60
    function def_onEnter_14 (def :  pcf.AdditionalCoveragesCardPanelSet_default) : void {
      def.onEnter(polLocation, openForEdit)
    }
    
    // 'def' attribute on PanelRef at LocationDetailCV.pcf: line 60, column 165
    function def_onEnter_18 (def :  pcf.QuestionSetsDV) : void {
      def.onEnter(polLocation != null ? polLocation.Branch.Policy.Product.getQuestionSetsByType(QuestionSetType.TC_LOCATION) : null, polLocation, null)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 28, column 64
    function def_onEnter_2 (def :  pcf.LineLocationDetailInputSet_BusinessOwners) : void {
      def.onEnter(polLocation, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 28, column 64
    function def_onEnter_4 (def :  pcf.LineLocationDetailInputSet_WorkersComp) : void {
      def.onEnter(polLocation, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 28, column 64
    function def_onEnter_6 (def :  pcf.LineLocationDetailInputSet_default) : void {
      def.onEnter(polLocation, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 23, column 98
    function def_refreshVariables_1 (def :  pcf.LocationDetailInputSet) : void {
      def.refreshVariables(polLocation, supportsNonSpecificLocation, openForEdit)
    }
    
    // 'def' attribute on PanelRef at LocationDetailCV.pcf: line 53, column 60
    function def_refreshVariables_13 (def :  pcf.AdditionalCoveragesCardPanelSet_BusinessOwners) : void {
      def.refreshVariables(polLocation, openForEdit)
    }
    
    // 'def' attribute on PanelRef at LocationDetailCV.pcf: line 53, column 60
    function def_refreshVariables_15 (def :  pcf.AdditionalCoveragesCardPanelSet_default) : void {
      def.refreshVariables(polLocation, openForEdit)
    }
    
    // 'def' attribute on PanelRef at LocationDetailCV.pcf: line 60, column 165
    function def_refreshVariables_19 (def :  pcf.QuestionSetsDV) : void {
      def.refreshVariables(polLocation != null ? polLocation.Branch.Policy.Product.getQuestionSetsByType(QuestionSetType.TC_LOCATION) : null, polLocation, null)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 28, column 64
    function def_refreshVariables_3 (def :  pcf.LineLocationDetailInputSet_BusinessOwners) : void {
      def.refreshVariables(polLocation, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 28, column 64
    function def_refreshVariables_5 (def :  pcf.LineLocationDetailInputSet_WorkersComp) : void {
      def.refreshVariables(polLocation, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at LocationDetailCV.pcf: line 28, column 64
    function def_refreshVariables_7 (def :  pcf.LineLocationDetailInputSet_default) : void {
      def.refreshVariables(polLocation, openForEdit)
    }
    
    // 'mode' attribute on InputSetRef at LocationDetailCV.pcf: line 28, column 64
    function mode_8 () : java.lang.Object {
      return polLocation.Branch.Policy.Product.PublicID
    }
    
    // 'visible' attribute on DetailViewPanel (id=AccountLocationUpToDateDV) at LocationDetailCV.pcf: line 33, column 77
    function visible_11 () : java.lang.Boolean {
      return polLocation.Branch.Promoted and !polLocation.isUpToDate()
    }
    
    // 'visible' attribute on Card (id=AdditionalCoveragesCard) at LocationDetailCV.pcf: line 50, column 161
    function visible_17 () : java.lang.Boolean {
      return polLocation.Branch.Policy.Product == gw.api.upgrade.PCCoercions.makeProductModel<gw.api.productmodel.Product>("BusinessOwners")
    }
    
    // 'visible' attribute on Card (id=LocationQuestionsCard) at LocationDetailCV.pcf: line 58, column 58
    function visible_20 () : java.lang.Boolean {
      return polLocation.LocationAnswers.Count > 0
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get polLocation () : PolicyLocation {
      return getRequireValue("polLocation", 0) as PolicyLocation
    }
    
    property set polLocation ($arg :  PolicyLocation) {
      setRequireValue("polLocation", 0, $arg)
    }
    
    property get supportsNonSpecificLocation () : boolean {
      return getRequireValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setRequireValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    
  }
  
  
}