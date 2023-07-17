package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ActivityPatternsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityPatternsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ActivityPatternsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityPatternsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ActivityPatternsLV.pcf: line 28, column 44
    function sortValue_0 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=ActivityClass_Cell) at ActivityPatternsLV.pcf: line 34, column 46
    function sortValue_1 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.ActivityClass
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ActivityPatternsLV.pcf: line 40, column 49
    function sortValue_2 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.Category
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ActivityPatternsLV.pcf: line 46, column 45
    function sortValue_3 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ActivityPatternsLV.pcf: line 52, column 41
    function sortValue_4 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.Priority
    }
    
    // 'value' attribute on BooleanRadioCell (id=Mandatory_Cell) at ActivityPatternsLV.pcf: line 56, column 46
    function sortValue_5 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.Mandatory
    }
    
    // 'value' attribute on BooleanRadioCell (id=AutomatedOnly_Cell) at ActivityPatternsLV.pcf: line 60, column 50
    function sortValue_6 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.AutomatedOnly
    }
    
    // 'value' attribute on TypeKeyCell (id=PatternLevel_Cell) at ActivityPatternsLV.pcf: line 66, column 53
    function sortValue_7 (activityPattern :  entity.ActivityPattern) : java.lang.Object {
      return activityPattern.PatternLevel
    }
    
    // 'value' attribute on RowIterator at ActivityPatternsLV.pcf: line 19, column 82
    function value_34 () : gw.api.database.IQueryBeanResult<entity.ActivityPattern> {
      return activityPatterns
    }
    
    property get activityPatterns () : gw.api.database.IQueryBeanResult<ActivityPattern> {
      return getRequireValue("activityPatterns", 0) as gw.api.database.IQueryBeanResult<ActivityPattern>
    }
    
    property set activityPatterns ($arg :  gw.api.database.IQueryBeanResult<ActivityPattern>) {
      setRequireValue("activityPatterns", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ActivityPatternsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ActivityPatternsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ActivityPatternsLV.pcf: line 28, column 44
    function action_8 () : void {
      ActivityPatternDetail.go(activityPattern)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ActivityPatternsLV.pcf: line 28, column 44
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ActivityPatternDetail.createDestination(activityPattern)
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ActivityPatternsLV.pcf: line 28, column 44
    function valueRoot_11 () : java.lang.Object {
      return activityPattern
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ActivityPatternsLV.pcf: line 28, column 44
    function value_10 () : java.lang.String {
      return activityPattern.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=ActivityClass_Cell) at ActivityPatternsLV.pcf: line 34, column 46
    function value_13 () : typekey.ActivityClass {
      return activityPattern.ActivityClass
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ActivityPatternsLV.pcf: line 40, column 49
    function value_16 () : typekey.ActivityCategory {
      return activityPattern.Category
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ActivityPatternsLV.pcf: line 46, column 45
    function value_19 () : typekey.ActivityType {
      return activityPattern.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ActivityPatternsLV.pcf: line 52, column 41
    function value_22 () : typekey.Priority {
      return activityPattern.Priority
    }
    
    // 'value' attribute on BooleanRadioCell (id=Mandatory_Cell) at ActivityPatternsLV.pcf: line 56, column 46
    function value_25 () : java.lang.Boolean {
      return activityPattern.Mandatory
    }
    
    // 'value' attribute on BooleanRadioCell (id=AutomatedOnly_Cell) at ActivityPatternsLV.pcf: line 60, column 50
    function value_28 () : java.lang.Boolean {
      return activityPattern.AutomatedOnly
    }
    
    // 'value' attribute on TypeKeyCell (id=PatternLevel_Cell) at ActivityPatternsLV.pcf: line 66, column 53
    function value_31 () : typekey.ActivityPatternLevel {
      return activityPattern.PatternLevel
    }
    
    property get activityPattern () : entity.ActivityPattern {
      return getIteratedValue(1) as entity.ActivityPattern
    }
    
    
  }
  
  
}