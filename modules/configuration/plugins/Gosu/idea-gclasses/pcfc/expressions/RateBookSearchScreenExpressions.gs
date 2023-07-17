package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=CancelJarGeneration_Input) at RateBookSearchScreen.pcf: line 47, column 156
    function action_13 () : void {
      gw.pcf.rating.flow.RateBookSearchScreenUIHelper.cancel()
    }
    
    // 'action' attribute on ToolbarButton (id=RateBookSearchScreen_GenerateJarButton) at RateBookSearchScreen.pcf: line 20, column 81
    function action_2 () : void {
      gw.pcf.rating.flow.RateBookSearchScreenUIHelper.generate()
    }
    
    // 'action' attribute on ToolbarButton (id=RateBookSearchScreen_DownloadJarButton) at RateBookSearchScreen.pcf: line 28, column 81
    function action_5 () : void {
      gw.pcf.rating.flow.RateBookSearchScreenUIHelper.download()
    }
    
    // 'available' attribute on ToolbarButton (id=RateBookSearchScreen_GenerateJarButton) at RateBookSearchScreen.pcf: line 20, column 81
    function available_0 () : java.lang.Boolean {
      return not gw.pcf.rating.flow.RateBookSearchScreenUIHelper.GenerationInProgress
    }
    
    // 'available' attribute on ToolbarButton (id=RateBookSearchScreen_DownloadJarButton) at RateBookSearchScreen.pcf: line 28, column 81
    function available_3 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateBookSearchScreenUIHelper.Path != null
    }
    
    // 'label' attribute on DateInput (id=JARGenerationDate_Input) at RateBookSearchScreen.pcf: line 54, column 287
    function label_17 () : java.lang.Object {
      return gw.pcf.rating.flow.RateBookSearchScreenUIHelper.ProgressSectionLabel
    }
    
    // 'percentage' attribute on ProgressInput (id=JarGenerationProgressBar_Input) at RateBookSearchScreen.pcf: line 39, column 156
    function percentage_8 () : java.lang.Double {
      return gw.pcf.rating.flow.RateBookSearchScreenUIHelper.CompletedPercentage
    }
    
    // 'status' attribute on ProgressInput (id=JarGenerationProgressBar_Input) at RateBookSearchScreen.pcf: line 39, column 156
    function status_9 () : java.lang.String {
      return gw.pcf.rating.flow.RateBookSearchScreenUIHelper.ProgressBarStatus
    }
    
    // 'tooltip' attribute on ToolbarButton (id=RateBookSearchScreen_DownloadJarButton) at RateBookSearchScreen.pcf: line 28, column 81
    function tooltip_6 () : java.lang.String {
      return gw.pcf.rating.flow.RateBookSearchScreenUIHelper.DownloadJARTooltip
    }
    
    // 'value' attribute on DateInput (id=JARGenerationDate_Input) at RateBookSearchScreen.pcf: line 54, column 287
    function value_18 () : java.util.Date {
      return gw.pcf.rating.flow.RateBookSearchScreenUIHelper.Canceled ? gw.pcf.rating.flow.RateBookSearchScreenUIHelper.LastGenerationStartDate : gw.pcf.rating.flow.RateBookSearchScreenUIHelper.LastGeneratedJarDate
    }
    
    // 'visible' attribute on ToolbarButton (id=RateBookSearchScreen_GenerateJarButton) at RateBookSearchScreen.pcf: line 20, column 81
    function visible_1 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.EnableRateRoutinesJar.Value
    }
    
    // 'visible' attribute on DateInput (id=JARGenerationDate_Input) at RateBookSearchScreen.pcf: line 54, column 287
    function visible_16 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.EnableRateRoutinesJar.Value and not gw.pcf.rating.flow.RateBookSearchScreenUIHelper.GenerationInProgress and (gw.pcf.rating.flow.RateBookSearchScreenUIHelper.Canceled or gw.pcf.rating.flow.RateBookSearchScreenUIHelper.Path != null)
    }
    
    // 'visible' attribute on ProgressInput (id=JarGenerationProgressBar_Input) at RateBookSearchScreen.pcf: line 39, column 156
    function visible_7 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.EnableRateRoutinesJar.Value and gw.pcf.rating.flow.RateBookSearchScreenUIHelper.GenerationInProgress
    }
    
    property get displayImportResults () : boolean {
      return getRequireValue("displayImportResults", 0) as java.lang.Boolean
    }
    
    property set displayImportResults ($arg :  boolean) {
      setRequireValue("displayImportResults", 0, $arg)
    }
    
    property get initialRateBook () : RateBook {
      return getRequireValue("initialRateBook", 0) as RateBook
    }
    
    property set initialRateBook ($arg :  RateBook) {
      setRequireValue("initialRateBook", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends RateBookSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 65, column 49
    function def_onEnter_22 (def :  pcf.RateBookSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 67, column 60
    function def_onEnter_24 (def :  pcf.RateBookPanelSet) : void {
      def.onEnter(rateBooks, initialRateBook)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 65, column 49
    function def_refreshVariables_23 (def :  pcf.RateBookSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 67, column 60
    function def_refreshVariables_25 (def :  pcf.RateBookPanelSet) : void {
      def.refreshVariables(rateBooks, initialRateBook)
    }
    
    // 'searchCriteria' attribute on SearchPanel at RateBookSearchScreen.pcf: line 63, column 83
    function searchCriteria_27 () : gw.rating.rtm.query.RateBookSearchCriteria {
      return new gw.rating.rtm.query.RateBookSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at RateBookSearchScreen.pcf: line 63, column 83
    function search_26 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get rateBooks () : gw.api.database.IQueryBeanResult<entity.RateBook> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<entity.RateBook>
    }
    
    property get searchCriteria () : gw.rating.rtm.query.RateBookSearchCriteria {
      return getCriteriaValue(1) as gw.rating.rtm.query.RateBookSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.rtm.query.RateBookSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}