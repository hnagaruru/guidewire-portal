package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/InlandMarineLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InlandMarineLinksExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/InlandMarineLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InlandMarineLinksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 19, column 78
    function action_2 () : void {
      pcf.InlandMarine_BuildingsAndLocations.go(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 19, column 78
    function action_dest_3 () : pcf.api.Destination {
      return pcf.InlandMarine_BuildingsAndLocations.createDestination(policyPeriod, asOfDate)
    }
    
    // LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 8, column 87
    static function firstVisitableChildDestinationMethod_11 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.InlandMarine_BuildingsAndLocations.createDestination(policyPeriod, asOfDate)
      if (dest.canVisitSelf()) {
        return dest
      }
      for (var part in (policyPeriod.IMLine.IMCoverageParts.sortBy( \ part -> part.Subtype.DisplayName ))) {
        dest = pcf.InlandMarine_PolicyFilePart.createDestination(policyPeriod, asOfDate, part)
        if (dest.canVisitSelf()) {
          return dest
        }
      }
      return null
    }
    
    // 'initialValue' attribute on Variable at InlandMarineLinks.pcf: line 17, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'parent' attribute on LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 8, column 87
    static function parent_8 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate) 
    }
    
    // 'tabBar' attribute on LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 8, column 87
    function tabBar_onEnter_9 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 8, column 87
    function tabBar_refreshVariables_10 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on LocationRefIterator at InlandMarineLinks.pcf: line 23, column 43
    function value_1 () : entity.IMCoveragePart[] {
      return policyPeriod.IMLine.IMCoverageParts.sortBy( \ part -> part.Subtype.DisplayName )
    }
    
    override property get CurrentLocation () : pcf.InlandMarineLinks {
      return super.CurrentLocation as pcf.InlandMarineLinks
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/InlandMarineLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends InlandMarineLinksExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 25, column 79
    function action_4 () : void {
      pcf.InlandMarine_PolicyFilePart.go(policyPeriod, asOfDate, part)
    }
    
    // 'location' attribute on LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 25, column 79
    function action_dest_5 () : pcf.api.Destination {
      return pcf.InlandMarine_PolicyFilePart.createDestination(policyPeriod, asOfDate, part)
    }
    
    /**
     *  LocationGroup (id=InlandMarineLinks) at InlandMarineLinks.pcf: line 25, column 79
     * This expression is directly copied from the title expression on InlandMarine_PolicyFilePart because the LocationRef has no label attribute
     * If it fails to compile in this context, the label on the LocationRef should be explicitly specified
     */
    function label_6 () : java.lang.Object {
      return part.Subtype.DisplayName
    }
    
    property get part () : entity.IMCoveragePart {
      return getIteratedValue(1) as entity.IMCoveragePart
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/InlandMarineLinks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends InlandMarineLinksExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get part () : entity.IMCoveragePart {
      return getIteratedValue(1) as entity.IMCoveragePart
    }
    
    
  }
  
  
}